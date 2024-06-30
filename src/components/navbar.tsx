import React from "react";
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
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
  ChatBubbleLeftIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

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
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

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
        className="flex items-center gap-2 font-medium text-gray-900">
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

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
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              {/* @ts-ignore */}
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/signin" target="_self">
            {/* @ts-ignore */}
            <Button href="/signin" color="gray">
              Sign In
            </Button>
          </Link>
          <Link href="/signup" target="_self">
            {/* @ts-ignore */}
            <Button href="/signup" color="gray">
              Sign Up
            </Button>
          </Link>
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
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                {/* @ts-ignore */}
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <Link href="/signin">
              {/* @ts-ignore */}
              <Button href="/signin" color="gray">
                Sign In
              </Button>
              Sign In
            </Link>
            <Link href="/signup" target="_self">
              {/* @ts-ignore */}
              <Button href="/signup" color="gray">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
