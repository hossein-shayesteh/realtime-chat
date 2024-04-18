"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface ActiveLinkProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
  activeClassName?: string; // Changed from activeStyle to activeClassName
}

const ActiveLink = (props: ActiveLinkProps) => {
  const { children, className, activeClassName, ...rest } = props;
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <Link
      {...rest}
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
