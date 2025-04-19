import "./App.css";
import Counter from "./components/counter/Counter";
import SignUp from "./components/signup/SignUp";
import InputCounter from "./components/counter/InputCounter";

const App = () => {
  return (
    <>
      <Counter />
      <SignUp />
      {/* <InputCounter /> */}
    </>
  );
};

export default App;
