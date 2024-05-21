//    export default function Todo ({task}){
//     return(
//         <li> Task : {task} </li>
//     )
// }

// Condition Rendering Option--------->01
// export default function Todo ({task,isDone}){
//     if(isDone === true ){
//         return <li> Finished : {task} </li>
//     }
//     else{
//         return <li>Work One : {task} </li>
//     }
// }


// Condition Rendering Option--------->02
// export default function Todo ({task,isDone}){
//     if(isDone === true ){
//         return <li> Finished : {task} </li>
//     }
//         return <li>Work One : {task} </li>
// }


// Conditional Rendering Option(Ternary Operator)----------> 03
//  export default function Todo ({task, isDone}){
//  if(isDone === true){
//     return <li>{isDone ? "Finished" : " Incomplete"} : {task}</li>
//  }
//  return <li>{isDone ? "Finished" : " Incomplete"} : {task}</li>

// }


// Conditional Rendering Option(AND)----------> 04
// export  default function Todo ({task, isDone}){
//  return(<li>{task} {isDone && ': Done'}</li>) 
// }


// Conditional Rendering Option(OR ||)----------> 05
export default function Todo ({task, isDone}){
    return (<li>{task} {isDone || ': Do It'}</li>)
}
