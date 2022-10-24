import Category from "../models/category.js";
import Product from "../models/product.js";

export const add_category = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.json(category);
  } catch (err) {
    res.json(err);
  }
};



export const view_category = async (req, res, next) => {
  try {
    const category = await Category.find({ slug: req.params.slug });
    res.json(category);
  } catch (err) {
    res.json(err);
  }
};

export const update_product = async (req, res, next) => {
  try {
    const category = await category.findOneAndUpdate(
      { slug: req.params.slug },
      req.body
    );
    res.json(p);
  } catch (err) {
    res.json(err);
  }
};

export const delete_category = async (req, res, next) => {
  try {
    const category = await Category.findOneAndDelete({ slug: req.params.slug });
    res.json(category);
  } catch (err) {
    res.json(err);
  }
};

export const view_categories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.json(err);
  }
};


export const add_product = async (req, res, next) => {
  try {
    const product = new Product({
      name:req.body.name,
      desc: req.body.desc,
      tag: req.body.tag,
      pic: req.body.pic,
      category: req.params.id
    })
    await product.save()
    const category = await Category.findById(req.params.id);
    category.products.push(product)
    await category.save();
    res.json({ product, category });
  } catch (err) {
    res.json(err);
  }
};

export const view_products = async (req,res,next)=>{
      try{
        const p = await Product.find()
        res.json(p)
      }catch(err){
        res.json(err)
      }
}


export const update_product = async (req,res,next) =>{
  try{
    const p = await Product.findOneAndUpdate({slug:req.params.slug},(req.body))
    res.json(p)
  }catch(err){
    res.json(err)
  }
}

export const delete_product = async (req,res,next) =>{
  try{
    const p = await Product.findOneAndDelete({slug:req.params.slug})
    res.json(p)
  }catch(err){
    res.json(err)
  }
}