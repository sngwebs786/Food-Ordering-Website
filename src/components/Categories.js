import { Center } from "@chakra-ui/react";
import React, { useState } from "react";
import "../assets/styles/Categories.css";
import burger from "../assets/images/burger.png";
import pizza from "../assets/images/pizza.png";
import broast from "../assets/images/broast.png";
import chicken from "../assets/images/chicken.png";
import dessert from "../assets/images/deserts.png";
import cocktail from "../assets/images/cocktail.png";
import pasta from "../assets/images/pasta.png";
import sandwich from "../assets/images/sandwiches.png";
const Categories = () => {
  const[category,setCategory]=useState("")
  return (
    <>
      <div className="margin-top">
        <Center>
          <div className="heading-minimal">
            <div className="sub-title">Top Foods</div>
            <h3 className="head-title">Our Categories</h3>
            <div className="bottom-dots  clearfix center">
              <span className="dot line-dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </Center>
          <div className="categories-cards">

            <div className="categories-subcards" style={{cursor:"pointer"}} onClick={()=>setCategory("Pizza")}>
              <Center>
                <img src={pizza} />
              </Center>
              <h3 className="text-center" >Pizza</h3>
              <p className="text-center">Explore different flavours</p>
            </div>
            <div className="categories-subcards">
              <Center>
                <img src={chicken} />
              </Center>
              <h3 className="text-center">Chicken</h3>
              <p className="text-center">Explore different flavours</p>
            </div>
            <div className="categories-subcards">
              <Center>
                <img src={broast} />
              </Center>
              <h3 className="text-center">Broast</h3>
              <p className="text-center">Explore different flavours</p>
            </div>
            <div className="categories-subcards">
              <Center>
                <img src={burger} />
              </Center>
              <h3 className="text-center">Burger</h3>
              <p className="text-center">Explore different flavours</p>
            </div>
          </div>

          <div className="categories-cards categories-cards2">
            <div className="categories-subcards">
              <Center>
                <img src={cocktail} />
              </Center>
              <h3 className="text-center">Cocktail</h3>
              <p className="text-center">Explore different flavours</p>
            </div>
            <div className="categories-subcards">
              <Center>
                <img src={sandwich} />
              </Center>
              <h3 className="text-center">Sandwich</h3>
              <p className="text-center">Explore different flavours</p>
            </div>
            <div className="categories-subcards">
              <Center>
                <img src={pasta} />
              </Center>
              <h3 className="text-center">Pasta</h3>
              <p className="text-center">Explore different flavours</p>
            </div>
            <div className="categories-subcards">
              <Center>
                <img src={dessert} />
              </Center>
              <h3 className="text-center">Dessert</h3>
              <p className="text-center">Explore different flavours</p>
            </div>
          </div>
      </div>
    </>
  );
};

// export const itemName = socketConnect(category);
// export default Categories;
export default Categories;
