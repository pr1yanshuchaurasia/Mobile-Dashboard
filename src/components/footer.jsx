import React from "react";
import { FaPaw } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="text-center my-4">
     
      <hr
        style={{
          borderColor: "lightgray",
          width: "80%",
          margin: "0 auto 16px auto",
        }}
      />

      {/* Spark + Paw + n0my */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          color: "darkgray",
          fontSize: "20px",
        }}
      >
        <span style={{ fontWeight: "bold" }}>Spark</span>
        <FaPaw style={{ color: "darkgray" }} />
        <span style={{ fontWeight: "normal" }}>nomy</span>
      </div>

      {/* Subtitle / paragraph */}
      <div
        style={{
          color: "darkgray",
          fontWeight: "400",
          marginTop: "2px",
          fontSize: "14px",
        }}
      >
        sparking the creator economy
      </div>
    </div>
  );
}
