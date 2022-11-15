import { Button } from "../_shared/button";
import { Offer } from "./offer";
import { UserBarMinimized } from "./userbar";

export const Offers = () => {
  const offers = ["", "", "", "", "", ""];
  return (
    <div className="flex flex-col mt-10 gap-6">
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-2xl font-bold text-gray-900 tracking-widest mb-2">
          Offers Management
        </h1>
        <UserBarMinimized />
      </div>
      <div className="w-fit">
        <Button
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        >
          <p className="text-xs text-gray-50">Add Job Offer</p>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        {offers.map((offer, index) => (
          <Offer
            key={index}
            image={"/screenshot.png"}
            title={"Job Offer"}
            description={"lorem ipsum lorem ipsum"}
            tags={["HR", "DEV", "BUSINESS"]}
          />
        ))}
      </div>
    </div>
  );
};
