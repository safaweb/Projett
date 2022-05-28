// import Sidebar from "../..//OrganisateurComponents/sidebar/Sidebar";
// import Navbar from "../../OrganisateurComponents/navbar/Navbar";
import "./home.scss";
import Widget from "../../OrganisateurComponents/widget/Widget";
import Featured from "../../OrganisateurComponents/featured/Featured";
import Chart from "../../OrganisateurComponents/chart/Chart";
import Table from "../../OrganisateurComponents/table/Table";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Navbar from "../../OrganisteurComponents/navbar/Navbar";
import { getOrganStatus, getuserinfo } from "../../../redux/Action/UserAction";
import SidebarOrginisateur from "../../OrganisateurComponents/sidebar/SidebarOrginisateur";
import { logoutUser } from "../../../redux/Action/EventAction";
import { useNavigate } from 'react-router-dom';


const HomeOrg = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { LOADING, isActivate, err } = useSelector(
    (state) => state.OrganisateurReducer
  );
  const { Loading, users, error } = useSelector((state) => state.User_Select);
  const logout = () => {
    dispatch(logoutUser());
    navigate("/login");
    //  <Navigate to="/" />;
  };
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      dispatch(getOrganStatus(token));
      dispatch(getuserinfo(token));
    }
  }, []);
  return (
    <div>
      {LOADING ? (
        <p3>Loading</p3>
      ) : (
        <div>
          {isActivate ? (
            <div>
              {/* <Navbar /> */}
              <SidebarOrginisateur />

              <div className="home">
                {/* <Sidebar /> */}
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
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>
              Bonjour {users.Username}
              <br />
              Votre compte n'est pas activée
              <br />
              Vouz pouvez contacte l'adminisatration de site
              <br />
              <button onClick={logout}>déconnexion</button>

            </div>
          )}
        </div>
      )
      }
    </div>
      );
};

      export default HomeOrg;
