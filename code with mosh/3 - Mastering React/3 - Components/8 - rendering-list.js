/*
    The best practical way of render list is using HTML list (<ul> <li>)...

    And the best practice to do it is with map() method....

    *** Important Note ***

    When we render a list, we have to add each list element a key for identify it in the Virtual DOM and let react can sync the Virtual and Real DOM easily....

    The keys in the same list should be unique... but same keys can be used for different list....

    * How to add the property key?

    Its really easy, in the <li> JSX element we only have to add it.... 

        <li key="name"></li>
    
    Or also we can do it dynamically....

        <li key={nameKey}></li>

*/
