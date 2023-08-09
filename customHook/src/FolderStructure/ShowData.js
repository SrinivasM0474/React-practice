import React, { useState } from "react";
function ShowData(props) {
  console.log(props.data);
  const [show, setShow] = useState(false);
  const [dataIndex, setDataIndex] = useState();
  return (
    <div>
      {props.data.map((obj, index) => {
        return (
          <div key={index} style={{ marginLeft: "10px" }}>
            <div
              onClick={() => {
                setShow(!show);
                setDataIndex(index);
              }}
            >
              <p>{obj.name}</p>
            </div>
            {show && dataIndex === index && (
              <div style={{ marginLeft: "10px" }}>
                <ShowData data={obj.folders} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ShowData;
