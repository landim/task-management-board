import { v4 as uuidv4 } from 'uuid';

function setNewPosition(newPosition, targetStage) {
  if (!this.stage || !this.stage.tasks) {
    return;
  }

  this.stage.removeTask(this);
  targetStage.tasks.splice(newPosition, 0, this);
  this.stage = targetStage;
  for (let i = 0; i < this.stage.tasks.length; i++) {
    this.stage.tasks[i].position = i;
  }
}

/* Factory method to create Tasks objects */
const createTask = ({title, stage}) => {
  const task = {
    id: uuidv4(),
    title,
    stage,
    setNewPosition,
  };

  if (stage) {
    task.position = stage.tasks.length;
    stage.addTask(task);
  }
  task.setNewPosition.bind(task);
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