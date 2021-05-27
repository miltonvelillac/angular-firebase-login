import { Injectable } from '@angular/core';
import { firebaseCodes } from 'src/app/shared/utils/firebase-constants';

@Injectable({
  providedIn: 'root'
})
export class SessionLogicService {

  constructor() { }

  addErrorMessage(error: any): string | undefined {
    if (!error || error.code === firebaseCodes.popupClosedByUser.code) { return; }
    return error.message;
  }
}
