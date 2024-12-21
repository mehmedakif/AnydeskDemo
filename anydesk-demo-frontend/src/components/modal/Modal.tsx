import React from "react";
import styles from "./Modal.module.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    header: string;
    description: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, header, description, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h2>{header}</h2>
                    <p>{description}</p>
                    <button onClick={onClose} className={styles.closeButton}>
                        &times;
                    </button>
                </div>
                <div className={styles.modalBody}>{children}</div>
                <div className={styles.modalFooter}>
                </div>
            </div>
        </div>
    );
};

export default Modal;