import StudentCard from "./studentcard";

export default function StudentList({ students }) {
  if (students.length === 0) {
    return (
      <p className="text-center text-gray-400 py-8">No students added yet.</p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
