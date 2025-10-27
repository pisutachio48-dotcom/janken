'use strict';
{
  const gutyokipa = [
    1, 2, 3
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

  function buttonStop() {
    gu.disabled = true;
    tyoki.disabled = true;
    pa.disabled = true;
  }

  function showComHand() {
    hand = Math.floor(Math.random() * gutyokipa.length) + 1;
    if (hand === 1) {
      com.src = 'img/gu.jpg';
    } else if (hand === 2) {
      com.src = 'img/tyoki.jpg';
    } else if (hand === 3) {
      com.src = 'img/pa.jpg';
    }
  }

  let timer;
  let hand;

  start.addEventListener('click', () => {
    title.style.display = 'none';
    hyoudai.style.display = ('block');
    game.style.display = 'block';

    timer = setInterval(() => {
      showComHand()
    }, 100);
  });
  gu.addEventListener('click', () => {
    clearInterval(timer);
    my.src = 'img/gu.jpg';
    if (hand === 1) {
      shouri.textContent = 'あいこ';
    } else if (hand === 2) {
      shouri.textContent = '勝ち';
    } else if (hand === 3) {
      shouri.textContent = '負け';
    }
    buttonStop();
  });
  tyoki.addEventListener('click', () => {
    clearInterval(timer);
    my.src = 'img/tyoki.jpg';
    if (hand === 1) {
      shouri.textContent = '負け';
    } else if (hand === 2) {
      shouri.textContent = 'あいこ';
    } else if (hand === 3) {
      shouri.textContent = '勝ち';
    }
    buttonStop();
  });
  pa.addEventListener('click', () => {
    clearInterval(timer);
    my.src = 'img/pa.jpg';
    if (hand === 1) {
      shouri.textContent = '勝ち';
    } else if (hand === 2) {
      shouri.textContent = '負け';
    } else if (hand === 3) {
      shouri.textContent = 'あいこ';
    }
    buttonStop();
  });

  repeat.addEventListener('click', () => {
    // title.style.display = 'none';
    // hyoudai.style.display = ('block');
    // game.style.display = 'block';

    timer = setInterval(() => {
      showComHand()

    }, 100);
    gu.disabled = false;
    tyoki.disabled = false;
    pa.disabled = false;
  });

  //  gu.addEventListener('click',()=>{

  // })

  // (Math.floor(Math.random()*gutyokipa.length));




}


