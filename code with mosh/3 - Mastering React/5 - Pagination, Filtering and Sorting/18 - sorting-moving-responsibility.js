/*
    All the logic of determine how the sorting will be done belongs to the table component, so we should create a method in that component and returns the sort object with the corresponding parameters to make the sort!


    onRaiseSort = (columnName) =>{      //columnName is a String...
        const sortColumn = {...this.props.sortColumn};  In the props should be a sortColumn object sended since its parent!
        
        //Code to determine what columnd and what order it'll take the sort
        //
        //Once the sortColumn's properties has been assigned according the sort condition we have to call the handleSortingEvent....
        //Remember, the reference to call that method is receibed in the props as onSorting....
        this.onSorting(sortColumn);
    }


                Now we can reuse the moviesTable component in different places ir our application, and every time we reuse the component it'll works the sorting method without the need of code it every time in the parents components...
*/
