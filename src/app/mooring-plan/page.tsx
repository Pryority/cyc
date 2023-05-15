"use client";

import RequireAuth from "@/components/RequireAuth";
import { useSession } from "next-auth/react";

type Props = {};

const MooringPlanPage = (props: Props) => {
  const { data: session } = useSession();
  if (session)
    return (
      <section className="flex flex-col w-full items-center min-h-screen">
        <div className="flex flex-col gap-4 w-4/5">
          <div className="border-b-2 border-gray-300 py-2 mb-8">
            <h2 className="text-4xl tracking-tighter">Mooring Plan</h2>
          </div>
        </div>
      </section>
    );
  return <RequireAuth />;
};

export default MooringPlanPage;
