import axios from "axios";
import React, { useEffect, useState } from "react";
import PaginationComponent from "./PaginationComponent";
import { Button } from "@mui/material";
const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(100);

  const getData = async () => {
    const resp = await axios.get(
      `https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=10`
    );
    const { data } = resp.data;
    setData(data);
    // setTotalPages(resp.data.totalPages);
  };

  const pages = Array.from({ length: totalPages }, (_, index) => {
    return index + 1;
  });
  // console.log(pages);

  useEffect(() => {
    getData();
  }, [currentPage]);

  return (
    <div>
      <Button variant="contained">Contained</Button>

      {data.map((item) => {
        return <div key={item._id}>{item.name}</div>;
      })}
      <h4>Pagination</h4>

      <PaginationComponent
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Pagination;
