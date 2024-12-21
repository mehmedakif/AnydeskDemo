import EditButton from '../buttons/EditButton';
import NegativeButton from '../buttons/NegativeButton';
import NeutralButton from '../buttons/NeutralButton';
import PositiveButton from '../buttons/PositiveButton';
import styles from './EditPanel.module.css';

interface ProductCardProps {
    itemId: number,
    isVisible: boolean,
    onDelete: (id: number) => void,
}

const ProductCard: React.FC<ProductCardProps> = ({ itemId, isVisible, onDelete }) => {

    const handleDelete = async () => {
        try {
          // API isteği ile silme işlemi
          const response = await fetch(`/products/${itemId}`, {
            method: "DELETE",
          });
    
          if (response.ok) {
            onDelete(itemId);
          } else {
            console.error("Deleting is failed.");
          }
        } catch (error) {
          console.error("An error occured on delete:", error);
        }
      };

    return (
        <div className={styles.editPanel}>
            {isVisible &&
                <div>
                    <NegativeButton label='Delete' onClick={handleDelete}/>
                </div>
            }
        </div>

    );
};

export default ProductCard;