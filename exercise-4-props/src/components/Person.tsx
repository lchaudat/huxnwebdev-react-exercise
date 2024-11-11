interface Persons {
  name: String;
  age: String;
}

const Person = function ({ name, age }: Persons) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
};

export default Person;
