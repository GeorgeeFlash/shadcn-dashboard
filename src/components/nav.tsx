"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { LinkProps } from "./SideNavbar";
import { Skeleton } from "./ui/skeleton";

interface NavProps {
  isCollapsed?: boolean;
  closeSheet?: () => void;
  links: LinkProps[];
}

export function Nav({ links, isCollapsed, closeSheet }: NavProps) {
  const pathname = usePathname();

  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2"
    >
      <nav className="grid gap-4 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({
                      variant: link.href === pathname ? "default" : "ghost",
                      size: "icon",
                    }),
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                  )}
                >
                  <link.icon className="h-5 xl:h-7 w-5 xl:w-7" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.href}
              onClick={closeSheet}
              className={cn(
                buttonVariants({
                  variant: link.href === pathname ? "sidebar" : "ghost",
                  size: "sb",
                }),
                "justify-start text-lg"
              )}
            >
              <link.icon className="mr-4 h-6 w-6" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                      "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}

export function NavSkeleton({ links }: NavProps) {
  return (
    <div className="group flex flex-col gap-4 py-2">
      <nav className="grid gap-3 px-4 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((_, index) => (
          <div key={index}>
            <div className="gap-6 md:hidden">
              <Skeleton className="h-10 w-10" />
            </div>
            <div className="hidden items-center md:flex ">
              <Skeleton className="mr-4 h-10 w-10" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
