
export const ColorList = () => {
    const colors=["red","Blue","yellow"]
  return (
    <div>
        <ol>
          {
            colors.map((clr,i)=>{
               return <li key={clr+i}>{clr}</li>
            })
          }
        </ol>
    </div>
  )
}
