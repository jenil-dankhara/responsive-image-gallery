import { makeStyles } from "@material-ui/styles";
import { Container, Box } from "@mui/system";
import React from "react";
import image1 from "../assets/images/1.jpeg";
import image2 from "../assets/images/2.jpeg";
import image3 from "../assets/images/3.jpeg";
import image4 from "../assets/images/4.jpeg";
import image5 from "../assets/images/5.jpeg";
import image6 from "../assets/images/6.jpeg";
import image7 from "../assets/images/7.jpeg";
import image8 from "../assets/images/8.jpeg";
import image9 from "../assets/images/9.jpeg";
import image10 from "../assets/images/10.jpeg";

const Home = () => {
  return (
    <div>
      {/* <Container> */}
      <div className="container">
        <div className="image_container">
          <img src={image1} alt="img" />
          <img src={image2} alt="img" />
          <img src={image3} alt="img" />
          <img src={image4} alt="img" />
          <img src={image5} alt="img" />
          <img src={image6} alt="img" />
          <img src={image7} alt="img" />
          <img src={image8} alt="img" />
          <img src={image9} alt="img" />
          <img src={image10} alt="img" />
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default Home;
