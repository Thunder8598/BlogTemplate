<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\CategoriesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [Controller::class, "index"]);
Route::get('/busca', [Controller::class, "index"]);
Route::get("/artigo/{id?}", [Controller::class, "index"]);
Route::get("/admin/login", [Controller::class, "index"]);

Route::post("/admin/auth/login", [LoginController::class, "login"]);
Route::get("/admin/auth/logoff", [LoginController::class, "logoff"]);
Route::get("/admin/auth/getsession", [LoginController::class, "getSession"]);

Route::get("/admin", [Controller::class, "index"]);

Route::post("/data/artigo/criar", [PostsController::class, "createPost"]);
Route::get("/data/artigo/listar", [PostsController::class, "getListagemPosts"]);
Route::get("/data/artigo/listar/destaques", [PostsController::class, "getListagemPostsDestaque"]);
Route::get("/data/artigo/carregar/{id}", [PostsController::class, "getPost"]);
Route::get("/data/artigo/pesquisar", [PostsController::class, "getListagemPostsPesquisa"]);

Route::get("/data/categoria/listar", [CategoriesController::class, "getAll"]);

//Route::get("/artigo/carregar/{id}",[PostsController::class,"getListagemPosts"]);
