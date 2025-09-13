import React from "react";

export default function TimePeriodSelector() {
  const baseButtonStyle = {
    backgroundColor: "#f1f1f1",
    borderRadius: "30px",
    padding: "10px 20px",
    fontWeight: "500",
    color: "#aaa",
    border: "none",
    minWidth: "20px",
    textAlign: "center",
    transition: "all 0.2s ease-in-out",
    whiteSpace: "nowrap",
  };

  const hoverStyle = `
    .time-btn:hover {
      background-color: #d6B4FC !important;
      color: #6a0dad !important;
    }
  `;

  return (
    <div
      className="mt-4 p-3"
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        boxShadow: "0 0 6px rgba(0,0,0,0.05)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <style>{hoverStyle}</style>

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <label
          className="fw-semibold"
          style={{ fontSize: "14px", color: "#aaa" }}
        >
          Time Period
        </label>
        <span style={{ fontSize: "12px", color: "#aaa" }}>
          dd:mm:yyyy - dd:mm:yyyy
        </span>
      </div>

      {/* Main Time Buttons in one row only */}
      <div className="d-flex flex-nowrap gap-2 mb-3">
        <button className="btn btn-sm time-btn" style={baseButtonStyle}>
          1Month
        </button>
        <button className="btn btn-sm time-btn" style={baseButtonStyle}>
          3Months
        </button>
        <button className="btn btn-sm time-btn" style={baseButtonStyle}>
          1Year <span role="img" aria-label="crown">👑</span>
        </button>
      </div>

      {/* Custom Button below the main row */}
      <div className="d-flex" style={{ marginLeft: "2px" }}>
        <button className="btn btn-sm time-btn d-flex align-items-center justify-content-center gap-2" style={baseButtonStyle}>
          <i className="bi bi-calendar"></i> Custom
        </button>
      </div>
    </div>
  );
}
