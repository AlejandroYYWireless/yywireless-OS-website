"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return <div className="bg-black h-screen w-full">Dont do that.</div>;
};

export default Page;
