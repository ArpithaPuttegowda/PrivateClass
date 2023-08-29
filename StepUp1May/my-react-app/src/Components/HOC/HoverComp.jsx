import { myHoc } from "./myCountHoc"

 // eslint-disable-next-line react/prop-types
 const HoverComp = ({count,fn}) => {
  return (
    <h1 onMouseOver={fn}>Hover me {count} </h1>
  )
}
export default myHoc(HoverComp)
