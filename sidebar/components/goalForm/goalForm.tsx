import React, { useState } from 'react';

interface GoalFormProps {
    onSubmit: (goalData: {
        goal: string;
        deadline: string;
        goalType: string;
    }) => void;
}

const GoalForm: React.FC<GoalFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        goal: '',
        deadline: '',
        goalType: 'personal' // default value
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ goal: '', deadline: '', goalType: 'personal' }); // Reset form
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="goal">
                Goal
            </label>
            <input
                type="text"
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
                placeholder="Enter your goal"
            />
            </div>

            <div>
            <label htmlFor="deadline">
                Deadline
            </label>
            <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                required
            />
            </div>

            <div>
            <label htmlFor="goalType">
                Goal Type
            </label>
            <select
                id="goalType"
                name="goalType"
                value={formData.goalType}
                onChange={handleChange}
            >
                <option value="personal">Personal</option>
                <option value="Career">Career</option>
                <option value="health">Health</option>
                <option value="financial">Financial</option>
                <option value="educational">Educational</option>
            </select>
            </div>

            <button
            type="submit"
            >
            Add Goal
            </button>
        </form>
    );
};

export default GoalForm;