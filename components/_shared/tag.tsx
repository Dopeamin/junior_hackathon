export const Tag = ({ color, text }: any) => {
  console.log(color);
  return (
    <div
      className={`px-2 py-1 bg-${color}-100 rounded-lg border border-${color}-300 mb-2`}
    >
      <p className={`text-${color}-400 text-xs `}>{text}</p>
    </div>
  );
};
