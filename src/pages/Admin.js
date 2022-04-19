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
import block from "../img/block.svg";
import unblock from "../img/unblock.svg";

function createData(
  avatar,
  name,
  userTag,
  mail,
  date,
  userRank,
  statusIcon,
  status
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
    "https://s3-alpha-sig.figma.com/img/dff3/9826/1c3f407d0c7ff3bc9e52078ef2bbe372?Expires=1651449600&Signature=IhmEZYXhtj9Tf8MREMOyF24c9g07qwVFwwK71hDStEVAiGhRAXMaR1L3F0EvwLyWN~e-1TrP1hgjLcjZOkzOHCgr9YY8s9EHuQqeLT~LIkx-yUfO-r4TQHBi~t0Dk7ejymmq1Mgbt2zvqLYUNvHiUtj9QPIDasvn-gnBehzRUy~ZuoyKtsfnTxihxhJrwhaCk5nFnnXjczFQcNhyIsE4oHn5EHpf0dQlye-LPnrA8~V~OIRhh6xP8gb~4MKf4MJEXXHEbRyQvmVhb9e5BfIAbepye1AGFw6GLqjpJr6UyNJxC73vfeaN-Brq-NnXAXLe4ea9dvAA2QAibULyave0VA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "Gilianna Williams",
    "@gianna1",
    "gianna.williams@gmail.com",
    "01/03/2022",
    "User",
    block,
    "Block"
  ),
  createData(
    "https://s3-alpha-sig.figma.com/img/c906/930b/f52910508444afee80dbf3f7a6543c7d?Expires=1651449600&Signature=dngX7M2vsMbw7KXVI-4qRToBl5p3Wrq4r-e-10Q6Ln5SESAZZ~8lx6tlars39V3CfbLUBRXVqWGcmeXyOIHQhPqZo~Crd4DLzIdRYfzBMEQypFK0x0pJQ5AlJXi-2UZdbJwiKBQOwPR2zf5-7LDqklGJlhZYTPBvl38zQlwulS~uwQk3VfNiWPrrbbYP2jPTgV7W28TdtsMo9HJx9YOsCgPratTcFoZxDJFg9dLalxv6VzBbJvgaH8KPpcwFe4XsBaBEfg9yGHdGh3bw0-dI59zkIBzUTEbMx1gr1qBzp3OgwHjAd82oWJEnnEQj4zTAPSeZALrmP9mosQParfCSHw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "John Patterson",
    "@John2",
    "john.patterson@gmail.com",
    "01/03/2022",
    "User",
    unblock,
    "Unblock"
  ),
  createData(
    "https://s3-alpha-sig.figma.com/img/e41d/0357/38e0691e00617cf01290f4b102b2e5fa?Expires=1651449600&Signature=QQh6jMjw4LiuAkpvJFtHtn0dirz1SLQ78xes~X-q8b5f1zXhtq4QAHOvTK5IHlE4eN7u55fGiQIBDtJzcwJPa0iVc0HpVyGqYME7Y9YSg~ynihn4ORVcOdN1J6DdRxqheLmRRBnl04lMlYsOx2a4lSLfnZiP4kz9UGJSeFZW4XCOoYlItqe1nvASLSb04Pu8DCAXH4Pl4kkNdNnaEjl~OdYqRUjneBkvvLbvkI7TVLdBU~rMzr8fV2thcMMl1bt7CJY5ZnOH3F-YzERKPvDIXq8csZ-UrRgBywZrniFFpAyvWm-LxQvI83lQ8v48YGe8kHSxApEq9ro2zjF4YdVgLA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "William Collins",
    "@William3",
    "william.collins@gmail.com",
    "01/03/2022",
    "Admin"
  ),
  createData(
    "https://s3-alpha-sig.figma.com/img/bf7f/a5fa/bcfc06bba06652c803fe9f1827176c1d?Expires=1651449600&Signature=FDT27TWuE7WXXBDRiJgzfI6TnBHmjdv8nhubwlQHO8pnV8NlIoqNPqmEoDCyxIBkbbrPEXJb~zdEGrLRa9h9TiCTjosHNUe7kaVruPVQzxm~PC6hRVz7j8jmzZFZFiOLVjw2PyptZddgpk9TABATKtG6xrjE-VuEfShZNtFPbraOjifF~hrb6UPI6pXzyOPKxA3r4kkdLSclOgSHIkXseUuaS0rm9DOrMhJxBeT00lBgzXs4Zm1UZ9XlDYZTNwc6uU0xffEhto9BdNn2VMF4~8aN~-Ys1amruKtKtvf6WCokOa6-jxRD~N1pgmNNoeNB3EBI5~9wFcOaGi48BOJECw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "Marwin Cassey",
    "@Marwin4",
    "marwin.cassey@gmail.com",
    "01/03/2022",
    "User",
    unblock,
    "Unblock"
  ),
  createData(
    "https://s3-alpha-sig.figma.com/img/c2a1/e6f4/fc91d9494fd35976671dec570d748343?Expires=1651449600&Signature=blWMQhmOO~J7-2JLKKyoN8w9yn1NL9q8VsNHHW1AR~ZF3qF~rF-~oOehRIM19agb0muRKWEeebfCEelo7IZQUv7sXXn640ZFQqPlsvDOSlv4jGA09tDYwRaMUD5ocqT7BAMY~TbJhiCevMidFZOytzp6DcRzLHfdyY76jw9sUOsW7Mim64xd5IFtEANcXB5QpHrY3v7Je-w9OLAlTBNgs60aLXX0pzvsKLeDph5XUFuowJ2B~m8iMCQ38okfFAbKWfZHZS4lFsL-eapoM2mdqg5TA4NDHpz0ou504tyB0EiSsL0d0sfOjcLkgKouGegpfZGPtfUgI7V0VqtKvWzNAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "Angie Alexander",
    "@Angie5",
    "angie.alexander@gmail.com",
    "01/03/2022",
    "User",
    block,
    "Block"
  ),
  createData(
    "https://s3-alpha-sig.figma.com/img/e41d/0357/38e0691e00617cf01290f4b102b2e5fa?Expires=1651449600&Signature=QQh6jMjw4LiuAkpvJFtHtn0dirz1SLQ78xes~X-q8b5f1zXhtq4QAHOvTK5IHlE4eN7u55fGiQIBDtJzcwJPa0iVc0HpVyGqYME7Y9YSg~ynihn4ORVcOdN1J6DdRxqheLmRRBnl04lMlYsOx2a4lSLfnZiP4kz9UGJSeFZW4XCOoYlItqe1nvASLSb04Pu8DCAXH4Pl4kkNdNnaEjl~OdYqRUjneBkvvLbvkI7TVLdBU~rMzr8fV2thcMMl1bt7CJY5ZnOH3F-YzERKPvDIXq8csZ-UrRgBywZrniFFpAyvWm-LxQvI83lQ8v48YGe8kHSxApEq9ro2zjF4YdVgLA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "William Collins",
    "@William3",
    "william.collins@gmail.com",
    "01/03/2022",
    "Admin"
  ),
  createData(
    "https://s3-alpha-sig.figma.com/img/bf7f/a5fa/bcfc06bba06652c803fe9f1827176c1d?Expires=1651449600&Signature=FDT27TWuE7WXXBDRiJgzfI6TnBHmjdv8nhubwlQHO8pnV8NlIoqNPqmEoDCyxIBkbbrPEXJb~zdEGrLRa9h9TiCTjosHNUe7kaVruPVQzxm~PC6hRVz7j8jmzZFZFiOLVjw2PyptZddgpk9TABATKtG6xrjE-VuEfShZNtFPbraOjifF~hrb6UPI6pXzyOPKxA3r4kkdLSclOgSHIkXseUuaS0rm9DOrMhJxBeT00lBgzXs4Zm1UZ9XlDYZTNwc6uU0xffEhto9BdNn2VMF4~8aN~-Ys1amruKtKtvf6WCokOa6-jxRD~N1pgmNNoeNB3EBI5~9wFcOaGi48BOJECw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "Marwin Cassey",
    "@Marwin4",
    "marwin.cassey@gmail.com",
    "01/03/2022",
    "User",
    unblock,
    "Unblock"
  ),
  createData(
    "https://s3-alpha-sig.figma.com/img/c2a1/e6f4/fc91d9494fd35976671dec570d748343?Expires=1651449600&Signature=blWMQhmOO~J7-2JLKKyoN8w9yn1NL9q8VsNHHW1AR~ZF3qF~rF-~oOehRIM19agb0muRKWEeebfCEelo7IZQUv7sXXn640ZFQqPlsvDOSlv4jGA09tDYwRaMUD5ocqT7BAMY~TbJhiCevMidFZOytzp6DcRzLHfdyY76jw9sUOsW7Mim64xd5IFtEANcXB5QpHrY3v7Je-w9OLAlTBNgs60aLXX0pzvsKLeDph5XUFuowJ2B~m8iMCQ38okfFAbKWfZHZS4lFsL-eapoM2mdqg5TA4NDHpz0ou504tyB0EiSsL0d0sfOjcLkgKouGegpfZGPtfUgI7V0VqtKvWzNAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "Angie Alexander",
    "@Angie5",
    "angie.alexander@gmail.com",
    "01/03/2022",
    "User",
    block,
    "Block"
  ),
  createData(
    "https://s3-alpha-sig.figma.com/img/e41d/0357/38e0691e00617cf01290f4b102b2e5fa?Expires=1651449600&Signature=QQh6jMjw4LiuAkpvJFtHtn0dirz1SLQ78xes~X-q8b5f1zXhtq4QAHOvTK5IHlE4eN7u55fGiQIBDtJzcwJPa0iVc0HpVyGqYME7Y9YSg~ynihn4ORVcOdN1J6DdRxqheLmRRBnl04lMlYsOx2a4lSLfnZiP4kz9UGJSeFZW4XCOoYlItqe1nvASLSb04Pu8DCAXH4Pl4kkNdNnaEjl~OdYqRUjneBkvvLbvkI7TVLdBU~rMzr8fV2thcMMl1bt7CJY5ZnOH3F-YzERKPvDIXq8csZ-UrRgBywZrniFFpAyvWm-LxQvI83lQ8v48YGe8kHSxApEq9ro2zjF4YdVgLA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "William Collins",
    "@William3",
    "william.collins@gmail.com",
    "01/03/2022",
    "Admin"
  ),
  createData(
    "https://s3-alpha-sig.figma.com/img/c2a1/e6f4/fc91d9494fd35976671dec570d748343?Expires=1651449600&Signature=blWMQhmOO~J7-2JLKKyoN8w9yn1NL9q8VsNHHW1AR~ZF3qF~rF-~oOehRIM19agb0muRKWEeebfCEelo7IZQUv7sXXn640ZFQqPlsvDOSlv4jGA09tDYwRaMUD5ocqT7BAMY~TbJhiCevMidFZOytzp6DcRzLHfdyY76jw9sUOsW7Mim64xd5IFtEANcXB5QpHrY3v7Je-w9OLAlTBNgs60aLXX0pzvsKLeDph5XUFuowJ2B~m8iMCQ38okfFAbKWfZHZS4lFsL-eapoM2mdqg5TA4NDHpz0ou504tyB0EiSsL0d0sfOjcLkgKouGegpfZGPtfUgI7V0VqtKvWzNAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "Angie Alexander",
    "@Angie5",
    "angie.alexander@gmail.com",
    "01/03/2022",
    "User",
    block,
    "Block"
  ),
  createData(
    "https://s3-alpha-sig.figma.com/img/e41d/0357/38e0691e00617cf01290f4b102b2e5fa?Expires=1651449600&Signature=QQh6jMjw4LiuAkpvJFtHtn0dirz1SLQ78xes~X-q8b5f1zXhtq4QAHOvTK5IHlE4eN7u55fGiQIBDtJzcwJPa0iVc0HpVyGqYME7Y9YSg~ynihn4ORVcOdN1J6DdRxqheLmRRBnl04lMlYsOx2a4lSLfnZiP4kz9UGJSeFZW4XCOoYlItqe1nvASLSb04Pu8DCAXH4Pl4kkNdNnaEjl~OdYqRUjneBkvvLbvkI7TVLdBU~rMzr8fV2thcMMl1bt7CJY5ZnOH3F-YzERKPvDIXq8csZ-UrRgBywZrniFFpAyvWm-LxQvI83lQ8v48YGe8kHSxApEq9ro2zjF4YdVgLA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "William Collins",
    "@William3",
    "william.collins@gmail.com",
    "01/03/2022",
    "Admin"
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
                    <TableCell style={{}}>
                      <div style={{ display: "flex", alignItems: "center" }}>
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
                      </div>
                    </TableCell>
                    <TableCell>{row.userTag}</TableCell>
                    <TableCell>{row.mail}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.userRank}</TableCell>
                    <TableCell>
                      <div style={{ display: "flex" }}>
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
                      </div>
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
