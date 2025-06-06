'use client';

import { useEffect, useState } from 'react';
import { Task } from '../types/task';
import { taskService } from '../services/taskService';
import TaskCard from '../components/TaskCard';
import AddTaskForm from '../components/AddTaskForm';

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchTasks = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const data = await taskService.getAllTasks();
            setTasks(data);
        } catch (err) {
            console.error('Erro ao carregar tarefas:', err);
            setError('Não foi possível carregar as tarefas. Por favor, verifique se o servidor está rodando.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="text-center text-gray-600">
                        Carregando tarefas...
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 sm:py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Gerenciador de Tarefas
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Organize suas tarefas de forma simples e eficiente
                    </p>
                </div>

                {error && (
                    <div className="mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}

                <AddTaskForm onTaskAdded={fetchTasks} />

                <div className="space-y-6">
                    {tasks.length === 0 && !error ? (
                        <div className="text-center py-12 bg-white rounded-lg shadow">
                            <p className="text-gray-500">
                                Nenhuma tarefa encontrada. Adicione uma nova tarefa!
                            </p>
                        </div>
                    ) : (
                        tasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                onUpdate={fetchTasks}
                                onDelete={fetchTasks}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
} 