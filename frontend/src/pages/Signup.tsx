import { Auth } from "@/Components/Auth";
import { Quote } from "@/Components/Quote";

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
