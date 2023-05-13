import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        // email: {
        //   label: "Email",
        //   type: "email",
        //   placeholder: "me@email.com",
        // },
        // password: {
        //   label: "Password",
        //   type: "password",
        // },
      },
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // perform logic for authentication

        // 1. Find user in DB
        if (email !== "john@gmail.com" && password !== "1234") {
          return null;
        }

        return { id: "1234", name: "John Doe", email: "john@gmail.com" };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
};

export default NextAuth(authOptions);
