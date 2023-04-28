import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return <div>PageNotFound</div>;
};
