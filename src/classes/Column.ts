import { Task } from "./Task";

export class Column {
    id: string;
    name: string;
    type: string;
    children: Task[] = [];

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.type = "container";
    }

    addNewTask(task: Task) {
        this.children.push(task)
    }

    removeTaskById(taskId: number) {
        this.children = this.children.filter(c => c.id !== taskId)
    }

    renameColumnName(name: string) {
        this.name = name
    }
}