export async function getItems() {
    const request = await fetch('http://');
    const items = await request.json();

    return items;
}
export async function getItemsById(id) {
    const request = await fetch(http://localhost:); //ID
    const items = await request.json();
    return items;
}