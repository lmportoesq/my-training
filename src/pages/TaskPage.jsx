import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Container from '../components/container/Container';
import GoBack from "../components/go-back/GoBack";
import Task from '../components/task/Task';
import DialogTask from '../components/dialogs/tasks/DialogTask';
import ShowModal from '../components/show-modal/ShowModal';

function TaskPage() {
  const tasks = [
    {
      "id": 1,
      "description": "Tomar ducha",
      "finish": true
    },
    {
      "id": 2,
      "description": "Cambiarme",
      "finish": true
    },
    {
      "id": 3,
      "description": "Desayunar",
      "finish": false
    },
    {
      "id": 4,
      "description": "Practicar React",
      "finish": false
    }
  ]
  return (
    <>
      <Header />
      <Container title='Tasks'>
        <ShowModal>
          <DialogTask title={'New task'} />
        </ShowModal>
        <Task tasks={tasks} />
        <GoBack />
      </Container>
      <Footer />
    </>
  );
}

export default TaskPage;
