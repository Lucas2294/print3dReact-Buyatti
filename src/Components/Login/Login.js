import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Login.css';
import Icono from './usuario.png';
import User from './user.png';
import Form from 'react-bootstrap/Form';

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" style={{ padding: 'opx' }} onClick={handleShow} className="ms-2">
                <img src={Icono} alt="" width="20px" color="#fff" />
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props} className='offCan'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fs-4 fw-bold">Ingresa con tu cuenta.</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='bodyCanva'>
                    <img src={User} alt='' width='45%' />
                    <Form className='formCanva'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="dark" type="submit" className='buttonCanva'>
                            Submit
                        </Button>
                    </Form>
                    <a href=''>Registrate aquí.</a>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Example() {
    return (
        <>
            {['end'].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} />
            ))}
        </>
    );
}



export default Example