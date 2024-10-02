import React, { useState } from "react";
import Form from "../components/Form";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const AddPersonForm = () => {
  const params = useParams();
  const [selectedModel, setSelectedModel] = useState(
    params.role === "form" ? "class" : params.role
  );
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <Button onClick={() => navigate(-1)} colorScheme="gray" className="m-2">
        Back
      </Button>
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="border-2 border-primarycolor  rounded-xl overflow-hidden flex mb-2">
          <p
            onClick={() => setSelectedModel("class")}
            className={`p-3 ${
              selectedModel === "class"
                ? "bg-primarycolor text-white"
                : "bg-white text-black"
            } font-semibold text-xl cursor-pointer hover:bg-primarycolor hover:text-white`}
          >
            Class
          </p>
          <p
            onClick={() => setSelectedModel("student")}
            className={`p-3 ${
              selectedModel === "student"
                ? "bg-primarycolor text-white"
                : "bg-white text-black"
            } font-semibold text-xl cursor-pointer hover:bg-primarycolor hover:text-white`}
          >
            Student
          </p>
          <p
            onClick={() => setSelectedModel("teacher")}
            className={`p-3 ${
              selectedModel === "teacher"
                ? "bg-primarycolor text-white"
                : "bg-white text-black"
            } font-semibold text-xl cursor-pointer hover:bg-primarycolor hover:text-white`}
          >
            Teacher
          </p>
        </div>
        <Form type={selectedModel} />
      </div>
    </div>
  );
};

export default AddPersonForm;
