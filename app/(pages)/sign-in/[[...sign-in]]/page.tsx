import { SignIn } from "@clerk/nextjs";

export default function PageInPage() {
  return (
    <div className="flex flex-grow items-center justify-center">
      <SignIn afterSignOutUrl="/" />
    </div>
  );
}
