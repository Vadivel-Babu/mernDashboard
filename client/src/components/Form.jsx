import React, { useState } from "react";
import Select from "react-select";
import {
  Input,
  Button,
  Select as ChakaraSelect,
  Checkbox,
} from "@chakra-ui/react";
import useFetchAllTeachers from "../services/teacherApi/getAllTeachers";
import useFetchAllStudents from "../services/studentApi/getAllStudents";
import useFetchAllClasses from "../services/classApi/getAllClasses";
import useCreateTeacher from "../services/teacherApi/createTeacher";

const Form = ({ type }) => {
  const [formData, setFormData] = useState({});
  const { data: teacher, isLoading: teacherLoading } = useFetchAllTeachers();
  const { data: student, isLoading: studentLoading } = useFetchAllStudents();
  const { data: classes, isLoading: classLoading } = useFetchAllClasses();
  const { mutate: Teacher, isPending: creatingTeacher } = useCreateTeacher();
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Handle checkbox separately
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "class") {
      const data = { ...formData, students: selectedStudents };
      console.log("Class Data:", data);
    } else if (type === "teacher") {
      const data = { ...formData };
      Teacher(data);
      console.log("teacher Data:", data);
    } else if (type === "student") {
      const data = { ...formData, feesPaid: checked };
      console.log("teacher Data:", data);
    }
    // Submit form data to backend (API call can be made here)
  };
  const options = student?.data?.students.map((student) => {
    return { value: student._id, label: student.name };
  });

  return (
    <div className="shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold capitalize text-center my-5">
        Add {type}
      </h1>
      <form className="p-2 space-y-2 w-[350px]" onSubmit={handleSubmit}>
        <Input
          name={"name"}
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
              onChange={handleChange}
              focusBorderColor="pink.100"
              name="gender"
            >
              <option value="male" selected>
                Male
              </option>
              <option value="female">Female</option>
            </ChakaraSelect>
            <Input
              name="dob"
              placeholder="Select Date"
              onChange={handleChange}
              type="date"
              max="2018-12-31"
            />
          </>
        )}

        {type === "class" && (
          <>
            <ChakaraSelect
              placeholder="Select Teacher"
              onChange={handleChange}
              focusBorderColor="pink.100"
              name="name"
            >
              {teacher?.data?.teachers?.map((teacher) => (
                <option key={teacher._id} value={teacher._id}>
                  {teacher.name}
                </option>
              ))}
            </ChakaraSelect>
            <Input
              name="studentFees"
              type="number"
              focusBorderColor="violet"
              placeholder="Enter Fees"
              _placeholder={{ color: "violet" }}
              onChange={handleChange}
            />
            <Input
              name="year"
              type="text"
              focusBorderColor="violet"
              placeholder="Enter year"
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
        {type === "student" && (
          <div>
            <ChakaraSelect
              placeholder="select class"
              onChange={handleChange}
              focusBorderColor="pink.100"
              name="class"
            >
              {classes?.data?.classes.map((cl) => (
                <option key={cl._id} value={cl._id}>
                  {cl.name}
                </option>
              ))}
            </ChakaraSelect>
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
          <>
            <ChakaraSelect
              placeholder="select class"
              onChange={handleChange}
              focusBorderColor="pink.100"
              name="assignedClass"
            >
              {classes?.data?.classes.map((cl) => (
                <option key={cl._id} value={cl._id}>
                  {cl.name}
                </option>
              ))}
            </ChakaraSelect>
            <Input
              name="salary"
              type="number"
              focusBorderColor="violet"
              placeholder="Enter Salary"
              _placeholder={{ color: "violet" }}
              onChange={handleChange}
            />
          </>
        )}

        <Button
          isLoading={creatingTeacher}
          isDisabled={creatingTeacher}
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
