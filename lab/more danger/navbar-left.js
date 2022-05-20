// 상단 nav 버튼 클릭시 nav.navigation element에 on 클래스 추가
const navDot = document.querySelector('nav.navigation img');
const navigation = document.querySelector("nav.navigation");
const listSection = document.querySelector("section.list");

const navCircle = document.querySelectorAll('nav.navigation section.circle');
const divMainBlock = document.querySelector('div.mainBlock');
const ClassListArray = ['List', 'Author', 'Create', 'More'];

navDot.addEventListener('click', function () {
   navigation.classList.toggle("on");
});
/* 버튼 클릭 시 메인 컨테이너 class 속성 부여 */
function AddClassList(addClass) {
   for (let i = 0; i < ClassListArray.length; i++) {
      divMainBlock.classList.remove(ClassListArray[i]);
   }  // 현재 클래스 초기화
   divMainBlock.classList.add(addClass);  // 원하는 클래스값 인자값 추가
}

for (let t = 0; t < navCircle.length; t++) {
   navCircle[t].addEventListener('click', (e) => {   // t번째 nav바 상단 버튼 클릭시 
      AddClassList(ClassListArray[t]);    // AddClassList 함수 호출 인자값으로 ClassListArray[t]번째 string 전달
   })
}
//
