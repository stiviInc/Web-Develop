/*
    This React Principle means that we have to make React our only source to change the state of the components....
    There are some elements,components that have its own state or by default its state is controlled by the DOM directly, like example, the input text.....

    This represents a big problem because React only see the changes in its Virtual DOM not in the Real DOM....
    In order to solve this problem, we have to make that React will be the only source of truth, in other words, we have to make that all the changes are done in the Virtual DOM... Of this way, React will notice of every change and will update the DOM with no problems....

    Besides the problem with some HMTL elements that have its own state... sometimes will be Usser Components that cause a similiar problem, like example:
    When you are working with composing components and the single component have its own local state wich depends on a value sending in its props... this will cause that if you want to update all the values from each single component wont work, instead of update the state, the value will be stuck in the prop, but due to we are not accesing each single component, such prop wont be update the local state... thats why in this cases, we have to remove local state of each single component and manipulate the states since the composing component! [In this case, the single source of truth will be find in the composing component!]
*/

//Check the next video for a better understanding of Single Source of Truth Principle:

// https://www.youtube.com/watch?v=7FQS6_fOgR8
