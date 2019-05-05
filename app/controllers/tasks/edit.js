import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    editTask: function(id) {
      const self = this;
      const name = this.get("model.name");
      const date = this.get("model.date");
      const description = this.get("model.description");

      this.store.findRecord("task", id).then(function(task) {
        task.set("name", name);
        task.set("date", new Date(date));
        task.set("description", description);

        task.save();

        self.transitionTo("tasks");
      });
    }
  }
});
