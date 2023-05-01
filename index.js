const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const chefData = require('./data/chefData.json');
app.use(cors());
app.get('/', (req, res) => {
    res.send('French food server is running');
})
app.get('/chefs', (req, res) => {
    res.send(chefData);
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefData.find(chef => chef.id == id)
    res.send(selectedChef);
})
app.listen(port, () => {
    console.log(`French Api is running on port: ${port}`);
})