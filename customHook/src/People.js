import React, { memo } from "react";

const People = ({ data, removePerson }) => {
  console.log(data);
  return (
    <div>
      {data.map((person, index) => {
        return (
          <div key={index} style={{ display: "flex" }}>
            <p>{person.name}</p>
            <button
              onClick={() => {
                removePerson(person.id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default memo(People);
