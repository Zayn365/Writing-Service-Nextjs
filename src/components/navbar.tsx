import React, { useEffect, useState } from "react";
import {
  // @ts-ignore
  Navbar as MTNavbar,
  // @ts-ignore
  Collapse,
  // @ts-ignore
  Button,
  // @ts-ignore
  IconButton,
  // @ts-ignore
  Typography,
  Avatar,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
  ChatBubbleLeftIcon,
  UserGroupIcon,
  CubeIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const NAV_MENU = [
  {
    name: "Page",
    icon: RectangleStackIcon,
    href: "/",
  },
  {
    name: "Account",
    icon: UserCircleIcon,
  },
  {
    name: "About",
    icon: CommandLineIcon,
    href: "/about",
  },
  {
    name: "Contact",
    icon: ChatBubbleLeftIcon,
    href: "/contact",
  },
  {
    name: "Service",
    icon: UserGroupIcon,
    href: "/service",
  },
  {
    name: "Menu",
    icon: CubeIcon,
    subItems: [
      { name: "Users", href: "/menu/users", type: "admin" },
      { name: "Profile", href: "/menu/profile" },
      { name: "Orders", href: "/menu/orders" , type: "admin" },
      { name: "Transcations History", href: "/menu/transcations" , type: "admin" },
      { name: "Settings ", href: "/menu/settings" },
    ],
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
import profile from "../../public/image/profile.jpg";
import Image from "next/image";
import Cookies from "js-cookie";
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      {/* @ts-ignore */}
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_self" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium my-1 text-gray-900">
        {children}
      </Typography>
    </li>
  );
}
function Dropdown({ name, icon: Icon, subItems }: any) {
  const [open, setOpen] = useState(false);
  const {user} = useAppContext();
  return (
    <li className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 font-medium text-gray-900">
        {Icon && <Icon className="h-5 w-5" />}
        {name}
      </button>
      {open && (
        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 px-2">
          {user && user.userType === "admin" ? subItems.map((subItem: any) => (
            <NavItem key={subItem.name} href={subItem.href}>
              {subItem.name}
            </NavItem>
          )) : subItems.map((subItem: any) => {
            if(!subItem?.type)
          return <NavItem key={subItem.name} href={subItem.href}>
              {subItem.name}
            </NavItem>
})}
        </ul>
      )}
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [profile, setProfile] = useState();
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);
  const { user } = useAppContext();
  useEffect(() => {
    if (user) {
      setProfile(user);
    }
  }, [user]);

  const handleLogout = () => {
    Cookies.remove("user");
    window.location.href = "/";
  };

  return (
    // @ts-ignore
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* @ts-ignore */}
        <Typography
          as="a"
          href="/"
          target="_blank"
          color="blue-gray"
          className="text-lg font-bold">
          <img src="image/logo.png" alt="logo" />
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href, subItems }: any) =>
            subItems ? (
              <Dropdown
                key={name}
                name={name}
                icon={Icon}
                subItems={subItems}
              />
            ) : (
              <NavItem key={name} href={href}>
                {Icon && <Icon className="h-5 w-5" />}
                {name}
              </NavItem>
            )
          )}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <Link href="/" color="gray" className=" ">
              {/* @ts-ignore */}
              <Button
                /* @ts-ignore */
                href="/"
                color="white"
                className="flex justify-center items-center py-2 gap-x-5 rounded-lg px-2">
                {/* @ts-ignore */}
                <UserCircleIcon color="grey" width={25} />
                {/* @ts-ignore */}
                <Typography href="/" color="grey">
                  {/* @ts-ignore */}
                  {profile?.name}
                </Typography>
              </Button>
            </Link>
          ) : (
            <Link href="/signin" target="_self">
              {/* @ts-ignore */}
              <Button href="/signin" color="gray">
                Sign In
              </Button>
            </Link>
          )}
          {user ? (
            <>
              {/* @ts-ignore */}
              <Button color="gray" onClick={handleLogout}>
                log out
              </Button>
            </>
          ) : (
            <Link href="/signup" target="_self">
              {/* @ts-ignore */}
              <Button href="/signup" color="gray">
                Sign Up
              </Button>
            </Link>
          )}
        </div>
        {/* @ts-ignore */}
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden">
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {user && NAV_MENU.map(({ name, icon: Icon, href, subItems }: any) =>
              subItems ? (
                <Dropdown
                  key={name}
                  name={name}
                  icon={Icon}
                  subItems={subItems}
                />
              ) : (
                <NavItem key={name} href={href}>
                  {Icon && <Icon className="h-5 w-5" />}
                  {name}
                </NavItem>
              )
            )}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            {user ? (
              <Link href="/">
                <Link href="/" color="gray" className=" ">
                  {/* @ts-ignore */}
                  <Button
                    /* @ts-ignore */
                    href="/"
                    color="white"
                    className="flex justify-center items-center py-2 gap-x-5 rounded-lg px-2">
                    {/* @ts-ignore */}
                    <UserCircleIcon color="grey" width={25} />
                    {/* @ts-ignore */}
                    <Typography href="/" color="grey">
                      {/* @ts-ignore */}
                      {profile?.name}
                    </Typography>
                  </Button>
                </Link>
              </Link>
            ) : (
              <Link href="/signin">
                {/* @ts-ignore */}
                <Button href="/signin" color="gray">
                  Sign In
                </Button>
              </Link>
            )}
            {user ? (
              <>
                {/* @ts-ignore */}
                <Button color="gray" onClick={handleLogout}>
                  log out
                </Button>
              </>
            ) : (
              <Link href="/signup" target="_self">
                {/* @ts-ignore */}
                <Button href="/signup" color="gray">
                  Sign Up
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
