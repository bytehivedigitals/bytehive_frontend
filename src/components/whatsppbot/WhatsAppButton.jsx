import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // ← Import WhatsApp icon

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919747913218?text=Hello%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        style={{
          backgroundColor: "#25D366",
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
