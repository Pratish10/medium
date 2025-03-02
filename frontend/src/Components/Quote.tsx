export const Quote = () => {
  return (
    <div className="flex h-screen flex-col justify-center bg-blue-50">
      <div className="flex justify-center p-8 md:p-12">
        <div className="max-w-lg space-y-4">
          <blockquote className="text-2xl font-medium leading-relaxed md:text-3xl">
            "The customer support I received was exceptional. The support team
            went above and beyond to address my concerns."
          </blockquote>
          <div className="pt-2">
            <div className="font-semibold">Jules Winfield</div>
            <div className="text-sm text-gray-500">CEO | Acme Corp</div>
          </div>
        </div>
      </div>
    </div>
  );
};
