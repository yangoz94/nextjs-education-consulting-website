import React from "react";

export default function PageStyler({
  children,
  optionalClassNames,
}: {
  children: React.ReactNode;
  optionalClassNames?: string;
}) {
  return (
    <div
      className={`bg-LIGHT_PRIMARY_BG_COLOR dark:bg-DARK_PRIMARY_BG_COLOR text-black dark:text-white ${optionalClassNames} `}
    >
      {children}
    </div>
  );
}
