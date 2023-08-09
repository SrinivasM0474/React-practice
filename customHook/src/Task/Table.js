import React, { useState, useEffect } from "react";

function Table(props) {
  const [tableData, setTableData] = useState([]);
  console.log(props);

  useEffect(() => {
    setFilteredData(props.data);
  }, []);

  useEffect(() => {
    if (props.value) {
      const dataT = tableData.filter((item) =>
        item.name.toLowerCase().includes(props.value.toLowerCase())
      );
      setTableData(dataT);
    } else {
      setFilteredData(props.data);
    }
  }, [props.value]);

  const setFilteredData = (data) => {
    const stockedData = data.filter((item) => {
      return item.stocked === true;
    });
    setTableData(stockedData);
  };

  return (
    <div>
      {tableData.map((item, index) => {
        return <p key={index}>{item.name}</p>;
      })}
    </div>
  );
}

export default React.memo(Table);
