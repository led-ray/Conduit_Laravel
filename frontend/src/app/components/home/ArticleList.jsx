"use client"

import React, { useState, useEffect } from 'react';

export default function ArticleList() {
  const [jsonData, setJsonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 現在のページ番号を保持する状態

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch(`http://localhost:8080/api/list?page=${currentPage}`);
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error('error fetching article list', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const articles = jsonData.data || [];
  const totalPages = jsonData.last_page || 1; // 総ページ数

  // ページ遷移関数
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* 記事一覧 */}
      {articles.map(article => (
        <div key={article.id} className="article-preview">
          <div className="article-meta">
            <a href="/profile/eric-simons">
              <img src="http://i.imgur.com/Qr71crq.jpg" alt="Profile" />
            </a>
            <div className="info">
              <a href="/profile/eric-simons" className="author">
                Eric Simons
              </a>
              <span className="date">{new Date(article.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
              <i className="ion-heart" /> 29
            </button>
          </div>
          <a href={`/articles/${article.id}`} className="preview-link">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span>Read more...</span>
            <ul className="tag-list">
              {article.tags.map(tag => (
                <li key={tag.id} className="tag-default tag-pill tag-outline">
                  {tag.name}
                </li>
              ))}
            </ul>
          </a>
        </div>
      ))}
      {/* ページネーション */}
      <ul className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
          <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
            <button className="page-link" onClick={() => goToPage(pageNumber)}>
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
