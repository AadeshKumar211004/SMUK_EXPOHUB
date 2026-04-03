import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Ladies from "./pages/Ladies";
import Men from "./pages/Men";
import Pet from "./pages/Pet";
import Manufacturing from "./pages/Manufactring";
import Buying from "./pages/Buying";
import Distribution from "./pages/Distribution";
import Design from "./pages/Design";
import Consulting from "./pages/Consulting";
import SocialSidebar from "./components/SocialSidebar";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <ScrollToTop/>
      <Header />
      <Navbar />
      <SocialSidebar/>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/ladies" element={<Ladies/>} />
        <Route path="/men" element={<Men/>} />
        <Route path="/pet" element={<Pet/>} />
        <Route path="/manufacturing" element={<Manufacturing/>} />
        <Route path="/buying" element={<Buying/>} />
        <Route path="/distribution" element={<Distribution/>} />
        <Route path="/design" element={<Design/>} />
        <Route path="/consulting" element={<Consulting/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
