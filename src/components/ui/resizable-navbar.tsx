"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import Image from "@/components/ui/optimized-image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";

import React, { useRef, useState } from "react";


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  /** Extra classes applied only while the navbar is in its resized state. */
  visibleClassName?: string;
  /** Extra classes applied while the navbar is at the top (not yet resized). */
  defaultClassName?: string;
  /** Minimum width of the bar in px. Defaults to 0 (no minimum). */
  minWidth?: number;
  /** Width of the bar while resized. Defaults to "94%". */
  visibleWidth?: string;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
  /** Extra classes merged onto every link. */
  linkClassName?: string;
  /** Extra classes merged onto the active link. */
  activeClassName?: string;
  /** Decides which item is treated as active. */
  isActive?: (item: { name: string; link: string }, idx: number) => boolean;
  /** Extra classes merged onto the hover pill behind the active link. */
  hoverPillClassName?: string;
  /**
   * Background of the pill behind the ACTIVE link. When omitted the active
   * link only gets the text treatment, with no pill.
   */
  activePillClassName?: string;
  /**
   * When true the active link keeps its own pill visible even while another
   * item is hovered, and the hover pill slides between items.
   */
  enableSlidingPill?: boolean;
  /** Duration of the sliding pill transition in seconds. */
  pillTransitionDuration?: number;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
  /** Extra classes applied only while the navbar is in its resized state. */
  visibleClassName?: string;
  /** Extra classes applied while the navbar is at the top (not yet resized). */
  defaultClassName?: string;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  /** Extra classes merged onto the menu panel. */
  menuClassName?: string;
}

/**
 * Exposes the scrolled/resized state to any descendant, so nested content
 * (buttons, logos) can restyle themselves alongside the navbar bar.
 */
const NavbarVisibleContext = React.createContext(false);

/** Returns true once the navbar has entered its resized (scrolled) state. */
export const useNavbarVisible = () => React.useContext(NavbarVisibleContext);

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
    >
      <NavbarVisibleContext.Provider value={visible}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(
                child as React.ReactElement<{ visible?: boolean }>,
                { visible },
              )
            : child,
        )}
      </NavbarVisibleContext.Provider>
    </motion.div>
  );
};

export const NavBody = ({
  children,
  className,
  visible,
  visibleClassName,
  defaultClassName,
  minWidth = 0,
  visibleWidth = "94%",
}: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? visibleWidth : "100%",
        y: visible ? 16 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: `${minWidth}px`,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
        // A full-bleed bar has no visible rounded ends; the floating pill
        // state does.
        visible ? "rounded-full" : "rounded-none",
        !visible && defaultClassName,
        visible && cn("bg-white/80 dark:bg-neutral-950/80", visibleClassName),
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({
  items,
  className,
  onItemClick,
  linkClassName,
  activeClassName,
  isActive,
  hoverPillClassName,
  activePillClassName,
  enableSlidingPill = false,
  pillTransitionDuration = 0.3,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  /**
   * The pill is absolutely positioned, so it never takes part in layout and
   * hovering can never shift the menu items. Each item renders its own pill
   * element; only the hovered (or active) one is mounted, and motion's
   * shared `layoutId` animates the pill between them.
   *
   * The active pill uses a DIFFERENT layoutId from the hover pill so the two
   * never fight over the same shared element: the active pill stays put while
   * the hover pill slides around it.
   */
  const pillTransition = reduceMotion
    ? { duration: 0 }
    : {
        type: "spring" as const,
        stiffness: 380,
        damping: 32,
        duration: pillTransitionDuration,
      };

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative z-10 hidden flex-1 flex-row items-center justify-center gap-1 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:gap-1",
        className,
      )}
    >
      {items.map((item, idx) => {
        const isItemActive = isActive?.(item, idx) ?? false;
        const showActivePill = Boolean(activePillClassName) && isItemActive;
        // Hovering the active item must not stack a second pill on top of the
        // active one: the active pill already marks it. Only inactive items
        // get the translucent hover pill.
        const showHoverPill = hovered === idx && !showActivePill;

        return (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onFocus={() => setHovered(idx)}
            onClick={onItemClick}
            aria-current={isItemActive ? "page" : undefined}
            className={cn(
              "relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-neutral-600 dark:text-neutral-300",
              linkClassName,
              isItemActive && activeClassName,
            )}
            key={`link-${idx}`}
            href={item.link}
          >
            {showActivePill && (
              <motion.div
                layoutId={enableSlidingPill ? "active-nav-pill" : undefined}
                aria-hidden
                className={cn(
                  "absolute inset-0 h-full w-full rounded-full",
                  activePillClassName,
                )}
                transition={pillTransition}
              />
            )}

            {showHoverPill && (
              <motion.div
                layoutId={enableSlidingPill ? "hovered-nav-pill" : undefined}
                aria-hidden
                className={cn(
                  "absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800",
                  hoverPillClassName,
                )}
                transition={pillTransition}
              />
            )}

            <span className="relative z-20">{item.name}</span>
          </Link>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({
  children,
  className,
  visible,
  visibleClassName,
  defaultClassName,
}: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(18px)" : "none",
        boxShadow: visible
          ? "0 12px 36px -4px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 1px 0 rgba(255, 255, 255, 0.25) inset"
          : "none",
        width: visible ? "92%" : "100%",
        paddingRight: visible ? "14px" : "16px",
        paddingLeft: visible ? "14px" : "16px",
        borderRadius: visible ? "9999px" : "1.25rem",
        y: visible ? 12 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 45,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-1.5rem)] sm:max-w-[calc(100vw-3rem)] flex-col items-center justify-between bg-transparent py-2.5 transition-colors",
        !visible && defaultClassName,
        visible && cn("bg-white/75 dark:bg-neutral-950/75 backdrop-blur-2xl", visibleClassName),
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  menuClassName,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
          className={cn(
            "absolute inset-x-0 top-full mt-3 z-50 flex w-full flex-col items-start justify-start gap-2 rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] backdrop-blur-2xl transition-all",
            menuClassName,
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
  className,
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Tutup menu" : "Buka menu"}
      className={cn(
        "relative z-20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-200 active:scale-95 focus:outline-none",
        className,
      )}
    >
      {isOpen ? (
        <IconX className="h-5 w-5" />
      ) : (
        <IconMenu2 className="h-5 w-5" />
      )}
    </button>
  );
};

export const NavbarLogo = ({
  href = "#",
  src = "https://assets.aceternity.com/logo-dark.png",
  alt = "logo",
  label = "Startup",
  className,
  labelClassName,
  imageClassName,
}: {
  href?: string;
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  imageClassName?: string;
}) => {
  return (
    <a
      href={href}
      className={cn(
        "relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={30}
        height={30}
        qualityRole="thumbnail"
        className={imageClassName}
      />
      <span className={cn("font-medium text-black dark:text-white", labelClassName)}>
        {label}
      </span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
