import "./Border.css";

export default function Border({ onClick }) {
  return (
    <div className="column" onClick={onClick}>
      <div className="border-bottom border-top" ></div>
      <div className="border-bottom"></div>
      <div className="border-bottom"></div>
      <div className="border-bottom"></div>
      <div className="border-bottom"></div>
      <div className="border-bottom"></div>
      <div className="border-bottom"></div>
      <div className="border-bottom"></div>
      <div className="border-bottom"></div>
      <div className="border-bottom"></div>
      <div className="border-bottom"></div>
      <div className="border-bottom"></div>
    </div>
  );
}
