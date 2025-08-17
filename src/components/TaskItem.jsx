import React from 'react';

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li className="flex items-center justify-between p-3 bg-gray-50 border-2 border-black gap-4">
      <div className="flex items-center gap-3 flex-grow">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="h-6 w-6 accent-pink-500 border-2 border-black focus:ring-2 focus:ring-pink-500"
        />
        <span
          className={`flex-grow text-lg \${
            task.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          {task.text}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="px-3 py-1 bg-red-500 text-white font-bold border-2 border-black shadow-[2px_2px_0px_#000] hover:shadow-[1px_1px_0px_#000] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
      >
        X
      </button>
    </li>
  );
};

export default TaskItem;