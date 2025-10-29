import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import eventsData from "../assets/events.json";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  const handleEventClick = (info) => {
    setSelectedEvent({
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
      description: info.event.extendedProps.description || "",
    });
  };

  const closePopup = () => setSelectedEvent(null);

  const formatDateTime = (date) => {
    const d = new Date(date);
    const hours = d.getHours().toString().padStart(2, "0");
    const minutes = d.getMinutes().toString().padStart(2, "0");
    return `${d.toLocaleDateString()} ${hours}:${minutes}`;
  };

  const upcomingEvents = events
    .filter((e) => new Date(e.start) >= new Date())
    .sort((a, b) => new Date(a.start) - new Date(b.start))
    .slice(0, 5);

  return (
    <div className="rules-container">
    <div className="outer-card">
      <h1>Kommande Evenemang</h1>
          <div className="inner-card">
        <div className="calendar-container" style={{ width: "100%" }}>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventClick={handleEventClick}
            headerToolbar={{
              left: "prev,title,next",
              center: "",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            eventTimeFormat={{
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }}
            height="auto"
            contentHeight="auto"
            aspectRatio={1.35} // gör kalendern bredare
          />
        </div>
      </div>

      {selectedEvent && (
        <div className="lightbox" onClick={closePopup}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedEvent.title}</h3>
            <p>
              <strong>Start:</strong> {formatDateTime(selectedEvent.start)}
            </p>
            {selectedEvent.end && (
              <p>
                <strong>Slut:</strong> {formatDateTime(selectedEvent.end)}
              </p>
            )}
            {selectedEvent.description && <p>{selectedEvent.description}</p>}
            <button onClick={closePopup}>Stäng</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Events;
