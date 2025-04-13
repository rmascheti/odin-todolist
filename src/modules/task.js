export class Task {
  constructor(taskName, taskDescription, taskPriority, taskDeadline) {
    this.taskName = taskName; 
    this.taskDescription = taskDescription;
    this.taskGroup = this.taskGroup;
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
