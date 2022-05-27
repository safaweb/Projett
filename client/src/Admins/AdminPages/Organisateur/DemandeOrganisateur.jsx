import React from "react";
import "./Organisateur.scss";
import Sidebar from "../../AdminComponents/sidebar/Sidebar";
import DataOrgaDemand from "../../AdminComponents/datatable/DataOrgaDemand";

function DemandeOrganisateur() {
  return (
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          {/* <Navbar /> */}
          <DataOrgaDemand />
        </div>
      </div>
  );
}

export default DemandeOrganisateur;
