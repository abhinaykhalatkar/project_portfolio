import { About } from './aboutMe';
import { Projects } from './projects';
import { Certificate } from './certificate';
import { Contact } from './contact';
import {deviceCheck} from "./deviceCheck";
export class clickHandler {
  constructor() {
    this.aboutBtn = document.getElementById('tabText1');
    this.projectBtn = document.getElementById('tabText2');
    this.certificateBtn = document.getElementById('tabText3');
    this.contactBtn = document.getElementById('tabText4');
    this.mobileHover=document.querySelector(".mainTemp")
    this.toHoverBtn=document.querySelector(".card");
    this.contentBox=document.querySelector(".contentBox");
    this.nameBtn=document.getElementById("firsth2");
    this.frontCloseBtn=document.querySelector(".frontCloseBtn");
  }
  eventHandler() {
    if(deviceCheck()){
      this.mobileHover.addEventListener("click",()=>{
        this.contentBox.classList.add("visible");
        this.nameBtn.classList.add("hoverEffect")
   });
    }else{
      this.toHoverBtn.addEventListener("mouseenter",()=>{
        this.contentBox.classList.add("visible");
        this.nameBtn.classList.add("hoverEffect")
   });
    }
    this.frontCloseBtn.addEventListener("click",()=>{
      this.contentBox.classList.remove("visible");
      this.nameBtn.classList.remove("hoverEffect");
    });
    //about event handler
    this.aboutBtn.addEventListener('click', () => {
      this.aboutModal = new About();
      this.aboutModal.render();
    });
    //project event handler
    this.projectBtn.addEventListener('click', () => {
      this.projectModal = new Projects();
      this.projectModal.render();
    });
    //Certificate event handler
    this.certificateBtn.addEventListener('click', () => {
      this.CertificateModal = new Certificate();
      this.CertificateModal.render(this);
    });
    //contact event handler
    this.contactBtn.addEventListener('click', () => {
      this.contactModal = new Contact();
      this.contactModal.render();
    });
  }
}
