<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostsController extends Controller
{
    public function getPost($id)
    {

        try {
            $response = Post::getByID($id);

            if (empty($response))
                return response(null, 404);

            return response()->json($response);
        } catch (Exception $e) {
            return response(null, 403);
        }
    }

    public function getListagemPosts(Request $request)
    {
        $page = $request->page;
        $limit = $request->limit;

        $offset = (((int) $page) - 1);

        try {
            $response = Post::getLista($offset, ((int)($limit ?? 20)));

            return response()->json($response);
        } catch (Exception $e) {
            return response(null, 404);
        }
    }

    public function getListagemPostsPesquisa(Request $request)
    {
        $search = $request->search;
        $page = $request->page;
        $limit = $request->limit;

        $offset = (((int) $page) - 1);

        try {
            $response = Post::getByTitulo($search, $offset, ((int)($limit ?? 20)));

            return response()->json($response);
        } catch (Exception $e) {
            return response(null, 404);
        }
    }

    public function createPost(Request $request)
    {
        $errorResponse = $this->validateForm($request);

        if (!empty($errorResponse))
            return $errorResponse;

        if (empty($request->session()->get("id")))
            return response()->json([
                "status" => "erro",
                "mensagem" => "Usuário não autenticado"
            ], 403);

        try {
            $post = new Post([
                "titulo" => $request->titulo,
                "resumo" => $request->resumo,
                "conteudo" => $request->conteudo,
                "url_img" => $request->imagem->store("public/imagens"),
                "id_user" => $request->session()->get("id"),
                "id_categoria" => $request->idCategoria
            ]);

            $post->save();

            return response()->json([
                "status" => "sucesso",
                "mensagem" => "Post cadastrado com sucesso"
            ]);
        } catch (Exception $e) {
            return response()->json([
                "status" => "erro",
                "mensagem" => $e->getMessage()
            ], 500);
        }
    }

    private function validateForm(Request $request)
    {
        $rules = [
            "titulo" => "required",
            "resumo" => "required",
            "conteudo" => "required",
            "imagem" => "required",
            "idCategoria" => "required"
        ];

        $messages = [
            "titulo.required" => "Por favor insira o título.",
            "resumo.required" => "Por favor insira o resumo.",
            "conteudo.required" => "Por favor insira a conteudo.",
            "imagem.required" => "Por favor insira uma imagem.",
            "idCategoria.required" => "Por favor selecione uma categoria"
        ];

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->stopOnFirstFailure()->fails()) {

            $errors = $validator->errors()->getMessages();

            return response()->json([
                "status" => "erro",
                "mensagem" => array_pop($errors)[0]
            ], 403);
        }
    }
}
