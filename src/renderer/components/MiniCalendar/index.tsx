import Calendar from 'react-calendar';
import './Calendar.css';

type Value = Date | null;

interface $Props {
  date: Value;
  setDate: (v: Value) => void;
}

export default function MiniCalendar({ date, setDate }: $Props): JSX.Element {
  return (
    <div className="relative flex">
      <Calendar
        onChange={(v: any) => {
          console.log(v, typeof v);
          setDate(v);
        }}
        value={date}
      />
    </div>
  );
}
