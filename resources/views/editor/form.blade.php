@extends('layout')

@section('content')

<div class="container page">
  <div class="row">
    <div class="col-md-10 offset-md-1 col-xs-12">
      <ul class="error-messages">
        <li>That title is required</li>
      </ul>

      <form method="POST" action="{{ route('articles.store') }}">
        @csrf
        <fieldset>
          <fieldset class="form-group">
            <input type="text" class="form-control form-control-lg" id="title" name="title" placeholder="Article Title" />
          </fieldset>
          <fieldset class="form-group">
            <input type="text" class="form-control" id="description" name="description" placeholder="What's this article about?" />
          </fieldset>
          <fieldset class="form-group">
            <textarea
              id="body"
              name="body"
              class="form-control"
              rows="8"
              placeholder="Write your article (in markdown)"
            ></textarea>
          </fieldset>
          <fieldset class="form-group">
            <input type="text" class="form-control" placeholder="Enter tags" />
            <div class="tag-list">
              <span class="tag-default tag-pill"> <i class="ion-close-round"></i> tag </span>
            </div>
          </fieldset>
          <button class="btn btn-lg pull-xs-right btn-primary"  type="submit">
            Publish Article
          </button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
@endsection