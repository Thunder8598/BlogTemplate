<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("users")->insert([
            "nome" => "Caique Daniel",
            "email" => "teste@teste.com.br",
            "senha" => Hash::make("123456"),
            "created_at" => date("Y-m-d H:i:s")
        ]);
    }
}
