import sqlite3
from datetime import datetime

def criar_banco():
    """Cria o banco de dados e a tabela de tarefas"""
    conn = sqlite3.connect('tarefas.db')
    cursor = conn.cursor()
    
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS tarefas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        descricao TEXT,
        status TEXT DEFAULT 'pendente',
        data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    """)
    
    conn.commit()
    conn.close()

def adicionar_tarefa(titulo, descricao):
    """Adiciona uma nova tarefa ao banco de dados"""
    conn = sqlite3.connect('tarefas.db')
    cursor = conn.cursor()
    
    cursor.execute("""
    INSERT INTO tarefas (titulo, descricao)
    VALUES (?, ?)
    """, (titulo, descricao))
    
    conn.commit()
    conn.close()
    print("Tarefa adicionada com sucesso!")

def listar_tarefas():
    """Lista todas as tarefas do banco de dados"""
    conn = sqlite3.connect('tarefas.db')
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM tarefas")
    tarefas = cursor.fetchall()
    
    conn.close()
    
    if not tarefas:
        print("Nenhuma tarefa encontrada!")
        return
    
    print("\n=== Lista de Tarefas ===")
    for tarefa in tarefas:
        print(f"\nID: {tarefa[0]}")
        print(f"Título: {tarefa[1]}")
        print(f"Descrição: {tarefa[2]}")
        print(f"Status: {tarefa[3]}")
        print(f"Data de criação: {tarefa[4]}")
        print("-" * 30)

def atualizar_tarefa(id_tarefa, novo_status):
    """Atualiza o status de uma tarefa"""
    conn = sqlite3.connect('tarefas.db')
    cursor = conn.cursor()
    
    cursor.execute("""
    UPDATE tarefas
    SET status = ?
    WHERE id = ?
    """, (novo_status, id_tarefa))
    
    if cursor.rowcount == 0:
        print("Tarefa não encontrada!")
    else:
        print("Tarefa atualizada com sucesso!")
    
    conn.commit()
    conn.close()

def deletar_tarefa(id_tarefa):
    """Deleta uma tarefa do banco de dados"""
    conn = sqlite3.connect('tarefas.db')
    cursor = conn.cursor()
    
    cursor.execute("DELETE FROM tarefas WHERE id = ?", (id_tarefa,))
    
    if cursor.rowcount == 0:
        print("Tarefa não encontrada!")
    else:
        print("Tarefa deletada com sucesso!")
    
    conn.commit()
    conn.close()

def menu():
    """Exibe o menu de opções"""
    print("\n=== Gerenciador de Tarefas ===")
    print("1. Adicionar tarefa")
    print("2. Listar tarefas")
    print("3. Atualizar status da tarefa")
    print("4. Deletar tarefa")
    print("5. Sair")
    return input("Escolha uma opção: ")

def main():
    """Função principal do programa"""
    criar_banco()
    
    while True:
        opcao = menu()
        
        if opcao == "1":
            titulo = input("Digite o título da tarefa: ")
            descricao = input("Digite a descrição da tarefa: ")
            adicionar_tarefa(titulo, descricao)
        
        elif opcao == "2":
            listar_tarefas()
        
        elif opcao == "3":
            id_tarefa = input("Digite o ID da tarefa: ")
            novo_status = input("Digite o novo status (pendente/em andamento/concluída): ")
            atualizar_tarefa(id_tarefa, novo_status)
        
        elif opcao == "4":
            id_tarefa = input("Digite o ID da tarefa: ")
            deletar_tarefa(id_tarefa)
        
        elif opcao == "5":
            print("Obrigado por usar o gerenciador de tarefas!")
            break
        
        else:
            print("Opção inválida!")

if __name__ == "__main__":
    main() 