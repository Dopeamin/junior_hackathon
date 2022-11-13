export const Badge = ({ text }: { text: string }) => {
  return (
    <div className="shadow-lg bg-white px-4 py-2 text-gray-600 text-xs">
      {text}
    </div>
  );
};
