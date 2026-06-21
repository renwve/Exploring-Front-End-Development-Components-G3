"use client";

import { useState } from "react";

export default function StudentForm({ addStudent }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [grade, setGrade] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !dob ||
      !grade
    ) {
      alert("Please fill in all fields.");
      return;
    }

    addStudent({
      id: Date.now(),
      firstName,
      lastName,
      dob,
      grade
    });

    setFirstName("");
    setLastName("");
    setDob("");
    setGrade("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3"
    >
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) =>
          setFirstName(e.target.value)
        }
        className=""
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) =>
          setLastName(e.target.value)
        }
        className=""
      />

      <input
        type="date"
        value={dob}
        onChange={(e) =>
          setDob(e.target.value)
        }
        className=""
      />

      <input
        type="number"
        placeholder="Grade"
        value={grade}
        onChange={(e) =>
          setGrade(e.target.value)
        }
        className=""
      />

      <button
        className=""
      >
        Add Student
      </button>
    </form>
  );
}
