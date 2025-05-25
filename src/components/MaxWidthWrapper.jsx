import { cn } from "../utils/utils";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div className={cn("h-full mx-auto w-full lg:px-20", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;