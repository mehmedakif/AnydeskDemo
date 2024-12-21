import styles from "./Button.module.css";

interface NegativeButtonProps {
  label: string;
  onClick: () => void;
}

const NegativeButton: React.FC<NegativeButtonProps> = ({ label, onClick }) => {
  return (
    <button className={`${styles.button} ${styles.negative}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default NegativeButton;