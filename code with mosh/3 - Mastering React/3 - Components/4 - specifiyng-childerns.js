/*
    Remember that render() method its the equivalent to React.createElement(....);
    Due to React.createElement() understand just one input (one jsx element), we cant define more than one JSX elements togheter, we have to define them inside a parent....
    This means... we have to create a container where all JSX element we need to define will be contained!


    One solution could be to create a div as a parent and define all the JSX elements inside of it!, but this approach will create an unnecessary div in our HTML Code....
    Thats why, the best solution is to use a property of React called Fragment..... ussing this property the JSX elements will be defined inside of it, but in the HTML Code them wont be contained inside an extra container.....

    Sintaxis:

    <React.Fragment>
        <h1>JSX Element1</h1>
        <h2>JSX Element2</h2>
    </React.Fragment>

*/

const elementWithChildrens = (
  <React.Fragment>
    <h1>Element1</h1>
    <h2>Element2</h2>
  </React.Fragment>
);
