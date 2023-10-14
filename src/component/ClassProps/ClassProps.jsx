import { Component } from "react";

class ClassProps extends Component {
    render() {
        return (
            <div>
                <h1>my name is {this.props.name}</h1>
                <h1>I study {this.props.course}</h1>
                <h1>my age is {this.props.age}</h1>
                <h1>my phone number is {this.props.phoneNumber}</h1>
                {this.props.children}
            </div>
            );
    }
}

export default ClassProps;