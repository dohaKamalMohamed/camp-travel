
export class CreateURL{
    static createURL(module){
 let _URL=`http://localhost:3000/api/${module}`;
 //  let _URL=`https://camp-travel.herokuapp.com/api/${module}`;
        return _URL;
    }
  
  }