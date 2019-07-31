/*

    Working with reusable components could happen that when it'll be implemented the programmer forget to send some parameters or even send a wrong type of parameters the component is expecting... in order to solve this problem, react has a module that allow us to define explicity the type that have to be each parameter besides of indicate if its required or can be ommited....

    This module is call propTypes propTypes .... check full documentation ---> https://en.reactjs.org/docs/typechecking-with-proptypes.html

    *** Installing propTypes library in the project ***

    1.- Since the terminal type the next statement:         ---> npm i prop-types@15.6.2
    2.- Import the module in the file where it'll be needd  ---> import PropTypes from "prop-types";
    3.- Define at the bottom of the file (after the Class or Stateless Function definition) the next statement:

        className.propTypes = {
            prop1: PropTypes.type,              //This prop will be optional
            prop2: PropTypes.type.isRequired      //This prop will be require
        }

        statelessFunctionName.propTypes = {
            prop1: PropTypes.type,
            prop2: PropTypes.type
        }

    As you can see, we have to write the name of the object where the propTypes will be applied, after we have to indicate that propTypes will be used, and the last step is to create a JS object where the types of each prop will be defined....


Optional or Mandatory????

        - if you dont add the .isRequired at the end, the prop will be marked as optional by default....

************_____________-------*************

        The errors/warnings will be displayed in the console... it only works in a development enviroment....
*/
