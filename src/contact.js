import {contactButtons} from './contactBtn'
export class Contact {
  constructor() {
    this.contactModal = document.querySelector('#inputContent4');
    this.email = 'abhinaykhalatkar@gmail.com';
  }
  render() {
    if(!!document.querySelector(".directContact")){
   return;
    }else{
      this.contactModal.innerHTML = `
      <div class="directContact">
      <h5>Contact Me <br>Directly At</h5>
      <p>Abhinay Khalatkar<br>Mannheim ,Germany<br><a href="mailto:${this.email}">${this.email}</a></p>
      </div>
      <div id="otherContact">
       <h5>Lets Get Social</h5>
       <div class="contactBtnBody">
         <div class="flip-cover-git"></div>
         <div class="flip-cover-teligram"></div>
         <div class="flip-cover-linkedin"></div>
         <div class="flip-cover-facebook"></div>
       </div>
      </div>
       `;
       contactButtons();
       let linkList = document.querySelectorAll('.contactBtnBody a');
       for(let i of linkList){
       i.setAttribute('target','_blank');
       }
    }
  } 
}