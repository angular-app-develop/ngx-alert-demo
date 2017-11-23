import {Component} from '@angular/core';
import {AlertService} from 'ngx-alert';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(private alertServile: AlertService) {
  }

  showSuccessAlert() {
    const options = {
      position: 'center',
      confirmButtonText: 'ok'
    };
    this.alertServile.success(options);
  }

  showInfoAlert() {
    const options = {
      position: 'center',
      confirmButtonText: 'ok'
    };
    this.alertServile.info(options);
  }

  showWarningAlert() {
    const options = {
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    };
    this.alertServile.warning(options).then(result => {
      if (result.value) {
        this.alertServile.success({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
        });
      } else if (result.dismiss === 'cancel') {
        this.alertServile.error({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
          }
        );
      }
    });
  }

  showErrorAlert() {
    const options = {
      title: 'Oops...',
      text: 'Something went wrong!',
      position: 'center',
      confirmButtonText: 'ok'
    };
    this.alertServile.error(options);
  }

  showQuestionAlert() {
    this.alertServile.question();
  }

  showConfirmAlert() {
    const options = {
      title: '<i>HTML</i> <u>example</u>',
      type: 'info',
      html: 'You can use <b>bold text</b>, ' +
      '<a href="//github.com">links</a> ' +
      'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down',
    };
    this.alertServile.confirm(options).then(result => {
      if (result.value) {
        this.alertServile.success({});
      }
    });
  }

  showPromptAlert() {
    const options = {
      title: 'Submit email to run ajax request',
      input: 'email',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      allowOutsideClick: false
    };
    this.alertServile.prompt(options).then(result => {
      if (result.value) {
        this.alertServile.success({});
      }
    });
  }

  showTimeoutAlert() {
    const options = {
      title: 'success',
      timer: 1500,
      showConfirmButton: false
    };
    this.alertServile.success(options);
  }
}
