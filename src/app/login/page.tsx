"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

const useCredentials = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await signIn("credentials", { email, password, callbackUrl: "/" });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
  };
};

const LoginPage = ({ csrfToken }: { csrfToken: string }) => {
  const { email, setEmail, password, setPassword, handleSubmit } =
    useCredentials();

  // Determine if email and password inputs are valid
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid = password.length >= 8;

  return (
    <section className="flex flex-col w-full items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2 w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/4"
      >
        <input
          type="hidden"
          name="csrfToken"
          defaultValue={csrfToken}
          className=""
        />
        <label className="flex flex-col w-full">
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className={`border-2 rounded p-2 ${
              emailValid
                ? "border-green-500"
                : email.length > 0
                ? "border-red-500"
                : ""
            }`}
          />
        </label>
        <label className="flex flex-col w-full">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={`border-2 rounded p-2 ${
              passwordValid
                ? "border-green-500"
                : password.length > 0
                ? "border-red-500"
                : ""
            }`}
          />
        </label>
        <button
          type="submit"
          className={`flex w-1/2 justify-center mt-8 text-white ${
            emailValid && passwordValid ? "bg-blue-500" : "bg-gray-500"
          }`}
          disabled={!emailValid || !passwordValid}
        >
          Sign in
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
