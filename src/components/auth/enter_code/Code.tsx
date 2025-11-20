export default function Code() {
  return (
    <div className="w-3/4 flex gap-3 justify-center">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <div
            className="p-5 border border-gray-400 rounded-sm"
            key={index}
          ></div>
        ))}
    </div>
  );
}