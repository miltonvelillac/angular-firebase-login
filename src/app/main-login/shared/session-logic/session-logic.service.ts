import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { requiredFieldMessage, wrongEmailMessage, wrongNameLengthMessage, wrongPasswordMessage, wrongRepeatPasswordMessage } from 'src/app/shared/utils/constants';
import { firebaseCodes } from 'src/app/shared/utils/firebase-constants';

@Injectable({
  providedIn: 'root'
})
export class SessionLogicService {

  uiMessages = {
    requieredField: requiredFieldMessage,
    wrongEmail: wrongEmailMessage,
    wrongPasswor: wrongPasswordMessage,
    wrongRepeatPassword: wrongRepeatPasswordMessage,
    wrongNameLength: wrongNameLengthMessage
  };

  constructor() { }

  addErrorMessage(error: any): string | undefined {
    if (!error || error.code === firebaseCodes.popupClosedByUser.code) { return; }
    return error.message;
  }

  getEmailErrorMessage(emailError: ValidationErrors | null): string | undefined {
    if (emailError?.required) {
      return this.uiMessages.requieredField;
    } else if(emailError?.email) {
      return this.uiMessages.wrongEmail;      
    }
    return undefined
  }

  getNameErrorMessage(error: ValidationErrors | null, maxNameCharacters: number): string | undefined {
    if (error?.required) {
      return this.uiMessages.requieredField;
    } else if(error?.maxlength) {
      return this.uiMessages.wrongNameLength.replace('{charactersNumber}', `${maxNameCharacters}`);      
    }
    return undefined
  }

  getPasswordErrorMessage(error: ValidationErrors | null): string | undefined {
    if (error?.required) {
      return this.uiMessages.requieredField;
    } else if(error?.pattern) {
      return this.uiMessages.wrongPasswor;      
    }
    return undefined
  }

  getRepeatPasswordErrorMessage(error: ValidationErrors | null): string | undefined {
    if (error?.pattern || error?.required) {
      return this.uiMessages.wrongPasswor;
    } else if(error?.invalidRepeatPassword) {
      return this.uiMessages.wrongRepeatPassword;
    }
    return undefined
  }
}
