import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { shortTour } from '../../../@model/short_tour.model'
import { shortTourService } from '../../../@service/short_service.service'


@Component({
  selector: 'app-add-daily-tours',
  templateUrl: './add-daily-tours.component.html',
  styleUrls: ['./add-daily-tours.component.css']
})
export class AddDailyToursComponent implements OnInit {
  shortTour: shortTour;
  shortTourForm: FormGroup;
  hasFormErrors: boolean = false;
  errorMessage: string = '';
  edit: boolean = false
  id




  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shortTourFb: FormBuilder,
    private shortTourService: shortTourService,

  ) { }

  ngOnInit() {
    const routeSubscription = this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.id = params['id']
      if (id && id > 0) {
        this.edit = true
        const addSubscription = this.shortTourService.getShortTourByID(id).subscribe(res => {
          if (res.result == true) {
            this.shortTour = res.data;
            this.initshortTour()

          }
        });
      } else {
        this.shortTour = new shortTour();
        this.shortTour.clear();
        this.initshortTour();
      }
    });

  }

  initshortTour() {
    this.createForm();

  }
  createForm() {
    this.shortTourForm = this.shortTourFb.group({
      name: [this.shortTour.name, [Validators.required]],
      mobile: [this.shortTour.mobile, Validators.required],
      tourName: [this.shortTour.tourName, [Validators.required]],
      tourDate: [this.shortTour.tourDate, Validators.required],
      personNumber: [this.shortTour.personNumber, Validators.required],
      childNumber: [this.shortTour.childNumber, Validators.required],
      chairNumber: [this.shortTour.chairNumber, [Validators.required]],
      addChairNumber: [this.shortTour.addChairNumber, Validators.required],
      paid: [this.shortTour.paid, [Validators.required]],
      remaining: [this.shortTour.remaining, [Validators.required]],
    });
  }







  /**
   * Save data
   *
   * @param withBack: boolean
   */
  onSumbit(withBack: boolean = false) {
    this.hasFormErrors = false;
    const controls = this.shortTourForm.controls;
    /** check form */
    if (this.shortTourForm.invalid) {
      Object.keys(controls).forEach(controlName =>
        controls[controlName].markAsTouched()
      );

      this.hasFormErrors = true;
      this.errorMessage = 'Please check invalid fields'
      return;
    }

    const editedshortTour = this.prepareShortTour();
    delete editedshortTour.shortTourID;

    if (this.edit == true) {
      this.updateShortTour(editedshortTour);
      return;
    }

    this.addShortTour(editedshortTour);
  }



  /**
   * Returns prepared data for save
   */
  prepareShortTour() {
    const controls = this.shortTourForm.controls;
    const _shortTour = new shortTour();
    _shortTour.clear();
    _shortTour.name = controls['name'].value;
    _shortTour.mobile = controls['mobile'].value;
    _shortTour.tourName = controls['tourName'].value;
    _shortTour.tourDate = controls['tourDate'].value;
    _shortTour.personNumber = controls['personNumber'].value;
    _shortTour.childNumber = controls['childNumber'].value;
    _shortTour.chairNumber = controls['chairNumber'].value;
    _shortTour.addChairNumber = controls['addChairNumber'].value;
    _shortTour.paid = controls['paid'].value;
    _shortTour.remaining = controls['remaining'].value;
    return _shortTour;
  }


  updateShortTour(_shortTour: shortTour) {
    this.shortTourService.updatelShortTour(this.id,_shortTour).subscribe(res => {
      if (res.result == true) {
        this.router.navigateByUrl('home/dailytours')
      } else {
        this.errorMessage = res.message;

      }
    })
  
  }


  addShortTour(_shortTour: shortTour) {
    this.shortTourService.addNewShortTour(_shortTour).subscribe(res => {
      if (res.result == true) {
        this.router.navigateByUrl('home/dailytours')
      } else {
        this.errorMessage = res.message;

      }
    })
  }



}