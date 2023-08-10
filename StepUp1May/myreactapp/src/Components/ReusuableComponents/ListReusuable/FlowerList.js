
export const FlowerList = () => {
    const flowers=["Jasmin","Rose","Lilly"]
  return (
    <div>
        <ol>
          {
            flowers.map((flower,i)=>{
               return <li key={flower+i}>{flower}</li>
            })
          }
        </ol>
    </div>
  )
}
