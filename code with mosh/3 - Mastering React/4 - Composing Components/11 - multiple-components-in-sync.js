/*

    Visualizing the tree component, if you want to share data between component with a parent-children relationship, you can do it using props....

    But if in your tree there are components with no parent-children relationship, you cant share data between them, at least you "Litf the state up", this means, to send the state to the parent of the component, doing this, now you can share data between the parent component and its childrens.... despite its children doesnt have a directly relationship....

            App
        -----|------
        |           |
    NavBar------Counters
                    |
                    |
                    |
                Counter

    As you can see in the tree component above, the Counters and Counter component have a parent-child relationship, thats why between them can share data....

    If you would like to share data between the NavBar and the Counters component, you will need to lift the state up to the App component, wich is the parent of both!
    Of this way, now you can share data between the App component and its childrens using props...

*/
