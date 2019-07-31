/*

    To solve the problem of when we are visualizing all the movies and after we filter one genre and anything is displayed besides the total numbers movies is shown, we have to reset the current page:

    Explanation:
        If you are looking the page 2 of all movies, and after you want to see a specfic genre, but that genre doesnt have more than 1 page, if you dont reset the current page, when the render() method will be executed, it'll try to display the page 2 of the genre.... that why we have to reset the current page to 1 each time we select a genre to filter!

*/
