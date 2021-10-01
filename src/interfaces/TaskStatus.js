export default class TaskStatus {
  constructor(task = {}) {
    Object.assign(this, task);
  }

  get isNotStarted() {
    return ['to-do'].includes(this.Key);
  }

  get isInProgress() {
    return ['in-progress'].includes(this.Key);
  }

  get isComplete() {
    return ['complete'].includes(this.Key);
  }
}
