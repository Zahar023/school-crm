import RegisterSlot from "./RegisterSlot";

export default function TimeButton({ title, description }) {
  return (
    <ul>
      <button>{title}</button>
      <RegisterSlot description={description} />
    </ul>
  );
}
