import axios from "axios";
import React, { useState, useMemo } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setSearchTerm(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(async () => {
        const res = await axios.get(
          `https://dummyjson.com/products/search?q=${e.target.value}`
        );
        const { products } = res.data;
        console.log(products);
        setData(products);
      }, 2000);
    };
  };

  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          value={searchTerm}
          onChange={optimizedDebounce}
        />
      </div>
      <>
        {data.map((item) => {
          const { brand, category, title } = item;
          return (
            <div key={item.id} style={{ display: "flex" }}>
              <p>{brand}</p>
              <p>{category}</p>
              <p>{title}</p>
            </div>
          );
        })}
      </>
    </>
  );
};

export default App;

// import axios from "axios";
// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const getData = setTimeout(() => {
//       axios
//         .get(`https://dummyjson.com/products/search?q=${searchTerm}`)
//         .then((response) => {
//           const { products } = response.data;
//           setData(products);
//         });
//     }, 2000);
//     return () => clearTimeout(getData);
//   }, [searchTerm]);

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           name="search"
//           id="search"
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//           }}
//         />
//       </div>
//       <>
//         {data.map((item) => {
//           const { brand, category, title } = item;
//           return (
//             <div key={item.id} style={{ display: "flex" }}>
//               <p>{brand}</p>
//               <p>{category}</p>
//               <p>{title}</p>
//             </div>
//           );
//         })}
//       </>
//     </>
//   );
// };

// export default App;
