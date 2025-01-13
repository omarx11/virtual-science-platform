import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Button } from "./ui/shadcn/button";

export default async function Header() {
  const { userId } = await auth();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 shadow-sm backdrop-blur-md">
      <nav className="container mx-auto bg-sky-200 px-2 sm:px-4 rounded-b-lg flex h-16 items-center justify-between">
        <h1 className="text-2xl font-bold">Logo</h1>
        <div className="flex items-center gap-2">
          <Button
            variant="underline_link"
            className="text-base text-foreground"
            asChild
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            variant="underline_link"
            className="text-base text-foreground"
            asChild
          >
            <Link href="/about">About</Link>
          </Button>
          <Button
            variant="underline_link"
            className="text-base text-foreground"
            asChild
          >
            <Link href="#">Contact</Link>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          {!userId ? (
            <>
              <Button asChild>
                <Link href="/sign-in">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild size="sm">
                <Link href="/profile">Profile</Link>
              </Button>
              <UserButton />
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
