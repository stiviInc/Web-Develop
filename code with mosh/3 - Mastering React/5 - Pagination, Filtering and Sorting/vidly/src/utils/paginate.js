import _ from "lodash";

export function paginate(items, currentPage, itemsPerPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;

  return _(items) //Converts the array into a lodash wrapper
    .slice(startIndex) //Slice the array starting from startIndex
    .take(itemsPerPage) //take the numbers of elements that itemsPerPage indicates!
    .value(); //Converts the lodash wrapper into an array!
}

/*
    Given an array of 12 elements and a pagination of 4 items per page, the result of the paginate method will be the following:

Elements     CurrentPage   startIndexForSlice   indexes that will be taken and return from the method

1-4             Page1       startIndex: 0       take    --->    0 - 3  index array
5-8             Page2       startIndex: 4       take    --->    4 - 7  index array
9-12            Page3       startIndex: 8       take    --->    8 - 11 index array
*/
