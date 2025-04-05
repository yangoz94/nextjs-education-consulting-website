import React from "react";

export default function MaintenanceView() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <h1 className="text-4xl font-bold mb-4">Site No Longer Live</h1>
      <p className="text-lg mb-2">
        This project was created purely for learning and demonstration purposes. It is a <strong>fictional project</strong> and is no longer being maintained.
      </p>
      <p className="text-lg">If you are interested in experimenting or deploying it yourself, feel free to clone the repository and set up the necessary environment variables and set up the placeholder content as needed.</p>
    </div>
  );
}
