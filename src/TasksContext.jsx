import React, { useState } from 'react';
import { stages } from './initialData';

const TasksContext = React.createContext([{}, () => {}]);

const TasksProvider = (props) => {
  const [state, setState] = useState({ stages });

  return (
    <TasksContext.Provider value={[state, setState]}>
      {props.children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TasksProvider };