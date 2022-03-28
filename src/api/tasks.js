const STORAGE_KEY = 'tasks';

export const loadTasks = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

export const saveTask = (task) => {
  const tasks = loadTasks();

  tasks.push(task);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const updateTask = (id, properties) => {
  const tasks = loadTasks();
  const oldTaskIndex = tasks.findIndex((item) => item.id === id);

  if (oldTaskIndex !== -1) {
    tasks.splice(oldTaskIndex, 1, { ...tasks[oldTaskIndex], ...properties });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
};
