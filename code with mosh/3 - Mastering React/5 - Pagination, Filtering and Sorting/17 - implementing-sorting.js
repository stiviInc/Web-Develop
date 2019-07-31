/*
    The order of implementing the filter, sorting and pagination is in this exactly order:


    1.- Filter
    2.- Sorting
    3.- Pagination


    For make the sorting, we will use lodash, specifically, the method orderBy()


                *** Steps to Sort by Ascendent Order: ***

    1.- Update the state of the sortColumn property, we need to update with the columnName and the order that how will be sorted...
    2.- In the render method, after filtering the array, we need to call the _.orderBy() method of lodash library....
        This method takes as parameters:    _.orderBy(arrayToBeSorted,[columnsToBeSorted],[orderToSort])    
                                Example:    _.orderBy(filteredArray,[columnName],[sortOrder])   ---> columnName = "title" sortOrder = "asc"
        Its important to mention that second and third parameters have to be sended as arrays....




                *** Steps to Sort by Ascendent/Descendent Order: ***

    1.- Before update the state of the sortColumn property, we need to take in count 2 scenarios:
*******************************************************************************************
*    - First Scenario: You want to reverse the same column as its store in sort.columnName, in this case, we need to update only the sort.order
*
*        if (sortColumn.columnName === columnName)
*           sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";     
*           //if the actual order is asc, turns into desc... if is not asc, the actual order is desc, so, we need to make it asc
*
*******************************************************************************************
*   - Second Scneario: You want to reverse a different column, in this case, we need to update the columnName and the order....
*      else {
*         sortColumn.columnName = columnName;
*         sortColumn.order = "asc";
*       }
*
*******************************************************************************************
    2.- Same steps as in above description....


*/
