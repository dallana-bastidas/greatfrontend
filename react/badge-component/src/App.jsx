import "./App.css";

const artosColores = {
  gris: { background: "#f3f4f6", border: "#d1d5db", text: "#374151" },
  red: { background: "#fee2e2", border: "#fecaca", text: "#b91c1c" },
  yellow: { background: "#fef9c3", border: "#fef08a", text: "#a16207" },
  green: { background: "#dcfce7", border: "#bbf7d0", text: "#15803d" },
  blue: { background: "#dbeafe", border: "#bfdbfe", text: "#1d4ed8" },
};

const Tamaños = {
  pequeño: { padding: "2px 8px", fontSize: "12px" },
  mediano: { padding: "4px 16px", fontSize: "14px" },
  grande: { padding: "8px 24px", fontSize: "18px" },
};

const Tag = ({ variant, text, size }) => {
  const style = artosColores[variant] || artosColores.gris;
  const sizeStyle = Tamaños[size] || Tamaños.mediano;

  const tagStyle = {
    backgroundColor: style.background,
    border: `1px solid ${style.border}`,
    color: style.text,
    padding: sizeStyle.padding,
    fontSize: sizeStyle.fontSize,
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
  };

  return <span style={tagStyle}>{text}</span>;
};

function App() {
  const tagsData = [
    { id: 1, color: "gris", label: "Pequeño", size: "pequeño" },
    { id: 2, color: "gris", label: "Mediano", size: "mediano" },
    { id: 3, color: "gris", label: "Grande", size: "grande" },
    { id: 4, color: "red", label: "Pequeño", size: "pequeño" },
    { id: 5, color: "red", label: "Mediano", size: "mediano" },
    { id: 6, color: "red", label: "Grande", size: "grande" },
    { id: 7, color: "yellow", label: "Pequeño", size: "pequeño" },
    { id: 8, color: "yellow", label: "Mediano", size: "mediano" },
    { id: 9, color: "yellow", label: "Grande", size: "grande" },
    { id: 10, color: "green", label: "Pequeño", size: "pequeño" },
    { id: 11, color: "green", label: "Mediano", size: "mediano" },
    { id: 12, color: "green", label: "Grande", size: "grande" },
    { id: 13, color: "blue", label: "Pequeño", size: "pequeño" },
    { id: 14, color: "blue", label: "Mediano", size: "mediano" },
    { id: 15, color: "blue", label: "Grande", size: "grande" },
  ];

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, auto)",
    gap: "20px",
    padding: "40px",
    justifyContent: "start",
  };

  return (
    <div style={containerStyle}>
      {tagsData.map((tag) => (
        <Tag
          key={tag.id}
          variant={tag.color}
          text={tag.label}
          size={tag.size}
        />
      ))}
    </div>
  );
}

export default App;
