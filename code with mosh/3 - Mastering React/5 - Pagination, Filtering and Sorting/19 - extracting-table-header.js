/*
    For make the moviesTable a reusable component for create tables of any kind of objects, not only movies, we have to extract the TableHeader and TableBody....
    Extracting the TableHeader means that we have to create a new reusable component that render its elements by the props that it receibes....
    
    This props have to be:  
        - columns       ---> [{columnName,label},{columnName,label}]         ---> This array of object has to have 2 properties: label,columnName
        columns will be used to render each <th>    *Note: if it'll be a column that doesnt have a label or columnName values, just for assign the key in the <th>, instead of send those 2 properties, send a different call key:"name".... this is just for assign a value in the rendering of the <th> element, this commonly happen when in a column there are only buttons....

        - onSorting     ---> function
        onSorting will be used to call the reference of handleSorting() thats is defined in the parents component of the table....

        - sortColumn    ---> object     ---> This object its used for sort the columns and has 2 properties: columnName and order....
        sortColumn its an object that will be used to sort the columns

    *** This component has to have the raisingSorting() because the sorting will be activated each time a header element it'll be clicked! ***
    

*/
