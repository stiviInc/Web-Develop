/*
    if we need to pass arguments to a handle function event, we cant just simply doing by adding the argument when its calling.....
    we can apply a tricky hack that conssist in define an arrow function and in its body we can call the handle function as a function call ( Using "()" )....


    Example.....

    handleIncrement = product => {
        console.log(product.id);
    }

    <button onClick={ () => { this.handleIncrement(product) } }>    </button>
*/
