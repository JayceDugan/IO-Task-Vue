/* eslint-disable */
class Queue {
  constructor() {
    this.items = [];
    this.maxWorkers = 4;
    this.activeWorkers = 0;
  }

  get length() {
    return this.items.length
  }

  get isEmpty() {
    return this.items.length <= 0;
  }

  get workersAvailable() {
    return this.activeWorkers < this.maxWorkers;
  }

  enqueue(payload) {
    this.items.push(payload);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return (!this.isEmpty) ? this.items[0] : undefined
  };

  addWorker() {
    this.activeWorkers += 1;
  }

  releaseWorker() {
    this.activeWorkers -= 1;
  };

  process() {
    let results = [];
    const queue = this

    return new Promise((resolve) => {
      const performNextAction = () => {
        if (!queue.isEmpty && queue.workersAvailable) run();
        else if (queue.activeWorkers === 0 && queue.isEmpty) resolve(results);
      };

      const run = () => {
        const nextItem = queue.dequeue();

        queue.addWorker();

        return nextItem()
          .then((result) => {
            results = [...results, ...result]
            queue.releaseWorker();
            performNextAction();
          })
          .catch((error) => {
            // results.push(error);
            queue.releaseWorker();
            performNextAction();
          });

        performNextAction();
      };

      performNextAction();
    });
  };
}

export default Queue;
