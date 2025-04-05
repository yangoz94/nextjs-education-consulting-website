import React from "react";
import PageStyler from "./components/PageStyler";

const Loading = () => {
  return (
    <PageStyler>
      <main className="flex space-x-2 p-5 w-full justify-center items-center">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={i}
            className="w-4 h-4 rounded-full bg-gray-500 animate-pulse"
            style={{ animationDelay: `${i * 200}ms`, animationDuration: "1s" }}
          />
        ))}
      </main>
    </PageStyler>
  );
};

export default Loading;
