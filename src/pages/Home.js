import React from "react";
import Categories from "../components/Categories";
import DealCard from "../components/DealCard";
import Features from "../components/Features";
import GetOrder from "../components/GetOrder";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
import TestimonialPortion from "../components/TestimonialPortion";

const Home = () => {
  return (
    <div id="header">
      <Navbar />
      <Hero />
      <Categories />
      <DealCard />
      <Features />
      <TestimonialPortion />
      <Team />
      <GetOrder />
    </div>
  );
};

export default Home;
