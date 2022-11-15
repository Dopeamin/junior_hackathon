export const Select = ({
  question,
  data,
}: {
  question: string;
  data: string[];
}) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="text-lg ">{question}</h1>
    </div>
  );
};
