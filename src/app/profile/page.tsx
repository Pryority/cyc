import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="flex flex-col w-full items-center">
      <div className="flex flex-col gap-4 w-4/5 items-start">
        <h2 className="text-4xl">My Profile</h2>
        <div className="flex flex-col gap-2">
          <h3>Name: Matthew Pryor</h3>
          <h3>Boat: Red Stripe</h3>
          <h3>Races Won: 3</h3>
          <h3>Ambassador: False</h3>
        </div>
      </div>
    </section>
  );
};

export default page;
