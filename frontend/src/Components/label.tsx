interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className: string;
}

export const Label: React.FC<LabelProps> = ({ className, ...props }) => (
  <label
    className={
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" +
      className
    }
    {...props}
  />
);
