





document.addEventListener("DOMContentLoaded",function(){
  this.addEventListener("click",e => {
    let tar = e.target;
    if (tar.hasAttribute("data-dl")) {
      let dlClass = "dl-working";
      if (!tar.classList.contains(dlClass)) {
        let lastSpan = tar.querySelector("span:last-child"),
          lastSpanText = lastSpan.textContent,
          timeout = getMSFromProperty("--dur",":root");

        tar.classList.add(dlClass);
        lastSpan.textContent = "Downloading…";
        tar.disabled = true;

        setTimeout(() => {
          lastSpan.textContent = "Completed!";
        },timeout * 0.9);

        setTimeout(() => {
          tar.classList.remove(dlClass);
          lastSpan.textContent = lastSpanText;
          tar.disabled = false;
        },timeout + 1e3);
      }
    }
  });
});
function getMSFromProperty(property,selector) {
  let cs = window.getComputedStyle(document.querySelector(selector)),
    transDur = cs.getPropertyValue(property),
    msLabelPos = transDur.indexOf("ms"),
    sLabelPos = transDur.indexOf("s");

  if (msLabelPos > -1)
    return transDur.substr(0,msLabelPos);
  else if (sLabelPos > -1)
    return transDur.substr(0,sLabelPos) * 1e3;
}









document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".nav-button");
  const contentDivs = document.querySelectorAll(".content");

  buttons.forEach((button) => {
      button.addEventListener("click", function () {

          if(button.id == "projects_button"){
            return
          }


          if (window.location.href.includes("project.html")) {
              const targetSection = button.id.replace("_button", "_display");
              window.location.href = `index.html`;
              return;
          }

          contentDivs.forEach((div) => div.classList.remove("visible"));

          const targetId = button.id.replace("_button", "_display");
          document.getElementById(targetId).classList.add("visible");
      });
  });


  if (window.location.hash) {
      const targetSection = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetSection);
      if (targetElement) {
          
          contentDivs.forEach((div) => div.classList.remove("visible"));
          
          targetElement.classList.add("visible");

          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
  }
});





  document.getElementById("projects_button").addEventListener("click", function() {
    window.location.href = "project.html";
});


   const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    skill.addEventListener('mouseover', startSequentialBounce);
    skill.addEventListener('mouseout', stopBounce);
  });

  function startSequentialBounce(event) {
    const fullBalls = event.currentTarget.querySelectorAll('.full_ball');
    
    fullBalls.forEach((ball, index) => {
      ball.style.animationDelay = `${index * 0.2}s`;
    });
    event.currentTarget.classList.add('bouncing');
  }

  function stopBounce(event) {
    event.currentTarget.classList.remove('bouncing');
  }


 

  const characters = [
    "π", // π (pi)
    "Σ", // Σ (sigma, summation)
    "∫", // ∫ (integral)
    "√", // √ (square root)
    "θ", // θ (theta)
    "∠", // ∠ (angle)
    "∈", // ∈ (element of)
    "∩", // ∩ (intersection)
    "∪", // ∪ (union)
    "≡", // ≡ (identically equal)
    "≈", // ≈ (approximately equal)
    "≤", // ≤ (less than or equal to)
    "≥", // ≥ (greater than or equal to)
    "∞", // ∞ (infinity)
    "∑", // ∑ (sigma, summation)
    "±",  // ± (plus or minus)
    "≠", // ≠ (not equal)
    "∝", // ∝ (proportional to)
    "∅", // ∅ (empty set)
    "∨", // ∨ (logical OR)
    "∧", // ∧ (logical AND)
    "∂", // ∂ (partial derivative)
    "∇", // ∇ (nabla, gradient)
    "∆", // ∆ (delta, change)
    "∮", // ∮ (contour integral)
    "∛", // ∛ (cube root)
    "≅", // ≅ (congruent)
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];




const numberContainer = document.getElementById('number-container');
const aquariumHeight = numberContainer.clientHeight;

function createRandomCharacter() {
    const character = document.createElement('div');

    const randomChar = characters[Math.floor(Math.random() * characters.length)];
    character.textContent = randomChar;

    character.style.left = `${1 + Math.random() * 90}%`;

    character.style.top = `0%`; 

   
    const randomCharacterType = Math.random() < 0.5 ? 'character1' : 'character2';

    character.className = randomCharacterType;

    numberContainer.appendChild(character);

    
    const animationDuration = 4.25; 
    setTimeout(() => {
        character.remove();
    }, animationDuration * 1000);

    character.addEventListener('animationiteration', () => {
    });
}
setInterval(createRandomCharacter, 500);





//open popups when hover
document.addEventListener("DOMContentLoaded", function () {
  const projectButtons = document.querySelectorAll('.project-button');
  const popups = document.querySelectorAll('.popup');
  let isButtonClicked = false;


  const width = window.innerWidth * 0.75;
  const heigth = window.innerHeight;

  projectButtons.forEach(button => {
      button.addEventListener('mouseenter', function () {
        if (!isButtonClicked) {
            const popupId = "popup-".concat(button.id.charAt(button.id.length - 1));
            const popup = document.getElementById(popupId);
            popups.forEach(p => p.classList.remove('show'));
            popup.classList.add('show');
        }

      });

      button.addEventListener('mouseleave', function () {
        if (!isButtonClicked) {
          const popupId = "popup-".concat(button.id.charAt(button.id.length - 1));
          const popup = document.getElementById(popupId);S
          popup.style.width ="auto";
          popup.style.height="auto";
          popup.classList.remove('show');
        }
      });

      button.addEventListener("click", function () {


       
        const popupId = "popup-".concat(button.id.charAt(button.id.length - 1));
        const popup = document.getElementById(popupId);

        const idx = button.id.charAt(button.id.length - 1) -1;
       
        isButtonClicked = !isButtonClicked;
        if(projectButtons[idx].innerHTML == '❯'){
          projectButtons[idx].innerHTML ='❮';
  
        }else{
          projectButtons[idx].innerHTML ='❯';
        }

        popup_heading = popup.querySelector("p");
        popup_content = popup.querySelector("div");

        console.log(popup_content)

        if (isButtonClicked) {

    
          popup_heading.classList.add('invis');
          popup_content.classList.remove('invis');
          popup_content.classList.add('visible')

          popup.style.width = width+"px"; 
          popup.style.height = heigth+"px"; 
          popup.style.marginTop = "20px";
          popup.style.marginBottom = "20px";
          
        } else {
          popup_heading.classList.remove('invis');
          popup_content.classList.add('invis');
          popup_content.classList.remove('visible')


          popup.style.width = "auto";
          popup.style.height = "auto";


        }
      });
  });


  
  //popup dissapear when clicked somewhere
  document.addEventListener("click", function (event) {
      if (!event.target.classList.contains('project-button') && !event.target.classList.contains('popup') && !isButtonClicked) {
          popups.forEach(p => p.classList.remove('show'));
          isButtonClicked = false;
      }
  });

});



