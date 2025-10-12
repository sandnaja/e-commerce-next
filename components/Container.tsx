import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-x-screen-xl mx-auto px-8", className)}>
      {children}
    </div>
  );
};
export default Container;
