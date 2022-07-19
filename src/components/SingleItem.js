import React, { useContext } from "react";
import { Cart } from "../pages/Cart";
import deal1 from "../assets/images/deal1.png";
import { FcEmptyTrash } from "react-icons/fc";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SingleItem = ({ id, description, title, img, price, quantity }) => {
  //   const { removeItem, increment, decrement } = useContext(CartContext);
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={deal1} alt="iamge" />
        </div>

        <div className="title">
          {/* <h2>{title}</h2> */}
          {/* <p>{description}</p> */}
          <h2>Burger</h2>
          <p>Big Mac</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus">-</i>
          <input type="text" placeholder="2" disabled />
          {/* <input type="text" placeholder={quantity} disabled /> */}
          <i className="fas fa-plus add">+</i>
        </div>

        <div className="price">
          <h3>345₹</h3>
        </div>

        <div className="remove-item">
          {/* <i
            className="fas fa-trash-alt remove"
            // onClick={() => removeItem(id)}
          ></i> */}
          <FcEmptyTrash/>
        </div>
      </div>

      <hr />
    </>
  );
};

export default SingleItem;
