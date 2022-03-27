function randomLorem() {
    const loremString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
    const randomLimit = Math.floor(Math.random() * loremString.length);
    const lorem = loremString.split(" ").slice(0, randomLimit);
    return lorem.join(" ")
}

export class Task {
    type: string = "draggable";
    id: number = Math.random() * 100;
    number: number = Math.random() * 100;
    data: string = randomLorem();
}