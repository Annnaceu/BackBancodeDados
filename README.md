Backend do Sistema de Gerenciamento de Clientes
Este projeto é um backend para um sistema de gerenciamento de clientes. Ele foi desenvolvido utilizando TypeScript, Prisma, MongoDB e várias outras tecnologias, proporcionando uma arquitetura moderna, escalável e robusta. O objetivo é gerenciar clientes de forma eficiente, com rotas para cadastro, listagem e exclusão de clientes.

🛠️ Tecnologias Utilizadas
1. TypeScript
TypeScript é uma linguagem baseada em JavaScript, que adiciona tipagem estática. Ele melhora a manutenção e escalabilidade do código, além de proporcionar uma experiência de desenvolvimento mais segura e eficiente. A tipagem explícita facilita a detecção de erros em tempo de compilação.

Principais benefícios do TypeScript no projeto:

Tipagem estática e verificação de tipos em tempo de desenvolvimento.
Melhor suporte de IDE, com autocompletar e navegação de código aprimorados.
Redução de erros comuns e aumento da segurança no código.
2. Prisma ORM
Prisma é um ORM moderno e poderoso para Node.js e TypeScript. Ele abstrai as operações de banco de dados e permite consultas altamente eficientes e seguras.

Utilizando o Prisma Client, o código torna-se mais legível, fácil de manter e seguro contra injeções de SQL, mesmo utilizando um banco de dados NoSQL como o MongoDB.

Benefícios do Prisma:

Geração automática de consultas SQL a partir do esquema de dados.
Facilidade de interagir com o banco de dados MongoDB, mantendo uma interface intuitiva.
Compatível com TypeScript, o que ajuda na validação de tipos em tempo de compilação.
Simplificação das migrações e gerenciamento de dados com prisma migrate.
3. MongoDB
MongoDB é um banco de dados NoSQL orientado a documentos. Ele oferece alta performance e escalabilidade, sendo ideal para aplicações modernas que precisam de flexibilidade no armazenamento de dados.

O MongoDB armazena os dados em formato JSON-like, facilitando a manipulação de dados de forma simples e intuitiva.

Vantagens do MongoDB no projeto:

Armazenamento flexível e sem esquemas fixos, permitindo a expansão dinâmica dos dados.
Escalabilidade horizontal, adequada para sistemas que precisam crescer.
Integração simples com o Prisma para facilitar as operações CRUD.
🚀 Funcionalidades do Sistema
Este sistema permite a gestão de clientes, com as seguintes funcionalidades:

Cadastro de Clientes: Criação de novos clientes no sistema.
Listagem de Clientes: Recuperação de todos os clientes cadastrados.
Exclusão de Clientes: Remoção de clientes do banco de dados.
