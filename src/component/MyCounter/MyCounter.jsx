import './counter.css'

import {Component} from 'react'

class MyCounter extends Component {
    constructor(props){
        super(props)
            this.state ={
                count : 0
            } 
    }

    CountUp(){
        this.setState({
            count : this.state.count + 1
        })
    }

    CountDown(){
        if(this.state.count >1){
        this.setState(
            {
            count : this.state.count + -1
            })
        }
    }

    render(){
        return(
            <div className='unit'>
                <button onClick={this.CountDown.bind(this)}>-</button>
                <h3>{this.state.count}</h3>
                <button onClick={this.CountUp.bind(this)}>+</button>
            </div>
        )
    }
} 

export default MyCounter;