import "./App.css";
import ProjectInput from "./Components/ProjectInput/ProjectInput";
import ProjectSelector from "./Components/ProjectSelector/ProjectSelector";
import ProjectTextArea from "./Components/ProjectTextArea/ProjectTextArea";
import { useState } from "react";
import ProjectButton from "./Components/ProjectButton/ProjectButton";

function App() {
  const formInputData = [
    {
      name: "прибор",
      label: "прибор",
      placeholder: "Название прибора ...",
      type: "text",
      value: "device",
    },
    {
      name: "номер",
      label: "Номер прибора",
      placeholder: "№ 1234",
      type: "number",
      value: 1,
    },
    {
      name: "Дата поверки",
      label: "Дата поверки",
      placeholder: "№ 1234",
      type: "date",
      value: "date",
    },
  ];

  const textAreaData = {
    label: ["Комментарий"],
    id: [1],
  };

  const selectDevice = {
    selectlabel: ["Тип прибора"],
    key: ["type of device"],
    optionName: [
      "Медицинское измерительное оборудование",
      "Трассопоисковое оборудование",
      "Приборы для анализа вентиляционных систем",
    ],
  };

  const selectStatus = {
    selectlabel: ["Статус"],
    key: ["type of status"],
    optionName: ["На складе", "В ремонте", "В работе"],
  };

  const buttonData = {
    label: ["сохранить"],
  };

  const [inputInfo, setInputInfo] = useState(formInputData);
  const [optionReq, setOptionReq] = useState(selectDevice);
  const [optionStat, setOptionStat] = useState(selectStatus);
  const [textAreaInfo, setTextAreaInfo] = useState(textAreaData);
  const [buttonInfo, setButtonInfo] = useState(buttonData);

  const [test, setTest] = useState("");

  const sendForm = (e) => {
    e.preventDefault();
    console.log("first");

    const localData = { test };

    console.log(localData);
  };

  return (
    <div className="App">
      <form onSubmit={sendForm}>
        {inputInfo.map((dynamicInput) => (
          <ProjectInput
            onChange={(e) => setTest(e.target.value)}
            dynamicInput={dynamicInput}
          />
        ))}
        <ProjectSelector customSelector={optionReq} />
        <ProjectSelector customSelector={optionStat} />
        <ProjectTextArea textAreaData={textAreaInfo} />
        <ProjectButton onClick={sendForm} buttonData={buttonInfo} />
      </form>
    </div>
  );
}

export default App;
