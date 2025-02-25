import Student from "./Student.jsx";
function App() {
  return (
    <div>
      <Student name="Sabir Kazi" age={22} isStudent={false} />
      <Student name="Raees Jamadar" age={21} isStudent={true} />
      <Student name="" age={21} isStudent={true} />
    </div>
  );
}

export default App;
