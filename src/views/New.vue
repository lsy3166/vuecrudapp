<template>
  <div>
    <h1>New task</h1>
    <!-- <task-form @createOrUpdate="createOrUpdate"></task-form> -->
    <task-form @createOrUpdate="createOrUpdate"></task-form>
  </div>
</template>

<script>
import TaskForm from "../components/Taskform.vue";
import { api } from "../helpers/helpers";
export default {
  name: "new-task",
  components: { TaskForm },
  methods: {
    createOrUpdate: async function(task) {
      const res = await api.createtask(task);
      this.flash("task created", "success");
      this.$router.push(`/tasks/${res._id}`);
    }
  }
};
</script>
