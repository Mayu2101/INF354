import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-details-page',
  templateUrl: './driver-details-page.component.html',
  styleUrls: ['./driver-details-page.component.css'],
})
export class DriverDetailsPageComponent implements OnInit {
  driverDetailsForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.driverDetailsForm = this.formBuilder.group({
      name: ['', Validators.required],
      idnumber: ['', [Validators.required, this.validIdNumber]],
      otp: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;

    if (this.driverDetailsForm.invalid) {
      return;
    }

    this.router.navigateByUrl("identification"); 
  }

  validIdNumber(
    formControl: FormControl
  ): { [valType: string]: boolean } | null {
    let idnumber = formControl.value;
    // check that value submitted is a number
    if (isNaN(idnumber)) {
      console.log('Value supplied is not a valid number');
      return { validIdNumber: true };
    }

    // check length of 13 digits
    if (idnumber.length != 13) {
      console.log('Number supplied does not have 13 digits');
      return { validIdNumber: true };
    }

    // check that YYMMDD group is a valid date
    var yy = idnumber.substring(0, 2),
      mm = idnumber.substring(2, 4),
      dd = idnumber.substring(4, 6);

    var dob = new Date(yy, mm - 1, dd);
    // check values - subtract one to month because Date() uses 0-11 for months
    if (
      !(
        (dob.getFullYear() + '').substring(2, 4) == yy &&
        dob.getMonth() == mm - 1 &&
        dob.getDate() == dd
      )
    ) {
      console.log('Date in first 6 digits is invalid.<br />');
      return { validIdNumber: true };
    }

    // evaluate GSSS group for gender and sequence
    var gender = parseInt(idnumber.substring(6, 10), 10) > 5000 ? 'M' : 'F';

    // ensure third to last digit is a 1 or a 0
    if (idnumber.substring(10, 11) > 1) {
      console.log(
        'Third to last digit can only be a 0 or 1 but is a ' +
          idnumber.substring(10, 11)
      );
      return { validIdNumber: true };
    } else {
      // determine citizenship from third to last digit (C)
      var saffer = parseInt(idnumber.substring(10, 11), 10) === 0 ? 'C' : 'F';
    }

    // ensure second to last digit is a 8 or a 9
    if (idnumber.substring(11, 12) < 8) {
      console.log(
        'Second to last digit can only be a 8 or 9 but is a ' +
          idnumber.substring(11, 12)
      );
      return { validIdNumber: true };
    }

    // calculate check bit (Z) using the Luhn algorithm
    var ncheck = 0, beven = false;

    for (var c = idnumber.length - 1; c >= 0; c--) {
      var cdigit = idnumber.charAt(c),
        ndigit = parseInt(cdigit, 10);

      if (beven) {
        if ((ndigit *= 2) > 9) ndigit -= 9;
      }

      ncheck += ndigit;
      beven = !beven;
    }

    if (ncheck % 10 !== 0) {
      console.log('Checkbit is incorrect.<br />');
      return { validIdNumber: true };
    }

    return null;
  }
}
