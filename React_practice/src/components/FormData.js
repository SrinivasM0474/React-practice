import React from "react";

function FormData(props) {
  return (
    <div>
      <div>
        {props.formData &&
          props.formData.length > 0 &&
          props.formData.map((data, index) => {
            return (
              <div key={index}>
                <span>{data.name}</span>
                <span>{data.email}</span>
                <span>{data.mobile}</span>
                <span>{data.address}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default FormData;
