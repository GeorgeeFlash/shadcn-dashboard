"use client";

import React, { useEffect, useState } from "react";
import {
  ChevronsLeft,
  ChevronsRight,
  LayoutDashboard,
  LucideIcon,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react";
import { useWindowWidth } from "@react-hook/window-size";

import { Nav, NavSkeleton } from "./nav";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Skeleton } from "./ui/skeleton";

export interface LinkProps {
  title: string;
  label?: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
  href: string;
}

const links: LinkProps[] = [
  {
    title: "Dashoard",
    href: "/",
    icon: LayoutDashboard,
    variant: "default",
  },
  {
    title: "Users",
    href: "/users",
    icon: UsersRound,
    variant: "ghost",
  },
  {
    title: "Orders",
    href: "/orders",
    icon: ShoppingCart,
    variant: "ghost",
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
    variant: "ghost",
  },
];

const SideNavbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const isMobile = onlyWidth < 768;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <SideNavbarSkeleton />;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div
      data-isCollapsed={isCollapsed || isMobile}
      className="relative data-[isCollapsed=true]:w-[80px] data-[isCollapsed=true]:animate-in data-[isCollapsed=false]:animate-out data-[isCollapsed=false]:min-w-[250px] border-r px-3 my-2 pb-10 pt-24"
    >
      {!isMobile && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant={"secondary"}
            className="rounded-full p-2 focus:outline-none focus:ring-0 focus-visible:ring-0"
          >
            {isCollapsed ? <ChevronsLeft /> : <ChevronsRight />}
          </Button>
        </div>
      )}
      {isMobile && (
        <Sheet open={isCollapsed} onOpenChange={toggleSidebar}>
          <SheetTrigger>
            <div className="absolute right-[-20px] top-7">
              <Button
                onClick={toggleSidebar}
                variant={"secondary"}
                className="rounded-full p-2 focus:outline-none focus:ring-0 focus-visible:ring-0"
              >
                {isCollapsed ? <ChevronsLeft /> : <ChevronsRight />}
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side={"left"} className="py-16">
            <Nav closeSheet={toggleSidebar} links={links} />
          </SheetContent>
        </Sheet>
      )}
      <Nav isCollapsed={isMobile || isCollapsed} links={links} />
    </div>
  );
};

export default SideNavbar;

function SideNavbarSkeleton() {
  return (
    <div className="relative w-[80px] md:min-w-[250px] border-r px-3 pb-10 pt-24">
      <Skeleton className="absolute right-[-20px] top-7 rounded-full h-10 w-10" />
      <NavSkeleton links={links} />
    </div>
  );
}
