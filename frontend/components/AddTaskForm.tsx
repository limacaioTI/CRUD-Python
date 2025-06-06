import { useState } from 'react';
import { taskService } from '../services/taskService';

interface AddTaskFormProps {
    onTaskAdded: () => void;
}

export default function AddTaskForm({ onTaskAdded }: AddTaskFormProps) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        setIsSubmitting(true);
        try {
            await taskService.createTask({
                title: title.trim(),
                description: description.trim() || undefined,
            });
            setTitle('');
            setDescription('');
            onTaskAdded();
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Título
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Digite o título da tarefa"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Descrição
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Digite a descrição da tarefa"
                        rows={3}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                >
                    {isSubmitting ? 'Adicionando...' : 'Adicionar Tarefa'}
                </button>
            </div>
        </form>
    );
} 