export const Badge = ({ text }: { text: string }) => {
  return (
    <div className="shadow-lg bg-white px-6 py-4 font-bold text-gray-500 text-xs w-fit rounded-full tracking-widest">
      <p>{text.toUpperCase()}</p>
    </div>
  );
};
