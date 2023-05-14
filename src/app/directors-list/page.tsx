import { withAuth } from "@/components/withAuth";
import React from "react";

type Props = {};

const DirectorsListPage = (props: Props) => {
  const directors = [
    { name: "Greg Twigg", role: "Commodore" },
    { name: "Thomas Witort", role: "Vice-Commodore" },
    { name: "Doug Young", role: "Fleet Captain" },
    { name: "George Marron", role: "Finance & Treasury" },
    { name: "Dennis MacAndrew", role: "Membership" },
    { name: "John Sheard", role: "Mooring & Marine Facilities" },
    { name: "Paul Butcher", role: "Grounds & Clubhouse Facilities" },
    { name: "Mike Holland", role: "Secretary" },
    { name: "Mark Kasaboski", role: "Communications & IT" },
    { name: "Veronica (Ronnie) Vito", role: "Social" },
    { name: "Ola Swanzey", role: "Club Administrator" },
  ];

  const getName = (director: string) => {
    return director.split("–")[1].trim();
  };

  return (
    <section className="flex flex-col w-full items-center">
      <div className="flex flex-col gap-4 w-4/5">
        <div className="border-b-2 border-gray-300 py-2 mb-8">
          <h2 className="text-4xl tracking-tighter">Directors List</h2>
        </div>
        <div className="flex gap-2 items-center">
          <h5 className="uppercase">For members use only</h5>
          <h6>Refer to CYC registry for contact info</h6>
        </div>
        <ul className="list-disc list-inside">
          {directors.map((director) => (
            <li key={director.name} className="mb-2">
              <span className="text-blue-600 font-medium">{director.name}</span>{" "}
              - {director.role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default withAuth(DirectorsListPage);
