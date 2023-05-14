import { withAuth } from "@/components/withAuth";
import React from "react";

const WorkHoursPage = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="w-4/5">
        <div className="border-b-2 border-gray-300 py-2 mb-4">
          <h2 className="text-4xl tracking-tighter">Work Hours</h2>
        </div>
        <div className="flex flex-col gap-4 my-8">
          <p className="text-lg">
            CYC Members and Annual Associates are required to complete 10
            work-hours per season towards CYC projects, maintenance and
            operations.
          </p>
          <p className="text-sm">
            NOTE: If you have performed work hours and they are not shown, they
            may not have been added yet or you should contact the director who
            was supervising the project and confirm that the hours have been
            submitted.
          </p>
          <p>
            Work-hours forms are available in the lower floor of the club house
            and are collected by the Club Administrator on a regular basis.
            Thank you CYC Members!!
          </p>
        </div>
        <h3 className="text-sky-900 text-2xl uppercase font-bold underline decoration-blue-800 mb-6">
          Jobs - 2023
        </h3>
        <ul className="list-disc list-inside mb-8 space-y-3 tracking-wide">
          <li>Build Beer Can recycle bin (June)</li>
          <li>Paint Gate key supports (June)</li>
          <li>Clean up east bank (June)</li>
          <li>Grass Cutting (Ongoing)</li>
          <li>
            Clean &amp; paint the mechanical room in the Clubhouse Basement
            (June)
          </li>
          <li>
            Redo the garden area around the front of the Club House. (April)
          </li>
          <li>Clean Windows (Outside) (Ongoing)</li>
          <li>Clear area at north side of the gate (April)</li>
          <li>Pressure wash Club House deck (April)</li>
          <li>Clear area around Terminals (April)</li>
          <li>
            Paint Club House side door to match front door (Winter Months)
          </li>
          <li>
            Sand and paint the bar to match the front door blue. (Winter Months)
          </li>
          <li>Build Burgess holder for Club house. (Winter Months)</li>
          <li>Clean Dock Pedestals (April)</li>
          <li>
            Repair &amp; Paint Electrical Box on West wall (new door required)
            (June)
          </li>
          <li>Organize the tool shed (May)</li>
          <li>Paint the Mast Crane (May or June)</li>
          <li>Paint Mast Rack. (April)</li>
          <li>Repair Dock Carts (Winter Months)</li>
          <li>Repair Service Dock bumpers (May)</li>
          <li>Repair Club House outer wall (Stucco) (June)</li>
          <li>Paint Upper Club House. (Winter Months)</li>
          <li>Paint Lower level. (Winter Months)</li>
          <li>
            Clean up and dispose of old cardboard, redundant toys etc. (Winter
            Months)
          </li>
          <li>
            Install former upper TV onto wall in entrance room. (Winter Months)
          </li>
          <li>Lift In (May 7th)</li>
          <li>Lift In BBQ (May 7th)</li>
        </ul>
      </div>
    </section>
  );
};

export default withAuth(WorkHoursPage);
