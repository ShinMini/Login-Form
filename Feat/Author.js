const navBtns = document.querySelectorAll('section.circle');
const sectionMain = document.querySelector('section.main');
const allButtonsArray = ['Home', 'Author', 'Create', 'More']
const mainBlock = document.querySelector('section.main div.mainBlock');

class NavButton {

   ButtonClassAdd(addClass) {  // 버튼 초기화 및 클래스 추가 버튼 
      for (let i = 0; i < allButtonsArray.length; i++) {
         sectionMain.classList.remove(allButtonsArray[i]);
      mainBlock.classList.remove(allButtonsArray[i]);
      }
      sectionMain.classList.add(addClass);
// mainBlcok section optimizing
      mainBlock.classList.add(addClass);
   }
   navBtnControl(btnNum) {
      switch (btnNum) {
         case 0:
            this.ButtonClassAdd('Home');
            break;
         case 1:
            this.ButtonClassAdd('Author');
            break;
         case 2:
            this.ButtonClassAdd('Create');
            break;
         case 3:
            this.ButtonClassAdd('More');
            break;
         default:
            this.ButtonClassAdd('Home');
            break;
      }
   }
   buttonClick(index) {
      navBtns[index].addEventListener('click', (e) => {
         this.navBtnControl(index);
      })
   }

}
const app = new NavButton();
for (let i = 0; i < navBtns.length; i++) {
   app.buttonClick(i);
}

// ----------- button Clcik Method done. -------------

console.log(sectionMain);

