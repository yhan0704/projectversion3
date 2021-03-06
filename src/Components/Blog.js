import React, { useState } from "react";
import projects from "../data/projects.json";

export default function Blog() {
  const [states] = useState(projects);
  return (
    <div className="blogTag" id="blog">
      <div className="blogContainer">
        <h1>Blogs</h1>
        <div className="contents">
          {states.blogs.map((blog) => (
            <div className="blogMap" key={blog.id}>
              <a
                style={{ textDecoration: "none", color: "black" }}
                rel="noopener noreferrer"
                href={blog.blogUrl}
                target="_blank"
              >
                <img src={blog.image} alt={blog.name} />
                <div className="subContents"></div>
              </a>
              <h3>
                <strong>{blog.name}</strong>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
