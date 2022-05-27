import Sidebar from "../..//OrganisateurComponents/sidebar/Sidebar";
import Navbar from "../..//OrganisateurComponents/navbar/Navbar";
import "./home.scss";
import Widget from "../..//OrganisateurComponents/widget/Widget";
import Featured from "../..//OrganisateurComponents/featured/Featured";
import Chart from "../..//OrganisateurComponents/chart/Chart";
import Table from "../..//OrganisateurComponents/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        {/* <Navbar /> */}
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
