"use client";

import { useState } from "react";

export default function StudentForm({ addStudent }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [grade, setGrade] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !dob || !grade) {
      alert("Please fill in all fields.");
      return;
    }

    addStudent({ id: Date.now(), firstName, lastName, dob, grade });

    setFirstName("");
    setLastName("");
    setDob("");
    setGrade("");
  }

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder:text-gray-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className={inputClass}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className={inputClass}
      />
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className={inputClass}
      />
      <input
        type="number"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        className={inputClass}
      />
      <button
        type="submit"
        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors cursor-pointer"
      >
        Add Student
      </button>
    </form>
  );
}
