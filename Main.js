const btns = document.querySelectorAll(".btns div");
const boxs = document.querySelectorAll("section article");

//  버튼의 개수만큼 반복하며 클릭 이벤트 연결
for(let i=0; i<=btns.length; i++ ){ 
   // 각 버튼을 클릭할 때마다
   btns[i].addEventListener("click", (e) => {
      // 각 인수로 순서값과 버튼, 박스 그룹을 넣어서
      // activation 함수 호출
      activation(i, btns);
      activation(i, boxs);
   })
}

function activation(index, list){
   // 인수로 받은 요소의 그룹 개수만큼 반복하며 비활성화
   for(let el of list){
      el.classList.remove("on");
   }
   // 1번째 인수로 받은 순서에 해당하는 그룹의 요소만 찾아서 활성화
   list[index].classList.add("on");
}