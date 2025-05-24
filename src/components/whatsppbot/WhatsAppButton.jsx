import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // ← Import WhatsApp icon

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919072803219?text=Hello%2C%20I'm%20interested%20in%20learning%20more%20about%20ByteHive's%20services.%20Could%20you%20please%20share%20more%20details%20on%20your%20offerings%3F"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        style={{
          backgroundColor: "#2b40f5",
          color: "white",
          padding: "12px 20px",
          borderRadius: "9999px",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          zIndex: 1000,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <FaWhatsapp size={24} />
        Chat
      </button>
    </a>
  );
};

export default WhatsAppButton;
