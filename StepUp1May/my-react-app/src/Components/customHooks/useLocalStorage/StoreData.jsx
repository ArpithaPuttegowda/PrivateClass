import useLocalStorage from "./useLocalStorage";

function StoreData() {
const [storedValue,setStoredValue,removeValue]=useLocalStorage("name","Jerry")
  return (
    <div>
      <p>Hello, {storedValue}!</p>
      <button onClick={() => setStoredValue("Sachin")}>
        Set Name to Sachin
      </button>
      <button onClick={() => removeValue()}>Remove Name</button>
    </div>
  );
}

export default StoreData;
