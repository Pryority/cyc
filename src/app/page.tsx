import { User } from "@/components/User";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-[96px] font-bold tracking-tighter">CYC</h1>
        <User />
      </div>
    </main>
  );
}
