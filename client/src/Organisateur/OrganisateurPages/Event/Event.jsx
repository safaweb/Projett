import "./Event.scss"
import Sidebar from "../../OrganisateurComponents/sidebar/SidebarOrginisateur"
// import Navbar from "../../OrganisteurComponents/navbar/Navbar"
import DataEvent from "../../OrganisateurComponents/datatable/DataEvent"

const MyEvents = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        {/* <Navbar/> */}
        <DataEvent/>
      </div>
    </div>
  )
}

export default MyEvents