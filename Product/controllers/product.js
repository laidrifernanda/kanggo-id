const express = require("express");
const mongoose = require("mongoose");

const Product = require("../models/productdata.js");

const router = express.Router();

const getproduct = async (req, res) => {
  try {
    const product = await Product.find();

    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createproduct = async (req, res) => {
  console.log(req.body);
  const newproduct = new Product({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  try {
    await newproduct.save();

    res.status(201).json(newproduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateproduct = async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findOneAndUpdate(
      {
        id: id,
      },
      {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
      }
    );
    res.status(202).json({ id: id });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const deleteproduct = async (req, res) => {
  const id = req.params.id;

  try {
    await Product.findOneAndRemove({ id: id });
    res.status(203).json({ id: id });
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
};

module.exports.getproduct = getproduct;
module.exports.createproduct = createproduct;
module.exports.getspecProduct = getspecProduct;
module.exports.updateproduct = updateproduct;
module.exports.deleteproduct = deleteproduct;
