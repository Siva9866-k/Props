import Student from "./Student";

function App() {

  return (
    <div>
      <h1>Student Details</h1>

      <Student name="Anu" age={22} city="Hyderabad" />
      <Student name="Kiran" age={23} city="Bangalore" />
      <Student name="Meena" age={24} city="Chennai" />

    </div>
  );
}

export default App; 