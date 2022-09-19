import { Button, Form } from "react-bootstrap";

const Login = () => {
    return(
        <Form className="h-100 col-10 text-center div-wrapper justify-content-center text-md-right mt-4 col-lg-12 col-centered">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h1 className="text-center">LOGIN </h1>
          <Form.Label>Email address</Form.Label>
          <Form.Control className="col-lg-12 col-centered" style ={{ maxWidth: '18rem'}} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control style ={{ maxWidth: '18rem'}}type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button   style={{ maxHeight : '2rem' }} variant="info" type="submit">
              Submit
            </Button>
        
      </Form>

    )
}
export default Login;