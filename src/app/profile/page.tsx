import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authOptions } from "@/lib/auth";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <section className="flex flex-col w-full items-center">
      <div className="flex flex-col gap-4 w-4/5 items-start">
        <h2 className="text-4xl">My Profile</h2>
        <div className="flex flex-col gap-2">
          <h3>Name: {session?.user?.name}</h3>
          <h3>Boat: The Gilded Lady</h3>
          <h3>Races Won: 3</h3>
          <h3>Ambassador: True</h3>
        </div>
      </div>
    </section>
  );
};

export default page;
