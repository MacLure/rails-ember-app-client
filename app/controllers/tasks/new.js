import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    addTask: function() {
      const title = this.get("title");
      const date = this.get("date");
      const description = this.get("description");
    }
  }
});
