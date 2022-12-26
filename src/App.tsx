import React, { useEffect } from 'react';
import NewRemark from './components/NewRemark';
import NewTask from './components/NewTask';
import OngoingTasks from './components/OngoingTasks';
import Tasks from './components/Tasks';
import Backdrop from './components/UI/Backdrop';
import Layout from './components/UI/Layout';
import { updateRedux } from './features/tasks/taskSlice';
import {useAppSelector, useAppDispatch} from './app/hooks'

let firstLoading = true;

const App: React.FC = () => {

  console.log('Componenent is rendered')

  const dispatch = useAppDispatch();
  const allTasks = useAppSelector(state => state.tasks)
  const remarkIsShown = useAppSelector(state => state.ui.remarkIsShown)


  // to make data in redux store equal to user local storage
  useEffect(() => {

    const loadedTasks = (localStorage.getItem('tasks') !== null || localStorage.getItem('tasks') !== undefined) ? 
    JSON.parse(localStorage.getItem('tasks') || '') : {
      tasks: [],
      ongoingTasks: [],
      completedTasks: [],
      chosenTask: null
    }

    // console.log(loadedTasks)

    console.log('Hell0 from 1st useEffect');

    dispatch(updateRedux(loadedTasks))

  }, [dispatch])

  // to make local storage equal to redux store after updating redux store
  useEffect(() => {
    if (!firstLoading) {
      localStorage.setItem('tasks', JSON.stringify(allTasks))
      console.log('Hello from 2nd useEffect')
    }
    firstLoading = false;
   
  }, [allTasks])


  return (
    <Layout>
        <div className="App">
          <NewTask />
          <div className="task-wrapper">
              <Tasks />
              <OngoingTasks />
          </div>
          {remarkIsShown && <Backdrop>
              <NewRemark />
          </Backdrop> }
        </div>
    </Layout>

  );
}

export default App;
