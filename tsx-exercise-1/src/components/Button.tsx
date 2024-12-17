interface buttonControl {
  label: string;
  onClick: React.MouseEventHandler;
  disabled: boolean;
}

const Button = ({ label, onClick, disabled }: buttonControl) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
