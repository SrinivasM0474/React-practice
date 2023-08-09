import React, { useEffect, useState } from "react";

const Validation = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const submit = (e) => {
    e.preventDefault();
    if (checkValidation()) {
      console.log(data);
    }
  };

  const handleChange = (e) => {
    checkValidation();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const checkValidation = () => {
    let errors = {};
    if (!data.email) {
      errors.email = "please enter email";
    }
    if (!data.password) {
      errors.password = "please enter email";
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      return true;
    }
    return false;
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label>email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
          />
          <p> {errors && errors.email ? "email" : ""}</p>
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleChange}
          />
          <p>{errors && errors.password ? "password" : ""}</p>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Validation;

// import React, { useState } from "react";

// const Validation = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({
//     emailErr: "",
//     passwordErr: "",
//   });
//   const submit = (e) => {
//     e.preventDefault();
//     if (checkValidation()) {
//       console.log(email, password);
//     }
//   };

//   const checkValidation = () => {
//     let emailErr;
//     let passwordErr;
//     if (!email) {
//       emailErr = "please enter email";
//     }
//     if (!password) {
//       passwordErr = "please enter email";
//     }

//     if (emailErr || passwordErr) {
//       setErrors({ emailErr, passwordErr });
//       return false;
//     }
//     return true;
//   };
//   return (
//     <div>
//       <form onSubmit={submit}>
//         <div>
//           <label>email</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//           {errors.emailErr ? "email" : ""}
//         </div>
//         <div>
//           <label>password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
//           {errors.passwordErr ? "password" : ""}
//         </div>
//         <button>submit</button>
//       </form>
//     </div>
//   );
// };

// export default Validation;
