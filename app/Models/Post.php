<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = "posts";
    protected $primaryKey = "id_posts";

    protected $fillable = [
        "titulo",
        "resumo",
        "conteudo",
        "url_img",
        "id_user",
        "id_categoria"
    ];

    public static function getByID(int $id)
    {
        return Post::join("users", "users.id_user", "=", "posts.id_user")
            ->join("categories", "categories.id_categoria", "=", "posts.id_categoria")
            ->where(["id_post" => $id])
            ->first(["posts.id_post", "posts.titulo", "posts.url_img", "users.nome as autor", "categories.titulo as categoria", "posts.conteudo", "posts.resumo", "posts.created_at"]);
    }

    public static function getByTitulo(string $titulo, int $offset = 0, int $limit = 20)
    {
        return Post::join("users", "users.id_user", "=", "posts.id_user")
            ->join("categories", "categories.id_categoria", "=", "posts.id_categoria")
            ->where("posts.titulo", "like", $titulo . "%")
            ->orderBy("posts.id_post")
            ->offset(($offset > 0 ? $offset * $limit : 0))
            ->simplePaginate($limit, ["posts.id_post", "posts.titulo", "posts.resumo", "posts.url_img", "users.nome", "categories.titulo as categoria", "posts.is_destaque", "posts.created_at"]);
    }

    public static function getLista(int $offset = 0, int $limit = 20)
    {
        return Post::join("users", "users.id_user", "=", "posts.id_user")
            ->join("categories", "categories.id_categoria", "=", "posts.id_categoria")
            ->orderBy("posts.id_post", "DESC")
            ->offset(($offset > 0 ? $offset * $limit : 0))
            ->simplePaginate($limit, ["posts.id_post", "posts.titulo", "posts.resumo", "posts.url_img", "users.nome", "categories.titulo as categoria", "posts.is_destaque", "posts.created_at"]);
    }

    public static function getDestaque()
    {
        return Post::where(["is_destaque" => 1])
            ->join("users", "users.id_user", "=", "posts.id_user")
            ->join("categories", "categories.id_categoria", "=", "posts.id_categoria")
            ->orderBy("posts.id_post", "DESC")
            ->limit(5)->get(["posts.id_post", "posts.titulo", "posts.resumo", "posts.url_img", "users.nome", "categories.titulo as categoria", "posts.is_destaque", "posts.created_at"]);
    }
}
