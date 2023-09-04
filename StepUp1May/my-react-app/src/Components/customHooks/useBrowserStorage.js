import { useState } from "react";

function useStorage(storageType) {
    const [val,setVal]=useState("")
  const storage = storageType === 'local' ? localStorage : sessionStorage;

  const setItem = (key, value) => {
    storage.setItem(key, JSON.stringify(value));
  };

  const getItem = (key) => {
    const item = storage.getItem(key);
    setVal(item ? JSON.parse(item) : null)
    return item ? JSON.parse(item) : null;
  };

  const removeItem = (key) => {
    storage.removeItem(key);
  };

  return { setItem, getItem, removeItem ,val};
}

export default useStorage;
