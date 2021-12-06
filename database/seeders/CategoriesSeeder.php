<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("categories")->insert([
            "titulo"=>"Categoria 1"
        ]);

        DB::table("categories")->insert([
            "titulo"=>"Categoria 2"
        ]);

        DB::table("categories")->insert([
            "titulo"=>"Categoria 3"
        ]);
    }
}
