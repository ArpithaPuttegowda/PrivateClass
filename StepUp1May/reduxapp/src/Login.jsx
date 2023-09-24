import { useSelector } from "react-redux"

export const Login = () => {
    const storeData=useSelector(gs=>gs)
    const reg=storeData?.regRed?.regData;
    console.log(reg,"login page")
  return (<>
    <h1>Login</h1>

        {
            Object.entries(reg).map((arr,i)=>{
                return <p key={i+arr[0]}>
                    <b>{arr[0]}</b>::::<span>{arr[1]}</span>
                </p>
            })
        }
    </>
  )
}
