import { Task } from '../types/task';
import { useState } from 'react';
import { taskService } from '../services/taskService';

interface TaskCardProps {
    task: Task;
    onUpdate: () => void;
    onDelete: () => void;
}

export default function TaskCard({ task, onUpdate, onDelete }: TaskCardProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description || '');
    const [status, setStatus] = useState(task.status);

    const handleUpdate = async () => {
        try {
            await taskService.updateTask(task.id, {
                title,
                description,
                status,
            });
            setIsEditing(false);
            onUpdate();
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await taskService.deleteTask(task.id);
            onDelete();
        } catch (error) {
            console.error('Erro ao deletar tarefa:', error);
        }
    };

    const statusColors = {
        pendente: 'bg-yellow-100 text-yellow-800',
        'em andamento': 'bg-blue-100 text-blue-800',
        concluída: 'bg-green-100 text-green-800',
    };

    if (isEditing) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Título"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Descrição"
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option value="pendente">Pendente</option>
                    <option value="em andamento">Em Andamento</option>
                    <option value="concluída">Concluída</option>
                </select>
                <div className="flex justify-end space-x-2">
                    <button
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleUpdate}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Salvar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-semibold">{task.title}</h3>
                    <p className="text-gray-600 mt-2">{task.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${statusColors[task.status as keyof typeof statusColors]}`}>
                    {task.status}
                </span>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
                <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Editar
                </button>
                <button
                    onClick={handleDelete}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                    Deletar
                </button>
            </div>
            <div className="mt-4 text-sm text-gray-500">
                Criado em: {new Date(task.created_at).toLocaleDateString()}
            </div>
        </div>
    );
} 