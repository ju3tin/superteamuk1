import Calendar from '@fullcalendar/react';
import dayGrid from '@fullcalendar/daygrid';
import timeGrid from '@fullcalendar/timegrid';

import interactionPlugin, { Draggable, DropArg } from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { EventSourceInput } from '@fullcalendar/core/index.js'

export default function FullCalendar(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from an API or any other source
    const fetchedEvents = fetchEvents(); // Implement fetchEvents function
    setEvents(fetchedEvents);
  }, []);

  const fetchEvents = () => {
    // Implement logic to fetch events
    return [
      {
        title: 'Event 1',
        start: '2024-06-24T10:00:00',
        end: '2024-06-24T15:00:00'
      },
      {
        title: 'Event 2',
        start: '2022-01-05T08:30:00',
        end: '2022-01-07T12:45:00'
      }
    ];
  };

  return (
    <Calendar plugins={[dayGrid, timeGrid]} events={events} {...props} />
  );
}
