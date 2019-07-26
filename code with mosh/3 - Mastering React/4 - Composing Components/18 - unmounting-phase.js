/*

            Unmounting phase

        This phase has only 1 method: componentWillUnmount()

    - componentWillUnmount() ---> This method is called just after a component is removed from the Virutal DOM... 

    How it works?

When a component is removed from the Virtual DOM this method is called and it compares the Old Virtual DOM with the Actual Virtual DOM, and React will figure out wich component was removed....

This method is the perfect place to clean up memory.... if the component that was removed it was a timer or listener or something that consumes memory, we can clean it and set free before that component will be removed from the Real DOM....

    Afteeeeeeeeeeeeeer this method is executed, the componentDidUpdate() method will be called!

*/
