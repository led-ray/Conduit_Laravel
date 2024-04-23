import ArticleList from './components/home/ArticleList';

export default function Home() {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div class="row">
          <div class="col-md-9">
            <div class="feed-toggle">
              <ul class="nav nav-pills outline-active">
                  <li class="nav-item">
                      <a class="nav-link" href="/">Your Feed</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link active" href="/">Global Feed</a>
                  </li>
              </ul>
            </div>
            <ArticleList />
          </div>
        </div>
      </div>
    </div>
  );
}