# Gerenciador de Tarefas (CRUD Python + Next.js)

Este é um sistema de gerenciamento de tarefas completo com backend em Python (FastAPI) e frontend em Next.js.

## Estrutura do Projeto

- `backend/`: API REST em Python com FastAPI
- `frontend/`: Interface do usuário em Next.js com Tailwind CSS

## Como Executar

### Backend

1. Entre no diretório do backend:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```

3. Inicie o servidor:
   ```bash
   uvicorn app.main:app --reload
   ```

O backend estará rodando em `http://localhost:8000`

### Frontend

1. Em outro terminal, entre no diretório do frontend:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O frontend estará rodando em `http://localhost:3000`

## Funcionalidades

- Criar novas tarefas
- Listar todas as tarefas
- Atualizar o status e informações das tarefas
- Deletar tarefas
- Interface moderna e responsiva
- Validação de dados
- Feedback visual das ações

## Tecnologias Utilizadas

### Backend
- Python
- FastAPI
- SQLAlchemy
- SQLite
- Pydantic

### Frontend
- Next.js 13
- TypeScript
- Tailwind CSS
- React Hooks
- Fetch API

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