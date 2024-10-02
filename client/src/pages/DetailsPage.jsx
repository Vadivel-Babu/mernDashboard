import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetStudent from "../services/studentApi/getStudent";
import { Button, Spinner } from "@chakra-ui/react";
import useGetTeacher from "../services/teacherApi/getTeacher";

const DetailsPage = () => {
  const { role, id } = useParams();
  const navigate = useNavigate();

  const {
    data: student,
    isLoading: studentLoading,
    isError,
    error: studenterror,
  } = role === "student" && useGetStudent(id);
  const {
    data: teacher,
    isLoading: teacherLoading,
    isError: teacherError,
    error: teachererror,
  } = role === "teacher" && useGetTeacher(id);

  if (teacherError) {
    console.log(teachererror);
  }

  if (isError) {
    console.log(studenterror);
  }

  return (
    <div className="w-full">
      <div className="flex justify-center">
        {studentLoading || teacherLoading ? (
          <Spinner
            size="xl"
            thickness="4px"
            className="mt-[150px]"
            color="red.500"
          />
        ) : (
          <div className="border-2 rounded-lg shadow-lg p-4 space-y-2 mt-10 min-w-[250px]">
            <h1 className="text-xl font-bold text-center mb-3 capitalize">
              {role}
            </h1>
            <p className="font-semibold capitalize">
              Name:{" "}
              {role === "student"
                ? student?.data?.student?.name
                : teacher?.data?.teacher?.name}
            </p>
            <p className="font-semibold capitalize">
              DOB:{" "}
              {role === "student"
                ? student?.data?.student?.dob.split("T")[0]
                : teacher?.data?.teacher?.dob.split("T")[0]}
            </p>
            <p className="font-semibold capitalize">
              Gender:{" "}
              {role === "student"
                ? student?.data?.student?.gender
                : teacher?.data?.teacher?.gender}
            </p>
            <p className="font-semibold capitalize">
              Contact:{" "}
              {role === "student"
                ? student?.data?.student?.contact
                : teacher?.data?.teacher?.contact}
            </p>
            {role === "student" ? (
              <p className="font-semibold capitalize">
                {student?.data?.student?.feesPaid
                  ? "Fees Paid: Yes"
                  : "Fees Paid: No"}
              </p>
            ) : (
              <p className="font-semibold capitalize">
                Salary: Rs.{teacher?.data?.teacher?.salary}
              </p>
            )}
            <div className="flex justify-between mt-10">
              <Button onClick={() => navigate(-1)} colorScheme="pink">
                Back
              </Button>
              <Button colorScheme="yellow">Edit</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
