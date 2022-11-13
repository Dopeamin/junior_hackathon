import clsx from "clsx";

export const PricingCard = ({ children, big }: any) => {
  return (
    <div
      className={clsx("bg-white rounded-xl shado-xs p-10", {
        "shadow-blue-900 !h-[350px]": big,
      })}
    >
      {children}
    </div>
  );
};
