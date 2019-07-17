/*
    For override a method in ES6 you only need to write again the method in the children class and write different code!... 
    There is no special sintax neither hidden tricks!

    Just write and code again the function!
*/

class Shape{
    move(){
        return "Moving Shape";
    }
}

class Circle extends Shape{
    move(){
        super.move();
        return "Moving Circle xd";
    }
}

let c = new Circle();

/*
    Explanation of why override works of this way:
    Remember that JS enginge looks first for the method if its defined in the object, if its not defined there, go to search at prototype's object....
*/