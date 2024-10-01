import React from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { role, id } = useParams();
  return (
    <div>
      {role}
      {id}
    </div>
  );
};

export default DetailsPage;
