function Button(props){
    return(
        <button
            {... props}
            className="bg-red-700 p-2 rounded-md text-white"
        > {props.children} </button>
    );
}

export default Button;