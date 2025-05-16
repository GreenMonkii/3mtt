const items = [];

const addItem = (item) => {
    items.push(item);
};

const getAllItems = () => {
    return items;
};

const getItemById = (id) => {
    return items.find(item => item.id === id);
};

const updateItem = (id, updatedItem) => {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items[index] = { ...items[index], ...updatedItem };
        return true;
    }
    return false;
};

const deleteItem = (id) => {
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
        items.splice(index, 1);
        return true;
    }
    return false;
};

module.exports = {
    addItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem
};