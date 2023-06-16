import react from "react";

function Input(props){

    return (props.bool&&
        <input
            name="title"
            onChange={props.handleChange}
            value={props.value}
            placeholder="Title"
          />
    );
}

export default Input;