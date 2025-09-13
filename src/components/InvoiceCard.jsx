import React from "react";
import { Badge } from "react-bootstrap";

export default function InvoiceCard({ client, amount, date, status }) {
  const statusColors = {
    Paid: "success",
    Unpaid: "danger",
    "Partially Paid": "warning",
    Overdue: "dark",
    Draft: "secondary",
  };

  return (
    <div className="d-flex justify-content-between align-items-center py-2">
      {/* Left side */}
      <div>
        <h6
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            marginBottom: "6px",
          }}
        >
          {client}
        </h6>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "14px",
            fontWeight: 500,
            color: "gray",
          }}
        >
          <span>{amount}</span>
          <span>Due : {date}</span>
        </div>
      </div>

      {/* Right side - Status */}
      <div className="text-end">
        <Badge
          bg={statusColors[status]}
          className="mt-1"
          style={{
            padding: "10px 20px",
            borderRadius: "25px",
            fontSize: "14px",
          }}
        >
          {status}
        </Badge>
      </div>
    </div>
  );
}
