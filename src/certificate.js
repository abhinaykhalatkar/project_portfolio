import {API_Keys} from "./API_Keys"
const axios = require('axios');
export class Certificate {
  constructor() {
    this.certiInput=document.querySelector("#inputContent3");
    this.certificateQuote=`<small>Certificates are not that important. It's the knowledge I gained while getting these Certificates that counts.</small>
    <br><span style="margin-left: -3vw;">they are here though just in case...</span>`;
  }
  render() {
    let certElCheck=!!document.getElementById("certCheck");
    if(!certElCheck){
      this.certiInput.innerHTML=`
      <div class="row" id="certCheck">
        <div class="large-10 columns">
           <div class="scroll-window-wrapper">
             <h2 style="padding-left: 5vw;">${this.certificateQuote} 
              </h2>
          <div class="scroll-window">
            <div class="scrollbar" id="style-2">
              <table class="table table-striped table-hover user-list fixed-header">
               <thead id="certTableH">
                   <th><div>Course</div></th>
                  <th><div>institute</div></th>
                  <th><div>Instructor</div></th>
                  <th><div></div></th>
                </thead>
                <tbody id="certInput">
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </div>
     </div>`;
     this.certificateInput = document.querySelector('#certInput');
      this.certificateWindow = document.querySelector('.scroll-window-wrapper');
      const self = this;
      axios
        .get(API_Keys.certificatesKey)
        .then(function(response) {
          if (response.status >= 300) {
            self.certificateWindow.innerHTML =
              '<h3>Server Response Error,Please Try After Sometime.</h3>';
          } else {
            return response;
          }
        })
        .catch(function(error) {
          self.certificateWindow.innerHTML =
            '<h3>Something Went Wrong,Please Try After Some Time.</h3>';
          console.log(error);
        })
        .then(function(response) {
          if (response.status <= 299) {
            const certificatesData = response.data;
            for (let i = 0; i < certificatesData.length; i++) {
              const data = certificatesData[i];
              const newCertificateEl = document.createElement('tr');
              newCertificateEl.innerHTML = `
               <td>${data.course}</td>
               <td>${data.institute}</td>
               <td>${data.instructor}</td>
               <td class="text-right">
                 <a href="${data.url}" target="_blank">
                   <button class="buttontiny">Certificate
                   </button>
                 </a>
               </td>
              `;
              self.certificateInput.appendChild(newCertificateEl);
            }
          } else {
            return;
          }
        });
    }
   
  }
}
