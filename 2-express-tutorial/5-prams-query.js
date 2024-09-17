//Builting api

const express = require('express')
const app = express()

const { products } = require('./data')

app.get('/', (req, res) => {
    res.send(`
        <h1>Here is the Home Page</h1>
        <a href="/api/products">Products</a>
        `)
})

app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProduct)
})

app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params

    const singleProduct = products.find(
        (product) => product.id === Number(productId))

    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist!')
    }
    return res.json(singleProduct)
})

app.get('/api/v1/query', (req, res) => {
    let sortedProducts = [...products] //make copy

    const { search, limit } = req.query

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(sortedProducts.length < 1){
        return res.status(200).json({status : true , data : []})
    }

    res.json(sortedProducts)
})


app.listen(5000, () => {
    console.log('server listening on port 5000...');
})