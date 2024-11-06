import Image from "next/image";
import WelcomeMessage from "@/app/components/WelcomeMessage";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <WelcomeMessage />
    </div>
  );
}
