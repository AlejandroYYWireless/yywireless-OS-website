import { Loader2 } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="h-full w-full">
      <Loader2 className="animate-spin" />
    </div>
  );
};

export default loading;
