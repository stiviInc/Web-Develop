/*  
    Definition:
    In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed as a special prop: props.children. 

    In some occasions we will need to define more Components between a Component....
    Children can be either a React Component or a User Component

    *** Sending a Children to a Usser's Component ***
        Like example... sometime we could need to define a <span> between a <User /> Component... this would look like this...

            Sintaxis:
                <Usser>                      //Usser's Component
                    <span>Text...</span>    //React Element that will be the Children of Usser's Component.....
                </Usser> 

    *** Accesing the Children in the Usser's Component ***

        The Children will be store in a special property from the "props" object... such special property is call "children"...
        The way of accesin such property is like if it were just another property from the "props" object:

                Sintaxis:
                    this.props.children

        *********************************************************************************************************
        *               JSX Children                                                                            *
        * You can provide more JSX elements as the children. This is useful for displaying nested components:   *
        *                                                                                                       *
        *    <MyContainer>                                                                                      *
        *       <MyFirstComponent />                                                                            *
        *        <MySecondComponent />                                                                          *
        *    </MyContainer>                                                                                     *
        *********************************************************************************************************


        *********************************************************************************
        *           For more info about JSX Children, check the link below:             *       
        *                                                                               *
        *           https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx          *
        *********************************************************************************
*/
