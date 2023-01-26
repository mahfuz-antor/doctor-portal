import { useContext } from "react";
import { useEffect, useState } from "react";
import { UserContext } from "../App";

const usePatient = () => {
  const getUser = useContext(UserContext);
  const patient = getUser?.email;
  return patient;
};

export default usePatient;
