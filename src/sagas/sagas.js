import {takeLatest , put} from 'redux-saga/effects';
import { addTask } from '../slice/taskSlice';

// worker saga
// in redux-saga, un worker saga è un generatore che può essere eseguito in parallelo
// per esempio, potremmo avere un worker saga che gestisce la chiamata API per aggiungere un task
// in questo caso, il nostro worker saga aggiunge un task e poi invoca l'azione `addTask` per aggiornare lo stato

function* addTashAsync(action) {
    // Logica della chiama API qui 
    // utilizziamo un setTimeout per simulare una chiamata API
    yield new Promise ((resolve) => setTimeout(resolve, 1000));

    yield put(addTask(action.payload));
}

// watcher saga
// in redux-saga, un watcher saga è un generatore che aspetta una azione
// e invoca un worker saga per ogni azione corrispondente
// in questo caso, il nostro watcher saga aspetta l'azione `task/addTask`
// e invoca il worker saga `addTaskAsync` ogni volta che c'è un'azione corrispondente

function* watchAddTask() {
    yield takeLatest ('task/addTask', addTashAsync);
}

// root saga
// questo è il nostro root saga, che viene eseguito all'avvio dell'applicazione
// in questo caso, esegue solo il watcher saga `watchAddTask`
// ma in un'applicazione più grande, potremmo avere molti watcher sagas qui
// per esempio, se avessimo un'altra funzionalità `deleteTask`, potremmo
// avere un altro watcher saga che gestisce le azioni `task/deleteTask`

export default function* rootSaga() {
    yield watchAddTask();
}