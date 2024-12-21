import React, { useState } from "react";
import styles from "./CreateProductForm.module.css";

import { isValidURL } from "../../../utils/validation";

interface ProductFormProps {
  onSubmit: (product: { name: string; description: string; image: string; price: number }) => void;
}

const CreateProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [error, setError] = useState<string>("");
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setImage(value);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!isValidURL(image)) {
      setShowTooltip(true); 
      setTimeout(() => setShowTooltip(false), 3000);
      return;
    }
  
    setShowTooltip(false);
    const product = { name, description, image, price };
    onSubmit(product);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.formRow}>
        <label className={styles.label}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          maxLength={50}
          required
        />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label}>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
          maxLength={200}
          required
        />
      </div>

      <div className={styles.formRow}>
        <label className={styles.label}>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={handleChange}
          className={styles.input}
          required
        />
      </div>
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "0",
            width: "100%",
            padding: "10px",
            background: "#f44336",
            color: "white",
            borderRadius: "4px",
            textAlign: "center",
            fontSize: "14px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          URL is not valid!
        </div>
      )}
      <div className={styles.formRow}>
        <label className={styles.label}>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          className={styles.input}
          min="0"
          step="0.01"
          required
        />
      </div>
      <button type="submit" className={styles.button}>
        Create Product
      </button>
    </form>
  );
};

export default CreateProductForm;
