

export function applyDrag(arr: any, dragResult: any) {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null || addedIndex === null) return arr;

    const result = [...arr];
    let itemToAdd = payload;

    if (removedIndex !== null) {
        // get the element that will be moved
        // and remove it from the array
        itemToAdd = result.splice(removedIndex, 1)[0];
    }

    if (addedIndex !== null) {
        // adds the itemAdd into the addedIndex position
        result.splice(addedIndex, 0, itemToAdd);
    }

    // returns the new list
    return result;
};


export const log = (...params: any[]) => {
    console.log(...params);
}

export const dragStart = (e: any) => {
    console.log("drag started", e);
}