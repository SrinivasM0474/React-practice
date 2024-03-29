import React from "react";
import TableRow from "./TableRow";

const StockList = (props) => {
  const tabRow = () => {
    if (props.data instanceof Array) {
      return props.data.map(function (object, i) {
        return <TableRow obj={object} key={i} />;
      });
    }
  };

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Stock Name</td>
            <td>Stock Price</td>
          </tr>
        </thead>
        <tbody>{tabRow()}</tbody>
      </table>
    </div>
  );
};

export default StockList;
