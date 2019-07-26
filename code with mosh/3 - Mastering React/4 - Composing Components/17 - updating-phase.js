/*
        **** Updating Phase has 2 methods that are call in order:
        1.- render              ---> each time a componets is updated, the render method is call and execute as if it were in the mounting phase, this means, all its tree component is rendered.... buuuuuuuuuuuuut this doesnt mean that the entire Real DOM is updated, insted, the Virtual DOM was the one who is update, and in the render method exist a copy of the Old Virtual DOM as well as the Actual Virtual DOM, and React figure out what was updated and then updated that into the Real DOM...

        2.- componentDidUpdate:
    This method is called after a component is updated, this means we have new state or new props, so we can compare them old version with the actual one, and if there is a change, we can make an AJAX Request to get data from the server.... If there is no change, the best option is to not make an AJAX Request...



*/
