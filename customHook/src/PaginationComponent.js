import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const PaginationComponent = (props) => {
  const prevPage = () => {
    let newPage = props.currentPage - 1;
    if (newPage < 1) {
      newPage = props.totalPages;
    }
    props.setCurrentPage(newPage);
  };
  const nextPage = () => {
    let newPage = props.currentPage + 1;
    if (newPage > props.totalPages) {
      newPage = 1;
    }
    props.setCurrentPage(newPage);
  };

  // const changePage = (page) => {
  //   props.setCurrentPage(page);
  // };

  const handleChange = (event, value) => {
    // console.log(event, value);
    props.setCurrentPage(value);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* <button onClick={prevPage}>Prev</button> */}
      <Button size="small" variant="contained" onClick={prevPage}>
        Prev
      </Button>

      <Stack spacing={2}>
        <Pagination
          count={props.totalPages}
          page={props.currentPage}
          onChange={handleChange}
        />
      </Stack>

      {/* {props.pages.map((page, index) => {
        return (
          <button
            key={index}
            className={props.currentPage === page ? "btn highlight" : "btn"}
            onClick={() => {
              changePage(page);
            }}
          >
            {page}
          </button>
        );
      })} */}
      {/* <button onClick={nextPage}>Next</button> */}
      <Button size="small" variant="contained" onClick={nextPage}>
        Next
      </Button>
    </div>
  );
};

export default PaginationComponent;
