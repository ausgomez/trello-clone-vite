export class Task {
    type: string;
    id: number;
    number: number;
    data: string;

    constructor(type: string, id: number, number: number, data: string) {
        this.type = type;
        this.id = id;
        this.number = number;
        this.data = data;
    }
}