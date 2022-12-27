import React, { useEffect } from 'react';
import NewRemark from './components/NewRemark';
import NewTask from './components/NewTask';
import OngoingTasks from './components/OngoingTasks';
import Tasks from './components/Tasks';
import Backdrop from './components/UI/Backdrop';
import Layout from './components/UI/Layout';
import { updateRedux } from './features/tasks/taskSlice';
import {useAppSelector, useAppDispatch} from './app/hooks'
import Notification from './components/UI/Notification';


let firstLoading = true;

const App: React.FC = () => {

  console.log('Componenent is rendered')

  const dispatch = useAppDispatch();
  const allTasks = useAppSelector(state => state.tasks)
  const remarkIsShown = useAppSelector(state => state.ui.remarkIsShown)
  const notificationIsShown = useAppSelector(state => state.ui.notificationIsShown)
 


  // to make data in redux store equal to user local storage
  useEffect(() => {

    const storedTasks = localStorage.getItem('tasks');
    const emptyTasks = {
      tasks: [],
      ongoingTasks: [],
      completedTasks: [],
      chosenTask: null
    };

    const loadedTasks = storedTasks ? JSON.parse(storedTasks) : emptyTasks;

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

  let text = "Вы не ввели задачу";


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
          {notificationIsShown && <Notification title={text} />}
        </div>
    </Layout>

  );
}

export default App;
