import { v4 as uuidv4 } from 'uuid';

/* Factory method to create Tasks objects */
const createTask = ({title, stage}) => {
  const task = {
    id: uuidv4(),
    title,
    stage
  };

  if (stage) {
    stage.addTask(task);
  }
  return task;
};

function addTask(task) {
  // remove from current stage
  if (task.stage && task.stage.tasks) {
    task.stage.removeTask(task);
  }
  // add to current stage
  this.tasks.push(task);
  task.stage = this;
}

function removeTask(task) {
  this.tasks = this.tasks.filter(t => t.id !== task.id);
}

/* Factory method to create Column objects */
const createStage = ({title, tasks = []}) => {
  const stage =  {
    id: uuidv4(),
    title,
    tasks,
    addTask,
    removeTask,
  };
  stage.addTask.bind(stage);
  stage.removeTask.bind(stage);
  return stage;
};


export { createStage, createTask };