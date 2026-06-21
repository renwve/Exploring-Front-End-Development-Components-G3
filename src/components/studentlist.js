import StudentCard from "./studentcard";

export default function StudentList({ students }) {
  return (
    <div className="">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
        />
      ))}
    </div>
  );
}
