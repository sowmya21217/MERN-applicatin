import { Col, Nav, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Row className="mt-4"
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "#CD5C5C",
      }}
    >
      <Col className="md-4">
        <Nav.Link>About</Nav.Link>
        <Nav.Link>Story</Nav.Link>
        <Nav.Link>Career</Nav.Link>
      </Col>
      <Col>
        <Nav.Link>Career</Nav.Link>
      </Col>
      <Col>
        <Nav.Link>Career</Nav.Link>
      </Col>
      <Col>
        <Nav.Link>Tel: +32589013555</Nav.Link>
        <p>Rome</p>
        <Nav.Link>k.l.sowmya219@gmail.com</Nav.Link>
      </Col>
      <p style={{backgroundColor:"grey",  alignContent:"centre" }}>Web developer @sowmya kl</p>
    </Row>
  );
};
export default Footer;
