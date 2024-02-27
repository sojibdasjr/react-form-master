import "./App.css";
import HookForm from "./components/HookForm";
import RefForm from "./components/RefForm";
import SimpleForm from "./components/SimpleForm";
import StatefullForm from "./components/StatefullForm";

function App() {
  return (
    <>
      <h3>Register form</h3>
      {/* <SimpleForm /> */}
      {/* <StatefullForm /> */}
      {/* <RefForm /> */}
      <HookForm />
    </>
  );
}

export default App;
