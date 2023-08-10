import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import 'react-native-gesture-handler'

import taskReducer from "../slice/taskSlice";
import rootSaga from "../sagas/sagas";


// create middleware saga
// in redux-saga, un middleware saga è un generatore che viene eseguito in parallelo
// per esempio, potremmo avere un middleware saga che gestisce la chiamata API per aggiungere un task
// in questo caso, il nostro middleware saga aggiunge un task e poi invoca l'azione `addTask` per aggiornare lo stato

const sagaMiddleware = createSagaMiddleware();

// create store
// in redux, lo store è un oggetto che contiene lo stato dell'applicazione
// in questo caso, il nostro store contiene lo stato del task e il middleware saga
// in un'applicazione più grande, potremmo avere più store
// per esempio, potremmo avere uno store per il task e un altro store per il commento
// ma in questo caso, abbiamo solo uno store che contiene lo stato del task e il middleware saga

const store = configureStore ({
    reducer : {
        // aggiungiamo il reducer del task allo store
        task : taskReducer,
    },
    // aggiungiamo il middleware saga allo store
    middleware : [sagaMiddleware]
});

// run middleware saga
sagaMiddleware.run(rootSaga);

// export store
export default store;