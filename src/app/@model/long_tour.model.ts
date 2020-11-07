export class LongTour {
    longTourID: number;
    name: string;         
    mobile: string;
    tourName: string;
    tourDate: string;
    personNumber: string;
    childNumber: string;
    chairNumber:string;
    roomNumber: string;
    nightNumber: string;
    addChairNumber: string;
    hotelName: string;
    paid: string;
    remaining: string;
    clear() {
        this.longTourID = 0;
        this.name = '';
        this.mobile = '';
        this.tourName = '';
        this.tourDate = '';
        this.personNumber = '';
        this.childNumber = '';
        this.chairNumber = '';
        this.roomNumber = '';
        this.nightNumber = '';
        this.addChairNumber = '';
        this.hotelName = '';
        this.paid = '';
        this.remaining = '';
    }
}



