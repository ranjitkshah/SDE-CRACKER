import React, { useEffect, useContext, useState } from "react";
import DayGrid from "../DayGrid/DayGrid";
import Navbar from "../Navbar/Navbar";

export default function Dashboard() {
  const [redirect, setredirect] = useState(null);

  // for route reflecting
  // useEffect(() => {
  //   if (!user) {
  //     setredirect("/");
  //   }
  // }, [user]);

  // if (redirect) {
  //  return <Redirect to={redirect} />;
  // }
  return (
    <div>
      <Navbar />
      <DayGrid />
    </div>
  );
}
