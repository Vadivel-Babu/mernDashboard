import React, { useState } from "react";
import Select from "react-select";
import {
  Input,
  Button,
  Select as ChakaraSelect,
  Checkbox,
} from "@chakra-ui/react";

const Form = ({ type }) => {
  const [formData, setFormData] = useState({});
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value, // Handle checkbox separately
      fees: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...formData, students: selectedStudents };
    console.log("Form Data:", data);
    // Submit form data to backend (API call can be made here)
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold capitalize text-center my-5">
        Add {type}
      </h1>
      <form className="p-2 space-y-2 w-[350px]" onSubmit={handleSubmit}>
        <Input
          name={type === "class" ? "classname" : "name"}
          focusBorderColor="violet"
          placeholder={type === "class" ? "Enter Classname" : "Enter Name"}
          _placeholder={{ color: "violet" }}
          onChange={handleChange}
        />

        {type !== "class" && (
          <>
            <Input
              name="contact"
              type="mail"
              focusBorderColor="violet"
              placeholder="Enter Email"
              _placeholder={{ color: "violet" }}
              onChange={handleChange}
            />
            <ChakaraSelect
              placeholder="Gender"
              onChange={handleChange}
              focusBorderColor="pink.100"
              name="gender"
              defaultValue="male"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </ChakaraSelect>
            <Input
              name="D.O.B"
              placeholder="Select Date"
              onChange={handleChange}
              type="date"
              max="2018-12-31"
            />
          </>
        )}

        <ChakaraSelect
          placeholder="Select Class"
          onChange={handleChange}
          focusBorderColor="pink.100"
          name="class"
        >
          <option value="class1">class 1</option>
          <option value="class2">Option 2</option>
          <option value="option3">Option 3</option>
        </ChakaraSelect>
        {type === "student" && (
          <div>
            <Checkbox
              onChange={() => setChecked(!checked)}
              type="checkbox"
              colorScheme="red"
              value={checked}
              name="fees"
            >
              Fees Paid
            </Checkbox>
          </div>
        )}
        {type === "teacher" && (
          <Input
            name="salary"
            type="number"
            focusBorderColor="violet"
            placeholder="Enter Salary"
            _placeholder={{ color: "violet" }}
            onChange={handleChange}
          />
        )}
        {type === "class" && (
          <>
            <Input
              name="fees"
              type="number"
              focusBorderColor="violet"
              placeholder="Enter Fees"
              _placeholder={{ color: "violet" }}
              onChange={handleChange}
            />
            <Select
              closeMenuOnSelect={false}
              isMulti
              options={options}
              onChange={(student) => setSelectedStudents(student)}
              value={selectedStudents}
            />
          </>
        )}
        <Button
          isLoading={false}
          isDisabled={false}
          colorScheme="pink"
          className="capitalize"
          loadingText="Submiting..."
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
