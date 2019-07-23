/*
    Eeach React Component have defined an argument call "props"... such argument is an Object... and its function consist in receibe all properties that are sending when the component is being used and at least one value is send to the component..... the most common way of apply it is when we are working with composing components...

    This means that we can send values to the component for make it works depending how we need it....

    Like example, we can have 4 counter components, but we need to initialize each one with different values, we can send the initial value of each one when we are composing them into the Counters Component....

        *** Sending parameters to a React Component ***
    The way of send values to a React Component is by adding them after its call when we are creating the composing component.... the only keyword that is reserved is "key", this key define a key to each component... 

    We can send as many arguments as we need, and we can call them as we want!.... obviously, those arguments will be add to the props object of the component where them are being send, and its name for acces them it'll be the same as you type when you send it...

                            Sintaxis:
                This means, <Component argToSend={value}/>

                
        *** Accesing receibed parameters into a React Component ***
    The way of access to the parameters that were send is by the props objects..... each paramter receibed will be store in this object as one of its properties....

                        Sintaixs:
                    this.props.argToSend    

*/
