import useLocalStorage from "./useLocalStorage";

function StoreLocation() {
    const [storedValue,setStoredValue,removeValue]=useLocalStorage("name","Hyderabad")

  return (
    <div>
      <p>Hello, {storedValue}!</p>
      <button onClick={() => setStoredValue("Pune")}>
        Set Loc to Pune
      </button>
      <button onClick={() => removeValue()}>Remove Location</button>
    </div>
  );
}

export default StoreLocation;
