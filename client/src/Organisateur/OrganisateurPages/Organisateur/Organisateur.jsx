import "./Organisateur.scss"
import Sidebar from "../../OrganisateurComponents/sidebar/Sidebar"
import Navbar from "../../OrganisateurComponents/navbar/Navbar"
import DataOrganisater from "../../OrganisateurComponents/datatable/DataOrganisater"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataOrganisater/>
      </div>
    </div>
  )
}

export default List