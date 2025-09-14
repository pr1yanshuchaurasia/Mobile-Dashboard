import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Header() {
  return (
    <div
      className="d-flex justify-content-between align-items-center p-3"
      style={{ backgroundColor: "#D6B4FC" }}
    >
      {/* Back Button */}
      <div
        className="d-flex align-items-center"
        style={{ cursor: "pointer" }}
        onClick={() => window.history.back()}
      >
        <FaArrowLeft size={18} color="black" style={{ marginRight: "6px" }} />
        <span className="text-dark">Back</span>
      </div>

      {/* Dashboard Title */}
      <h6 className="m-0 fw-bold">Dashboard</h6>

      {/* Auto-generated Profile Picture */}
      <img
        src="https://i.pravatar.cc/40"
        alt="Profile"
        className="rounded-circle"
        style={{ width: "35px", height: "35px", objectFit: "cover" }}
      />
    </div>
  );
}
