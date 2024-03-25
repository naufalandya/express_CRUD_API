const pool = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const getProducts = async () => {
    try {
        const client = await pool.connect();

        const result = await client.query('SELECT * FROM products');

        client.release();

        if (result.rows){
            //console.log(result.rows);
            return result.rows
        } else {
            //console.log({ message : "Data is not Found "})
            return { message : "Data is not Found "}
        }

    } catch (error) {
        return { success: false, message: error.message };
    }
}

const getProductsById = async (param) => {
    try {
        const client = await pool.connect();
        const productID = await client.query('SELECT * FROM products WHERE id = $1', [param]);

        client.release();

        if (productID.rows.length > 0) {
            //console.log(productID.rows);
            return productID.rows;
        } else {
            //console.log({ message: "Data is not found" });
            return { message: "Data is not found" };
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
}

const deleteProductById = async (param) => {
    try {
        const client = await pool.connect();
        
        const productCheck = await client.query('SELECT * FROM products WHERE id = $1', [param]);
        if (productCheck.rows.length === 0) {
            client.release();
            return { success: false, message: "Product not found" };
        }

        await client.query('DELETE FROM products WHERE id = $1', [param]);
        client.release();
        
        return { success: true, message: "Product deleted successfully" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

const createProduct = async (param) => {
    try {
        const client = await pool.connect();
        
        const productId = uuidv4();

        await client.query('INSERT INTO products (id, name, price, category, is_available) VALUES ($1, $2, $3, $4, $5)',
            [productId, param.name, param.price, param.category, param.is_available]);
        
        client.release();
        
        return { success: true, message: "Product created successfully", productId };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

/*
createProduct({
    name : "Baju Bekas",
    price : 500,
    category : "Clothing",
    is_available : true,
})
*/

const updateProductById = async (productId, updatedProduct) => {
    try {
        const client = await pool.connect();

        const existingProduct = await client.query('SELECT * FROM products WHERE id = $1', [productId]);
        if (existingProduct.rows.length === 0) {
            client.release();
            return { success: false, message: "Product not found" };
        }

        await client.query('UPDATE products SET name = $1, price = $2, category = $3, is_available = $4 WHERE id = $5',
            [updatedProduct.name, updatedProduct.price, updatedProduct.category, updatedProduct.is_available, productId]);

        client.release();

        return { success: true, message: "Product updated successfully" };
    } catch (error) {
        return { success: false, message: error.message };
    }
}


module.exports = {getProducts, getProductsById, deleteProductById, createProduct, updateProductById};