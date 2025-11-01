'use strict';
{
  const gutyokipa = [
    'img/gu.jpg', 'img/tyoki.jpg', 'img/pa.jpg'
  ];

  const start = document.querySelector('#start');
  const title = document.querySelector('#title');
  const hyoudai = document.querySelector('#hyoudai');
  const game = document.querySelector('#game');
  const gu = document.querySelector('#gu');
  const tyoki = document.querySelector('#tyoki');
  const pa = document.querySelector('#pa');
  const com = document.querySelector('#com');
  const my = document.querySelector('#my');
  const shouri = document.querySelector('#shouri');
  const repeat = document.querySelector('#repeat');
  const winbw = document.querySelector('#winbw');
  const losbw = document.querySelector('#losbw');
  const gamehantei = document.querySelector('#gamehantei');

  function buttonStop() {
    gu.disabled = true;
    tyoki.disabled = true;
    pa.disabled = true;
  }
  let victory = 0;
  let loss = 0;
  function judge(myhandIndex, comhand) {
    if (myhandIndex === comhand) {
      return 'あいこ'
    }
    const win =
      (myhandIndex === 0 && comhand === 1) ||
      (myhandIndex === 1 && comhand === 2) ||
      (myhandIndex === 2 && comhand === 0);

    if (win) {
      victory++
      return '勝ち';
    }
    loss++
    return '負け';


  }
  function playbutton(myhandIndex) {
    comhand = Math.floor(Math.random() * gutyokipa.length);
    com.style.animation = 'none';
    com.style.backgroundImage = `url(${gutyokipa[comhand]})`;
    my.src = gutyokipa[myhandIndex];
    shouri.textContent = judge(myhandIndex, comhand);
    buttonStop();
    repeat.style.visibility = 'visible'
      ;
    winbw.textContent = `勝数 ${victory} 回`;
    losbw.textContent = `負数 ${loss} 回`;
    gameover();
  }

  function gameover() {
    if (victory === 3) {
      
      setTimeout(() => {
        hyoudai.style.display='none';
    title.style.display='block';
        game.style.display = 'none'
        // start.style.display = 'none';
        gamehantei.style.display = 'block';
        gamehantei.textContent = 'YOU WIN!';
        title.style.backgroundColor='gold';
      }, 1500);


    } else if
      (loss === 3) {
      setTimeout(() => {
        hyoudai.style.display='none';
    title.style.display='block';
        game.style.display = 'none'
        // start.style.display = 'none';
        gamehantei.style.display = 'block';
        gamehantei.textContent = 'YOU LOSE!';
        title.style.backgroundColor='gray';
      }, 1500);
    }
    
  }


  let comhand;

  start.addEventListener('click', () => {
    title.style.display = 'none';
    hyoudai.style.display = 'block';
    game.style.display = 'block';
    repeat.style.visibility = 'hidden'
     com.style.animation = 'janken-loop 0.6s infinite';
    shouri.textContent = '';
     victory = 0;
   loss = 0;
    winbw.textContent = `勝数 ${victory} 回`;
    losbw.textContent = `負数 ${loss} 回`;
    gamehantei.style.display = 'none';
    shouri.textContent = '';

    gu.disabled = false;
    tyoki.disabled = false;
    pa.disabled = false;
    repeat.style.visibility = 'hidden'
    title.style.backgroundColor = '';
  });

  gu.addEventListener('click', () => playbutton(0));
  tyoki.addEventListener('click', () => playbutton(1));
  pa.addEventListener('click', () => playbutton(2));

  repeat.addEventListener('click', () => {

    com.style.animation = 'janken-loop 0.6s infinite';
    shouri.textContent = '';

    gu.disabled = false;
    tyoki.disabled = false;
    pa.disabled = false;
    repeat.style.visibility = 'hidden'
  });

  //  gu.addEventListener('click',()=>{

  // })

  // (Math.floor(Math.random()*gutyokipa.length));




}


