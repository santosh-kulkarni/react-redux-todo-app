import All from "./All";
import {connect} from "react-redux";
import Complete from "./complete";
import InComplete from "./incomplete";
import { addToDo } from "../redux/dispatchActions";
import React from "react";

const matchDispatchToProps = (dispatch) => {
    return {
        addToDo: (input) => dispatch(addToDo(input))
    }
}

function TodoApp(props) {
    const [input, setInput] = React.useState("");
    const [category, setCategory] = React.useState("all");

    const changeCategory = (e) => {
        setCategory(e.target.value);
    }

    const changeInput = (e) => {
        setInput(e.target.value);
    }

    return (
        <React.Fragment>
            <h1>Welcome to Todo App</h1>
            <span>Click on the to do items to change the status from INCOMPLETE to COMPLETE and vice versa</span><br /><br />
            <input type="text" value={input} onChange={(e) => changeInput(e)} />&nbsp;
            <button onClick={() => {
                props.addToDo(input);
                setInput("");
            }}>Add Tddo</button>
            <br />
            <br />
            <label><input type="radio" value="all" checked={category === "all" ? true : false} onChange={(e) => changeCategory(e)} />All</label>&nbsp;
            <label><input type="radio" value="complete" checked={category === "complete" ? true : false} onChange={(e) => changeCategory(e)} />Completed</label>&nbsp;
            <label><input type="radio" value="incomplete" checked={category === "incomplete" ? true : false} onChange={(e) => changeCategory(e)} /> InComplete</label>&nbsp;

            {
                category === "all" && <All />
            }
            {
                category === "complete" && <Complete />
            }
            {
                category === "incomplete" && <InComplete />
            }
        </React.Fragment>
    )
}

export default connect(null, matchDispatchToProps)(TodoApp);
