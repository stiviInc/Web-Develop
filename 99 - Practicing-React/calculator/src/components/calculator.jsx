import React, { Component } from 'react';
import Button from "./common/button";

class Calculator extends Component {
    state = { 
        displayVal: 0,
        acum : 0,
        operationToDo : ""
     }

    handleNumberClick = number =>{
        let displayVal = this.state.displayVal;
        if(displayVal === 0) displayVal = number;
        else displayVal += number;
        this.setState({displayVal});
    }

    handleOperationClick = operation =>{
        let {displayVal, acum, operationToDo} = this.state
        console.log(operation,operationToDo)
        if(operation !== "="){
            this.setState({operationToDo: operation})
            if(acum === 0) this.setState({acum : displayVal}) 
            if(operationToDo !== ""){
                let tempRes = this.makeOperation(operationToDo,acum,displayVal);
                this.setState({acum:tempRes})
            }
            this.setState({displayVal: 0})
        }
        else{
            if(operation === "=" && operationToDo !== "") {
                let equalsResult = this.makeOperation(operationToDo,acum,displayVal);
                this.setState({displayVal : equalsResult, acum:equalsResult, operationToDo: ""})
            }
        }
    }

    makeOperation(operationToDo,acum,displayVal){
        let tempRes = 0
            switch (operationToDo){
                case "+" : tempRes =  parseFloat(acum) + parseFloat(displayVal); break;
                case "-" : tempRes =  parseFloat(acum) - parseFloat(displayVal); break;
                case "*" : tempRes =  parseFloat(acum) * parseFloat(displayVal); break;
                case "/" : tempRes =  parseFloat(acum) / parseFloat(displayVal);  break;
            }
        return tempRes;  
    }

    handleClearClick = () =>{
        this.setState({displayVal : 0, acum : 0, operationToDo: ""})
    }


    render() { 
        const { handleNumberClick, handleOperationClick, handleClearClick} = this;
        return (  
 
            <div className="container" style={{width:"40%", marginTop:"5em"}}>
                <div className="row">
                    <h4 className="col">{this.state.displayVal}</h4>
                    <h4 className="col">acum: {this.state.acum}</h4>
                </div>
                <div className="row" >
                    <Button type="number" onNumberClick={handleNumberClick}>7</Button>
                    <Button type="number" onNumberClick={handleNumberClick}>8</Button>
                    <Button type="number" onNumberClick={handleNumberClick}>9</Button>

                    <Button type="operation" onOperationClick={handleOperationClick}>/</Button>
                </div>

                <div className="row" >
                    <Button type="number" onNumberClick={handleNumberClick}>4</Button>
                    <Button type="number" onNumberClick={handleNumberClick}>5</Button>
                    <Button type="number" onNumberClick={handleNumberClick}>6</Button>

                    <Button type="operation" onOperationClick={handleOperationClick}>*</Button>
                </div>

                <div className="row" >
                    <Button type="number" onNumberClick={handleNumberClick}>1</Button>
                    <Button type="number" onNumberClick={handleNumberClick}>2</Button>
                    <Button type="number" onNumberClick={handleNumberClick}>3</Button>
                    <Button type="operation" onOperationClick={handleOperationClick}>-</Button>
                </div>

                <div className="row" >
                    <Button type="number" onNumberClick={handleNumberClick}>0</Button>
                    <Button type="clear" onClearClick={handleClearClick}>Clear</Button>
                    <Button type="equal" onOperationClick={handleOperationClick}>=</Button>
                    <Button type="operation" onOperationClick={handleOperationClick}>+</Button>
                </div>

            </div>
        );
    }
}
 
export default Calculator;