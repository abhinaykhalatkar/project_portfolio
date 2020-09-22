export class About {
  constructor() {
    this.aboutModal = document.querySelector('#inputContent1');

    this.aboutMeIntro=`
    I'm a novice Web Developer based in India, currently pursuing my bachelors.
I like the feel I get when I create something useful out of nothing. 
Sometimes I stay up so late coding that I have my morning coffee before i go to bed.`
    
    this.structureLang=["HTML5","CSS"];

    this.frontTools=[
      "VS Code",
      "Chrome dev tools",
      "Bootstrap",
      "Git",
      "DOM" ,
      "RegEx" ,
      "ESLint" ,
      "Webpack", 
      "indexedDB", 
      "babel-polyfill", 
      "React(learning)",
      "Web Components"];

    this.progLanguage=[
      "Js(ES6+)",
      "C", 
      "C++", 
      "Node.js",
      "TypeScript"];

    this.backTools=[
      "AJAX","Axios",
      "jQuery",
      "Lodash",
      "Express.js",
      "Firebase hosting",
      "Firebase realtime database",
      "Heroku"];

      this.personalSkill=[
        "Team player",
        "Love of Learning",
      "Flexibility","hardworking"];
        this.otherSkill=[
          "Cooking","badminton","NBA"];
  }

  render() {
    let aboutElCheck=!!document.getElementById("scrollWin1");
if(!aboutElCheck){
  this.aboutModal.innerHTML = `
  <div class="scroll-window" id="scrollWin1">
        <div class="scrollbar" id="style-1">
        <div id="aboutContent">
  <div id="aboutTextContent">
    <h1>Hi, I'm Abhinay...</h1>
    <h2>${this.aboutMeIntro}
    </h2>
  </div>
  <div id="skillsContent">
     <div id="frontEndSkill">
       <img src="./style/images/frontend.svg" alt="">
     <h1>Front-end</h1>
     <p class="paraHeading">
       Structure with:
     </p>
     <p class="paraContent" id="structLangIn">
      
     </p>
     <p class="paraHeading">
       Tools i use:
     </p>
     <p class="paraContent" id="frontToolIn">
       
     </p>
     </div>
     <div id="backEndSkill">
       <img src="./style/images/backend.svg" alt="">
       <h1>Back-end</h1>
     <p class="paraHeading">
       Languages I speak:
     </p>
     <p class="paraContent" id="progLangIn">
      
     </p>
     <p class="paraHeading">
       Tools i use:
     </p>
     <p class="paraContent" id="backToolIn">
       
     </p>
     </div>
     <div id="personalSkill">
       <img src="./style/images/personal.svg" alt="">
       <h1>personal Skills</h1>
     <p class="paraHeading" >
     Personal Skills
     </p>
     <p class="paraContent" id="persSkillIn">
     </p>

     <p class="paraHeading" >
     Other things I Enjoy
     </p>
     <p class="paraContent" id="otherSkillIn">

     </p>
     
     </div>
  
  </div>
  </div>
        </div>
      </div>`;
  // initialise after html appended
      this.structLangIn=document.getElementById("structLangIn");
      this.frontToolIn=document.getElementById("frontToolIn");
      this.progLangIn=document.getElementById("progLangIn");
      this.backToolIn=document.getElementById("backToolIn");
      this.persSkillIn=document.getElementById("persSkillIn");
      this.otherSkillIn=document.getElementById("otherSkillIn");
      const inputSkills=()=>{
        this.structureLang.map(x=>{
          let newEl1=document.createElement("span");
          newEl1.innerHTML=`${x}<br>`;
          this.structLangIn.appendChild(newEl1)});

          this.frontTools.map(x=>{
            let newEl1=document.createElement("span");
            newEl1.innerHTML=`${x}<br>`;
            this.frontToolIn.appendChild(newEl1)});
            
            this.progLanguage.map(x=>{
              let newEl1=document.createElement("span");
              newEl1.innerHTML=`${x}<br>`;
              this.progLangIn.appendChild(newEl1)});

              this.backTools.map(x=>{
                let newEl1=document.createElement("span");
                newEl1.innerHTML=`${x}<br>`;
                this.backToolIn.appendChild(newEl1)});
                
                this.personalSkill.map(x=>{
                  let newEl1=document.createElement("span");
                  newEl1.innerHTML=`${x}<br>`;
                  this.persSkillIn.appendChild(newEl1)});

                  this.otherSkill.map(x=>{
                    let newEl1=document.createElement("span");
                    newEl1.innerHTML=`${x}<br>`;
                    this.otherSkillIn.appendChild(newEl1)});
      }
      inputSkills();
}
 
  }
}
