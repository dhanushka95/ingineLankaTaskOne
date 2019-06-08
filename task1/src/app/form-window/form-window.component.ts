import { Component, OnInit } from '@angular/core';
import { FormData } from '../Data/form-data';

@Component({
  selector: 'app-form-window',
  templateUrl: './form-window.component.html',
  styleUrls: ['./form-window.component.css']
})
export class FormWindowComponent implements OnInit {

  formData : FormData={

    title : null,
    fullName : null,
    phoneNumber : null,
    mobileNumber :null,
    email : null,
    streetAddress : null,
    town : null,
    city : null,
    numberOfPeople : null,
    numberOfRooms : null,
    arrivalDate : null,
    numberOfNight : null,
    occupancy : null,
    additionalInfo : null

  }

  postMsg : string; // use to retern valied or not as a message 
  postError : boolean;

  constructor() { }


  ngOnInit() {
  }

  onSubmit() : void {
            /*check valied or not*/
            this.validate();
            /*if valied then put the form data as json into console log */
            if(this.postError== false){
            console.log(JSON.stringify(this.formData));
            }
            
  }

  validate(): void{
    /* validate the field
    "re" variable is use for detect email is valied or no */
    
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            this.postError = false;
            this.postMsg = "";

            if(this.formData.fullName == null || this.formData.fullName == ""){
              this.postMsg = "Fill the full name ";
              this.postError = true;
            }

            if(this.formData.phoneNumber == null){
              this.postMsg = this.postMsg + " , Fill the phoneNumber";
              this.postError = true;
            }else if(this.formData.phoneNumber.toString().length != 10){
              this.postMsg = this.postMsg + " , Invalied phoneNumber";
              this.postError = true;
            }

            if(this.formData.email == null || this.formData.email == ""){
              this.postMsg = this.postMsg + " , Fill the email";
              this.postError = true;
            }else if(! re.test(String(this.formData.email).toLowerCase())){
              this.postMsg = this.postMsg + " , Invalied the email";
              this.postError = true;

            }

            if(this.formData.numberOfPeople == null){
              this.postMsg = this.postMsg + " , Fill the numberOfPeople";
              this.postError = true;
            }
            if(this.formData.numberOfRooms == null ){
              this.postMsg = this.postMsg + " , Fill the numberOfRooms";
              this.postError = true;
            }
            if(this.formData.arrivalDate == null ){
              this.postMsg = this.postMsg + " , Fill the arrivalDate";
              this.postError = true;
            }
            if(this.formData.numberOfNight == null ){
              this.postMsg = this.postMsg + " , Fill the numberOfNight";
              this.postError = true;
            }

  }

}
