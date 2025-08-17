import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [taskText, setTaskText] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
    setTaskText('');
    setIsAdding(false);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-white p-6 border-4 border-black shadow-[8px_8px_0px_#000000]">
      <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">
        Today's Tasks
      </h2>

      {tasks.length === 0 && !isAdding ? (
        <div className="text-center text-gray-500 py-8">
          <p className="mb-4">No tasks for today.</p>
        </div>
      ) : (
        <ul className="space-y-3 mb-6">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}

      {isAdding ? (
        <form onSubmit={handleAddTask} className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="What's your next task?"
            className="flex-grow p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            autoFocus
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-green-400 text-black font-bold border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-black font-bold border-2 border-black shadow-[3px_3px_0px_#000] hover:shadow-[1px_1px_0px_#000] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
         <button
            onClick={() => setIsAdding(true)}
            className="w-full px-8 py-4 bg-blue-500 text-white font-bold border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all text-lg"
          >
            Click "Add Task" to get started!
          </button>
      )}
    </div>
  );
};

export default TaskList;