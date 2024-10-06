const zod = require("zod");

function validateInput(obj) {
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    })
    const response = schema.safeParse(obj);
    console.log(response);

}
validateInput(
    {
        email : "sahilthool12@gmail.com",
        password : "123456789"
    }
)





/*  output


PS E:\0 to 100\Week 3.1> node exampleofzod2.js
{ success: false, error: [Getter] }
PS E:\0 to 100\Week 3.1> node exampleofzod2.js
{ success: false, error: [Getter] }
PS E:\0 to 100\Week 3.1> node exampleofzod2.js^C
PS E:\0 to 100\Week 3.1> node exampleofzod2.js
{ success: false, error: [Getter] }
PS E:\0 to 100\Week 3.1> node "e:\0 to 100\Week 3.1\exampleofzod2.js"
{
  success: true,
  data: { email: 'sahilthool@gmail.com', password: '123456789' }
}
PS E:\0 to 100\Week 3.1> node "e:\0 to 100\Week 3.1\exampleofzod2.js"
{
  success: true,
  data: { email: 'sahilthool12@gmail.com', password: '123456789' }
}
PS E:\0 to 100\Week 3.1> 
*/