import clsx from "clsx";

export const Tag = ({ color, text }: any) => {
  const bgColor = `bg-${color}-100`;
  const borderColor = `border-${color}-300`;
  return (
    <div
      className={clsx("px-2 py-1 rounded-lg border mb-2", bgColor, borderColor)}
    >
      <p className={`text-${color}-400 text-xs `}>{text}</p>
    </div>
  );
};
