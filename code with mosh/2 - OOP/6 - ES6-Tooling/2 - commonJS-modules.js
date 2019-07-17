/*
    This type of module is used for work with Node.Js ....

    Everything inside a module is private... unlees we explicited export it!

    * Exporting modules in commonJS are of the following way:

        if there is only one class to be exported:
            module.exports = ClassName
        
        if there are more than one class:
            module.exports.ClassName1 = ClassName1;
            module.exports.ClassName2 = ClassName2;

    * Importing modules in commonJS:

        for import a modules is used the keyword "require"

        For import a module we use relative paths, for indicate the files is in the same folder (same level) we use : "./" , and after that we need to write the name of the file where the module to be imported is...(there is no need to write the extension of the file!)....
            require('./NameFile');
        
        
    * When you make an import you are receibing all the code as if it would be written in your current file, thats why you have to store it (assign it) into a variable....

        - Importing when only one class was exported!

            const importClass = require('./NameFile')
        
        - Importing when more than one class was exported!
            
            const importClass1 = require('./NameFile').NameClass1;
            const importClass2 = require('./NameFile').NameClass2;

*/

/*
            *** About the export ***

        Everything inside what you are exporting will be accesible from the importing file, but those statements that werent exported dont!
        All what you exported is called Public Interface...
        The rest of code that werent exported and are related to the Public Interface are called Implementation Details...
        Implementation Details are needly to make the module works properly, but if them are modified, it wont impact externally! (Where the module has been imported!)
*/


