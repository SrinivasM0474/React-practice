import React, { useState } from "react";

const MultipleCheckbox = () => {
  const [userInfo, setUserInfo] = useState({
    languages: [],
  });
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { languages } = userInfo;
    console.log(`${value} is ${checked}`);
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
      });
    } else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
      });
    }
  };
  console.log(userInfo);
  return (
    <div>
      <input
        type="checkbox"
        name="Javascript"
        id="Javascript"
        value="Javascript"
        onChange={handleChange}
      />
      <label htmlFor="Javascript">Javascript</label>
      <br />
      <input
        type="checkbox"
        name="Python"
        id="Python"
        value="Python"
        onChange={handleChange}
      />
      <label htmlFor="languages">Python</label>
      <br />
      <input
        type="checkbox"
        name="Java"
        id="Java"
        value="Java"
        onChange={handleChange}
      />
      <label htmlFor="languages">Java</label>
      <br />
      <input
        type="checkbox"
        name="PHP"
        id="PHP"
        value="PHP"
        onChange={handleChange}
      />
      <label htmlFor="languages">PHP</label>
      <br />
      <input
        type="checkbox"
        name="C++"
        id="C++"
        value="C++"
        onChange={handleChange}
      />
      <label htmlFor="languages">C++</label>
      <br />
      <input
        type="checkbox"
        name="Typescript"
        id="Typescript"
        value="C"
        onChange={handleChange}
      />
      <label htmlFor="languages">Typescript</label>
      <br />
      <br />
      {userInfo.languages.map((lang, index) => {
        return <p key={index}>{lang}</p>;
      })}
    </div>
  );
};

export default MultipleCheckbox;
