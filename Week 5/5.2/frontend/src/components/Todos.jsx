/*//writtne by me.
//here we have to export a function
export function Todos({todos}) {
    return <div>
            {todos.map(function(todo){
                return <div>
                    <h1> {todo.title} </h1>
                    <h2> {todo.description} </h2>
                    <button> {todo.completed == true ? "Completed": "Mark as compelte"} </button>
                    </div>
            })}
        </div>
    
}
*/





export function Todos({todos}) {

    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}








//we will not have this as static we  will have dynamically number of todos will get updated.
//we need to take all the todos as an input in a props variable and do something like const todos = props.todos;
//or the more modern syntax is object destructuring => export function Todos(todos) {...} , 
//here we are passing all the todos as an input. Where todos will be an array
//array will look something like this: 
/*
todos = [
    {
        title: "go to gym",
        description: "description for going to gym"
    }
]
*/    

// next we need to render all the elements of the array 
//             return (
//             <div>
//             <h1>Go to gym</h1>
//             <h2>You need go to the gym</h2>
//             <button>Mark as completed</button>
//             </div>

// using new syntax above => return(<div>Body </div>)

