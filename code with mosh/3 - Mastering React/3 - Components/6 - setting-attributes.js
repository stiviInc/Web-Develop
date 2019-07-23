/*
    The most important concepts of this lessons are How to Set Class and How to Add Styles to a JSX Element...

    1.- How to Set Class to a JSX Element

        - Due to a JSX element is render as a React Component, we can't define a class as we do it in HTML....
        Instead of type just class = "" , we have to change it for className = ""

            Example:
        <span className = "badge badge-primary">Hello World!</span> //The classes were used in this example are bootstrap classes!
    
    2.- How to Add Styles to a JSX Element

        - For add style to a JSX Element we have to follow the next sintax:
            style = {objectWhereStylesAreDefined}   
            //objectWhereStylesAreDefined   --->    means that we are able to define an object where we can type all CSS properties we need to style our JSX Element....

            Defining the object with CSS Styles:

            stylesObject{
                fontSize : 10,
                fontWeight : 'bold'
            }
            //As you can see, the way of define the object's properties are depending on how them are define in CSS!... if the value in CSS is a number, also in the object, same for Strings....

                    Of this way, you can reuse the object for style another JSX Element!
        
        - Another option to add styles is as if them would be inline-styles....
          This means: You can add styles without the need of define an object whit all properties you need, you can add styles creating an object inside the style = {{hereYouCreateAnInlineStyles}}

            hereYouCreateAnInlineStyles --->    Here you can create an internal object with all style properties you need to style the JSX Element...  
            
            *Each style property have to be split divided by a , "coma"!....
            
                    Of this way you dont have to create an object out of the JSX Element!.....
*/
