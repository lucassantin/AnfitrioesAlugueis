import sqlite3

connection = sqlite3.connect('database.db')

with open('./schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

properties = [
    {
        "id": 1,
        "nome": "Apartamento 1",
        "preco": 350,
        "localizacao": "Florianópolis",
        "imagem": "https://i0.wp.com/jcmbienesraices.com/wp-content/uploads/2022/07/3-Departamento-preventa-Playa-Qro.jpg?w=2000&ssl=1"  # Imagem de um apartamento em Florianópolis
    },
    {
        "id": 2,
        "nome": "Apartamento 2",
        "preco": 450,
        "localizacao": "São Paulo",
        "imagem": "https://www.decorfacil.com/wp-content/uploads/2017/09/20170907decoracao-de-apartamento-36.jpg"  # Imagem de um apartamento em São Paulo
    },
    {
        "id": 3,
        "nome": "Apartamento 3",
        "preco": 450,
        "localizacao": "São Paulo",
        "imagem": "https://th.bing.com/th/id/OIP.J4pD4TrBkfTLTcPFaSQtVgHaEK?w=2000&h=1125&rs=1&pid=ImgDetMain"  # Imagem de um apartamento em São Paulo
    },
    {
        "id": 4,
        "nome": "Casa 1",
        "preco": 600,
        "localizacao": "Rio de Janeiro",
        "imagem": "https://th.bing.com/th/id/OIP.ae8lxWTtX8kM_N6fBnwoEQHaFZ?w=1024&h=746&rs=1&pid=ImgDetMain"  # Imagem de uma casa em Rio de Janeiro
    },
    {
        "id": 5,
        "nome": "Casa 2",
        "preco": 750,
        "localizacao": "Belo Horizonte",
        "imagem": "https://api.apto.vc/images/realties/71/enjoy-freguesia-do-o-apartamento-1.jpg"  # Imagem de uma casa em Belo Horizonte
    },
    {
        "id": 6,
        "nome": "Apartamento 14",
        "preco": 410,
        "localizacao": "Recife",
        "imagem": "https://th.bing.com/th/id/OIP.gw572i-lDXIs8DVbRrlvsQHaFk?rs=1&pid=ImgDetMain"
    },
    {
        "id": 7,
        "nome": "Casa 13",
        "preco": 580,
        "localizacao": "Belo Horizonte",
        "imagem": "https://th.bing.com/th/id/OIP.O_-oEYOlYWbc_TVavONM2gHaGi?w=910&h=804&rs=1&pid=ImgDetMain"
    },
    {
        "id": 8,
        "nome": "Cobertura 6",
        "preco": 950,
        "localizacao": "Curitiba",
        "imagem": "https://is1-2.housingcdn.com/4f2250e8/1a4d436784a9cf967c3e83eb7b419d67/v0/medium/shri_ram_kunj_3-vallabh_vidhyanagar-vadodara-shri_ram_builders.jpeg"
    },
    {
        "id": 9,
        "nome": "Apartamento 15",
        "preco": 370,
        "localizacao": "Fortaleza",
        "imagem": "https://img.panoramamoveis.com.br/blog/452063/iluminacao-certa-para-apartamento.jpg"
    },
    {
        "id": 10,
        "nome": "Casa 14",
        "preco": 610,
        "localizacao": "Salvador",
        "imagem": "https://www.plazalibre.com/storage/app/uploads/public/5de/140/349/5de140349ac29748249513.jpg"
    },
    {
        "id": 11,
        "nome": "Apartamento 16",
        "preco": 340,
        "localizacao": "Porto Alegre",
        "imagem": "https://www.estilofontana.com.br/blog/wp-content/uploads/2019/04/morar-em-apartamento-2.jpg"
    },
    {
        "id": 12,
        "nome": "Cobertura 7",
        "preco": 800,
        "localizacao": "Manaus",
        "imagem": "https://th.bing.com/th/id/OIP.UOqM95dROp-ukS2hGdTK8QHaEz?w=1663&h=1080&rs=1&pid=ImgDetMain"
    },
]

for property in properties:
    cur.execute("INSERT INTO rental_properties (id, nome, preco, localizacao, imagem) VALUES (?, ?, ?, ?, ?)",
                (property["id"], property["nome"], property["preco"], property["localizacao"], property["imagem"]))


connection.commit()
connection.close()