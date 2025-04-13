// components/TodoForm.tsx
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {todoAdd} from "~/api/todoAPI";




export default function TodoAddComponent() {
    const queryClient = useQueryClient();

    const [form, setForm] = useState<TodoAdd>({
        title: '',
        writer: '',
        dueDate: '',
    });

    const mutation = useMutation({
        mutationFn: todoAdd,
        onSuccess: () => {
            alert('등록 성공!');
            queryClient.invalidateQueries({ queryKey: ['todos'] });
            setForm({ title: '', writer: '', dueDate: '' });
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate(form);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">할 일 등록</h2>

            <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="제목"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <input
                type="text"
                name="writer"
                value={form.writer}
                onChange={handleChange}
                placeholder="작성자"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <input
                type="date"
                name="dueDate"
                value={form.dueDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                disabled={mutation.isPending}
            >
                {mutation.isPending ? '등록 중...' : '등록하기'}
            </button>

            {mutation.isError && (
                <p className="text-red-500 text-sm">등록에 실패했습니다. 다시 시도해주세요.</p>
            )}
        </form>
    );
}