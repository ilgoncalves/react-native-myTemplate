import { all, takeLatest } from 'redux-saga/effects';
import { Types as AuthActions } from '../ducks/user';
import { getUserDetails, login, signup } from './user';

export default function* rootSaga() {
  return yield all([
    // takeLatest(theAction, theFunction),
  ]);
}
