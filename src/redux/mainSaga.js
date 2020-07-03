import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView17822Saga from '../features/CalendarView17822/redux/sagas';
import EmailAuth27821Saga from '../features/EmailAuth27821/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView17822Saga,
EmailAuth27821Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}