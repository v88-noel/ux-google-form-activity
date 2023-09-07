import Select, { components } from "react-select";
import { useState } from "react";
import "./custom_dropdown.scss";

// const options = [
//     { value: "blue", label: "Blue" },
//     { value: "green", label: "Green" },
//     { value: "orange", label: "Orange" },
//     { value: "purple", label: "Purple" },
//   ];



const Control = ({ children, ...props }) => (
    <components.Control {...props}>
      Click to Select → {children}
    </components.Control>
);

function CustomDropdown() {

    const customStyles = {
        singleValue: (base) => ({
            ...base,
            padding: "5px 10px",
            borderRadius: 5,
            background: selected,
            color: "white",
            display: "flex",
            width: "100px",
        }),
    };

    const [selected, setSelected] = useState("");
    var handleChange = (selected) => {
        setSelected(selected.value);
    };

  return (
    <div className="custom_dropdown">
        <span className="question_type_icon"></span>
        <span className="carret_icon"></span>


        {/* <Select options={options} /> */}
        {/* 
        <Select
          onChange={handleChange}
          styles={customStyles}
          components={{ Control }}
          options={options}
        />   */}
    </div>
  );
}

export default CustomDropdown;
