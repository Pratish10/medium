import { Auth } from "@/components/auth";
import { Quote } from "@/components/quote";

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
