import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LongTour } from '../../../@model/long_tour.model'
import { longTourService } from '../../../@service/long_tours.service'

@Component({
  selector: 'app-add-long-tours',
  templateUrl: './add-long-tours.component.html',
  styleUrls: ['./add-long-tours.component.css']
})
export class AddLongToursComponent implements OnInit {

  LongTour: LongTour;
  longTourForm: FormGroup;
  hasFormErrors: boolean = false;
  errorMessage: string = '';
  edit: boolean = false
  id




  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private LongTourFb: FormBuilder,
    private longTourService: longTourService,

  ) { }

  ngOnInit() {
  console.log(this.activatedRoute.params)
    const routeSubscription = this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.id = params['id']
      if (id && id > 0) {
        this.edit = true
        const addSubscription = this.longTourService.getlongTourByID(id).subscribe(res => {
          if (res.result == true) {
            this.LongTour = res.data;
            this.initLongTour()

          }
        });
      } else {
        this.LongTour = new LongTour();
        this.LongTour.clear();
        this.initLongTour();
      }
    });

  }

  initLongTour() {
    this.createForm();

  }
  createForm() {
    this.longTourForm = this.LongTourFb.group({
      name: [this.LongTour.name, [Validators.required]],
      mobile: [this.LongTour.mobile, Validators.required],
      tourName: [this.LongTour.tourName, [Validators.required]],
      tourDate: [this.LongTour.tourDate, Validators.required],
      personNumber: [this.LongTour.personNumber, Validators.required],
      childNumber: [this.LongTour.childNumber, Validators.required],
      chairNumber: [this.LongTour.chairNumber, [Validators.required]],
      addChairNumber: [this.LongTour.addChairNumber, Validators.required],
      paid: [this.LongTour.paid, [Validators.required]],
      remaining: [this.LongTour.remaining, [Validators.required]],
      hotelName: [this.LongTour.hotelName, [Validators.required]],
      roomNumber: [this.LongTour.roomNumber, [Validators.required]],
      nightNumber: [this.LongTour.nightNumber, [Validators.required]],
    });
  }







  /**
   * Save data
   *
   * @param withBack: boolean
   */
  onSumbit(withBack: boolean = false) {
    this.hasFormErrors = false;
    const controls = this.longTourForm.controls;
    /** check form */
    if (this.longTourForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );

      this.hasFormErrors = true;
      this.errorMessage = 'Please check invalid fields'
      return;
    }

    const editedLongTour = this.prepareLongTour();
    delete editedLongTour.longTourID;

    if (this.edit == true) {
      this.updateLongTour(editedLongTour);
      return;
    }

    this.addLongTour(editedLongTour);
  }



  /**
   * Returns prepared data for save
   */
  prepareLongTour() {
    const controls = this.longTourForm.controls;
    const _LongTour = new LongTour();
    _LongTour.clear();
    _LongTour.name = controls['name'].value;
    _LongTour.mobile = controls['mobile'].value;
    _LongTour.tourName = controls['tourName'].value;
    _LongTour.tourDate = controls['tourDate'].value;
    _LongTour.personNumber = controls['personNumber'].value;
    _LongTour.childNumber = controls['childNumber'].value;
    _LongTour.chairNumber = controls['chairNumber'].value;
    _LongTour.addChairNumber = controls['addChairNumber'].value;
    _LongTour.paid = controls['paid'].value;
    _LongTour.remaining = controls['remaining'].value;
    _LongTour.hotelName=controls['hotelName'].value;
    _LongTour.roomNumber=controls['roomNumber'].value;
    _LongTour.nightNumber=controls['nightNumber'].value;
    return _LongTour;
  }


  updateLongTour(_LongTour: LongTour) {
    this.longTourService.updateLongTour(this.id,_LongTour).subscribe(res => {
      if (res.result == true) {
        this.router.navigateByUrl('home/longtours')
      } else {
        this.errorMessage = res.message;

      }
    })
  
  }


  addLongTour(_LongTour: LongTour) {
    this.longTourService.addNewLongTour(_LongTour).subscribe(res => {
      if (res.result == true) {
        this.router.navigateByUrl('home/longtours')
      } else {
        this.errorMessage = res.message;

      }
    })
  }


}
