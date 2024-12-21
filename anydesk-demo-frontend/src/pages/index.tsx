import { useEffect, useState } from 'react';
import { Product } from '../types/Product'

import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { getAllProducts } from '@/utils/api/productApi';
import Topbar from '../components/topbar/Topbar';
import Footer from '../components/footer/Footer';
import Modal from '../components/modal/Modal'
import CreateProductForm from '@/components/forms/product/CreateProductForm';
import ProductGrid from '@/components/grids/ProductGrid';
import NeutralButton from '@/components/buttons/NeutralButton';


export default function Home() {
  //useStates
  const [products, setProducts] = useState<any[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModeActive, setEditModeActive] = useState(false);

  //useEffects
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('An error occured while fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('An error occured while fetching products:', error);
      }
    };

    fetchProducts();
  }, [products]);

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
  const toggleEditMode = () => {
    setEditModeActive(!isEditModeActive);
  }
  const handleFormSubmit = async (product: { name: string; description: string; image: string; price: number }) => {
    try {
      const response = await fetch("/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Product created successfully!');
      } else {
        alert('There was an error creating the product.');
      }
      getAllProducts();
    } catch (error) {
      console.error('Error:', error);
      alert('API request failed');
    }
    finally{
      closeModal()
    }
  };

  return (
    <>
      <Head>
        <title>Anydesk Demo App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page}`}>
        <Topbar />
        <main className={styles.main}>
          <div className={styles.mainHeader}>
            <h2>
              Products
            </h2>
          </div>
          <div className={styles.buttonContainer}>
            <NeutralButton label={"+ Add Product"} onClick={openModal} />
            <NeutralButton label={"Edit"} onClick={toggleEditMode} />
          </div>
          <ProductGrid 
            isEditModeActive={isEditModeActive} 
            products={products}
            setProducts={setProducts}
           />
        </main>
      </div>
      <Footer />
      <Modal 
          isOpen={isModalOpen} 
          header='Add Product' 
          description='add a description' 
          onClose={closeModal}>
        <CreateProductForm onSubmit={handleFormSubmit} />
      </Modal>
    </>
  );
}
