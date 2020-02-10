import { Api, Storage } from '~/services';
import { call, put, select } from 'redux-saga/effects';
import { Creators as AuthActions } from '../ducks/user';
import { StackActions } from 'react-navigation';

export function* anyFunction({ payload }) {
  try {
    // console.log('ANY FUNCTION - PAYLOAD', payload)
    // console.log('ANY FUNCTION - RESPONSE', response)

  } catch (err) {
    // console.log('ANY FUNCTION - ERROR', err)
  } finally {

  }
}