import Image from "next/image";
import React from "react";
import mooringPlan from "../assets/images/mooring-plan.jpeg";
import Link from "next/link";

type Props = {
  name: string;
  link: string;
};

const DashboardCard = ({ name, link }: Props) => {
  return (
    <Link
      href={link}
      className="col-span-1 h-32 sm:h-40 md:h-56 xl:h-64 object-cover border rounded overflow-hidden relative cursor-pointer"
    >
      <div className="flex flex-col h-full w-full justify-end p-2 md:p-2 bg-blue-900 z-20">
        <div className="flex flex-col w-fit p-1 md:p-2 bg-blue-900/[96%] border-2 border-sky-700/95 rounded-lg px-3 md:px-4 z-20 cursor-default">
          <h4 className="z-10 text-xs md:text-md leading-3 md:leading-[20px] text-sky-50 font-bold uppercase">
            {" "}
            {name}
          </h4>
        </div>
      </div>
      <Image src={mooringPlan} alt="" fill className="" />
    </Link>
  );
};

export default DashboardCard;
