import { ButtonType } from "@/app/types/common";

const Button = ({ onClick, className, children , key}: ButtonType) => {
  return (
    <button className={className} onClick={onClick} key={key}>
      {children}
    </button>
  );
};

export default Button;
