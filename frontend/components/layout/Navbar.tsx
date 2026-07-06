"use client";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Dashboard
        </h2>

        <p className="text-sm text-gray-500">
          Welcome to AI Code Review Assistant
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          A
        </div>
      </div>
    </header>
  );
}