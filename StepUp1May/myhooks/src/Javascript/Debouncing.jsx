
export const Debouncing = () => {
    let id;
    const handleKeyUp=()=>{
        console.log("ajax called")
    }

    const handleDebouncing=()=>{
        clearTimeout(id)
      id=setTimeout(()=>{
            handleKeyUp()
        },2000)
    }
  return (
    <div>
        <input onKeyUp={handleDebouncing} placeholder="search"/>
    </div>
  )
}
