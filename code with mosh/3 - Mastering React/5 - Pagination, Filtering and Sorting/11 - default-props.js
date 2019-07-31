/*

    In order to solve the need of increase the number of parameters the parent componen needs to send to its ListGroup component, we can define in the ListGroup component a default props to avoid it....

    The sintax for access the property for define default props is the next:

    NameComponent.defaultProps = {
        nameProperty = "namePropertyInTheArray",
        nameProperty = "namePropertyInTheArray"
    }

    *** Super Important ***
        As well as we are defining the default value for the properties that we will need to acces the array's props, we have to define them in the props object destructuring of our module!....
        const {namePropDefaultProps, namePropDefaultProps} = props;         ---> stateless function component
        const {namePropDefaultProps, namePropDefaultProps} = this.props;    ---> class component

    The only problem with this implementation is that we are assuming all arrays receibed will have same nameProperties, but if sometime an array have different names, we can override the nameProps by applying the method explain in the file call "10 - displaying-items.js", this method is sending the prop names since the parent component....

*/
