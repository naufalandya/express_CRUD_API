const express = require("express");
const router = express.Router();
const { getProducts, getProductsById, deleteProductById, createProduct, updateProductById } = require("../model/products");

router.use(express.json());

router.get("/", async (req, res) => {
    try {
        const products = await getProducts();
        res.status(201).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await getProductsById(productId);
        if (product) {
            res.status(201).json(product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    const productId = req.params.id;
    try {
        const result = await deleteProductById(productId);
        if (result.success) {
            res.status(201).json({ message: "Product deleted successfully" });
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    const { name, price, category, is_available } = req.body;
    const newProduct = { name, price, category, is_available };
    try {
        const result = await createProduct(newProduct);
        if (result.success) {
            res.status(201).json({ message: "Product created successfully", productId: result.productId });
        } else {
            res.status(400).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    const productId = req.params.id;
    const { name, price, category, is_available } = req.body;
    const updatedProduct = { name, price, category, is_available };

    try {
        const result = await updateProductById(productId, updatedProduct);
        if (result.success) {
            res.json({ message: "Product updated successfully" });
        } else {
            res.status(404).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
