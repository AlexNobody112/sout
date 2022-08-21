import "./App.css";
import ProjectInput from "./Components/ProjectInput/ProjectInput";
import ProjectSelector from "./Components/ProjectSelector/ProjectSelector";
import ProjectTextArea from "./Components/ProjectTextArea/ProjectTextArea";
import { useState } from "react";
import ProjectButton from "./Components/ProjectButton/ProjectButton";
import { useEffect } from "react";

function App() {
  const formInputData = [
    // {
    //   name: "device",
    //   type: "text",
    //   placeholder: "device",
    //   label: "прибор",
    //   key: 1,
    // },
    // {
    //   name: "number",
    //   type: "number",
    //   placeholder: "device number",
    //   label: "номер прибора",
    //   key: 2,
    // },
    // {
    //   name: "dateStart",
    //   type: "date",
    //   placeholder: "",
    //   label: "Дата",
    //   key: 3,
    // },
    // {
    //   name: "dateEnd",
    //   type: "date",
    //   placeholder: "",
    //   label: "Дата",
    //   key: 4,
    // },
    {
      type: "select",
      label: "Тип прибора",
      key: 5,
      name: "selectType",
      optionName: [
        "Медицинское измерительное оборудование",
        "Трассопоисковое оборудование",
        "Приборы для анализа вентиляционных систем",
      ],
    },
  ];
  const selectDevice = {
    type: "select",
    label: "Тип прибора",
    key: 5,
    name: "selectType",
    optionName: [
      "Медицинское измерительное оборудование",
      "Трассопоисковое оборудование",
      "Приборы для анализа вентиляционных систем",
    ],
  };

  const [inputNewdata, setInputNewData] = useState([
    { device: "", number: "" },
  ]);

  const getFromInput = (index, event) => {
    let data = [...inputNewdata];
    data[index][event.target.name] = event.target.value;
    setInputNewData(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(inputNewdata);
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        {inputNewdata.map((input, index) => (
          <div key={index}>
            {/* <ProjectInput
              dynamicInput={formInputData}
              getData={getFromInput}
              indexGlobal={index}
            /> */}
            <ProjectSelector customSelector={formInputData} />
          </div>
        ))}

        <button onClick={submit}>Добавить</button>
      </form>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);

//   const handleFormChange = (index, event) => {
//     event.preventDefault();
//     let data = [...inputFields];
//     data[index][event.target.name] = event.target.value;
//     setInputFields(data);
//     // console.log(data);
//   };

//   const addFields = () => {
//     let newfield = { name: "", age: "" };

//     setInputFields([...inputFields, newfield]);
//   };

//   const submit = (e) => {
//     e.preventDefault();
//     console.log(inputFields);
//   };
//   return (
//     <div className="App">
//       <form onSubmit={submit}>
//         {inputFields.map((input, index) => {
//           return (
//             <div key={index}>
//               <input
//                 name="name"
//                 placeholder="Name"
//                 value={input.name}
//                 onChange={(event) => handleFormChange(index, event)}
//               />
//               <input
//                 name="age"
//                 placeholder="Age"
//                 value={input.age}
//                 onChange={(event) => handleFormChange(index, event)}
//               />
//             </div>
//           );
//         })}
//         <button onClick={addFields}>addFields</button>
//         <button onClick={submit}>submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
