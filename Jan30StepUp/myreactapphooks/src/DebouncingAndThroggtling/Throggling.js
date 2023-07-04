import React, { useCallback, useEffect } from "react";

export const Throggling = () => {
  let _flag = true;
  let timer;

  const fnResize = () => {
    alert("called");
  };
  const fnThrottling = useCallback(() => {
    if (_flag) {
      fnResize();
      _flag = false;
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      fnResize();
    }, 300);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      fnThrottling();
    });
    // Cleanup function or component will unmount
    return () => {
      window.removeEventListener("resize", () => {
        fnThrottling();
      });
    };
  }, [fnThrottling]);

  return <div>Throggling</div>;
};
