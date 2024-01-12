import React, { useState, useEffect, Suspense } from 'react';
import Modal from './components/Modal';
import Header from './components/Header';
import MainBanner from './components/MainBanner'
import WhyBuy from './components/WhyBuy';
import PartnerBrands from './components/PartnerBrands';
const FeaturedProducts = React.lazy(() => import('./components/FeaturedProducts'));
const PromotionalBlock = React.lazy(() => import('./components/PromotionalBlock'));
const Newsletter = React.lazy(() => import('./components/Newsletter'));
const Footer = React.lazy(() => import('./components/Footer'));
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    console.log('Modal foi fechado');
    setShowModal(false);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <MainBanner/>
        {showModal && <Modal onClose={handleCloseModal} />}
        <main>
          <WhyBuy />
          <PartnerBrands />
          <Suspense fallback={<div>Loading...</div>}>
            <FeaturedProducts />      
            <PromotionalBlock />
            <Newsletter />
          </Suspense>
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
