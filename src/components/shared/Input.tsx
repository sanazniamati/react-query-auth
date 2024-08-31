interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  className: string;
  handleChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  className,
  handleChange,
}) => {
  return (
    <input
      value={value}
      className={`px-6 py-3 rounded-lg border-2 ${className}`}
      type={type}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
export default Input;
