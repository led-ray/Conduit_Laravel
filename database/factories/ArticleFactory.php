<?php

namespace Database\Factories;

use App\Models\Article;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ArticleFactory extends Factory
{
    /**
     * 記事生成
     *
     * @var string
     */
    protected $model = Article::class;

    /**
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'description' =>  $this->faker->realText(30),
            'body' => $this->faker->paragraph,
        ];
    }
}