const zod = require ("zod");
function validateInput(arr) {
    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);
    //this line of code can do which is equivalent to 
    // 8-10 lines of code. 
    
    
    console.log(response);
}
validateInput([1,2,3])