import { createStage, createTask } from './model/Task';

const stage1 = createStage({title: "Column 1"});
const stage2 = createStage({title: "Column 1"});
const stage3 = createStage({title: "Column 1"});

createTask({ title: "Task 1", stage: stage1 });
createTask({ title: "Task 2", stage: stage1 });
createTask({ title: "Task 3", stage: stage1 });

createTask({ title: "Task 4", stage: stage2 });
createTask({ title: "Task 5", stage: stage2 });

createTask({ title: "Task 6", stage: stage3 });

const stages = [stage1, stage2, stage3];

export { stages };
