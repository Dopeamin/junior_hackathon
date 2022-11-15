export const Separator = ({ className }: { className?: string }) => {
  return (
    <div
      className={"h-[3px] w-[80%] " + (!className ? "bg-gray-300 " : className)}
    ></div>
  );
};
