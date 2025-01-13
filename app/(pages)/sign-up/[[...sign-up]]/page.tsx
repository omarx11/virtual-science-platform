import { SignUp } from "@clerk/nextjs";

export default function PageUpPage() {
  return (
    <div className="flex flex-grow items-center justify-center">
      <SignUp afterSignOutUrl="/" />
    </div>
  );
}
