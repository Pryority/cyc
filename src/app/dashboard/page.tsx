import DashboardCard from "@/components/DashboardCard";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const data = [
    "Mooring Plan",
    "Directors List",
    "Work Hours",
    "Clubhouse Booking",
    "How To Info",
    "Meeting Notes",
    "CYC Emails",
    "Photo Archive",
    "Useful Links",
    "Committee List",
  ];
  return (
    <section className="flex flex-col w-full items-center">
      <div className="flex flex-col gap-4 w-4/5 items-start">
        <h2 className="text-4xl tracking-tighter">Member Dashboard</h2>

        <div className="grid w-full h-full gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {data.map((name) => (
            <DashboardCard
              key={name}
              name={name}
              link={name.toLowerCase().replace(/\s/g, "-")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
