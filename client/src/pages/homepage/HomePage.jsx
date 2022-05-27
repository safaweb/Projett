import React from "react";
import "./homeP.scss";
import Navbar from "../../components/Navbar/NavbarH";
import SidebarH from "../../components/Sidebar/SidebarH";
import Events from "../../UserComponents/events/Events";
import { useState } from "react";
import Filter from "../../UserComponents/filter/Filter";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getevent } from "../../redux/Action/EventAction";

function Home() {
  // const [events, setevents] = useState("")
  // const [Eventname, setEventname] = useState("");
  // const handlechange = (e) => {
  //   setEventname(e.target.value);
  // }

  return (
    <div className="homeP">
      {/* <div className="chartP ">
        <SidebarH />
      </div> */}
      <div className="homeContainerP">
        <Navbar />
        {/* <Filter Eventname={Eventname} handlechange={handlechange} /> */}
        <Events />
      </div>
    </div>
  );
}

// Events={events.filter((Event) => Event.Eventname.toUpperCase().includes(Eventname.toUpperCase()))}

export default Home;
