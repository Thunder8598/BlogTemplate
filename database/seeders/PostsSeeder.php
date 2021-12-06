<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table("posts")->insert([
            "titulo" => "4 DICAS PARA VOCÊ ESCOLHER O COMEDOURO IDEAL PARA O SEU PET",
            "resumo" => "A preocupação com a alimentação do seu pet vai além da escolha da ração. O tipo de comedouro é fundamental para estabelecer uma rotina adequada, melhorar o comportamento do cão e até prevenir doenças.",
            "conteudo" => "A preocupação com a alimentação do seu pet vai além da escolha da ração. O tipo de comedouro é fundamental para estabelecer uma rotina adequada, melhorar o comportamento do cão e até prevenir doenças. Para te ajudar nesta tarefa, a Allure Pets conversou com o Dr. Renato Zonzini Bocabello, médico veterinário, mestre em  Anatomia e Cirurgia de Animais Domésticos e Silvestres pela Faculdade de Medicina Veterinária e Zootecnia da Universidadede São Paulo (USP)  e sócio fundador da Nato Center Vet sobre os tipos de comedouros e alguns fatores que devem ser levados em consideração ao escolher o objeto para o seu melhor amigo.
            Confira:
            
            1.     1. Escolha o tamanho do comedouro com base no porte do animal
            
            A primeira característica que deve ser levada em conta na hora de escolher o comedouro é o porte, ou seja, o tamanho e peso do seu animal. Para animais menores, filhotes ou de raças de pequeno porte (até 10 kg), é recomendado um pote mais baixo e tamanho P, como o próprio comedouro tradicional, que tem o formato de uma tigela.",
            "url_img" => "https://1.bp.blogspot.com/-To7XB3AOiMU/YL--xecU1LI/AAAAAAAAAI4/YJtWjusJVJsMEtdJFEFSXk5_MxCt7PH_wCLcBGAsYHQ/s320/WhatsApp%2BImage%2B2021-06-08%2Bat%2B16.00.51%2B%25281%2529.jpeg",
            "id_user" => 1,
            "id_categoria" => 1,
            "created_at" => date("Y-m-d H:i:s"),
            "is_destaque" => 1
        ]);


        DB::table("posts")->insert([
            "titulo" => "COISAS QUE TODO DONO DE PET JÁ PASSOU",
            "resumo" => "A preocupação com a alimentação do seu pet vai além da escolha da ração. O tipo de comedouro é fundamental para estabelecer uma rotina adequada, melhorar o comportamento do cão e até prevenir doenças.",
            "conteudo" => "A preocupação com a alimentação do seu pet vai além da escolha da ração. O tipo de comedouro é fundamental para estabelecer uma rotina adequada, melhorar o comportamento do cão e até prevenir doenças. Para te ajudar nesta tarefa, a Allure Pets conversou com o Dr. Renato Zonzini Bocabello, médico veterinário, mestre em  Anatomia e Cirurgia de Animais Domésticos e Silvestres pela Faculdade de Medicina Veterinária e Zootecnia da Universidadede São Paulo (USP)  e sócio fundador da Nato Center Vet sobre os tipos de comedouros e alguns fatores que devem ser levados em consideração ao escolher o objeto para o seu melhor amigo.
            Confira:
            
            1.     1. Escolha o tamanho do comedouro com base no porte do animal
            
            A primeira característica que deve ser levada em conta na hora de escolher o comedouro é o porte, ou seja, o tamanho e peso do seu animal. Para animais menores, filhotes ou de raças de pequeno porte (até 10 kg), é recomendado um pote mais baixo e tamanho P, como o próprio comedouro tradicional, que tem o formato de uma tigela.",
            "url_img" => "https://1.bp.blogspot.com/-To7XB3AOiMU/YL--xecU1LI/AAAAAAAAAI4/YJtWjusJVJsMEtdJFEFSXk5_MxCt7PH_wCLcBGAsYHQ/s320/WhatsApp%2BImage%2B2021-06-08%2Bat%2B16.00.51%2B%25281%2529.jpeg",
            "id_user" => 1,
            "id_categoria" => 1,
            "created_at" => date("Y-m-d H:i:s"),
            "is_destaque" => 1
        ]);


        DB::table("posts")->insert([
            "titulo" => "5 SINAIS QUE SEU GATO ESTÁ ENTEDIADO",
            "resumo" => "A preocupação com a alimentação do seu pet vai além da escolha da ração. O tipo de comedouro é fundamental para estabelecer uma rotina adequada, melhorar o comportamento do cão e até prevenir doenças.",
            "conteudo" => "A preocupação com a alimentação do seu pet vai além da escolha da ração. O tipo de comedouro é fundamental para estabelecer uma rotina adequada, melhorar o comportamento do cão e até prevenir doenças. Para te ajudar nesta tarefa, a Allure Pets conversou com o Dr. Renato Zonzini Bocabello, médico veterinário, mestre em  Anatomia e Cirurgia de Animais Domésticos e Silvestres pela Faculdade de Medicina Veterinária e Zootecnia da Universidadede São Paulo (USP)  e sócio fundador da Nato Center Vet sobre os tipos de comedouros e alguns fatores que devem ser levados em consideração ao escolher o objeto para o seu melhor amigo.
            Confira:
            
            1.     1. Escolha o tamanho do comedouro com base no porte do animal
            
            A primeira característica que deve ser levada em conta na hora de escolher o comedouro é o porte, ou seja, o tamanho e peso do seu animal. Para animais menores, filhotes ou de raças de pequeno porte (até 10 kg), é recomendado um pote mais baixo e tamanho P, como o próprio comedouro tradicional, que tem o formato de uma tigela.",
            "url_img" => "https://1.bp.blogspot.com/-To7XB3AOiMU/YL--xecU1LI/AAAAAAAAAI4/YJtWjusJVJsMEtdJFEFSXk5_MxCt7PH_wCLcBGAsYHQ/s320/WhatsApp%2BImage%2B2021-06-08%2Bat%2B16.00.51%2B%25281%2529.jpeg",
            "id_user" => 1,
            "id_categoria" => 1,
            "created_at" => date("Y-m-d H:i:s")
        ]);

        DB::table("posts")->insert([
            "titulo" => "POR QUE OS CACHORROS CAVAM?",
            "resumo" => "A preocupação com a alimentação do seu pet vai além da escolha da ração. O tipo de comedouro é fundamental para estabelecer uma rotina adequada, melhorar o comportamento do cão e até prevenir doenças.",
            "conteudo" => "A preocupação com a alimentação do seu pet vai além da escolha da ração. O tipo de comedouro é fundamental para estabelecer uma rotina adequada, melhorar o comportamento do cão e até prevenir doenças. Para te ajudar nesta tarefa, a Allure Pets conversou com o Dr. Renato Zonzini Bocabello, médico veterinário, mestre em  Anatomia e Cirurgia de Animais Domésticos e Silvestres pela Faculdade de Medicina Veterinária e Zootecnia da Universidadede São Paulo (USP)  e sócio fundador da Nato Center Vet sobre os tipos de comedouros e alguns fatores que devem ser levados em consideração ao escolher o objeto para o seu melhor amigo.
            Confira:
            
            1.     1. Escolha o tamanho do comedouro com base no porte do animal
            
            A primeira característica que deve ser levada em conta na hora de escolher o comedouro é o porte, ou seja, o tamanho e peso do seu animal. Para animais menores, filhotes ou de raças de pequeno porte (até 10 kg), é recomendado um pote mais baixo e tamanho P, como o próprio comedouro tradicional, que tem o formato de uma tigela.",
            "url_img" => "https://1.bp.blogspot.com/-To7XB3AOiMU/YL--xecU1LI/AAAAAAAAAI4/YJtWjusJVJsMEtdJFEFSXk5_MxCt7PH_wCLcBGAsYHQ/s320/WhatsApp%2BImage%2B2021-06-08%2Bat%2B16.00.51%2B%25281%2529.jpeg",
            "id_user" => 1,
            "id_categoria" => 1,
            "created_at" => date("Y-m-d H:i:s")
        ]);
    }
}
