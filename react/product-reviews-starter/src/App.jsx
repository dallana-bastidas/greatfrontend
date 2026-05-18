import React from "react";

function Estrellas({ calificacion }) {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          style={{
            color: index < calificacion ? "#ffb400" : "#e0e0e0",
            marginRight: "2px",
            fontSize: "18px",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function BarraProgreso({ etiqueta, porcentaje, color }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "12px",
        fontSize: "14px",
        color: "#555",
      }}
    >
      <div style={{ width: "110px", textAlign: "left" }}>{etiqueta}</div>
      <div
        style={{
          flex: 1,
          backgroundColor: "#f0f0f0",
          borderRadius: "4px",
          height: "6px",
          margin: "0 12px",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: color,
            width: `${porcentaje}%`,
            height: "100%",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ width: "35px", textAlign: "right" }}>{porcentaje}%</div>
    </div>
  );
}

function VistaGeneral() {
  const distribucion = [
    { etiqueta: "Excellent", porcentaje: 39, color: "#10b981" },
    { etiqueta: "Good", porcentaje: 35, color: "#10b981" },
    { etiqueta: "Average", porcentaje: 19, color: "#f59e0b" },
    { etiqueta: "Below Average", porcentaje: 6, color: "#f59e0b" },
    { etiqueta: "Poor", porcentaje: 0, color: "#e5e7eb" },
  ];

  return (
    <div style={{ flex: "1", minWidth: "280px", paddingRight: "40px" }}>
      <h2 style={{ margin: "0 0 8px 0", fontSize: "22px", fontWeight: "bold" }}>
        Overall Rating
      </h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "24px",
        }}
      >
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>4.1</span>
        <Estrellas calificacion={4} />
        <span style={{ color: "#777", fontSize: "14px" }}>
          Based on 62 reviews
        </span>
      </div>

      <div style={{ marginBottom: "24px" }}>
        {distribucion.map((item) => (
          <BarraProgreso
            key={item.etiqueta}
            etiqueta={item.etiqueta}
            porcentaje={item.porcentaje}
            color={item.color}
          />
        ))}
      </div>

      <button
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "6px",
          padding: "10px 20px",
          fontSize: "14px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Write a review
      </button>
    </div>
  );
}

function TarjetaReview({ nombre, comentario, calificacion, fecha, iniciales }) {
  return (
    <div
      style={{
        marginBottom: "24px",
        paddingBottom: "24px",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            color: "#4b5563",
            marginRight: "12px",
            fontSize: "14px",
          }}
        >
          {iniciales}
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "between",
              alignItems: "center",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "15px" }}>
              {nombre}
            </span>
            <span style={{ color: "#999", fontSize: "12px" }}>{fecha}</span>
          </div>
          <div style={{ marginTop: "2px" }}>
            <Estrellas calificacion={calificacion} />
          </div>
        </div>
      </div>
      <p
        style={{
          margin: "8px 0 0 52px",
          color: "#444",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        {comentario}
      </p>
    </div>
  );
}

function App() {
  const datos = [
    {
      nombre: "Lilia McKnight",
      fecha: "May 26, 2024",
      comentario: "I've worn it everywhere, super durable and fashionable.",
      calificacion: 5,
      iniciales: "LM",
    },
    {
      nombre: "Natali Craig",
      fecha: "March 11, 2024",
      comentario:
        "I love the comfortable fit and stylish look of this hoodie. Perfect for chilly days out!",
      calificacion: 4,
      iniciales: "NC",
    },
    {
      nombre: "Kimberly Mastrangelo",
      fecha: "March 10, 2024",
      comentario:
        "Absolutely a must-have for anyone who enjoys outdoor activities. Keeps me warm and looks great!",
      calificacion: 5,
      iniciales: "KM",
    },
    {
      nombre: "Lorri Warf",
      fecha: "March 9, 2024",
      comentario:
        "Good hoodie but the color was a bit different from what I expected. Still, it's very practical.",
      calificacion: 3,
      iniciales: "LW",
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        maxWidth: "900px",
        margin: "40px auto",
        padding: "32px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <button
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          color: "#666",
        }}
      >
        ✕
      </button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        <VistaGeneral />
        <div style={{ flex: "1.5", minWidth: "320px" }}>
          {datos.map((testimonio) => (
            <TarjetaReview
              key={testimonio.nombre}
              nombre={testimonio.nombre}
              fecha={testimonio.fecha}
              comentario={testimonio.comentario}
              calificacion={testimonio.calificacion}
              iniciales={testimonio.iniciales}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
