import LoginPage from "@/app/login/page";
import React from "react";

type Props = {};

const RequireAuth = (props: Props) => {
  return (
    <section className="flex flex-col w-full items-center min-h-screen">
      <div className="flex flex-col justify-center w-full gap-4">
        <div className="flex w-full justify-center">
          <h2 className="text-4xl tracking-tighter">
            You must be a member to view this content.
          </h2>
        </div>
        <LoginPage csrfToken={""} />
      </div>
    </section>
  );
};

export default RequireAuth;
