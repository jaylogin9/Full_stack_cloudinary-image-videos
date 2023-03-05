import React, { useState } from 'react';
import axios from 'axios';
import {Form, Col,Row ,Button, Toast, ToastHeader, ToastBody } from "react-bootstrap";

const UploadForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    photo: null,
    video: null
  });

  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.id]: event.target.files ? event.target.files[0] : event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Upload the data to the backend
    const formDataWithFiles = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataWithFiles.append(key, value);
    });

    try {
      const response = await axios.post('https://full-stack-cloudinary-image-videos-backend.vercel.app/register', formDataWithFiles);
      console.log(response.data);
      window.alert("Data uploaded successfully");

    } catch (error) {
      console.error(error);
      window.alert("Error:-  upload Unsuccessfully");

    }
  };

  return (
    <>
      <div className='container mt-3'>
        <br />
        <h2> Register the Product </h2>
        <br />
        <Form onSubmit={handleSubmit} enctype="multipart/form-data">

          <Form.Group as={Row} className="mb-3" >
            <Form.Label htmlFor="title" column sm={2} >Title:</Form.Label> <Col sm={10}>
              <Form.Control type="text" placeholder="Title" required id="title" value={formData.title} onChange={handleChange} /> </Col>
          </Form.Group>

          <Form.Group className='mb-3' as={Row} >
            <Form.Label htmlFor="description" column sm={2}>Description:</Form.Label> <Col sm={10}>
              <Form.Control size="sm" as="textarea" id="description" placeholder="Description" required value={formData.description} onChange={handleChange} /> </Col>
          </Form.Group>

          <Form.Group className='mb-3' as={Row} >
            <Form.Label htmlFor="photo" column sm={2}>Upload Thumbnail:</Form.Label>  <Col sm={10}>
              <Form.Control size="sm" type="file" id="photo" required accept=".jpg, .png" onChange={handleChange} /> </Col>
          </Form.Group>

          <Form.Group className='mb-3' as={Row} >
            <Form.Label htmlFor="video" column sm={2}>Upload Video:</Form.Label> <Col sm={10}>
              <Form.Control size="sm" type="file" id="video" required accept=".mpg, .avi, .mp4" onChange={handleChange} /> </Col>
          </Form.Group>

          <Form.Group className='mb-3' >
            <Button variant='primary' type="submit" onClick={toggleShow} >Upload</Button>

            <Toast show={show} className="d-inline-block m-1" bg="warning" onClose={toggleShow} style={{ position: 'fixed', top: 0, right: 0 }}>
              <ToastHeader>
                <strong className="me-auto">Info</strong> </ToastHeader>
              <ToastBody className={'warning' === 'Dark' && 'text-white'}>
                Please wait! Your data is being uploaded.
              </ToastBody>
            </Toast>
          </Form.Group>

        </Form>
      </div>
    </>
  );
};

export default UploadForm;
