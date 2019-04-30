import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    addTask: function() {
      const name = this.get("name");
      const date = this.get("date");
      const description = this.get("description");
    }
  }
});
