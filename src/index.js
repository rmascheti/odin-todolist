import "./styles.css";
import {Task} from "./task.js"
import {TaskList} from "./tasklist.js";



let taskList = new TaskList();


let task1 = new Task("Task 1", "Description 1", "High", "2023-10-01");
taskList.addTask(task1);
let task2 = new Task("Task 2", "Description 2", "Low", "2024-10-01");
taskList.addTask(task2);

let div = document.querySelector("#tasks");



div.textContent = taskList.getTasks()[1].getTaskDescription();