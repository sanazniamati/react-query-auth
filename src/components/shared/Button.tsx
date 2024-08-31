interface ButtonProps {
  children: React.ReactNode;
  className: string;
  type: 'submit' | 'reset' | 'button';
}

const Button: React.FC<ButtonProps> = ({ children, className, type }) => {
  return (
    <button type={type} className={`px-6 py-3 bg-blue-500 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
