import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { userColumns } from "./datatablesource";
import { GetMyEvents } from "../../redux/Action/EventAction";

const Datatable = () => {
  const { Loading, event, error } = useSelector((state) => state.Event_Select);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  useEffect(() => {
    dispatch(GetMyEvents(token));
  }, []);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/Organisateur/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">modifie</div>
            </Link>
            <div
              className="deleteButton"
              //  onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div className="datatableTitle">
        Add New Events
        <Link to="new" className="link">
          Add New
        </Link>
      </div>
      {Loading ? (
        <h1 className="text"> Loading ... </h1>
      ) : (
        <div className="datatable">
          <div className="datatableTitle">
            mes Events
            <Link to="new" className="link">
              New
            </Link>
          </div>
          <DataGrid
            className="datagrid"
            rows={event}
            getRowId={(row) => row._id}
            pageSize={9}
            columns={userColumns.concat(actionColumn)}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      )}
    </div>
  );
};

export default Datatable;
