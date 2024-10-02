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

const ContentPage = () => {
  const { role } = useParams();
  const { data: teacher, isLoading, isError, error } = useFetchAllTeachers();
  const navigate = useNavigate();
  console.log(teacher);

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
      <TableContainer className="mx-auto lg:w-[600px]">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>D.O.B</Th>
              <Th>Fees Paid</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td
                onClick={() => navigate(`/${role}/1`)}
                className="underline text-blue-500 capitalize cursor-pointer"
              >
                inches
              </Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
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
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContentPage;
