import React, { useState } from "react";
import DayGrid from "../DayGrid/DayGrid";
import Navbar from "../Navbar/Navbar";

export default function Dashboard() {
  const [redirect, setredirect] = useState(null);

  return (
    <div>
      <Navbar />
      <DayGrid />
    </div>
  );
}
