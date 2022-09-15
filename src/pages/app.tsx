import React from "react";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function app() {
  const [item, setItem] = useState("");
  return (
    <div className="w-screen h-screen">
      <Sidebar setItem={setItem} />
    </div>
  );
}
