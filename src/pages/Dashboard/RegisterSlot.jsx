export default function RegisterSlot({ description }) {
  function handleClick() {
    console.log("clicked!"); // Проверка клика
    // Здесь можно добавить логику для регистрации на слот
  }

  return (
    <button className="square" onClick={handleClick}>
      {description}
    </button>
  );
}
