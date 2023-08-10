import {takeLatest , put} from 'redux-saga/effects';
import { addCat } from '../slice/catSlice';

// worker saga
// in redux-saga, un worker saga è un generatore che può essere eseguito in parallelo
// per esempio, potremmo avere un worker saga che gestisce la chiamata API per aggiungere un cat
// in questo caso, il nostro worker saga aggiunge un cat e poi invoca l'azione `addCat` per aggiornare lo stato

function* addCatAsync(action) {
    // Logica della chiama API qui 
    // utilizziamo un setTimeout per simulare una chiamata API
    yield new Promise ((resolve) => setTimeout(resolve, 1000));

    yield put(addCat(action.payload));
}




// watcher saga
// in redux-saga, un watcher saga è un generatore che aspetta una azione
// e invoca un worker saga per ogni azione corrispondente
// in questo caso, il nostro watcher saga aspetta l'azione `cat/addCat`
// e invoca il worker saga `addCatAsync` ogni volta che c'è un'azione corrispondente

function* watchAddCat() {
    yield takeLatest ('cat/addCat', addCatAsync);
}


// root saga
// questo è il nostro root saga, che viene eseguito all'avvio dell'applicazione
// in questo caso, esegue solo il watcher saga `watchAddCat`
// ma in un'applicazione più grande, potremmo avere molti watcher sagas qui
// per esempio, se avessimo un'altra funzionalità `deleteCat`, potremmo
// avere un altro watcher saga che gestisce le azioni `cat/deleteCat`

export default function* rootSaga() {
    yield watchAddCat();    
}