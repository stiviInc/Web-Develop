/*
    One way of render elements depending a condition is by creating a method() where we define those conditions, and depending each one, return the JSX element that will be rendered!

    This approach works perfect when there are at least an if-else statement.... but if we only will have the if statement alone, we could implement the next approach!

        * The truthy and falsy logic....
    Remember that JS engine transforms values either truthy or falsy when them are not booleans!....
    And if you compare it using the and operator (&&) the result will be the last value.... if it was a string, it will be the string not truthy or falsy!....

    Example:

    true && 'hello'     --->    hello

    true && false       --->    false

    true && ''          --->    ''

    true && 'hello' && 2    --->    2

    -------- Using this approach, we can define a condition and type a string that will be render when the condition it'll be true....

    Explanation:    When the condition will be true, the string will be a truthy, so, the string will be the result of that comparisson.... in other words... when the condition will be true, the string will be render.... otherwise, nothing will happen!
*/

//Create a statement for render a JSX element depending the value of the score variable!

function renderScore(score) {
  return score <= 70 ? (
    <p className={assignBadgeClasses(score)}>You have failed the subject!</p>
  ) : (
    <p className={assignBadgeClasses(score)}>You have approbed the subject</p>
  );
}

function assignBadgeClasses(score) {
  let classes = "badge badge-";
  clasess += score <= 70 ? "danger" : "success";
  return clasess;
}
