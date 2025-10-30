import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import eventsData from "../data/nyheter/events.json";
import "../Layout.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    setEvents(eventsData);

    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  return (
    <div className="rules-container">
      <div className="outer-card">
        <h1>Kommande Evenemang</h1>

        {/* Mobil: rendera kalender i fullbredd */}
        <div className={isMobile ? "" : "inner-card"}>
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
            buttonText={{
              dayGridMonth: "Månad",
              timeGridWeek: "Vecka",
              timeGridDay: "Dag",
            }}
            eventTimeFormat={{ hour: "2-digit", minute: "2-digit", hour12: false }}
            height="auto"
            contentHeight="auto"
            aspectRatio={isMobile ? 0.7 : 1.35}
            dayCellDidMount={(info) => {
              const dateStr = info.date.toISOString().split("T")[0];
              if (events.some((e) => e.start.startsWith(dateStr))) {
                info.el.style.backgroundColor = "#dff0d8";
                info.el.style.borderRadius = "6px";
              }
            }}
          />
        </div>

        {/* Popup för event */}
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
