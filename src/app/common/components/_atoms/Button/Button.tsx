import { ButtonType } from "@/app/common/types/common";

const Button = ({ onClick, className, children }: ButtonType) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
