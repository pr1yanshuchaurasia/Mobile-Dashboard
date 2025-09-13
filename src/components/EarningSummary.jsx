import React from "react";

const EarningSummary = () => {
  return (
    <div
      className="mt-4 p-3"
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        boxShadow: "0 0 6px rgba(0,0,0,0.05)",
        fontFamily: "'Poppins', sans-serif",
        cursor: "pointer",
      }}
    >
      <div className="card-body text-start">
        <p
          className="mb-1"
          style={{ fontWeight: "600", color: "#999999"  }}
        >
          Total Earnings
        </p>
        <h3
          className="fw-bold"
          style={{ color: "#9B6FD7" }}
        >
          $1,25,000
        </h3>
      </div>
    </div>
  );
};

export default EarningSummary;
