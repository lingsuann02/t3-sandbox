"use client";

import Link from "next/link";

import { api } from "~/trpc/react";

export default function Home() {
  // the hello router always throws TRPCError({
  //   code: "INTERNAL_SERVER_ERROR",
  // });
  const { data: helloData, error: helloError } = api.post.hello.useQuery({
    text: "from tRPC",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          {helloError
            ? helloError.message
            : "No error was caught, when it should have!! :("}
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {helloData && "Loading tRPC query..."}
          </p>
        </div>
      </div>
    </main>
  );
}
