import mongoose, { mongo } from "mongoose";
import slugify from "slugify";
import createDomPurify from 'dompurify'
import {JSDOM} from 'jsdom'
import { marked } from "marked";
const dompurify = createDomPurify(new JSDOM().window)


const product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  desc:{
    type: String,
    required: true,
  },
  tag: String,
  pic: String,
  slug:{
    type: String,
    required: true,
    unique: true,
  },
  sanitizeHtml:{
    type: String,
    required: true
  },
  category:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    }
},{timestamps:true});

product.pre('validate', function(next){
    if(this.name){
        this.slug = slugify(this.name, {lower:true,strict:true})
    }

    if(this.desc){
        this.sanitizeHtml =dompurify.sanitize(marked(this.desc))
    }
    next()
})

const Product = mongoose.model("Product", product);

export default Product;
