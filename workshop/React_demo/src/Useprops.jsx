import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Useprops() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg" />
      <Card.Body>
        <Card.Title>Divyanka</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>AAAAAAA</ListGroup.Item>
        <ListGroup.Item>BBBBBBBBBBB</ListGroup.Item>
        <ListGroup.Item>CCCCCCCCCCCC</ListGroup.Item>
      </ListGroup>
      {/* <Card.Body>
        <Card.Link href="/Webdev.jsx">Card Link</Card.Link>
        <Card.Link href="#">React_Web</Card.Link>
      </Card.Body> */}
    </Card>
  );
}

export default Useprops;

