export default function addTodoItem () {
    console.log(4);
    const task = prompt('task');
    const description = prompt('description');
    const dueDate = prompt('dueDate');
    const priority = prompt('priority');

    let itemDetails = [];
    
    itemDetails[0] = task;
    itemDetails[1] = description;
    itemDetails[2] = dueDate;
    itemDetails[3] = priority;

    return itemDetails;
}