export default {
  namespaced: true,

  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },

    addTask(state, task) {
      state.tasks.push(task);
    },

    updateTask(state, { id, properties }) {
      const index = state.tasks.findIndex((item) => item.id === id);

      if (index !== -1) {
        state.tasks.splice(index, 1, {
          ...state.tasks[index],
          ...properties,
        });
      }
    },

    addTaskComment(state, { id, comment }) {
      const task = state.tasks.find((item) => item.id === id);

      if (task) {
        task.comments.unshift(comment);
      }
    },
  },
  actions: {
    loadTasks({ commit }) {
      const tasks = this.$api.loadTasks();
      commit('setTasks', tasks);
    },

    addNewTask({ commit }, task) {
      const newTask = {
        id: new Date().getTime(),
        isDone: false,
        comments: [],
        ...task,
      };

      commit('addTask', newTask);
      this.$api.saveTask(newTask);
    },

    updateTask({ commit }, { id, properties }) {
      commit('updateTask', { id, properties });
      this.$api.updateTask(id, properties);
    },

    async addTaskComment({ state, commit }, { taskId, text }) {
      const task = state.tasks.find((item) => item.id === taskId);

      if (task) {
        const userName = await this.$api.getUserName();
        const timestamp = new Date().getTime();
        const newComment = {
          id: timestamp,
          author: userName,
          date: timestamp,
          text,
        };

        commit('addTaskComment', {
          id: task.id,
          comment: newComment,
        });

        this.$api.updateTask(task.id, {
          comments: task.comments,
        });
      }
    },
  },
};
