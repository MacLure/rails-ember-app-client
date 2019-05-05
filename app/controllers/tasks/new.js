import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    addTask: function() {
      const name = this.get("name");
      const date = this.get("date");
      const description = this.get("description");

      const newTask = this.store.createRecord("task", {
        name: name,
        date: new Date(date),
        description: description
      });
      newTask.save();
      this.setProperties({
        name: "",
        date: "",
        description: ""
      });
    }
  }
});
