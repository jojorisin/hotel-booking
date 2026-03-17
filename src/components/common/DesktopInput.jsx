import React from "react";
import { Row, Col } from "react-bootstrap";
import "./DesktopInput.css";

const DesktopInput = React.forwardRef(({ value, onClick }, ref) => {
  const [arrival, departure] = value.split(" - ");

  return (
    <div
      className="bg-white desktop-input-div rounded p-3 shadow-sm"
      onClick={onClick}
      ref={ref}
      style={{ cursor: "pointer" }}>
      <Row className="align-items-center g-0">
        <Col xs="auto" className=" border-end">
          <i className="bi bi-calendar3 text-muted"></i>
        </Col>

        <Col className="px-3 border-end">
          <div className="text-secondary small">Checkin</div>
          <div className="text-muted fw-bold text-nowrap">{arrival || "Välj datum"}</div>
        </Col>

        <Col className="px-3">
          <div className="text-secondary small">Checkout</div>
          <div className="text-muted fw-bold text-nowrap">{departure || "Välj datum"}</div>
        </Col>
      </Row>
    </div>
  );
});

export default DesktopInput;
