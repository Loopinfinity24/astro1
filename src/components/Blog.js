import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../scss/App.scss';
import '../scss/font.scss';
import '../scss/blog.scss';
// import Navbar from './Navbar';

import '../scss/about.scss';
import { Card, Button, Form, Col, InputGroup, FormControl, Modal, Breadcrumb } from 'react-bootstrap'
import { Link, NavLink, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import search from "../images/search.png";
import fb from "../images/facebook.png";
import wp from "../images/twitter.png";
import yb from "../images/linkedin.png";
import insta from "../images/google-plus.png";
import calendar from "../images/schedule.png";
import comment from "../images/comments.png";

function Blogs(props) {
  const url = "http://localhost:8080/api/consultation"
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const [oneposts, setOnePosts] = useState([])

  const [comments, setComments] = useState({
    comments: {
      name: "",
      email: "",
      comment: "",
      website: "",
      ans: ""
    }
  })

  function submitComment(e) {
    e.preventDefault();
    console.log(e)
    axios.post('http://localhost:8080/api/blog/' + props.match.params.id + '/comments', {
      "comments": {
        "name": comments.name,
        "email": comments.email,
        "comment": comments.comment,
        "website": comments.website,
        "ans": comments.ans
      }
    }
    )
      .then(res => {
        console.log(res.data)
        alert("Successfully inserted Comment");
      })
  }

  function handleComment(e) {
    const newData = { ...comments }
    newData[e.target.id] = e.target.value
    setComments(newData)
    console.log(newData)
  }

  const [consultent, setConsultent] = useState({
    birthHour: "",
    birthPlace: "",
    dob: "",
    option1: "",
    mobileNumber: "",
    email: "",
    name: ""
  })

  useEffect(() => {
    axios.get('http://localhost:8080/api/blog/' + props.match.params.id)

      .then(res => {
        console.log(res.data);
        setOnePosts(res.data.data);
        localStorage.removeItem('myData');
        localStorage.setItem('myData', res.data.data.comments.length);
      })
      .catch(err => {
        console.log(err);
      })
  })

  function submit(e) {
    e.preventDefault();
    console.log(e)
    axios.post(url, {
      "birthHour": consultent.birthHour,
      "birthPlace": consultent.birthPlace,
      "dob": consultent.dob,
      "option1": consultent.option1,
      "mobileNumber": consultent.mobileNumber,
      "email": consultent.email,
      "name": consultent.name
    }
    )
      .then(res => {
        console.log(res.data)
        alert("Successfully inserted");
        handleClose();
      })
  }

  function handle(e) {
    const newData = { ...consultent }
    newData[e.target.id] = e.target.value
    setConsultent(newData)
    console.log(newData)
  }

  const getDate = (date) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString([], options);
  }

  return (
    <>
      <Navbar />
      <div className="blogs">
        {/* {posts.map(post => { 
        return(
        <div> */}
        <div className="header_image">
          <Breadcrumb className="header_text">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/blog">
              Our Blogs
            </Breadcrumb.Item>
            <Breadcrumb.Item active style={{ color: 'white' }}>{oneposts.title} </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="blogContainer" id="blog">
          <div className="left">
            <InputGroup className="mb-2 mr-sm-2">
              <InputGroup.Prepend>
                <InputGroup.Text><img src={search} alt="search" style={{ width: 15, height: 15 }} /></InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="inlineFormInputGroupUsername2" placeholder="Search" />
            </InputGroup>
            <div className="category">
              <h5>CATEGORIES</h5>
              <p className="categoris">Gemstone (504)</p>
              <p className="categoris">Medical Astrology (79)</p>
              <p className="categoris">Astrology (345)</p>
              <p className="categoris">Rudraksha (69)</p>
              <p className="categoris">Horoscope (61)</p>
            </div>
            <Button variant="primary" onClick={handleShow} style={{ marginTop: '20%' }}>
              GET FREE CONSULTATION
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Get Free Consultent</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <Form onSubmit={(e) => submit(e)}>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Name" id="name" required value={consultent.name} onChange={(e) => handle(e)} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="email" required placeholder="Email" id="email" value={consultent.email} onChange={(e) => handle(e)} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="text" required placeholder="Mobile No." id="mobileNumber" value={consultent.mobileNumber} onChange={(e) => handle(e)} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="text" required placeholder="Gender" id="option1" value={consultent.option1} onChange={(e) => handle(e)} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="text" required placeholder="Date of Birth" id="dob" value={consultent.dob} onChange={(e) => handle(e)} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="text" required placeholder="Birth Place" id="birthPlace" value={consultent.birthPlace} onChange={(e) => handle(e)} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="text" required placeholder="Birth Hour" id="birthHour" value={consultent.birthHour} onChange={(e) => handle(e)} />
                  </Form.Group>

                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onSubmit={(e) => submit(e)} type="submit">
                    Submit
                  </Button>
                </Form>

              </Modal.Body>

            </Modal>



          </div>
          <div className="right">
            <img src={oneposts.image} alt="blog1" className="blog1" />
            <h1 className="blogHeading">{oneposts.title}</h1>
            <div className="social" style={{ justifyContent: 'flex-start', marginBottom: '2%', marginTop: '3%' }}>
              <div className="calendar">
                <img src={calendar} alt="calendar" />
                <Card.Text style={{ color: 'blue' }} className="blog_content">{getDate(oneposts.createdAt)}</Card.Text>
              </div>
              <div className="comment" style={{ marginLeft: '5%' }}>
                <img src={comment} alt="comment" />
                <Card.Text style={{ color: 'blue' }} className="blog_content">{localStorage.getItem('myData')}</Card.Text>
              </div>
            </div>
            <p>{oneposts.content}</p>
            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '10px' }}>
              <p>SHARE THIS ON:</p>
              <div className="icon">
                <a href="http://www.facebook.com/sharer.php?u=https://astrokapoor.com/saturn-retrograde-2021/&amp;i=https://astrokapoor.com/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-17-at-10.27.22-PM-2.jpeg&amp;t=Saturn Retrograde 2021"><img src={fb} alt="fb" /></a>
                <a href="https://twitter.com/intent/tweet?text=Saturn Retrograde 2021&amp;url=https://astrokapoor.com/saturn-retrograde-2021/"><img src={wp} alt="wp" /></a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://astrokapoor.com/saturn-retrograde-2021/&amp;title=Saturn Retrograde 2021"><img src={insta} alt="insta" /></a>
                <a href="https://plus.google.com/share?url=https://astrokapoor.com/saturn-retrograde-2021/"><img src={yb} alt="yb" /></a>

              </div>
            </div>
            <p>POSTED IN: Mundane Astrology</p>
            <h2 className="blogHeading">LEAVE A REPLY</h2>
            <Form onSubmit={(e) => submitComment(e)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="textarea" placeholder="Comment" id="comment" required value={comments.comment} onChange={(e) => handleComment(e)} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Row>
                  <Col>
                    <Form.Control type="text" placeholder="Name" id="name" required value={comments.name} onChange={(e) => handleComment(e)} />
                  </Col>
                  <Col>
                    <Form.Control type="email" placeholder="Email" id="email" required value={comments.email} onChange={(e) => handleComment(e)} />
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Website" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="blogHeading">18 − sixteen =</Form.Label>
                <Form.Control type="text" id="ans" required value={comments.ans} onChange={(e) => handleComment(e)} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Post Comment
              </Button>
            </Form>
          </div>
          <div className="middle">
            <div className="category" style={{ marginTop: '0%' }}>
              <h5>RECENT POSTS</h5>
              <p className="categoris">Gemstone (504)</p>
              <p className="categoris">Medical Astrology (79)</p>
              <p className="categoris">Astrology (345)</p>
              <p className="categoris">Rudraksha (69)</p>
              <p className="categoris">Horoscope (61)</p>
            </div>
            <div className="category">
              <h5>RECENT COMMENTS</h5>
              <p className="categoris">Gemstone (504)</p>
              <p className="categoris">Medical Astrology (79)</p>
              <p className="categoris">Astrology (345)</p>
              <p className="categoris">Rudraksha (69)</p>
              <p className="categoris">Horoscope (61)</p>
            </div>
          </div>
        </div>
        {/* </div>
    );
    })} */}
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
