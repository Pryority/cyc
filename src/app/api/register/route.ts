import { prisma } from "@/lib/prisma";
import * as bcrypt from "bcryptjs";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(req: Request) {
  const body: RequestBody = await req.json();

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 12),
    },
  });

  if (!user?.name || !user?.email || !user.password) {
    return null;
  }

  console.log({
    id: user.id,
    email: user.email,
    name: user.name,
    randomKey: "Hey cool",
  });

  const { password, ...result } = user;
  return new Response(JSON.stringify(result));
}
