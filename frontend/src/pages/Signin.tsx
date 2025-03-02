import { Auth } from "@/Components/Auth";
import { Quote } from "@/Components/Quote";

export const Signin = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-2">
      <div className="flex justify-center items-center">
        <Auth type="signin" />
      </div>
      <div className="hidden md:block">
        <Quote />
      </div>
    </div>
  );
};
