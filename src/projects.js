import {API_Keys} from "./API_Keys"
const axios = require('axios');
export class Projects {
  constructor() {
    this.projectsModal = document.querySelector('#inputContent2');
    this.projectQuote=`<h2 style="padding-left: 8vw;"> My Projects...</h2>`
    // <h2 style="padding-left: 8vw;">  <small>My projects... <br></small> Each one thought me something new and still teaching me new things... </h2>
  }
  render() { 
    let proCheck=!!document.querySelector("#style-3");
    if(!proCheck){
      this.projectsModal.innerHTML=`<div class="scroll-window">
      <div class="scrollbar" id="style-3">
       ${this.projectQuote}
       <div id="rowInputPro">
       </div>
       </div>
     </div>`
  const projectWindow=document.querySelector("#style-3");
  const inputTableEl=document.querySelector("#rowInputPro");
   axios.get(API_Keys.projectsKeys)
   .then(function (response) {
    if (response.status >= 300) {
      projectWindow.innerHTML =
        '<h3>Server Response Error,Please Try After Sometime.</h3>';
    } else {
      return response;
    }
   })
   .catch(function (error) {
    projectWindow.innerHTML =
    '<h3>Something Went Wrong,Please Try After Some Time.</h3>';
  console.log(error);
   })
   .then(function (response) {
    if (response.status <= 299) {
      const projectData = response.data;
      for (let i = 0; i < projectData.length; i++) {
        let img=""
        //add img variable for dynamic output in response
        let pdata = projectData[i];
        let newProjectEl = document.createElement('div');
        newProjectEl.innerHTML = `<table class="projectTab">
        <tr>
          <td class="proImg" colspan="2"><img src="${img}" onerror="this.src='./style/images/dummyPro.png';"/></td>
          <td class="proName" colspan="2">${pdata.name}</td>
        </tr>
         <tr class="btnRow">
          <td><button class="gitBtn"><a href="${pdata.git}">Git</a></button></td>
          <td colspan="2"><button class="codepen"><a href="${pdata.codepen}">Codepen</a></button></td>
         <td><button class="siteBtn"><a href="${pdata.url}">Project site</a></button></td>
       </tr>
     </table>                                 
    `;
    inputTableEl.appendChild(newProjectEl);
      }
    } else {
      return;
    }
   
   });
    }
   

}}
