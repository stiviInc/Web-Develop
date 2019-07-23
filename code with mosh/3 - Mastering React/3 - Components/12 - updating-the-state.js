/*
    The method() for update the state and show those changes in the browser is named setState()... its a method that is inherit from Components....

    This method tells react we are updating the state, then will figure out what part of the state was changed and base on that it will sync the DOM with the Virutal DOM...

    The arguments for this method is an object where we indicate the properties that will be changed, also we can override those methods if them already exists!...

    Inside of that object, we can update the value of the properties we are indicating that will change....

*/

this.setState({ propName: this.state.prop + val });

// in propName you have to write the exactly name that is defined in the state {} object!..... there is no need to write code to acces at that property (this.state.prop)....is directly the propName.....

/*  https://reactjs.org/docs/state-and-lifecycle.html#do-not-modify-state-directly

        Using State Correctly
        There are three things you should know about setState().

    Do Not Modify State Directly
    For example, this will not re-render a component:

    // Wrong
    this.state.comment = 'Hello';
    Instead, use setState():

    // Correct
    this.setState({comment: 'Hello'});
    The only place where you can assign this.state is the constructor.

*/
