"use client";

import RequireAuth from "@/components/RequireAuth";
import Link from "next/link";
import { useSession } from "next-auth/react";

const CYCEmailsPage = () => {
  const { data: session } = useSession();
  if (session)
    return (
      <section className="flex flex-col w-full items-center min-h-screen">
        <div className="flex flex-col w-4/5 gap-4">
          <div className="border-b-2 border-gray-300 py-2 mb-4">
            <h2 className="text-4xl tracking-tighter">CYC Emails</h2>
          </div>
          <div className="flex flex-col justify-center items-center mb-8">
            <a
              href="http://eepurl.com/c97ixb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold underline text-amber-600 hover:text-amber-800"
            >
              Please click here to signup for CYC Member Emails.
            </a>
            <a
              href="https://us15.campaign-archive.com/home/?u=32887db528b1ffb7dd953ce2d&amp;id=055711afef"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold underline text-amber-600 hover:text-amber-800 mt-4"
            >
              Please click here to view past CYC Member Emails.
            </a>
          </div>
          <h2 className="text-2xl font-bold text-center mb-8">
            You can contact{" "}
            <Link
              href={"mailto:info@collingwoodyachtclub.com"}
              className="text-amber-600"
            >
              info@collingwoodyachtclub.com
            </Link>{" "}
            if you need assistance.
          </h2>
        </div>
      </section>
    );
  return <RequireAuth />;
};

export default CYCEmailsPage;
