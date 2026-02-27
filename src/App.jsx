import { Suspense } from "react";
import "./App.css";
import Countrys from "./components/Countrys";

const Datapromise = fetch("https://openapi.programming-hero.com/api/all").then(
  (res) => res.json()
);

function App() {
  return (
    <>
      <Suspense>
        <Countrys datapromise={Datapromise}></Countrys>
      </Suspense>
    </>
  );
}

export default App;