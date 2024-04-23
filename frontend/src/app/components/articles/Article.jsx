"use client"

import React, { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useParams } from "next/navigation";

export default function Article(id) {
  const params = useParams();
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/articles/` + params.id);
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('error fetching article list', error);
      }
    };

    fetchData(); // データの取得
  }, [params.id]);

  const article = jsonData || {};
  const tags = article.tags || [];
  const comments = article.comments || [];

  return (
    <div className="container page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <div className="article-meta">
            <a href="/profile/eric-simons">
                <img src="http://i.imgur.com/Qr71crq.jpg" />
            </a>
            <div className="info">
                <a href="/profile/eric-simons" className="author">
                Eric Simons
                </a>
                <span className="date">
                {new Date(article.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round" />
                &nbsp; Follow Eric Simons <span className="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart" />
                &nbsp; Favorite Post <span className="counter">(29)</span>
            </button>
            <a
                href="{{ route('articles.edit', $article->id) }}"
                className="btn btn-sm btn-outline-secondary"
            >
                <i className="ion-edit" /> Edit Article
            </a>
            <form
                action="{{ route('articles.destroy', $article->id) }}"
                method="POST"
                onsubmit="return confirm('Are you sure?');"
            >
                <button
                type="submit"
                className="btn btn-sm btn-outline-danger"
                id="deletebtn"
                >
                <i className="ion-trash-a" /> Delete Article
                </button>
            </form>
            </div>

        </div>
      </div>
      
      <div className="container page">
        <div className="card-text">
          {article.body}
        </div>
        <div className="tags">
          <ul className="tag-list">
            {tags.map(tag => (
              <li key={tag.id} className="tag-default tag-pill tag-outline">
                {tag.name}
              </li>
            ))}
          </ul>
        </div>
        {comments.map((comment, index) => (
          <div key={index} className="card">
            <div className="card-block">
              <p className="card-text">{comment.body}</p>
            </div>
            <div className="card-footer">
              <a href="/profile/author" className="comment-author"></a>
              &nbsp;
              <a href="/profile/jacob-schmidt" className="comment-author">
                {comment.author}
              </a>
              <span className="date-posted">{comment.createdAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}