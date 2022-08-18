import "./App.css";
import ProjectInput from "./ProjectInput";
import ProjectSelector from "./ProjectSelector";
import { useState } from "react";

function App() {
  const [inputInfo, setInputInfo] = useState([
    {
      name: "прибор",
      label: "прибор",
      placeholder: "Название прибора ...",
      type: "text",
    },
    {
      name: "номер",
      label: "Номер прибора",
      placeholder: "№ 1234",
      type: "text",
    },
    {
      name: "Дата поверки",
      label: "Дата поверки",
      placeholder: "№ 1234",
      type: "date",
    },
  ]);

  const [optionReq, setOptionReq] = useState([
    { key: "Тип прибора", optionName: "охрана здоровья" },
    { key: "Тип прибора", optionName: "диагностика помещения" },
    { key: "Тип прибора", optionName: "радиоактивные измерения" },
  ]);

  return (
    <div className="App">
      <form>
        {inputInfo.map((dynamicInput) => (
          <ProjectInput dynamicInput={dynamicInput} />
        ))}
        <ProjectSelector
          customSelector={optionReq}
          customSelectorLable={optionReq}
        />
      </form>
    </div>
  );
}

export default App;
