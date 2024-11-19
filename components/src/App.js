import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";

function App() {
  return (
    <>
      <h1 className="text-5xl text-blue-500 font-bold text-center mt-[10%]">
        Components in React JS
      </h1>
      <ClassComponent />
      <FunctionComponent />
    </>
  );
}

export default App;
