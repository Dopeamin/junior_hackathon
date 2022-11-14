export const Element = ({
  icon,
  text,
  route,
}: {
  icon: any;
  text: string;
  route: string;
}) => {
  return (
    <div className="w-full flex flex-row py-2 px-4 items-center gap-4 hover:bg-blue-50 transition-all cursor-pointer">
      <div className="w-10 h-10 flex justify-center items-center mx-1">
        {icon}
      </div>
      <div className="flex-1">
        <h2 className="text-gray-700 text-xs">{text}</h2>
      </div>
    </div>
  );
};
