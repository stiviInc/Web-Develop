/*

    In order to filter, paginate or search for movies, the original array shouldnt be modify, we have to create a new one, in wich we will apply the corresponding alghoritm.... that array will be rendered, not the original!...

    This array will be receibed since the paginate algorithm.... it means, we have to call the function paginate and send it the parameters that need it!


    The best practice for code the paginate algorithm it is to create a new module specifically for the algorithm, of this way, we can reuse it in the entire application!

        *****************
    Paginate Algorithm

lodash can be very helpful... so we have to import it!

the paginate() function receibe 3 parameters: items, currentPage, itemsPerPage


*** if we want to call lodash methods as a chain, we need to convert the array into a lodash wrapper:   _(items) ---> This returns a lodash wrapper
        _(array).method().method()

*** convert the lodash wrapper into an array....
    For convert a lodash wrapper into an array, we only need to call the .value() ....

    _(items).method1().value()  ---> This statement converts an array into a lodash wrapper, then applay a lodash method and finally converts the lodash wrapper into an array!


if you want to check the algorithm, go to the file call "paginate.js"
*/
