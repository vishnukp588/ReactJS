import React, { Component } from 'react'
import propType from 'prop-types'
import './Counter.css'

class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter:0
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);
    }

    render()   {
        return (
          <div className="Counter">
          <div>  <label>Counter</label></div>  
          <CounterButton by={1}  incrementMethod={ this.increment}  decrementMethod={ this.decrement}/>
          <CounterButton by={5}  incrementMethod={this.increment}  decrementMethod={ this.decrement} />
          <CounterButton by={10} incrementMethod={this.increment}  decrementMethod={ this.decrement} />
          <span className="Count">{this.state.counter}</span>
          <div><button className="reset" onClick={this.reset} >Reset</button></div>
          </div>
        );
       }
       
       reset()
       {
        this.setState((prevState)=>{
            return { counter:0} 
                  });
       }
       
       increment(by){ 
        console.log(`increment from the parent value is ${by}`)
        this.setState((prevState)=>{
          return { counter:prevState.counter+by} 
                });
        }
        decrement(by){ 
            console.log(`increment from the parent value is ${by}`)
            this.setState((prevState)=>{
              return { counter:prevState.counter-by} 
                    });
            }
}


class CounterButton extends Component {
    //define initial sate of constructor
    constructor(){
        super();
        this.state={
            counter:0
        }
       this.increment=this.increment.bind(this);
       this.decrement=this.decrement.bind(this);
    }

    render() {
        return (
            <div className="CounterButton" >
                <button onClick={this.increment}>+{this.props.by}</button>
                 <button onClick={this.decrement}>-{this.props.by}</button>
            </div>
        )
    }  
        increment(){ this.setState(()=>{
           return {counter:this.state.counter+this.props.by}
                     });
                this.props.incrementMethod(this.props.by);
                 }

        decrement(){ 
            this.setState(
                ()=>{
                    return {counter:this.state.counter-this.props.by}
                        });
                        this.props.decrementMethod(this.props.by);
                    }  
                }
CounterButton.defaultProps={
    by:1
}
CounterButton.propType={
    by:propType.number
}
export default Counter