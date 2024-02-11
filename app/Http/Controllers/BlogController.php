<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    /**
     * ホーム画面で記事一覧を表示する
     *  
     */
    public function showArticleList()
    {
        return view('home.list');
    }

    public function showEditor()
    {
        return view('editor.form');
    }

    public function showArticle()
    {
        return view('article.article');
    }
}