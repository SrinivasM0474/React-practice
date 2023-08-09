import React from "react";
import TableRow from "./TableRow";

const UsersList = (props) => {
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
            <td>ID</td>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>{tabRow()}</tbody>
      </table>
    </div>
  );
};

export default UsersList;
