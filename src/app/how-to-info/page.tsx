import { withAuth } from "@/components/withAuth";
import React from "react";

function HowToInfoPage() {
  return (
    <section className="flex flex-col w-full items-center">
      <div className="flex flex-col w-4/5 gap-4">
        <div className="border-b-2 border-gray-300 py-2 mb-4">
          <h2 className="text-4xl tracking-tighter">How-To Info</h2>
        </div>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            <a
              href="https://drive.google.com/file/d/1VG-c4hsOPfPXTajTZa5-gliF4e1k4quM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              A Guide To Simple Boat Electrical – 2023 Version
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://docs.google.com/document/d/1nw6OmgzvY3S8oYPCP2yM_TK9w8emAP-3wAtJETkCJwY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Dock Electrical Pedestal checking (for shore power difficulty)
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://collingwoodyachtclub.com/wp-content/uploads/2018/04/2018-Lift-In-Preparation-and-Operations-April-2018-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              2018 Lift-In Preparation and Operations (Rev. April 2018)
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://collingwoodyachtclub.com/wp-content/uploads/2017/03/BBQLunchPrepInstructions-LiftInOut.doc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              BBQ Preparation For Lift in Lift out
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://collingwoodyachtclub.com/wp-content/uploads/2017/03/CoffeePercolatorinstructions.doc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Coffee Percolator Preparation For Lift in Lift out
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://collingwoodyachtclub.com/wp-content/uploads/2017/03/MorningPrepInstructions-dockcommandLiftInOut.doc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Morning Preparation Food and Beverage (Club Work Party)
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://collingwoodyachtclub.com/wp-content/uploads/2017/03/Operation-of-the-Mast-Crane.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Operation of the Mast Crane
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://collingwoodyachtclub.com/wp-content/uploads/2017/03/Parking-of-Trucks-and-Trailers.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Parking of Trucks and Trailers
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://collingwoodyachtclub.com/wp-content/uploads/2017/03/SafetyProcedures-dockcommandLiftInOut.doc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Safety Procedures for Club Work Party
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default withAuth(HowToInfoPage);
