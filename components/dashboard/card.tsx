export const Card = ({ children, bgColor }: any) => {
  return (
    <div
      className="p-6 rounded-2xl shadow-lg bg-gray-50 bg-opacity-40 backdrop-blur"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};
