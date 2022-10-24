import React from 'react'
import useFetch from '../hooks/useFetch'
import ReactMarkdown from 'react-markdown'
export default function Home() {
    const {data:category, err} = useFetch('http://localhost:5000/view-categories')
      const markdown = `
  # Header 1
  ## Header 2

  _italic_

  **bold**

  <b>bold Html</b>
  `;

  return (
      <div>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      {category &&
        category.map((c) => (
          <div key={c.slug}>
            <p>{c.name}</p>
            <img src={c.pic} alt="" style={{ height: "200px" }} />
            <ReactMarkdown>{c.desc}</ReactMarkdown>
          </div>
        ))}
    </div>
  );
}
