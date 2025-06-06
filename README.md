# Gerenciador de Tarefas (CRUD Python)

Este é um sistema simples de gerenciamento de tarefas (Todo List) que demonstra as operações básicas de CRUD (Create, Read, Update, Delete) usando Python e SQLite.

## Funcionalidades

- Criar novas tarefas
- Listar todas as tarefas
- Atualizar o status das tarefas
- Deletar tarefas

## Como usar

1. Certifique-se de ter Python instalado no seu computador
2. Clone este repositório ou baixe os arquivos
3. Instale as dependências:
   ```
   pip install -r requirements.txt
   ```
4. Execute o programa:
   ```
   python app.py
   ```

## Estrutura do Banco de Dados

O sistema utiliza SQLite com uma tabela chamada `tarefas` que possui os seguintes campos:

- id (INTEGER): Identificador único da tarefa
- titulo (TEXT): Título da tarefa
- descricao (TEXT): Descrição detalhada da tarefa
- status (TEXT): Status da tarefa (pendente/em andamento/concluída)
- data_criacao (TIMESTAMP): Data e hora de criação da tarefa

## Como funciona

O programa apresenta um menu interativo com as seguintes opções:

1. Adicionar tarefa: Permite criar uma nova tarefa
2. Listar tarefas: Mostra todas as tarefas cadastradas
3. Atualizar status: Permite mudar o status de uma tarefa existente
4. Deletar tarefa: Remove uma tarefa do banco de dados
5. Sair: Encerra o programa

## Exemplo de uso

1. Escolha a opção 1 para adicionar uma nova tarefa
2. Digite o título e a descrição da tarefa
3. Use a opção 2 para ver a lista de tarefas
4. Use a opção 3 para atualizar o status de uma tarefa específica
5. Use a opção 4 para deletar uma tarefa que não é mais necessária 