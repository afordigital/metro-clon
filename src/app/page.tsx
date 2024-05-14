"use client";

import { useState } from "react";
import { Nav } from "./components/Nav";

export default function Home() {
  const [schedule, setSchedule] = useState(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const schedule = {
      origen: "182",
      destino: "69",
      dia: "2024-05-13",
      horaDesde: "00:00",
      horaHasta: "23:59",
    };
    fetch("/api/metro", {
      method: "POST",
      body: JSON.stringify(schedule),
    })
      .then((response) => response.json())
      .then(setSchedule);
  };

  console.log(schedule);

  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-between">
      <header className="w-full">
        <Nav></Nav>
      </header>

      {/* <form onSubmit={handleSubmit}>
        <button>Submit</button>
      </form> */}
    </main>
  );
}
