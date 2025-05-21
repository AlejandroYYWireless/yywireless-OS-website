import { Loader2 } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      <Loader2 className="animate-spin h-14 w-14 text-white" />
    </div>
  );
};

export default Page;
