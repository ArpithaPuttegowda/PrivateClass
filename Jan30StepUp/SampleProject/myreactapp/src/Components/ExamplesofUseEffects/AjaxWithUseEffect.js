import React, {useEffect, useState} from "react";
import axios from "axios";

export const AjaxWithUseEffect = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholderp.typicode.com/posts")
      .then((res) => {
        console.log(res, "response");
        setMessage(res?.status);
      })
      .catch((err) => setMessage(err?.message));
  }, []);

  return <div>AjaxWithUseEffect::::{message}</div>;
};
