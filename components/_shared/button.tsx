export const Button = ({
  children,
  className,
  onClick,
}: {
  children: any;
  className?: string;
  onClick: () => void;
}) => {
  return (
    <div className="bg-gray-900 rounded px-8 py-4 transition-all hover:-translate-y-1 cursor-pointer hover:shadow-lg">
      {children}
    </div>
  );
};
