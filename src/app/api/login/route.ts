import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user?.email || !user.password) {
    return null;
  }

  if (!user || !(await compare(body.password, user.password))) {
    return null;
  }

  const { password, ...userWithoutPassword } = user;

  return new Response(JSON.stringify(userWithoutPassword));
}
