import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import DealCard from "./components/DealCard";
import FeaturePortion from "./components/Features";
import Testimonials1 from "./components/Testimonial";
import TestimonialPortion from "./components/TestimonialPortion";
import Team from "./components/Team";
import GetOrder from "./components/GetOrder";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <DealCard />
      <FeaturePortion />
      <TestimonialPortion />
      <Team/>
      <GetOrder/>
      <Footer/>
      
    </>
  );
}

export default App;
