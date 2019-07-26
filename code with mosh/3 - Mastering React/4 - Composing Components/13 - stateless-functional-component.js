/*

    Some component will only work with the value receibed in its props, no state neiter event handlers...
    the difference between Stateless Functional Components and Controlled Components is that a Controlled Component rais events from its parent, and a Stateless Functional Component just show data that receibes in its props....

*/

/*
    How to create a Stateless Functional Component?

    As its name says, it is a function, so we have to change the class definition into a function definition....

    1.- We define a "variable" and assign it into an arrow function that receibes props as parameter....
    2.- We have to return a React Element... there is no need of a render() method... just return JSX code....
    3.- The way of acces the data receibed is directly using the props argument.... there is no need to explicit use the "this" keyword after props.... we can acces it directly typing props
*/

const exampleSFC = props => {
  return <h2>props.property</h2>;
};

export default exampleSFC;
