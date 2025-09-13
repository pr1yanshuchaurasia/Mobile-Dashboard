import React, { useState } from "react";
import { Modal, Button, Form, Badge } from "react-bootstrap";

export default function CreateInvoice({ onAddInvoice }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    client: "",
    amount: "",
    date: "",
    status: "Unpaid", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.client || !formData.amount || !formData.date) {
      alert("Please fill all fields!");
      return;
    }
    onAddInvoice(formData);
    setShow(false);
    setFormData({ client: "", amount: "", date: "", status: "Unpaid" });
  };

  // Status colors
  const statusColors = {
    Paid: "success",
    Unpaid: "secondary",
    "Partially Paid": "warning",
    Overdue: "dark",
    Draft: "light",
  };

  return (
    <div
      className="text-center p-4 rounded-4 my-3 shadow-sm"
      style={{
        backgroundColor: "#f5f5f5",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Circle with + icon */}
      <div
        className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
        style={{
          width: "60px",
          height: "60px",
          fontSize: "48px",
          fontWeight: "bold",
          background: "white",
          border: "5px solid transparent",
          backgroundImage:
            "linear-gradient(white, white),  linear-gradient(90deg, #DD2A7B, #9747FF, #334CCA)",
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box",
          color: "rgb(138, 43, 226)",
          cursor: "pointer",
        }}
        onClick={() => setShow(true)}
      >
        +
      </div>

      {/* Gradient Heading */}
      <h4
        className="fw-bold mb-3"
        style={{
          background:
            "linear-gradient(90deg, rgb(138, 43, 226), rgb(186, 85, 211))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "26px",
          letterSpacing: "0.5px",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Create New Invoice
      </h4>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "15px",
          maxWidth: "280px",
          margin: "0 auto",
          color: "#aaa",
        }}
      >
        Start by creating and sending new invoice
      </p>

      {/* Bootstrap Modal for Form */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Client Name */}
            <Form.Group className="mb-3">
              <Form.Label>Client Name</Form.Label>
              <Form.Control
                type="text"
                name="client"
                value={formData.client}
                onChange={handleChange}
                placeholder="Enter client name"
              />
            </Form.Group>

            {/* Amount */}
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
              />
            </Form.Group>

            {/* Date */}
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Status with colored badge */}
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Paid">Paid ✅</option>
                <option value="Unpaid">Unpaid ❌</option>
                <option value="Partially Paid">Partially Paid ⚠️</option>
                <option value="Overdue">Overdue ⏰</option>
                <option value="Draft">Draft 📝</option> {/* added draft */}
              </Form.Select>
              <div className="mt-2">
                <Badge bg={statusColors[formData.status]}>
                  {formData.status}
                </Badge>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button
            style={{ backgroundColor: "rgb(138, 43, 226)", border: "none" }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
