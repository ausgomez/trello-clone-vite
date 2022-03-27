import { defineStore } from "pinia";
import { columns } from "../data.json";
import { Task } from "../classes/Task";
import { Column } from "../classes/Column";

export const useBoardStore = defineStore("board", {
    state: () => ({
        _columns: <Column[]>[],
    }),
    getters: {
        columns: (state) => state._columns,
        columnById: (state) => {
            return (columnId: string) => state._columns.find(col => col.id === columnId)
        },
        getTasksByColumnId: (state) => {
            return (columnId: string) => state._columns.find(col => col.id === columnId)?.children
        }
    },
    actions: {
        fetchColumns() {
            for (const col of columns) {
                const newCol = new Column(col.id, col.name)
                col.children.forEach(t => {
                    const task = new Task(t.data)
                    newCol.addNewTask(task);
                })
                this._columns.push(newCol);
            }
        },
        updateColumnsWithNewChanges(columns: Column[]) {
            this._columns = columns
        },
        updateTasksInColumnById(columnId: string, tasks: Task[]) {
            const columnIndex = this._columns.findIndex(c => c.id == columnId);
            if (columnIndex != undefined) {
                this._columns[columnIndex].children = tasks
            }
        },
        addNewTaskToColumnById(columnId: string, task: Task) {
            const columnIndex = this._columns.findIndex(c => c.id == columnId);
            task.data = task.data.trim()
            if (columnIndex != undefined) {
                const newTasks = [...this.columns[columnIndex].children, task]

                this.updateTasksInColumnById(columnId, newTasks)
            }
        }
    },
});
