import { myHoc } from "./myCountHoc"

 // eslint-disable-next-line react/prop-types
 const ButtonComp = ({count,fn,name}) => {
  return (
    <div>
        <button onClick={fn}>Click me {count} {name}</button>
    </div>
  )
}

export default myHoc(ButtonComp)