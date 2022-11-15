import clsx from "clsx";

export const Button = ({
  children,
  className,
  onClick,
  disabled = false,
}: {
  children: any;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <div
      className={clsx("bg-gray-900 rounded px-8 py-4 transition-all ", {
        "cursor-pointer hover:-translate-y-1 hover:shadow-lg": !disabled,
        "!bg-gray-700 cursor-not-allowed": disabled,
      })}
    >
      {children}
    </div>
  );
};
