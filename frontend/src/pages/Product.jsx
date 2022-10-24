import axios from "axios";
import React from "react";
import { useState } from "react";
import Input from "../components/Input";

export default function Product() {
  const [source, setSource] = useState("");
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState('')
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file)
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSource(reader.result);
    };
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!source) return
    sendToServer()
  }

  const sendToServer = async () =>{
    try{
      const res = await axios.post("http://localhost:5000/add-category", {
        name,
        desc,
        pic: source,
      });
      console.log(res.data)
    }catch(err){
      console.log(err)
    }
  }



  return (
    <div>
      <h1>add category</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="pic"
          value={fileInputState}
          onChange={handleFileInputChange}
        />
        <Input
          label="category name"
          labelText="category name"
          type="text"
          name="name"
          id="name"
          placeholder=""
          state= {(e) => setName(e.target.value)}
        />
        <div className="">
          <label htmlFor="desc">description</label>
          <textarea name="desc" id="desc" cols="30" rows="10" onChange={(e) => setDesc(e.target.value)}></textarea>
        </div>
        <button>add product</button>
      </form>
      {source && <img src={source} style={{ height: "300px" }} />}
    </div>
  );
}
