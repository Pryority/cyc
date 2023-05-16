"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import cycLogo from "../../public/assets/images/CYC-Logo.svg";
import Image from "next/image";

type Props = {};

const Nav = (props: Props) => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      console.log(response);
    };
    setProviders();
  }, []);

  const handleSignOut = async () => {
    await signOut({ redirect: false, callbackUrl: "/login" });
    window.location.href = "/api/auth/signin";
  };

  return (
    <nav className="flex justify-end items-center w-full mb-16 p-4 bg-sky-50/50 border-b">
      {/* Desktop Navigation */}
      <div className="sm:grid sm:grid-cols-4 hidden w-full items-center">
        <div className="object-cover sm:col-span-1 col-span-2">
          <Image src={cycLogo} alt="" />
        </div>
        <div className="col-span-2 sm:col-span-3">
          <div className="flex justify-end gap-2">
            <Link href={"/"} className="nav-btn">
              Home
            </Link>
            <Link href={"/racing"} className="nav-btn">
              Racing
            </Link>
            {!session ? (
              <button className="nav-btn" onClick={() => signIn()}>
                Login
              </button>
            ) : (
              <>
                <Link href={"/dashboard"} className="nav-btn">
                  Dashboard
                </Link>

                <Link href={"/profile"} className="nav-btn">
                  My Profile
                </Link>

                <button
                  type="button"
                  onClick={() => handleSignOut()}
                  className="sign-out-btn"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex w-full justify-end relative">
        <div className="object-cover">
          <Image src={cycLogo} alt="" className="" />
        </div>

        <div className="flex flex-col items-end w-full justify-end">
          <div
            className="h-6 w-6 outline outline-[0.34px] p-[1.62px] rounded-md"
            onClick={() => setToggleDropdown(!toggleDropdown)}
          >
            {!toggleDropdown ? <Bars3Icon /> : <XMarkIcon />}
          </div>
          {toggleDropdown && (
            <div className="flex flex-col items-end gap-2 py-2">
              {!session ? (
                <>
                  <Link
                    href={"/"}
                    className="bg-blue-100 border border-sky-200 px-4 py-2 rounded-xl flex w-full justify-center"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Home
                  </Link>
                  <button
                    className="nav-btn"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                  >
                    Login
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href={"/profile"}
                    className="bg-blue-100 border border-sky-200 px-4 py-2 rounded-xl flex w-full justify-center"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href={"/dashboard"}
                    className="bg-blue-100 border border-sky-200 px-4 py-2 rounded-xl flex w-full justify-center"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    className="bg-blue-200 px-4 py-1 rounded-full flex w-full justify-center border-blue-400"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
