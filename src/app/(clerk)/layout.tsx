import React from "react";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex justify-center w-full">{children}</div>;
};

export default ClerkLayout;
