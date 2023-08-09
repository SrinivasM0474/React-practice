import React from "react";

import Hoc from "./HOC";
import StockList from "./StockList";
import UsersList from "./UserList";

import styled from "styled-components";
import Pagination from "./Pagination";
import Validation from "./Validation";
import Debounce from "./Debounce";
import Timer from "./Timer";
import Task from "./Task/Task";
import ShowData from "./FolderStructure/ShowData";
import data from "./FolderStructure/data.json";

const StocksData = [
  {
    id: 1,
    name: "TCS",
  },
  {
    id: 2,
    name: "Infosys",
  },
  {
    id: 3,
    name: "Reliance",
  },
];
const UsersData = [
  {
    id: 1,
    name: "Krunal",
  },
  {
    id: 2,
    name: "Ankit",
  },
  {
    id: 3,
    name: "Rushabh",
  },
];

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Stocks = Hoc(StockList, StocksData);

const Users = Hoc(UsersList, UsersData);
const App = () => {
  return (
    <>
      {/* <Title>Hello World!</Title>
      <Users />
      <Stocks /> */}
      {/* <Pagination /> */}
      {/* <Validation /> */}
      {/* <Debounce /> */}
      {/* <Timer /> */}
      {/* <Task /> */}
      <ShowData data={data} />
    </>
  );
};
export default Hoc(App);
