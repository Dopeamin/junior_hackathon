export const Card = ({ children, bgColor }: any) => {
  return (
    <div
      className="p-6 rounded-2xl shadow-lg"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};
