import { Auth } from "@/components/Auth";
import { Quote } from "@/components/Quote";

export const Signup = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-2">
      <div className="flex justify-center items-center">
        <Auth type="signup" />
      </div>
      <div className="hidden md:block">
        <Quote />
      </div>
    </div>
  );
};
