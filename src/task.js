export class Task {
  constructor(taskName, taskDescription, taskPriority, taskDeadline) {
    this.taskName = taskName; 
    this.taskDescription = taskDescription;
    this.taskPriority = taskPriority;
    this.taskDeadline = taskDeadline;
    this.taskCompleted = false;
  }
  getTaskName(){
    return this.taskName;
  }
  getTaskDescription(){
    return this.taskDescription;
  }
}
