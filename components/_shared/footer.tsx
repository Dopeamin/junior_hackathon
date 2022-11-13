import { Wrapper } from "./wrapper";

export const Footer = () => {
  return (
    <div className="bg-white p-10">
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-start w-full">
          <div className="flex flex-col">
            <h1 className="text-base md:text-lg font-bold">APPLICATION NAME</h1>
            <p className="text-xs text-gray-700 max-w-[400px] my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              assumenda dolores aliquam. Maiores odit rerum, rem velit expedita
              nam. Vitae dolore aliquid eum ad voluptatum odio eius ex quaerat
              adipisci?
            </p>
            <p>© 2022 All copytights reserved</p>
          </div>
          <div className="flex flex-row justify-evenly flex-1 font-light items-center gap-10">
            <a className="text-xs">FEATURES</a>

            <a className="text-xs">PRODUCT</a>

            <a className="text-xs">PRICING</a>

            <a className="text-xs">CONTACT</a>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
