export class Task {
    type: string = "draggable";
    id: number = Math.random() * 100;
    number: number = Math.random() * 100;
    data: string;

    constructor(data: string) {
        this.data = data;
    }
}