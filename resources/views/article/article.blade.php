
@extends('layout')

@section('content')
<div class="banner">
  <div class="container">
    <h1>{{ $article->title }}</h1>

    <div class="article-meta">
      <a href="/profile/eric-simons"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
      <div class="info">
        <a href="/profile/eric-simons" class="author">Eric Simons</a>
        <span class="date">January 20th</span>
      </div>
      <button class="btn btn-sm btn-outline-secondary">
        <i class="ion-plus-round"></i>
        &nbsp; Follow Eric Simons <span class="counter">(10)</span>
      </button>
      &nbsp;&nbsp;
      <button class="btn btn-sm btn-outline-primary">
        <i class="ion-heart"></i>
        &nbsp; Favorite Post <span class="counter">(29)</span>
      </button>
      <button class="btn btn-sm btn-outline-secondary">
        <i class="ion-edit"></i> Edit Article
      </button>
      <button class="btn btn-sm btn-outline-danger">
        <i class="ion-trash-a"></i> Delete Article
      </button>
    </div>
  </div>
</div>

<div class="container page">

  <div class="card-text">
    <p>{{ $article->body }}</p>

  </div>

  <div class="tags">
    <ul class="tag-list">
          <li class="tag-default tag-pill tag-outline">realworld</li>
          <li class="tag-default tag-pill tag-outline">implementations</li>
    </ul>
  </div>

  <form class="card comment-form">
    <div class="card-block">
      <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
      <button class="btn btn-sm btn-primary">Post Comment</button>
    </div>  
  </form>

</div>

@endsection