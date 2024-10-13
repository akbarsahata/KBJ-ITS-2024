const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

app.use((req, res) => {
    const randomData = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        country: faker.address.country()
    };
    
    res.json(randomData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});