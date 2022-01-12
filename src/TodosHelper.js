const getNextId = (todos) => {
    const lastItem = todos[todos.length - 1];
    const nextId = lastItem === undefined ? 1 : lastItem.id + 1;
    return nextId;
};

const getTodos = () => {
    return fetch(`https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw`).then((response) =>
        response.json()
    )
};

export { getNextId, getTodos };