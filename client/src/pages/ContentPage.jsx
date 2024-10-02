import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdCreate, MdCreateNewFolder } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
} from "@chakra-ui/react";
import useFetchAllTeachers from "../services/teacherApi/getAllTeachers";
import useFetchAllStudents from "../services/studentApi/getAllStudents";

const ContentPage = () => {
  const { role } = useParams();
  const { data: teacher, isLoading, isError, error } = useFetchAllTeachers();
  const {
    data: student,
    isLoading: studentLoading,
    isError: studentError,
    error: studenterror,
  } = useFetchAllStudents();
  const navigate = useNavigate();

  if (isLoading || studentLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full">
      <Button onClick={() => navigate(-1)} colorScheme="gray" className="m-2">
        Back
      </Button>
      <div className="w-max mx-auto my-2 flex gap-2 items-center">
        <h1 className="text-xl font-bold capitalize">{role}</h1>
        <Button
          leftIcon={<MdCreateNewFolder />}
          colorScheme="pink"
          onClick={() => navigate(`/${role}/create`)}
        >
          Add {role}
        </Button>
      </div>
      <TableContainer className="mx-auto lg:w-max">
        <Table variant="simple">
          <Thead>
            {role === "student" && (
              <Tr>
                <Th>Name</Th>
                <Th>D.O.B</Th>
                <Th>Fees Paid</Th>
                <Th>Action</Th>
              </Tr>
            )}
            {role === "teacher" && (
              <Tr>
                <Th>Name</Th>
                <Th>D.O.B</Th>
                <Th>salary</Th>
                <Th>Action</Th>
              </Tr>
            )}
          </Thead>
          <Tbody>
            {role === "teacher" &&
              teacher?.data?.teachers.map((teacher) => (
                <Tr key={teacher._id}>
                  <Td
                    onClick={() => navigate(`/${role}/${teacher._id}`)}
                    className="underline text-blue-500 capitalize cursor-pointer"
                  >
                    {teacher.name}
                  </Td>
                  <Td>{teacher.dob.split("T")[0]}</Td>
                  <Td>{teacher.salary}</Td>
                  <Td className="space-x-2">
                    <IconButton
                      colorScheme="yellow"
                      size={"sm"}
                      aria-label="Search database"
                      icon={<MdCreate />}
                    />
                    <IconButton
                      colorScheme="red"
                      aria-label="delete"
                      icon={<FaTrash />}
                      size={"sm"}
                    />
                  </Td>
                </Tr>
              ))}
            {role === "student" &&
              student?.data?.students.map((student) => (
                <Tr key={student._id}>
                  <Td
                    onClick={() => navigate(`/${role}/${student._id}`)}
                    className="underline text-blue-500 capitalize cursor-pointer"
                  >
                    {student.name}
                  </Td>
                  <Td>{student.dob.split("T")[0]}</Td>
                  <Td>{student.feesPaid ? "Yes" : "No"}</Td>
                  <Td className="space-x-2">
                    <IconButton
                      colorScheme="yellow"
                      size={"sm"}
                      aria-label="Search database"
                      icon={<MdCreate />}
                    />
                    <IconButton
                      colorScheme="red"
                      aria-label="delete"
                      icon={<FaTrash />}
                      size={"sm"}
                    />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContentPage;
