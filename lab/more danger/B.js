
const mainBlock = document.querySelector('div.mainBlock');
const discovery = mainBlock.querySelector('section.author-discovery');

const width= window.screen.width;
const height= window.screen.height;
console.log(width);
console.log(height);

const disMain = discovery.querySelector('div.dis-Main');
const disSub= discovery.querySelector('div.dis-Sub');
const mainText = discovery.querySelector("div.dis-main-text");
const subText = discovery.querySelector("div.dis-sub-text");

function addSeeMore(button, addTextMoreTag){
   button.addEventListener('click', (e) =>{
      addTextMoreTag.style.overflow="auto";
   })
}

addSeeMore(disMain, mainText);
addSeeMore(disSub, subText);

// section.author-discovery section.dis-main-Body div.dis-main-text{

// 안녕 날 소개할게 직업은 백수, 이름 신현민, 나이 24(in Korea) 하지만 국제나이론 22살
//  젊은 귀요미지,
// 코딩을 공부하고 있고,
//  롤도 공부하고 있는 중이야,
//   하고 싶은데로 살기 위해 노력하는데
//   그거 조차 힘들줄은 몰랐네 아무쪼록 잘부탁해 친구!