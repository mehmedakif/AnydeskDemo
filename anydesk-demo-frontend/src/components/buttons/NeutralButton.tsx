import styles from "./Button.module.css";

interface NeutralButtonProps {
  label: string;
  onClick: () => void;
}

const NeutralButton: React.FC<NeutralButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles.neutral}`}>
      {label}
    </button>
  );
};

export default NeutralButton;