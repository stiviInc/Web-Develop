/*
    Raising ---> Designar

The concept of raising functions comes togheter with one React Principle:
    The component that owns a piece of the state, should be the one modifying it....

When you compose an object, could exist some elements that its functions need to be raising due to the tree component....
Like example:
    If you have a compose component of movies, where you are showing all available movies, and you need to delete one, each movie component have a delete button, but the compose component of movies is the one who have the state of all available movies.... this means, the compose component is the one who should delete the movie, not the component movie by itself.... in cases like this is when we apply the raising - handling events.....

    the movie component will raising the event to the compose component movies, in wich the movie will be deleted!....

So, in summary:
    The single component will raising the event to the compose component....


    *** How do we raising events in React ***

Its pretty symple, in the compose component, we need to create the handle event (mehod()), wich will be send as a prop to the single component, and the single component will make reference to this handle event in the onClick function of the delete button!

By convention, the names of the property that will be send in the props object have to be of the following way:

    onNameHandleEvent...
    Example:    
        handleDeleteCounter     ---> Name of the handle event!
        onDeleteCounter         ---> Name of the reference will be send to the single component....

    instead of handle, we change it for on....

*** Sending the reference to the handle event (method)... ***
    <Name Component
    onDeleteCounter={this.handleDeleteCounter}
    />
*** Receibing and raising the handle event ***
    onClick={this.props.onDeleteCounter}

    For raising the event, instead of call a local method in the single component, we use the name of the property that contains the reference to the handle event on the compose component for identify the exactly property in the props object!...

    The single component receibes the reference to the handle event that is defined in the compose component, thats why, if the handle event receibes parameters, them have to be send it from the single component!.....
*/
