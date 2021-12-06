<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function login(Request $request)
    {

        $rules = [
            "email" => "required|email",
            "senha" => "required"
        ];

        $messages = [
            "email.required" => "Por favor insira o e-mail.",
            "email.email" => "Insira um e-mail válido.",
            "senha.required" => "Por favor insira a senha.",
            "senha.password" => "Insira uma senha válida."
        ];

        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->stopOnFirstFailure()->fails()) {

            $errors = $validator->errors()->getMessages();

            return response()->json([
                "status" => "erro",
                "error" => array_pop($errors)[0]
            ], 403);
        }

        $user = User::validateLogin($request->email, $request->senha);

        if (empty($user))
            return response([
                "status" => "erro",
                "error" => "Senha e/ou e-mail invalidos"
            ], 403);

        $request->session()->put("id", $user->id_user);
        $request->session()->put("name", $user->nome);

        return response()->json(["status" => "sucesso", "teste" => $request->session()->all()], 200);
    }

    public function logoff(Request $request)
    {
        $request->session()->forget("id");
        $request->session()->forget("name");
    }

    public function getSession(Request $request)
    {
        if (empty($request->session()->get("id"))) {
            return response()->json([
                "status" => "erro",
                "mensagem" => "Usuario não autenticado."
            ], 403);
        }

        return response()->json([
            "status" => "sucesso"
        ]);
    }
}
