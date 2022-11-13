export const Card = ({ children }: { children: any }) => {
  return (
    <div className="rounded-xl bg-blue-100 shadow-lg flex flex-col justify-center items-center px-4 py-3">{children}</div>
  );
};
