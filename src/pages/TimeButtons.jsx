export default function TimeButtons () {

      function TimeSlot({time}) {

    function handleClick() {
      console.log('clicked!');
    }

    return <button className="square" onClick={handleClick}>{time}</button>;
  }
  return (
    <div className="time-buttons">
      <ul>
        <li>
          <TimeSlot time="09:00" /> <button>Записать</button>
        </li>
          <li>
            <TimeSlot time="10:00" /> <button>Записать</button>
          </li>
          <li>
            <TimeSlot time="11:00" /> <button>Записать</button>
          </li>
          <li>
            <TimeSlot time="12:00" /> <button>Записать</button>
          </li>
          <li>
            <TimeSlot time="13:00" /> <button>Записать</button>
          </li>
          <li>
            <TimeSlot time="14:00" /> <button>Записать</button>
          </li>
          <li>
            <TimeSlot time="15:00" /> <button>Записать</button>
          </li>
          <li>
            <TimeSlot time="16:00" /> <button>Записать</button>
          </li>
          <li>
            <TimeSlot time="17:00" /> <button>Записать</button>
          </li>
          <li>
            <TimeSlot time="18:00" /> <button>Записать</button>
          </li>
          <li>
            <TimeSlot time="19:00" /> <button>Записать</button>
          </li>
          <li>
            <TimeSlot time="20:00" /> <button>Записать</button>
          </li>
          <li>
            <TimeSlot time="21:00" /> <button>Записать</button>
          </li>
        </ul>
      </div>
    </div>
  );
}