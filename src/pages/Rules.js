import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Layout.css";

// JSON-filer för sjöar
import LugnetText from "../data/sjöar/LugnetText.json";
import SäbylundssjönText from "../data/sjöar/SäbylundssjönText.json";
import NolsjönText from "../data/sjöar/NolsjönText.json";

const API_KEY = "73d1ee267dfb5f9b6c25f3681eb3875f";

const lakes = [
  { key: "Lugnet", name: "Lugnet", lat: 59.1177, lon: 15.2324, text: LugnetText },
  { key: "Säbylundssjön", name: "Säbylundssjön", lat: 59.1646, lon: 15.1538, text: SäbylundssjönText },
  { key: "Nolsjön", name: "Nolsjön", lat: 59.1414, lon: 14.5681, text: NolsjönText }
];

function Rules() {
  const location = useLocation();
  const [selectedLake, setSelectedLake] = useState(null);
  const [lakeText, setLakeText] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Lyssna på fönsterstorlek
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hämta vald sjö från query string
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lakeKey = params.get("lake");
    const lake = lakes.find(l => l.key === lakeKey);
    if (lake) {
      setSelectedLake(lake);
      setLakeText(lake.text);
      fetchWeather(lake.lat, lake.lon);
    }
  }, [location]);

  // Hämta väder
  const fetchWeather = async (lat, lon) => {
    setLoadingWeather(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sv&appid=${API_KEY}`
      );
      const data = await res.json();

      let rainChance = 0;
      if (data.pop) {
        rainChance = Math.round(data.pop * 100);
      } else if (data.rain) {
        const rainVolume = data.rain["1h"] || data.rain["3h"] || 0;
        rainChance = rainVolume > 0 ? Math.min(100, Math.round(rainVolume * 20)) : 0;
      }

      setWeather({ ...data, rainChance });
    } catch (err) {
      console.error("Fel vid hämtning av väder:", err);
    } finally {
      setLoadingWeather(false);
    }
  };

  const renderText = () => {
    if (!lakeText) return <p>Laddar...</p>;
    return (
      <>
        <h2>{lakeText.title}</h2>
        <ul>
          {lakeText.paragraphs.map((p, i) => (
            <li key={i} style={{ fontWeight: 600 }}>{p}</li>
          ))}
        </ul>
        <p style={{ fontWeight: 700 }}>Adress: {lakeText.address}</p>
      </>
    );
  };

  const renderWeather = () => {
    if (!weather || loadingWeather) return null;
    return (
      <div
        className="weather-card"
        style={{ flex: "0 0 280px", minWidth: 0, boxSizing: "border-box" }}
      >
        <h2 style={{ marginBottom: "10px", color: "#51583C" }}>
          🌤 Väder just nu för {selectedLake.name}
        </h2>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="väderikon"
          style={{ width: "150px", height: "150px" }}
        />
        <p style={{ fontSize: "20px", fontWeight: 700, margin: "6px 0" }}>
          {weather.weather[0].description}
        </p>
        <p style={{ fontSize: "16px", margin: "0" }}>Temp: {Math.round(weather.main.temp)}°C</p>
        <p style={{ fontSize: "16px", margin: "0" }}>Vind: {Math.round(weather.wind.speed)} m/s</p>
        <p style={{ fontSize: "16px", margin: "0" }}>Fuktighet: {weather.main.humidity}%</p>
        <p style={{ fontSize: "16px", margin: "0" }}>🌧 Regn: {weather.rainChance}%</p>
      </div>
    );
  };

  return (
    <div className="rules-container">
      <div className="outer-card">
        <h1>{selectedLake ? selectedLake.name : "Välj sjö"}</h1>

        {isMobile && selectedLake && (
          <>
            {renderText()}
            {renderWeather()}
          </>
        )}

        {!isMobile && selectedLake && (
          <div
            className="inner-card"
            style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}
          >
            <div style={{ flex: "1 1 600px", minWidth: 0 }}>{renderText()}</div>
            {renderWeather()}
          </div>
        )}
      </div>
    </div>
  );
}

export default Rules;
