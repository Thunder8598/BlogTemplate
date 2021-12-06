<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Exception;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function getAll()
    {
        try {
            return [
                "status" => "sucesso",
                "data" => Category::get(["id_categoria as id", "titulo"])
            ];
        } catch (Exception $e) {
            return response([
                "status" => "erro"
            ], 500);
        }
    }
}
