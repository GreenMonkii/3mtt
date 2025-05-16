class ItemsController {
    constructor() {
        this.items = [];
        this.currentId = 1;
    }

    getAllItems(req, res) {
        res.status(200).json(this.items);
    }

    getItemById(req, res) {
        const item = this.items.find(i => i.id === parseInt(req.params.id));
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    }

    createItem(req, res) {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ message: 'Name and description are required' });
        }
        const newItem = { id: this.currentId++, name, description };
        this.items.push(newItem);
        res.status(201).json(newItem);
    }

    updateItem(req, res) {
        const item = this.items.find(i => i.id === parseInt(req.params.id));
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ message: 'Name and description are required' });
        }
        item.name = name;
        item.description = description;
        res.status(200).json(item);
    }

    deleteItem(req, res) {
        const index = this.items.findIndex(i => i.id === parseInt(req.params.id));
        if (index === -1) {
            return res.status(404).json({ message: 'Item not found' });
        }
        this.items.splice(index, 1);
        res.status(204).send();
    }
}

module.exports = new ItemsController();