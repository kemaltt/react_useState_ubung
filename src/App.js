import "./App.css";
import Counter from "./components/Counter";
import DayNightSchalter from "./components/DayNightSchalter";
import Faq from "./components/Faq";
import Faq2 from "./components/Faq2";
function App() {
  return (
    <div className="App">
      <Faq />
      <Faq2 />
      <Counter />
      <DayNightSchalter />
    </div>
  );
}

export default App;
