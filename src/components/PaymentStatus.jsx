import React from "react";

const PaymentStatus = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem", 
    padding: "1rem",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "0 0 6px rgba(0,0,0,0.05)",
    padding: "1rem 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    minWidth: "190px",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    cursor: "pointer",

};

  const labelStyle = {
    fontWeight: 600,
    color: "#999999",
    fontSize: "1rem",
    marginBottom: "0.3rem",
    
  };

  const amountStyle = {
    fontWeight: "bold",
    color: "#9B6FD7",
    fontSize: "1.5rem",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <span style={labelStyle}>Payment Awaited</span>
        <span style={amountStyle}>$25,000</span>
      </div>
      <div style={cardStyle}>
        <span style={labelStyle}>Payment Overdue</span>
        <span style={amountStyle}>$25,000</span>
      </div>
    </div>
  );
};

export default PaymentStatus;
