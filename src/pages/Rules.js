import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Layout.css";

const API_KEY = "73d1ee267dfb5f9b6c25f3681eb3875f"; // <-- Din OpenWeatherMap API-nyckel

const lakes = [
  {
    key: "Lugnet",
    name: "Lugnet",
    lat: 59.11778189893817,
    lon: 15.232421965429385,
    rules: [
      "Här kommer Regler finnas.",
      "Här kommer Regler finnas.",
      "Här kommer Regler finnas.",
      "Här kommer Regler finnas.",
      "Här kommer Regler finnas.",
    ],
    address: "Kommer snart, Kumla kommun"
  },
  {
    key: "Säbylundssjön",
    name: "Säbylundssjön",
    lat: 59.16460436303601,
    lon: 15.15388129762814,
    rules: [
      "Här kommer Regler finnas.",
      "Här kommer Regler finnas.",
      "Här kommer Regler finnas.",
      "Här kommer Regler finnas.",
      "Här kommer Regler finnas.",
    ],
    address: "Kommer snart, Kumla kommun"
  },
  {
    key: "Nolsjön",
    name: "Nolsjön",
    lat: 59.14149881510971,
    lon: 14.56810353864065,
    rules: [
      "Här kommer Regler finnas.",
      "Här kommer Regler finnas.",
      "Här kommer Regler finnas.",
      "Här kommer Regler finnas.",
      "Här kommer Regler finnas.",
    ],
    address: "Kommer snart, Kumla kommun"
  }
];

function Rules() {
  const location = useLocation();
  const [selectedLake, setSelectedLake] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lakeKey = params.get("lake");
    const lake = lakes.find(l => l.key === lakeKey);
    if (lake) {
      setSelectedLake(lake);
      fetchWeather(lake.lat, lake.lon);
    }
  }, [location]);

  const fetchWeather = async (lat, lon) => {
    setLoadingWeather(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sv&appid=${API_KEY}`
      );
      const data = await res.json();

      // Beräkna regnchans
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

  return (
    <div className="rules-container">
      <div className="outer-card">
        <h1>{selectedLake ? selectedLake.name : "Välj sjö"}</h1>

        {/** Gör inner-card till flex-container */}
        <div
          className="inner-card"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "flex-start"
          }}
        >
          {!selectedLake && (
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
              {lakes.map(lake => (
                <button
                  key={lake.key}
                  onClick={() => {
                    setSelectedLake(lake);
                    fetchWeather(lake.lat, lake.lon);
                  }}
                  style={{
                    padding: "10px 15px",
                    cursor: "pointer",
                    borderRadius: "6px",
                    border: "1px solid #0077cc",
                    backgroundColor: "#fff",
                    color: "#0077cc",
                    fontWeight: "600",
                    transition: "all 0.3s"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "#0077cc";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.color = "#0077cc";
                  }}
                >
                  {lake.name}
                </button>
              ))}
            </div>
          )}

          {selectedLake && (
            <>
              {/** Textinnehåll till höger */}
              <div style={{ flex: 1, minWidth: "340px" }}>
                <ul>
                  <h2 style={{ fontWeight: 700, marginBottom: "16px" }}>
                    Regler för {selectedLake.name}
                  </h2>
                  {selectedLake.rules.map((rule, index) => (
                    <li
                      key={index}
                      style={{
                        fontWeight: 600,
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        marginBottom: "8px"
                      }}
                    >
                      {rule}
                    </li>
                  ))}
                </ul>

                <p
                  style={{
                    fontWeight: 700,
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    marginTop: "12px"
                  }}
                >
                  Adress: {selectedLake.address}
                </p>
              </div>
              {/** Väderkort längst till vänster */}
              {weather && !loadingWeather && weather.weather && (
                <div className="weather-card" style={{ minWidth: "300px" }}>
                  <h2 style={{ marginBottom: "10px", color: "#51583C" }}>
                    🌤 Väder just nu för {selectedLake.name}
                  </h2>
                  <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt="väderikon"
                    style={{ width: "150px", height: "150px" }}
                  />
                  <p style={{ fontSize: "20x", fontWeight: 700, margin: "6px 0" }}>
                    {weather.weather[0].description}
                  </p>
                  <p style={{ fontSize: "16px", margin: "0" }}>Temp: {Math.round(weather.main.temp)}°C</p>
                  <p style={{ fontSize: "16px", margin: "0" }}>Vind: {Math.round(weather.wind.speed)} m/s</p>
                  <p style={{ fontSize: "16px", margin: "0" }}>Fuktighet: {weather.main.humidity}%</p>
                  <p style={{ fontSize: "16px", margin: "0" }}>🌧 Regn: {weather.rainChance}%</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Rules;
