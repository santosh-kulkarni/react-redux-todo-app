import React from "react";
import { connect } from "react-redux";
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

function All(props) {
    return (
        <React.Fragment>
            {
                props.toDoList.length > 0 ? <ul>
                    {
                        props.toDoList.map((item,index) => item.completed ? <li key={index} onClick={() => props.changeCompleteState(index)}><del>{item.todo}</del></li> : <li key={index} onClick={() => props.changeCompleteState(index)}>{item.todo}</li>)
                    }
                </ul> :
                <h4>No Todo Items Found</h4>
            }
        </React.Fragment>
    )
}

export default connect(matchStateToProps, matchDispatchToProps)(All);