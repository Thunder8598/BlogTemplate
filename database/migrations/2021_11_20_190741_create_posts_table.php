<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id("id_post");
            $table->char("titulo", 100);
            $table->char("resumo", 255);
            $table->string("conteudo", 10000);
            $table->char("url_img", 255);
            $table->foreignId("id_user");
            $table->foreignId("id_categoria")->nullable();
            $table->boolean("is_destaque")->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
