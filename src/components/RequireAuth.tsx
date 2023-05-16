import LoginPage from "@/app/login/page";
import React from "react";

type Props = {};

const RequireAuth = (props: Props) => {
  return (
    <section className="flex flex-col w-full items-center min-h-screen">
      <div className="flex flex-col justify-center w-full gap-4">
        <div className="flex w-full justify-center">
          <h2 className="text-lg sm:text-xl md:text-2xl w-2/3 sm:w-full text-center leading-4 tracking-tighter">
            You must be a member to view this content.
          </h2>
        </div>
        <LoginPage />
      </div>
    </section>
  );
};

export default RequireAuth;
