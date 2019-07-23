/*
    Exporting a ES6 module:

        - After the keyword "class" we add the keyword "export"
    
    As well as exporting CommonJS Modules, all the code exported is the Public Interface, and all the code attached to it is known as Implementation Details (private to the exterior!)...

    Importing a ES6 module:

        - in the file where the module will be imported, we have to write the next statement:

        import{ClassName} from './nameFile.js'

        As you can see, inside the braces "{}" have to be the name of the class that was exported, and inside the '' have to be the name of the file where belongs the class... (We have to include the extension of the file!)...

        *** Important Note ***
        Once the project has been configured to work with Webpack, there wont be needly keep specifying the extenstion of the file!
*/

//Export sintax:

export class Animal {}

//Import sintax

import { Animal } from "./animalFile.js"; //The name of the file in this statements is just for show how the sintax is....
