"use client"
import FullCalendar from '../../components/fullcalendar';

export default function Home() {
  return (
    <div>
      <FullCalendar initialView='dayGridMonth' />
      <FullCalendar initialView='timeGridWeek' />
    </div>
  );
}
