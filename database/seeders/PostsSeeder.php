<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 50; $i++) {
            DB::table("posts")->insert([
                "titulo" => Str::random(),
                "resumo" => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet eros mauris, ac pulvinar tellus tincidunt quis. Aenean ac finibus augue, eu consectetur dui. Ut euismod dignissim laoreet. In ut nisi semper, sollicitudin libero et, accumsan nibh.",
                "conteudo" => "<p>&nbsp;</p>
                <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nulla imperdiet eros mauris, ac pulvinar tellus tincidunt quis. Aenean ac finibus augue, eu consectetur dui. Ut euismod dignissim laoreet. In ut nisi semper, sollicitudin libero et, accumsan nibh. Maecenas fringilla vehicula dictum. Proin efficitur vestibulum aliquet. Proin mollis, ipsum sit amet aliquet tristique, eros leo lacinia dui, sed sodales nunc dui nec ligula. Sed lorem purus, facilisis eget maximus vel, consectetur sed nulla. Ut sagittis aliquet molestie. Nunc dictum metus dui, nec eleifend nisi rutrum vel.</p>
                <p>Praesent a metus nulla. Morbi vitae finibus orci. Sed non libero orci. Suspendisse nec consectetur odio. Nullam ut ex vitae sem eleifend viverra. In lectus purus, imperdiet id placerat sed, aliquet ac nulla. Sed elementum magna mi, a imperdiet ex vestibulum at.</p>
                <p>Donec cursus posuere nisi, at tincidunt nisi fermentum sit amet. <em>Phasellus a dictum felis</em>. Nunc congue, lacus ut facilisis cursus, sapien eros fermentum urna, sit amet pulvinar tortor sem vel metus. Mauris eget orci mollis, porta mi at, consectetur metus. Sed tincidunt, enim at efficitur consectetur, tellus leo pharetra elit, vehicula vulputate ligula velit non nisl. Mauris a arcu vel elit porttitor pharetra. Curabitur pellentesque libero eu magna varius luctus. Sed sodales urna sed dolor tempor gravida. Vestibulum nisl nulla, porta sed ornare et, ornare a quam.</p>
                <p>Quisque facilisis magna eu dapibus vulputate. In ut nisi aliquet, ullamcorper est vel, rhoncus elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In malesuada nibh at leo dapibus, at dapibus neque ullamcorper. Suspendisse id auctor odio. Nulla posuere sem magna, in euismod odio blandit id. Maecenas dictum risus dolor, a faucibus tortor iaculis ut. Proin luctus lobortis nisl ac ultricies.</p>
                <p><br></p>
                <ol>
                  <li>&nbsp;<strong>Lorem Ipsum</strong>&nbsp;</li>
                  <li>&nbsp;<strong>Lorem Ipsum</strong>&nbsp;</li>
                </ol>",
                "url_img" => "public/imagens/oahYm98w19dZH08hGHgf40sl0OCbtgQefDeVwM6X.png",
                "id_user" => 1,
                "id_categoria" => 1,
                "created_at" => date("Y-m-d H:i:s"),
                "is_destaque" => $i < 6 ? 1 : 0
            ]);
        }
    }
}
