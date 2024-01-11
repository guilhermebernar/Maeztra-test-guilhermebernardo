import { useState, useEffect } from 'react';
import Modal from './components/Modal';
import Header from './components/Header';
// import MainBanner from './components/MainBanner'
// import PromoSection from './components/PromoSection';
// import PartnerBrands from './components/PartnerBrands';
// import FeaturedProducts from './components/FeaturedProducts'; 
// import PromotionalBlock from './components/PromotionalBlock'
// import Newsletter from './components/Newsletter';
import Footer from './components/Footer';


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
      <Header />
      {/* <main>
        <MainBanner/>
        <PromoSection />
        <PartnerBrands />
        <FeaturedProducts />
      </main>
      <PromotionalBlock />
      <Newsletter />*/}
      <Footer /> 

      {showModal && <Modal onClose={handleCloseModal} />}

    </div>
  );
}

export default App;