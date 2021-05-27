import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SessionUserService } from 'src/app/shared/services/session-user/session-user.service';
import { requiredFieldMessage, wrongEmailMessage } from 'src/app/shared/utils/constants';
import { SessionLogicService } from '../../session-logic/session-logic.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordResetComponent {

  form: FormGroup = this.createForm();

  uiMessages = {
    requieredField: requiredFieldMessage,
    wrongEmail: wrongEmailMessage
  };

  resetPasswordLoading = false;

  errorResetPasswordMessage: string | undefined;

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    public dialogRef: MatDialogRef<PasswordResetComponent>,
    private sessionUserService: SessionUserService,
    private sessionLogicService: SessionLogicService
  ) { }

  createForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  resetPassword(): void {
    this.errorResetPasswordMessage = undefined;

    if(!this.form.valid) { return; }
    this.resetPasswordLoading = true;
    const { email } = this.form.getRawValue();
    this.handleResetPassword(email);
  }

  async handleResetPassword(email: string): Promise<void> {
    try {
      await this.sessionUserService.sendResetPassword(email);
    } catch (error) {
      this.errorResetPasswordMessage = this.sessionLogicService.addErrorMessage(error);
    } finally {
      this.resetPasswordLoading = false;
      this.cdr.detectChanges();
    }
  }

  close(event: Event): void {
    event.preventDefault();
    this.dialogRef.close();
  }

  getEmailErrorMessage(): string | undefined {
    return this.sessionLogicService.getEmailErrorMessage(this.form?.controls.email?.errors);
  }

}
