"use client";

import { useState } from "react";
import studentsData from "../../data/students.json";
import StudentForm from "@/components/studentform";
import StudentList from "@/components/studentlist";

export default function Home() {
  const [students, setStudents] = useState(studentsData);

  function addStudent(student: {
    id: number;
    firstName: string;
    lastName: string;
    dob: string;
    grade: number | string;
  }) {
    setStudents((prev) => [...prev, student as (typeof studentsData)[0]]);
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
        <p className="text-gray-500 mt-1">Manage and view all enrolled students</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Add New Student</h2>
            <StudentForm addStudent={addStudent} />
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Students{" "}
              <span className="text-sm font-normal text-gray-400">({students.length})</span>
            </h2>
            <StudentList students={students} />
          </div>
        </div>
      </div>
    </main>
  );
}
