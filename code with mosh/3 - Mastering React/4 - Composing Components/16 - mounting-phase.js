/*

        *** The Mounting Phase ***
    Remember the order of the methods are called:
    1.- constructor
    2.- render
    3.- componentDidMount
    
    *********************************************************************************************************
    *           constructor() Method                                                                        *
    *   The constructor is called just once, when the component is created.                                 *
    *   This is the perfect place to initialize the values of the properties of the state object....        *
    *   we can use data receibed from the exterior for initialice our state object.... (By using props obj) *
    *                                                                                                       *
    *                                                                                                       *
    *   If we want to acces the props, we have to set it as a parameter and send it to its parent....       *
    *                                                                                                       *
    *   Sintaxis:                                                                                           *
    *                                                                                                       *
    *   constructor(props){                                                                                 *
    *       super(props);                                                                                   *
    *       console.log("props", this.props");                                                              *
    *   }                                                                                                   *
    *********************************************************************************************************

    **********************************************************************************************************
    *          render() Method                                                                               *
    *     The render method returns a React Element that represents our virtual DOM                          *                                                              *                                                                                                        *
    *     When a component is render, all its children are also render recursively!....                      *
    *                                                                                                        *
    *                                                                                                        *
    *                                                                                                        *
    *                                                                                                        *
    *                                                                                                        *
    *                                                                                                        *
    **********************************************************************************************************

    *****************************************************************************************************************************
    *          componentDidMount() Method                                                                                       *
    *     The componentDidMount() is called after our component is render into the DOM                                          *  
    *     Its the perfect place to make AJAX calls for get data from the server and set it to the state object where it belongs *
    *                                                                                                                           *
    *     componentDidMount(){                                                                                                  *
    *       //AJAX Calls                                                                                                        *
    *       this.setState({prop});                                                                                              *
    *     }                                                                                                                     *    
    *                                                                                                                           *
    *     When the component is mounted means that the component is in the DOM                                                  *
    *****************************************************************************************************************************
   
/*
        *** Super Important Notes ***

    The method setState() can be called only after the render() method was called!... this means, we cant called setState() method in the constructor!
    
    In Stateless Functional Components we cant use lifecycle hooks....

    Lifecycle hooks can only be used in class components!
    
*/
