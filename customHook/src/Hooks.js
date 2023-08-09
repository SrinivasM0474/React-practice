import { useCallback, useMemo, useState } from "react";
import { data } from "./data";
import People from "./People";
const Hooks = () => {
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(data);

  const slowFunction = () => {
    let value = 0;
    for (let i = 0; i <= 1000000000; i++) {
      value += i;
    }
    return value;
  };

  const number = useMemo(() => slowFunction(), []);
  console.log(number);

  const removePerson = useCallback(
    (id) => {
      console.log(id);
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  return (
    <>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        {count}
      </button>
      <People data={people} removePerson={removePerson} />
    </>
  );
};

export default Hooks;
