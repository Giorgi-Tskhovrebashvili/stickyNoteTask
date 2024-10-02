import { InputType } from "@/app/types/common";

const Input = ({
  className,
  type,
  placeholder,
  onChange,
  value,
  name,
  onKeyDown,
  checked,
}: InputType) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
      onKeyDown={onKeyDown}
      checked={checked}
    />
  );
};

export default Input;
