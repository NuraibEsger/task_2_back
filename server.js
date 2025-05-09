const express = require('express');
const app = express();
const port = 3000;

const products = [
    { id: 1, name: 'Laptop', price: 1200, quantity: 10 },
    { id: 2, name: 'Phone', price: 800, quantity: 25 },
    { id: 3, name: 'Tablet', price: 500, quantity: 15 },
    { id: 4, name: 'Headphones', price: 150, quantity: 50 },
    { id: 5, name: 'Monitor', price: 300, quantity: 20 },
    { id: 6, name: 'Keyboard', price: 50, quantity: 40 },
    { id: 7, name: 'Mouse', price: 25, quantity: 60 },
    { id: 8, name: 'Smartwatch', price: 200, quantity: 30 },
    { id: 9, name: 'Camera', price: 1000, quantity: 8 },
    { id: 10, name: 'Speaker', price: 120, quantity: 35 }
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log(`API endpoint: http://localhost:${port}/products`);
});