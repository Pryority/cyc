import React from "react";

const MeetingNotesPage = () => {
  return (
    <section className="flex flex-col w-full items-center">
      <div className="flex flex-col w-4/5 gap-4">
        <div className="border-b-2 border-gray-300 py-2 mb-4">
          <h2 className="text-4xl tracking-tighter">Meeting Notes</h2>
        </div>
        <p>
          Please use the links below to access CYC Meeting Minutes. Every
          attempt at accuracy has been made.
        </p>
        <p>
          If there is an error, please send a message to{" "}
          <a
            className="text-blue-600 hover:underline"
            href="mailto:communications@collingwoodyachtclub.com"
          >
            communications@collingwoodyachtclub.com
          </a>{" "}
          and report the error. Minutes prior to those posted here can be
          reviewed in hard copy at the club house or by requesting a copy by
          email. Thank you!
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-4">
        <p className="text-center">
          <a
            className="text-blue-600 hover:underline"
            href="https://drive.google.com/drive/folders/0BwCw_rVxy-jkUEZOR0VnUWtGQ1U?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            2016 Approved Minutes
          </a>
        </p>
        <p className="text-center">
          <a
            className="text-blue-600 hover:underline"
            href="https://drive.google.com/drive/folders/0BwCw_rVxy-jkNFoya3VMaWJ1OW8?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            2017 Approved Minutes
          </a>
        </p>
        <p className="text-center">
          <a
            className="text-blue-600 hover:underline"
            href="https://drive.google.com/drive/folders/1huuDZmvVm_4sJxiXw4XhSIan65Gojh31?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            2018 Approved Minutes
          </a>
        </p>
        <p className="text-center">
          <a
            className="text-blue-600 hover:underline"
            href="https://drive.google.com/drive/folders/1LgWHo4IAd4F_LFSBg7WEteMRRy9NGveW?usp=sharing"
            target="_blank"
            rel="noopener"
          >
            2019 Approved Minutes
          </a>
        </p>
        <p className="text-center">
          <a
            className="text-blue-600 hover:underline"
            href="https://drive.google.com/drive/folders/1uU8b87JrYdlFrRaeoSdH1pCqg2a0gkqN?usp=sharing"
            target="_blank"
            rel="noopener"
          >
            2020 Approved Minutes
          </a>
        </p>
        <p className="text-center">
          <a
            className="text-blue-600 hover:underline"
            href="https://drive.google.com/drive/folders/1C5NRwpgttNZfuNS_3jcNentO5VYIDffc"
            target="_blank"
            rel="noopener"
          >
            2021 Approved Minutes
          </a>
        </p>
      </div>
    </section>
  );
};
export default MeetingNotesPage;
