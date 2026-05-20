function Student(props) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>

      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p>

    </div>
  );
}

export default Student;