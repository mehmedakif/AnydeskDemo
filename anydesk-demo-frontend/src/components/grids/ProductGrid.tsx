import { useEffect, useState } from 'react';
import styles from './ProductGrid.module.css';
import { Product } from '@/types/Product';
import ProductCard from '../productCard/ProductCard';

interface ProductGridProps {
    products: Product[],
    isEditModeActive: boolean,
    setProducts: React.Dispatch<React.SetStateAction<{ id: number; name: string; description: string; price: number; image: string; }[]>>;
}


const ProductGrid: React.FC<ProductGridProps> = ({ products, isEditModeActive, setProducts }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleDelete = (id: number) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };

    return (
        <div>
            <div className={styles.grid}>
                {currentItems.map((item, index) => (
                    <div key={index} className={styles.gridItem}>
                        <ProductCard
                            id={item.id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            imageUrl="https://via.placeholder.com/300"
                            isEditMode={isEditModeActive}
                            onDelete={handleDelete}
                            />
                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                {pageNumbers.map((number) => (
                    <button className={styles.paginationButton}
                        key={number}
                        onClick={() => handlePageClick(number)}
                        style={{
                            background: currentPage === number ? "white" : "white",
                            color: currentPage === number ? "#ef443b" : "white",
                        }}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;