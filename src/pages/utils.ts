

export function applyDrag(arr: any, dragResult: any) {
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null || addedIndex === null) return arr;

    console.log(arr[removedIndex].data, "->", arr[addedIndex].data);
    console.log(removedIndex, "->", addedIndex);

    const result = [...arr];
    let itemToAdd = payload;

    if (removedIndex !== null) {
        // get the element that will be moved
        // and remove it from the array
        itemToAdd = result.splice(removedIndex, 1)[0];
    } else {
        console.log("removedIndex null")
    }

    if (addedIndex !== null) {
        // adds the itemAdd into the addedIndex position
        result.splice(addedIndex, 0, itemToAdd);
    } else {
        console.log("addedIndex null")
    }

    // returns the new list
    return result;
};


export const log = (...params: any[]) => {
    // console.log(...params);
}

export const dragStart = (e: any) => {
    console.log("drag started", e);
}