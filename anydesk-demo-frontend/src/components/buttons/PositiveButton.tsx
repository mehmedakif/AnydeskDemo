import styles from "./Button.module.css";

interface PositiveButtonProps {
  label: string;
  onClick: () => void;
}
const PositiveButton: React.FC<PositiveButtonProps> = ({ label, onClick }) => {
  return (
    <button className={`${styles.button} ${styles.positive}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default PositiveButton;