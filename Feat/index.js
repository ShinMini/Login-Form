const create = document.querySelector('.create');



const btns = document.querySelectorAll("section div.face");
const containerBox = document.querySelectorAll("section.container");

   function BtnAddEvent(num) {
      for (let i = 0; i < num; i++) {
         btns[i].addEventListener('click', (e) => {
            window.location = this.href = './Main';
         })
   }
}


BtnAddEvent(btns.length);

console.log(window.location.href);
// for (let i = 0; i <= containerBox.lenght; i++) {
//    //각 버튼을 클릭할 때마다.
//    btns[i].addEventListener("click", (e) => {
//       // 각 인수로 순서값과 버튼을 넣어줌
//       // Activation 함수 호출
//       Activation(i, btns);
//    })
// }

// function Activation(index, list) {
//    // 전체 버튼 초기화 및 해당 버튼 활성화
//    for (let face of list) {
//       face.classList.remove("on");
//    }
//    list[index].classList.add("on");
// }