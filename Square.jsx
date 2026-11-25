import "./Square.css";

export default function Square({ value, onSquareClick, isWinning }) {
  return (
    <button
      className={`square ${value ? `square-${value.toLowerCase()}` : ""} ${isWinning ? "winning" : ""}`}
      onClick={onSquareClick}
      aria-label={value ? `Casa ${value}` : "Casa vazia"}
      type="button"
    >
      {value}
    </button>
  );
}
