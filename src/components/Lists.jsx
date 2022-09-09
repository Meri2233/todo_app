import { useSelector } from "react-redux"

function Lists({title,color,check,addCheck}){
    let data = useSelector(state=>console.log(state.task))
    return(
        <div className="task">
            <div onClick={(e)=>addCheck()} className="status" style={{backgroundColor:color}}>
                <p>{check}</p>
            </div>
            <h5>{title}</h5>
        </div>
    )
}

export default Lists