import DashboardCard from "@/components/DashboardCard";
import React from "react";
// import mooringPlan from "../../assets/images/mooring-plan.jpeg";
import mooringPlan from "../../assets/images/mooring-plan.svg";
import directorsList from "../../assets/images/directors-list.svg";
import workHours from "../../assets/images/work-hours.svg";
import clubhouseBooking from "../../assets/images/clubhouse-booking.svg";
import howToInfo from "../../assets/images/how-to-info.svg";
import meetingNotes from "../../assets/images/meeting-notes.svg";
import cycEmails from "../../assets/images/cyc-emails.svg";
import photoArchive from "../../assets/images/photo-archive.svg";
import usefulLinks from "../../assets/images/useful-links.svg";
import committeeList from "../../assets/images/committee-list.svg";

type Props = {};

const page = (props: Props) => {
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
  return (
    <section className="flex flex-col w-full items-center">
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
};

export default page;
