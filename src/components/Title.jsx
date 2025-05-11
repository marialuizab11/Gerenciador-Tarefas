// eslint-disable-next-line react/prop-types
function Title({ children }){
    return(
        <h1
           className="text-4xl text-slate-50 font-bold text-center" 
        > {children} </h1>
    );
}

export default Title;