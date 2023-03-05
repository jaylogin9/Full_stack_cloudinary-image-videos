import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Col, Row ,Button } from "react-bootstrap";



const Home = () => {
  const [images, setData] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get("https://full-stack-cloudinary-image-videos-backend.vercel.app/home");
        setData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error.message);
      window.alert(error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

return (
    <>
    <br/>
      <h2> Product List</h2>
      <div className=" d-flex justify-content-between align-item-center mt-6">
     <Row>
        {images.map((image,i) => {
          return (
            <Col>
            <Card style={{ width: "18rem", heigh: "22rem" }} key={i} className="m-5 border-200 shadow"> 
              <Card.Img  src={image.thumbnail}  />
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Link to={`/display/${image._id}`} item={i}>
                  <Button variant="success" > Video</Button>
                </Link>
              </Card.Body>
            </Card>
            </Col>
            )
          })}
        </Row>
        
      </div>
  </>
  ); 
};

export default Home;
