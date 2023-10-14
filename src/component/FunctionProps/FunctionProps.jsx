function FunctionProps ({name, course, age, phoneNumber, children}){
    return(
        <div>
            <h1>Name: {name}</h1>
            <h1>Course: {course}</h1>
            <h1>Age: {age}</h1>
            <h1>Phone Number: {phoneNumber}</h1>
            {children}
        </div>
    )
}
export default FunctionProps;