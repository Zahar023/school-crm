export default function RegisterSlot({ description }) {
  function handleClick() {
    console.log("clicked!"); //Я брал инфу с документации где по очередно делали крестики-нолики, поэтому эта функция здесь нахер не нужна
  }

  return (
    <button className="square" onClick={handleClick}>
      {description}
    </button>
  );
}
