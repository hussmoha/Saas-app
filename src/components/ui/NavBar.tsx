import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ArrowRightIcon, Link } from "lucide-react";
import { buttonVariants } from "./button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

const NavBar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b  backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b ">
        <Link
            href='/'
            className='flex z-40 font-semibold'>
            <span>The App </span>
          </Link>

          {/*mobile nav */}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>
              <LoginLink
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                })}
              >
                Sign in
              </LoginLink>
              <RegisterLink
                className={buttonVariants({
                  size: "sm",
                })}
              >
                Get started <ArrowRightIcon />
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
