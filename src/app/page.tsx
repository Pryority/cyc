import { User } from "@/components/User";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mt-[-80px] p-24">
      <div className="flex flex-col gap-[80px] items-center">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-[96px] flex flex-col font-medium leading-[80px] tracking-tighter">
            Welcome to the{" "}
            <span className="font-bold uppercase">Collingwood Yacht Club</span>
          </h1>
          <User />
          <div className="border p-10 rounded-lg">
            <p className="leading-10">
              The Collingwood Yacht Club is a non-profit, member-run
              organization located on the shores of Georgian Bay in Collingwood,
              Ontario, Canada. Founded in 1973, the club provides a friendly and
              welcoming atmosphere for sailors of all levels, with a focus on
              promoting the sport of sailing, boating safety, and environmental
              stewardship. The club offers a variety of programs and services,
              including racing events, social activities, and access to dockage
              and storage facilities. With its beautiful waterfront location and
              active community, the Collingwood Yacht Club is a great place for
              boating enthusiasts to come together and enjoy the scenic waters
              of Georgian Bay.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h3 className="text-4xl flex gap-2 leading-8 tracking-tighter font-bold uppercase">
            Collingwood Invitational Regatta
          </h3>
          <User />
          <div className="border p-10 rounded-lg">
            <p className="leading-10">
              The Collingwood Invitational Regatta superseded the Georgian Bay
              Cup — in name only — and is Collingwood Yacht Club’s kick-off for
              the summer yachting season. The Collingwood Invitational Regatta
              Committee hopes that you will join us in this year’s Race and
              participate in the opportunity to give back to the local community
              by supporting the local food banks and Canadian Heart and Stroke
              Foundation.
            </p>
          </div>
          <Link
            href={"/regatta"}
            className="px-6 py-2 rounded-full border border-blue-500 bg-stone-50 text-sky-900"
          >
            More Info
          </Link>
        </div>
      </div>
    </main>
  );
}
