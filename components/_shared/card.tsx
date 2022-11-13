export const Card = ({ children, bgColor }: any) => {
  return (
    <div
      className="p-4 md:px-12 md:py-10 rounded-2xl shadow-lg"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};
