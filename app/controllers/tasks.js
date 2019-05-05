import Controller from "@ember/controller";

export default Controller.extend({
  model() {
    return this.store.findAll("task");
  },
  actions: {
    deleteTask: function(id) {
      this.store.findRecord("task", id).then(function(task) {
        task.deleteRecord();
        task.save();
      });
    }
  }
});
