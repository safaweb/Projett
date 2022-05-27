import "./User.scss"
import Sidebar from "../../OrganisateurComponents/sidebar/Sidebar"
import Navbar from "../../OrganisateurComponents/navbar/Navbar"
import DataUser from "../../OrganisateurComponents/datatable/DataUser"

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataUser />
      </div>
    </div>
  )
}

export default List