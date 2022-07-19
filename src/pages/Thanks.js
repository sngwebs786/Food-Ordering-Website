import { Center } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

const Thanks = () => {
  return (
    <div>
      <Navbar trans="false" />
      <div
        class="jumbotron text-center"
        style={{ marginTop: "250px", marginBottom: "250px" }}
      >
        <h1 class="display-3">Thank You!</h1>
        <p class="lead" style={{ marginTop: "30px" }}>
          <strong>Please check your email</strong> for further instructions on
          how to complete your account setup.
        </p>
        <hr style={{ marginTop: "30px" }} />
        <p style={{ marginTop: "30px" }}>
          Having trouble? <a href="">Contact us</a>
        </p>
        <Center>
          <p class="lead w-18" style={{ marginTop: "10px" }}>
            <a
              style={{
                height: "50px",
                borderRadius: "30px",
                backgroundColor: "#f7c305",
                color: "#fff",
                paddingTop: "10px",
              }}
              class="btn"
              role="button"
            >
              Continue to homepage
            </a>
          </p>
        </Center>
      </div>
    </div>
  );
};

export default Thanks;
