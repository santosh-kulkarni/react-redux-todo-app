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


function InComplete(props) {
    return (
        <React.Fragment>
            {
                checkLength(props.toDoList, false) ? <ul>
                    {
                        props.toDoList.map((item,index) => !item.completed ? <li key={index} onClick={() => props.changeCompleteState(index)}>{item.todo}</li> : null)
                    }
                </ul> :
                <h4>All Todo items are completed</h4>
            }
        </React.Fragment>
    )
}

export default connect(matchStateToProps, matchDispatchToProps)(InComplete);