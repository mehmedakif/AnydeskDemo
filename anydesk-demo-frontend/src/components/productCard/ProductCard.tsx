import EditButton from '../buttons/EditButton';
import NegativeButton from '../buttons/NegativeButton';
import NeutralButton from '../buttons/NeutralButton';
import PositiveButton from '../buttons/PositiveButton';
import EditPanel from './EditPanel';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    isEditMode: boolean;
    onDelete: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, imageUrl, isEditMode, onDelete }) => {
    return (
        <div>
            <div className={styles.card}>
            <img className={styles.image} src={imageUrl} alt={name} />
            <div className={styles.content}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.description}>{description}</p>
                <div className={styles.priceContainer}>
                    <p className={styles.price}>${price.toFixed(2)}</p>
                </div>
            </div>
        </div>
            <EditPanel
                itemId={id}
                isVisible={isEditMode}
                onDelete={() => onDelete(id)}/>
        </div>
        
    );
};

export default ProductCard;