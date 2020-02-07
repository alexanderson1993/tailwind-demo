import React from "react";

function App() {
  return (
    <div className="bg-gray-400 flex justify-center h-screen items-center">
      <div
        tabIndex={1}
        className="card bg-white rounded-md w-48 h-64 shadow-lg focus:shadow-outline outline-none flex justify-center items-center text-6xl transform scale-100 hover:scale-105 transition-transform duration-200 ease-in-out"
      >
        <span role="img" aria-label="pizza">
          🍕
        </span>
      </div>
    </div>
  );
}

export default App;
