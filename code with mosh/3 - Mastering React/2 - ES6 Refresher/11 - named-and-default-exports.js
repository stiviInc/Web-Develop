/*
  When exporting modules, there 2 types:
    
        1.- default exports
        2.- named exports

In the same file you can have a default export and a lot named exports!

    * Default Exports:
        The sintax for make a default export is the following:

        export default class {}

        .:* When there is just 1 export in a module, i would suggest you to make that export a default export *:.
    
    * Named Exports:
        The sintax of named exports is just as simple as export a module!

        export classs {}

*** How to import a default and a named export???? ***

    * Importing a default export:
        import ... from '...';
    
    *Importing a named export:
        import {...} from '...';

--- Importing a default and 2 named exports from same module! ---

    import defaultExport, { namedExport1, namedExport2 } from 'nameFile';

*/
