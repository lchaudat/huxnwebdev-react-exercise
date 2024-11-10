const name = "John";
const Greetings = () => {
  return (
    <>
      <h1>Greetings {name}</h1>
      <p>{new Date().toString()}</p>
    </>
  );
};

export default Greetings;
