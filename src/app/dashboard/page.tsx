"use client";

import DashboardCard from "@/components/DashboardCard";
import mooringPlan from "../../../public/assets/images/mooring-plan.svg";
import directorsList from "../../../public/assets/images/directors-list.svg";
import workHours from "../../../public/assets/images/work-hours.svg";
import clubhouseBooking from "../../../public/assets/images/clubhouse-booking.svg";
import howToInfo from "../../../public/assets/images/how-to-info.svg";
import meetingNotes from "../../../public/assets/images/meeting-notes.svg";
import cycEmails from "../../../public/assets/images/cyc-emails.svg";
import photoArchive from "../../../public/assets/images/photo-archive.svg";
import usefulLinks from "../../../public/assets/images/useful-links.svg";
import committeeList from "../../../public/assets/images/committee-list.svg";
import RequireAuth from "@/components/RequireAuth";
import { useSession } from "next-auth/react";

type Props = {};

const DashboardPage = (props: Props) => {
  const { data: session } = useSession();

  const data = [
    {
      name: "Mooring Plan",
      image: mooringPlan,
    },
    {
      name: "Directors List",
      image: directorsList,
    },
    {
      name: "Work Hours",
      image: workHours,
    },
    {
      name: "Clubhouse Booking",
      image: clubhouseBooking,
    },
    {
      name: "How To Info",
      image: howToInfo,
    },
    {
      name: "Meeting Notes",
      image: meetingNotes,
    },
    {
      name: "CYC Emails",
      image: cycEmails,
    },
    {
      name: "Photo Archive",
      image: photoArchive,
    },
    {
      name: "Useful Links",
      image: usefulLinks,
    },
    {
      name: "Committee List",
      image: committeeList,
    },
  ];
  if (session)
    return (
      <section className="flex flex-col w-full items-center min-h-screen">
        <div className="flex flex-col gap-4 w-4/5">
          <div className="border-b-2 border-gray-300 py-2 mb-2">
            <h2 className="text-4xl tracking-tighter">Member Dashboard</h2>
          </div>

          <div className="grid w-full h-full gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
            {data.map((item) => (
              <DashboardCard
                key={item.name}
                name={item.name}
                link={item.name.toLowerCase().replace(/\s/g, "-")}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
    );
  return <RequireAuth />;
};

export default DashboardPage;
