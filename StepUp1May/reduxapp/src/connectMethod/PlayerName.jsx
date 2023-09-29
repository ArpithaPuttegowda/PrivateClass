
import { connect } from "react-redux"

const PlayerName = ({dispatch,n}) => {
    // const dispatch=useDispatch()
    const handleClick=()=>{
       dispatch({
        type:"N",
        payload:"DHONI"
       })
    }
  return (
    <div>
        <button onClick={handleClick}>Name..{n}</button>
    </div>
  )
}

const mapStateToProps=(storeData)=>{
    return {
        n:storeData.nameRed.name
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        dispatch:dispatch
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (PlayerName)

