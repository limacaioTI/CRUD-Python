export interface Task {
    id: number;
    title: string;
    description: string | null;
    status: string;
    created_at: string;
    updated_at: string | null;
}

export interface TaskCreate {
    title: string;
    description?: string;
    status?: string;
} 