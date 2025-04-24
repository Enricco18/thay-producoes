"use client";
import Link from "next/link";
import { Package2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { portfolio } from "@/lib/constants";

import Image from "next/image";
import { X } from "lucide-react";

// Menu items.

const items = [
  {
    title: "Home",
    url: "#home",
    groupable: false,
    items: null,
    //icon: Home,
  },
  {
    title: "Portfolio",
    url: "#portfolio",
    groupable: true,
    items: portfolio,
    //icon: Inbox,
  },
  {
    title: "Contato",
    url: "#contato",
    groupable: false,
    items: null,
    //icon: Calendar,
  },
];

const Header = () => {
  const { setOpenMobile } = useSidebar();
  return (
    <header className="sticky z-50 top-0 flex w-dwh md:h-32 md:items-center gap-4 border-b bg-background md:px-6 md:py-0">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Image
          src="/icon-white.png"
          width={150}
          height={150}
          className="h-fit spin-slow"
          alt="Thayná Produções e Videomaker | Logo"
        />
        {items.map((item, i) => {
          if (item.groupable) {
            return (
              <DropdownMenu key={i}>
                <DropdownMenuTrigger className="flex items-center gap-2 text-lg font-semibold md:text-base">
                  {item.title}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.items.map((subitem, si) => (
                    <DropdownMenuItem key={"menu" + subitem.id}>
                      <Link
                        href={"#" + subitem.id}
                        className="w-full h-full flex items-center gap-2 text-lg font-semibold md:text-base"
                      >
                        {subitem.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }
          return (
            <Link
              key={i}
              href={item.url}
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div className="md:hidden w-full">
        <div className=" flex flex-col justify-center items-center w-full">
          <Image
            src="/icon-white.png"
            width={120}
            height={80}
            className="h-fit"
            alt="Thayná Produções e Videomaker | Logo"
          />
          <SidebarTrigger className="border-y rounded-none p-5 w-full">
            MENU
          </SidebarTrigger>
        </div>
        <Sidebar>
          <SidebarContent className="relative">
            <SidebarTrigger className="relative self-end mt-4">
              <X className="w-[50px]" />
            </SidebarTrigger>
            <SidebarHeader>
              <div className="flex justify-between items-center">
                <Image
                  src="/logo-h-white.png"
                  sizes="100vw"
                  width={500}
                  height={500}
                  className="w-40 h-auto"
                  alt="Thayná Produções e Videomaker | Logo"
                />
              </div>
            </SidebarHeader>
            <SidebarMenu>
              {items.map((item, i) => {
                if (item.groupable) {
                  return (
                    <SidebarGroup key={i}>
                      <SidebarGroupLabel>Portfolio</SidebarGroupLabel>
                      <SidebarGroupContent>
                        {item.items.map((subitem, si) => (
                          <SidebarMenuItem key={"menu-mobile" + subitem.id}>
                            <SidebarMenuButton asChild>
                              <Link
                                className="w-full h-full"
                                href={"#" + subitem.id}
                                onClick={() => setOpenMobile(false)}
                              >
                                {/* <item.icon /> */}
                                <span>{subitem.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarGroupContent>
                    </SidebarGroup>
                  );
                }
                return (
                  <SidebarMenuItem key={i}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} onClick={() => setOpenMobile(false)}>
                        {/* <item.icon /> */}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </div>
    </header>
  );
};

export default Header;
