import React, { Component } from 'react';

class Button extends Component {
    state = {  }

    raisingCorrespondingEvent = type =>{
        if(type === "number") return () => this.props.onNumberClick(this.props.children) 
        if(type === "operation" || type === "equal") 
            return () => this.props.onOperationClick(this.props.children)
        if(type === "clear") return () => this.props.onClearClick();
    }

    stylesButton = type =>{
        const styles = { height:"4em", textAlign:"center", paddingTop:15, border:"2px solid black", color: "white"}

        if(type === "number") styles.backgroundColor = "red"; 
        else if(type === "operation") styles.backgroundColor = "blue";
        else if(type === "clear") {styles.backgroundColor = "yellow"; styles.color = "dark";}
        else if(type === "equal") styles.backgroundColor = "purple";

        return styles;
    }


    render() { 
        return ( 
            <div className="col" style={this.stylesButton(this.props.type)}
        onClick={this.raisingCorrespondingEvent(this.props.type)}>{this.props.children}</div>
         );
    }
}
 
export default Button;

