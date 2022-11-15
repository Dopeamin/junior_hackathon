import Image from "next/image";
import Router from "next/router";

export const Offer = ({
  image,
  title,
  description,
  tags,
}: {
  image: string;
  title: string;
  description: string;
  tags: string[];
}) => {
  const handleClick = () => {
    Router.push("applications/1");
  };
  return (
    <div
      className="flex shadow backdrop-blur bg-opacity-80 flex-col rounded-2xl bg-gray-50 max-w-[350px] w-full overflow-hidden transition-all ease-out duration-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative w-full h-32">
        <Image alt="picture" src={image} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col gap-1 pt-2 pb-4 px-6">
        <h1 className="text-lg font-semibold">{title.toUpperCase()}</h1>
        <div className="flex flex-row gap-2 flew-wrap w-full">
          {tags.map((tag) => (
            <div
              key={tag}
              className="w-fit px-2 text-xs py-[1px] bg-gray-100 border border-gray-300 text-gray-500 rounded"
            >
              {tag}
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-xs">{description}</p>
      </div>
    </div>
  );
};
