import React from "react";
import {checkLength} from "./helperFunction";
import {connect} from "react-redux";
import {changeCompleteState} from "../redux/dispatchActions";

const matchStateToProps = (state) => {
    return {
        toDoList: state.toDoList
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        changeCompleteState: (index) => dispatch(changeCompleteState(index))
    }
}


function Complete(props) {
    return (
        <React.Fragment>
            {
                checkLength(props.toDoList, true) ? <ul>
                    {
                        props.toDoList.map((item,index) => item.completed ? <li key={index}  onClick={() => props.changeCompleteState(index)}><del>{item.todo}</del></li> : null)
                    }
                </ul> :
                <h4>No Todo Items are completed.</h4>
            }
        </React.Fragment>
    )
}

export default connect(matchStateToProps, matchDispatchToProps)(Complete);