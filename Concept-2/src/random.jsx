function Random() {
  let no = Math.random() * 100;
  return <h1>Random number is: {Math.round(no)}</h1>;
}
export default Random;
