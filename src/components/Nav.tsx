"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {};

const Nav = (props: Props) => {
  // const isLoggedIn = false;
  const { data: session } = useSession();
  const isLoggedIn = !!session;

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      console.log(response);
    };
    setProviders();
  }, []);

  return (
    <nav className="flex justify-end items-center w-full mb-16 p-4 bg-sky-50/50 border-b">
      {/* Desktop Navigation */}
      <div className="sm:flex hidden sm:justify-between w-full items-center">
        <h1>Collingwood Yacht Club</h1>
        <div className="flex flex-center gap-2">
          {!isLoggedIn && (
            <button
              className="bg-cyan-50 border border-blue-300 p-2 px-4 rounded-xl text-cyan-900"
              onClick={() => signIn()}
            >
              Login
            </button>
          )}
          <Link
            href={"/"}
            className="bg-cyan-50 border border-blue-300 p-2 px-4 rounded-xl text-cyan-900"
          >
            Home
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                href={"/dashboard"}
                className="bg-cyan-50 border border-blue-300 p-2 px-4 rounded-xl text-cyan-900"
              >
                Dashboard
              </Link>

              <Link
                href={"/profile"}
                className="bg-cyan-50 border border-blue-300 p-2 px-4 rounded-xl text-cyan-900"
              >
                My Profile
              </Link>

              <button
                type="button"
                onClick={() => signOut()}
                className="bg-cyan-200 border border-blue-300 p-2 px-4 rounded-3xl text-cyan-900"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              {providers &&
                // TODO: Update provider type
                Object.values(providers).map((provider: any) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="bg-cyan-200 border border-blue-300 p-2 px-4 rounded-3xl text-cyan-900"
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex w-full justify-end relative">
        {isLoggedIn ? (
          <div className="flex flex-col items-end w-full justify-end">
            <div
              className="h-6 w-6 outline outline-[0.34px] p-[1.62px] rounded-md"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              {!toggleDropdown ? <Bars3Icon /> : <XMarkIcon />}
            </div>
            {toggleDropdown && (
              <div className="flex flex-col items-end gap-2 py-2">
                <Link
                  href={"/"}
                  className="bg-blue-100 border border-sky-200 px-4 py-2 rounded-xl flex w-full justify-center"
                  onClick={() => setToggleDropdown(false)}
                >
                  Home
                </Link>

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
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex flex-col items-end w-full justify-end">
              <div
                className="h-6 w-6 outline outline-[0.34px] p-[1.62px] rounded-md"
                onClick={() => setToggleDropdown(!toggleDropdown)}
              >
                {!toggleDropdown ? <Bars3Icon /> : <XMarkIcon />}
              </div>
              {toggleDropdown && (
                <div className="flex flex-col items-end gap-2 py-2">
                  <button
                    type="button"
                    // key={provider.name}
                    // onClick={() => signIn(provider.id)}
                    onClick={() => signIn()}
                    className="bg-cyan-200 mt-3 border border-blue-300 p-2 w-full px-4 rounded-3xl text-cyan-900"
                  >
                    Sign In
                  </button>
                  <Link
                    href={"/"}
                    className="bg-blue-100 border border-sky-200 px-4 py-2 rounded-xl flex w-full justify-center"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Home
                  </Link>

                  <Link
                    href={"/"}
                    className="bg-blue-100 border border-sky-200 px-4 py-2 rounded-xl flex w-full justify-center"
                    onClick={() => setToggleDropdown(false)}
                  >
                    About
                  </Link>

                  <Link
                    href={"/"}
                    className="bg-blue-100 border border-sky-200 px-4 py-2 rounded-xl flex w-full justify-center"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Contact
                  </Link>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
