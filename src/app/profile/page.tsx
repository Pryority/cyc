import { useSession } from "next-auth/react";
import { withAuth } from "@/components/withAuth";
import React from "react";

type Props = {};

const ProfilePage = (props: Props) => {
  const { data: session } = useSession();

  return (
    <section className="flex flex-col w-full items-center">
      <div className="flex flex-col gap-4 w-4/5 items-start">
        <h2 className="text-4xl font-medium tracking-tighter">
          My Profile -{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-800 via-sky-800 to-sky-900">
            The Gilded Lady
          </span>
        </h2>
        <div className="flex flex-col gap-2">
          <p className="profile-info-text">
            Name:
            <span className="profile-info-span">{session?.user?.name}</span>
          </p>
          <p className="profile-info-text">
            Email:
            <span className="profile-info-span">{session?.user?.email}</span>
          </p>
          <p className="profile-info-text">
            Races Won:
            <span className="profile-info-span">3</span>
          </p>
          <p className="profile-info-text">
            Ambassador:
            <span className="profile-info-span">True</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default withAuth(ProfilePage);
