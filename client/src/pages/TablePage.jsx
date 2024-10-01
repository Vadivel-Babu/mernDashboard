import React from "react";
import { useParams } from "react-router-dom";

const TablePage = () => {
  const { role } = useParams();
  return <div>{role}</div>;
};

export default TablePage;
