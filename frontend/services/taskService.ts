import { Task, TaskCreate } from '../types/task';

const API_URL = 'http://127.0.0.1:8000';

const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

export const taskService = {
    async getAllTasks(): Promise<Task[]> {
        try {
            const response = await fetch(`${API_URL}/tasks/`, {
                method: 'GET',
                headers: defaultHeaders,
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
            throw error;
        }
    },

    async getTask(id: number): Promise<Task> {
        try {
            const response = await fetch(`${API_URL}/tasks/${id}`, {
                method: 'GET',
                headers: defaultHeaders,
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Erro ao buscar tarefa:', error);
            throw error;
        }
    },

    async createTask(task: TaskCreate): Promise<Task> {
        try {
            const response = await fetch(`${API_URL}/tasks/`, {
                method: 'POST',
                headers: defaultHeaders,
                body: JSON.stringify(task),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
            throw error;
        }
    },

    async updateTask(id: number, task: TaskCreate): Promise<Task> {
        try {
            const response = await fetch(`${API_URL}/tasks/${id}`, {
                method: 'PUT',
                headers: defaultHeaders,
                body: JSON.stringify(task),
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
            throw error;
        }
    },

    async deleteTask(id: number): Promise<void> {
        try {
            const response = await fetch(`${API_URL}/tasks/${id}`, {
                method: 'DELETE',
                headers: defaultHeaders,
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
            throw error;
        }
    },
}; 