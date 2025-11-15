import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="flex max-w-screen-lg just flex-col gap-2 pb-16">
    {children}
  </div>
);

export default Container;
