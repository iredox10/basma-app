import mongoose, { mongo } from "mongoose";
import slugify from "slugify";
import createDomPurify from "dompurify";
import { JSDOM } from "jsdom";
import { marked } from "marked";
const dompurify = createDomPurify(new JSDOM().window);

const category = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  pic: String,
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  sanitizeHtml: {
    type: String,
    required: true,
  },
  products:Array
});

category.pre("validate", function (next) {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }

  if (this.desc) {
    this.sanitizeHtml = dompurify.sanitize(marked(this.desc));
  }
  next();
});

const Category = mongoose.model("Category", category);

export default Category;
