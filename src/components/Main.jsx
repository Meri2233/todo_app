
import { useDispatch, useSelector } from "react-redux"
import { addlist, addcheck, showall, showcompleted, showactive, clearcompleted } from "../slice/TaskSlice"


function Main() {
    let dispatch = useDispatch();
    let data = useSelector(state => state.task.list)
    let total = useSelector(state => state.total.total)

    return (
        <div className="app">
            <div style={{ backgroundImage: 'url(./images/bg-desktop-dark.jpg)' }} className="row">
                <h3 className="title">TODO</h3>
                <input onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        dispatch(addlist(e.target.value))
                    }
                }} type="text" className="input-field" placeholder="Create a new todo." />
            </div>
            <div className="task-container">
                <div className="display">
                    {data.map((el,index) =>
                        <div key={index} style={{ display: el.content.display }} className="task">
                            <div onClick={(e) => dispatch(addcheck(el.id))} className="status" style={{ backgroundColor: el.content.color }}>
                                <p>{el.content.mark}</p>
                            </div>
                            <h5>{el.content.taskname}</h5>
                        </div>)}
                </div>
                <div className="status-bar">
                    <p>{total} items Left</p>
                    <div className="statusbuttons">
                        <button onClick={(e) => dispatch(showall())}>All</button>
                        <button onClick={(e) => dispatch(showactive())}>Active</button>
                        <button onClick={(e) => dispatch(showcompleted())}>Completed</button>
                    </div>
                    <button onClick={(e) => dispatch(clearcompleted())}>Clear Completed</button>
                </div>
            </div>
            <div className="blank-container">

            </div>
        </div>
    );
}

export default Main;
