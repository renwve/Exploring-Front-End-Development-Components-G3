export default function StudentCard({ student }) {
  const initials = `${student.firstName[0]}${student.lastName[0]}`;

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors">
      <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white text-sm font-bold shrink-0">
        {initials}
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="font-semibold text-gray-800 truncate">
          {student.firstName} {student.lastName}
        </h2>
        <p className="text-sm text-gray-500">DOB: {student.dob}</p>
      </div>
      <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full shrink-0">
        Grade {student.grade}
      </span>
    </div>
  );
}
