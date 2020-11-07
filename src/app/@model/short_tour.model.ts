export class shortTour {
    shortTourID: number;
    name: string;         
    mobile: string;
    tourName: string;
    tourDate: string;
    personNumber: string;
    childNumber: string;
    chairNumber:string;
    addChairNumber: string;
    paid: string;
    remaining: string;
    clear() {
        this.shortTourID = 0;
        this.name = '';
        this.mobile = '';
        this.tourName = '';
        this.tourDate = '';
        this.personNumber = '';
        this.childNumber = '';
        this.chairNumber = '';
        this.addChairNumber = '';
        this.paid = '';
        this.remaining = '';
    }
}



