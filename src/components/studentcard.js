export default function StudentCard({ student }) {
  return (
    <div className="">
      <h2>
        {student.firstName} {student.lastName}
      </h2>
      <p>Date of Birth: {student.dob}</p>
      <p>Grade: {student.grade}</p>
    </div>
  );
}
