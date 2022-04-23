import React from "react";
import Card from "react-bootstrap/Card";
import "../assets/styles/DealCard.css";
import deal1 from "../assets/images/deal1.png";
import deal2 from "../assets/images/deal2.png";
import deal3 from "../assets/images/deal3.png";
import deal4 from "../assets/images/deal4.png";
import deal5 from "../assets/images/deal5.png";
import deal6 from "../assets/images/deal6.png";
import { Center } from "@chakra-ui/react";
const data = [
  {
    id: 1,
    imageURL: deal1,
    // "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Deal 1",
    desc: "Medium size special tikka heart pizza Green Peppers",
    price: 699,
    rating: 4.2,
    numReviews: 34,
  },
  {
    id: 1,
    imageURL: deal2,
    // "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    name: "Deal 2",
    desc: "Hot & Grilled nachos smothered in cheddar cheese, beef ",
    price: 399,
    rating: 4.2,
    numReviews: 34,
  },
  {
    id: 1,
    imageURL: deal3,
    name: "Deal 3",
    desc: "Blackened chicken,and peppers smothered with pepper jack",
    price: 599,
    rating: 4.2,
    numReviews: 34,
  },
  {
    id: 1,
    imageURL: deal4,
    name: "Deal 4",
    desc: "Sliced Chicken Poppers, Green Peppers, Mushrooms, Onions",
    price: 799,
    rating: 4.2,
    numReviews: 34,
  },
  {
    id: 1,
    imageURL: deal5,
    name: "Deal 5",
    desc: "Special Burger, deep-fried beef ravioli served with",
    price: 699,
    rating: 4.2,
    numReviews: 34,
  },
  {
    id: 1,
    imageURL: deal6,
    name: "Deal 6",
    desc: "Special Cauliflower Pizza, Add your toppings  ",
    price: 499,
    rating: 4.2,
    numReviews: 34,
  },
];
const DealCard = ({ e }) => {
  return (
    <div className="home-container  mt-40" id="deals">
      <Center>
        <div className="heading-minimal">
          <div className="sub-title">Super Delicious</div>
          <h3 className="head-title">Super Delicious Deals</h3>
          <div className="bottom-dots  clearfix center">
            <span className="dot line-dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </Center>
      <div className="products">
        {data &&
          data?.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <img src={product.imageURL} alt={product.name} />
              <div className="details">
                <span className="mr-5">{product.desc}</span>
                <span className="price">Rs.{product.price}</span>
              </div>
              <button className="add-to-cart-button">Add To Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DealCard;
