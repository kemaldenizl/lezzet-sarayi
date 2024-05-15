import {Button, Offcanvas } from "react-bootstrap"
import { useState } from 'react';
import { BsList } from "react-icons/bs";
import "../../../styles/admin/manageBar/manageBar.css"
import ManageBarContent from "./manageBarContent/ManageBarContent";

function ManageBar({admin = true}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow} className="d-lg-none manageBarButton">
                <BsList />
            </Button>
            <Offcanvas style={{ maxWidth: '50vw' }} show={show} onHide={handleClose} responsive="lg" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Yönetici Paneli</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="manageBarContentContainer">
                    <ManageBarContent admin ={admin} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
  )
}

export default ManageBar