import Controller from "@ember/controller";

export default Controller.extend({
  model() {
    return this.store.findAll("task");
  }
});
