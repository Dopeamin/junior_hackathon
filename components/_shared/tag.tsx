import clsx from "clsx";

export const Tag = ({ color, text, success }: any) => {
  const bgColorFailure = ``;

  return (
    <div
      className={clsx(
        "px-1 py-[1px] rounded-lg border mb-2 bg-green-100 border-green-300",
        {
          "bg-green-100 border-green-300": success,
          "bg-red-100 border-red-300": !success,
        }
      )}
    >
      <p
        className={clsx("text-${color}-400 text-xs ", {
          "text-green-400": success,
          "text-red-400": !success,
        })}
      >
        {text}
      </p>
    </div>
  );
};
