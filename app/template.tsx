import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen justify-center bg-white font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl mx-4 sm:mx-auto mt-4 flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        {children}
      </main>
    </div>
  );
}
