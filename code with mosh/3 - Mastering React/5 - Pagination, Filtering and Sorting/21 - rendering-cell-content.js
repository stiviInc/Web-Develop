/*
    The bracket "[]" notation only works for simple properties, it doesnt works with nested properties... Like example: genre.name ---> it wont work

    For solve this problem with nested properties use the ._get() method from lodash libray, check the file call "21.1 - Getting-nested-properties.txt" for more info....

    This will be applied when we need to render the <td> of each <tr>...

    {rows.map(row =>{
        return(
            <tr>
                {columns.map(column =>{
                    return(
                        <td>{_.get(row,column.columnName)}</td>
                    )
                })}
            </tr>
        )
    })}

    Explaining the above code:
        1.- The <tr> will be render dinamically depending the number of rows
        2.- each <td> of all <tr> info will be get from each property in each row.... Remember: rows is an array of objects, each object it'll be 1 row of the table... and each row has a bunch of columns.... so, we need to access the columns for show them in the table...
        3.- for get the columns of each row, we will need to apply the ._get() method, its parameters it'll be the actual row, and the name of the property we need to acces...

*/
