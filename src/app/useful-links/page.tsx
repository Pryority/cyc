import React from "react";

const UsefulLinksPage = () => {
  return (
    <section className="flex flex-col w-full items-center min-h-screen">
      <div className="flex flex-col w-4/5 gap-4">
        <div className="border-b-2 border-gray-300 py-2 mb-4">
          <h2 className="text-4xl tracking-tighter">Useful Links</h2>
        </div>
        <div className="text-gray-800">
          <p className="mb-2">
            <a
              href="https://drive.google.com/file/d/1VG-c4hsOPfPXTajTZa5-gliF4e1k4quM/view?usp=sharing"
              className="text-blue-600 hover:underline"
            >
              A Guide To Simple Boat Electrical – 2023 Version
            </a>
          </p>
          <p className="mb-2">
            <a
              href="https://docs.google.com/document/d/1nw6OmgzvY3S8oYPCP2yM_TK9w8emAP-3wAtJETkCJwY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Dock Electrical Pedestal checking
            </a>{" "}
            (for shore power difficulty)
          </p>
          <p className="mb-2">
            <a
              href="https://collingwoodyachtclub.com/wp-content/uploads/2018/04/2018-Lift-In-Preparation-and-Operations-April-2018-1.pdf"
              className="text-blue-600 hover:underline"
            >
              2018 Lift-In Preparation and Operations
            </a>{" "}
            (Rev. April 2018)
          </p>
          <p className="mb-2">
            <a
              href="https://collingwoodyachtclub.com/wp-content/uploads/2017/03/BBQLunchPrepInstructions-LiftInOut.doc"
              className="text-blue-600 hover:underline"
            >
              BBQ Preparation For Lift in Lift out
            </a>
          </p>
          <p className="mb-2">
            <a
              href="https://collingwoodyachtclub.com/wp-content/uploads/2017/03/CoffeePercolatorinstructions.doc"
              className="text-blue-600 hover:underline"
            >
              Coffee Percolator Preparation For Lift in Lift out
            </a>
          </p>
          <p className="mb-2">
            <a
              href="https://collingwoodyachtclub.com/wp-content/uploads/2017/03/MorningPrepInstructions-dockcommandLiftInOut.doc"
              className="text-blue-600 hover:underline"
            >
              Morning Preparation Food and Beverage (Club Work Party)
            </a>
          </p>
          <p className="mb-2">
            <a
              href="https://collingwoodyachtclub.com/wp-content/uploads/2017/03/Operation-of-the-Mast-Crane.pdf"
              className="text-blue-600 hover:underline"
            >
              Operation of the Mast Crane
            </a>
          </p>
          <p className="mb-2">
            How to operation the Pump-out station COMING SOON
          </p>
        </div>
      </div>
    </section>
  );
};

export default UsefulLinksPage;
