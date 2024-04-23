"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Editor() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // フォームのデフォルト送信を阻止
  
    try {
      const response = await fetch('http://localhost:8080/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          article: {
            title,
            description,
            body,
          },
          tags: tags // タグはコンマ区切りの文字列として送信
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      router.push('/'); 

    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-xs-12">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <fieldset className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset className="form-group">
                <textarea
                  id="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  className="form-control"
                  rows={8}
                  placeholder="Write your article (in markdown)"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Enter tags"
                />
              </fieldset>
              <button
                className="btn btn-lg pull-xs-right btn-primary"
                type="submit"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
