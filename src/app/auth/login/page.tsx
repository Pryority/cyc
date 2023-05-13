import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex flex-col items-center w-full">
      <form className="flex flex-col gap-2 items-center w-1/2">
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <input type="submit" value="login" />
      </form>
    </div>
  );
};

export default page;
