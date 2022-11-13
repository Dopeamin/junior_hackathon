export const Wrapper = ({ children }: { children: any }) => {
  return (
    <div className="flex flex-col relative justify-center items-center p-4 w-full max-w-[1200px] mx-auto h-full">
      {children}
    </div>
  );
};
