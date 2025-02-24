import { useEffect, useState } from "react";
import axios from "axios";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const response = await axios.get("https://date.nager.at/api/v2/PublicHolidays/2024/US");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching calendar data:", error);
      }
    };

    fetchCalendarData();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Real-Time Calendar</h2>
      <ul className="list-disc pl-5">
        {events.map((event, index) => (
          <li key={index} className="mb-2">
            <strong>{event.date}</strong> - {event.localName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
