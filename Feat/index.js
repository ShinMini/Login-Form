const navBtns = document.querySelectorAll('section.circle');
const sectionIntro= document.querySelector('section.intro');
const Header = document.querySelector('section.intro h1');

const MainClass = ['List', 'Author', 'Create', 'More']
const mainBlock = document.querySelector('section.intro div.mainBlock');
const AuthorDiscover = document.querySelector('div.mainBlock section.discover');



/*
section Author 일때, 
AuthorContainer의 display = 'flex';

section Author가 아닐때, 나머지 리스트 클래스 display = none; 으로 초기화 및 해당 클래스 display 값 flex로 변경 

*/ 
class NavButton {
   AuthorDiscoverOn(displayClass) {
      display? AuthorDiscover.style.display = 'flex' : AuthorDiscover.style.display  =  'none';
   }

   ButtonClassAdd(addClass) {  // 버튼 초기화 및 클래스 추가 버튼 
      for (let i = 0; i < MainClass.length; i++) {
         sectionIntro.classList.remove(MainClass[i]);     // 기존 main section 클래스 제거 (초기화)
         mainBlock.classList.remove(MainClass[i]);       // 기존 메인 블록 클래스 제거 (초기화)
      }
      sectionIntro.classList.add(addClass);
      // mainBlcok section optimizing
      mainBlock.classList.add(addClass);
   }
   navBtnControl(btnNum) {
      switch (btnNum) {
         case 0:
            this.ButtonClassAdd('List');
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

console.log(sectionIntro);
