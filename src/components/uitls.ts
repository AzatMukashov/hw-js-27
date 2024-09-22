export const createArray = () => {
    const array = [];
    for (let i = 0; i < 36; i++) {
        array.push({hasItem: false, clicked: false});
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    array[randomIndex].hasItem = true;
    return array;
}