import React from "react";
import classes from "./Admin.module.css";
import Navbar from "../components/Navbar";
import filterIcon from "../img/filter-list-vector.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  avatar: string,
  name: string,
  userTag: string,
  mail: string,
  date: string,
  userRank: string,
  statusIcon: string,
  status: string
) {
  return {
    avatar,
    name,
    userTag,
    mail,
    date,
    userRank,
    statusIcon,
    status,
  };
}

const rows = [
  createData(
    "https://www.w3schools.com/howto/img_avatar.png",
    "Gilianna Williams",
    "@gianna1",
    "gianna.williams@gmail.com",
    "01/03/2022",
    "User",
    "https://cdn-icons-png.flaticon.com/512/101/101783.png",
    "Block"
  ),
  createData(
    "https://www.w3schools.com/howto/img_avatar.png",
    "John Patterson",
    "@John2",
    "john.patterson@gmail.com",
    "01/03/2022",
    "User",
    "https://cdn-icons-png.flaticon.com/512/101/101783.png",
    "Block"
  ),
  createData(
    "https://www.w3schools.com/howto/img_avatar.png",
    "William Collins",
    "@William3",
    "william.collins@gmail.com",
    "01/03/2022",
    "User",
    "https://cdn-icons-png.flaticon.com/512/101/101783.png",
    "Block"
  ),
  createData(
    "https://www.w3schools.com/howto/img_avatar.png",
    "Marwin Cassey",
    "@Marwin4",
    "marwin.cassey@gmail.com",
    "01/03/2022",
    "User",
    "https://cdn-icons-png.flaticon.com/512/101/101783.png",
    "Block"
  ),
  createData(
    "https://www.w3schools.com/howto/img_avatar.png",
    "Angie Alexander",
    "@Angie5",
    "angie.alexander@gmail.com",
    "01/03/2022",
    "User",
    "https://cdn-icons-png.flaticon.com/512/101/101783.png",
    "Block"
  ),
  createData(
    "https://www.w3schools.com/howto/img_avatar.png",
    "Someone Boosted",
    "@BoostedALot",
    "someone.boosted@gmail.com",
    "01/03/2022",
    "User",
    "https://cdn-icons-png.flaticon.com/512/101/101783.png",
    "Block"
  ),
  createData(
    "https://www.w3schools.com/howto/img_avatar.png",
    "Hardstuck 1200",
    "@RipRating",
    "hardstuck.1200@gmail.com",
    "01/03/2022",
    "User",
    "https://cdn-icons-png.flaticon.com/512/101/101783.png",
    "Block"
  ),
];

const Admin = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className={classes.admin}>
          <h3>
            <span> Good day</span>, Admin
          </h3>

          <div className={classes.filter}>
            <p>Filter</p>
            <img src={filterIcon} alt="filter-icon" />
          </div>
        </div>
        <div className={classes.table}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className={classes.body}
            >
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} className={classes.row}>
                    {/* component="th" scope="row" */}
                    <TableCell style={{}}>
                      <img
                        style={{
                          height: "35px",
                          width: "35px",
                          borderRadius: "50%",
                          marginRight: "12px",
                        }}
                        src={row.avatar}
                        alt=""
                      />
                      {row.name}
                    </TableCell>
                    <TableCell>{row.userTag}</TableCell>
                    <TableCell>{row.mail}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.userRank}</TableCell>
                    <TableCell>
                      <img
                        style={{
                          height: "18px",
                          borderRadius: "50%",
                          marginRight: "12px",
                        }}
                        src={row.statusIcon}
                        alt=""
                      />
                      {row.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Admin;
