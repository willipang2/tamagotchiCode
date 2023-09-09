document.addEventListener('DOMContentLoaded', () => {

  const buttonOpening = document.querySelector('.opening button');
  const button1 = document.querySelector('#button1');
  const button2 = document.querySelector('#button2');
  const button3 = document.querySelector('#button3');
  const petImage = document.querySelector('.petImage img');
  const petText = document.querySelector('.questions p');
  const edImage = document.querySelector('.edImage img')

  let round = 0; let score = 0;
 
  function updateImage() {
    if (score <=-3) {petImage.src = "/gh/pet07.png"}
    if (score <=-5) {petImage.src = "/gh/pet08.png"}
    if (score <=-7) {petImage.src = "/gh/pet09.png"}

    if (score >= 2) {petImage.src = "/gh/pet02.png"}
    if (score >= 4) {petImage.src = "/gh/pet03.png"}
    if (score >= 6) {petImage.src = "/gh/pet04.png"}
    if (score >= 8) {petImage.src = "/gh/pet05.png"}
    if (score >= 10){petImage.src = "/gh/pet06.png"}
  }

 function buttonClick() {
    button1.addEventListener('click', handleButton1Click);
    button2.addEventListener('click', handleButton2Click);
    button3.addEventListener('click', handleButton3Click); 
  }

  function playRound() {

    switch (round) {
      case 0:
        buttonClick();
        petText.textContent = "我肚子餓了，可以買漢堡包吃嗎?";
        button1.textContent = "買給牠";
        button2.textContent = "不理牠";
        button3.textContent = "煮給牠吃";
        console.log(`Round is ${round} Score is ${score}`);
        updateImage();
        break;
      
      case 1:
        buttonClick();
        petText.textContent = "(幼稚園同學)小明打我! ";
        button1.textContent = "問牠事情的因由";
        button2.textContent = "嘲笑";
        button3.textContent = "教牠反擊";
        console.log(`Round is ${round} Score is ${score}`);
        updateImage();
        break;

      case 2:
        buttonClick();
        petText.textContent = "我的利是錢在哪裏?";
        button1.textContent = "坦承你用光了";
        button2.textContent = "騙他, 你幫牠保管";
        button3.textContent = "向牠道歉並把 錢還給牠";
        console.log(`Round is ${round} Score is ${score}`);
        updateImage();
        break;

      case 3:
        buttonClick();
        petText.textContent = "我很不開心.";
        button1.textContent = "忽視";
        button2.textContent = "帶牠去 游樂場玩";
        button3.textContent = "和牠聊天，嘗試開解牠";
        console.log(`Round is ${round} Score is ${score}`);
        updateImage();
        break;

      case 4:
        buttonClick();
        petText.textContent = "我討厭你!我要搬出去住!";
        button1.textContent = "告訴牠你的感受，溝通解決雙方矛盾";
        button2.textContent = "打到牠道歉爲止";
        button3.textContent = "由牠離家出走";
        console.log(`Round is ${round} Score is ${score}`);
        updateImage();
        break;

      case 5:
        buttonClick();
        petText.textContent = "長大後我要做藝術家!";
        button1.textContent = "游説牠當醫 生或律師";
        button2.textContent = "支持牠";
        button3.textContent = "當場暈倒";
        console.log(`Round is ${round} Score is ${score}`);
        updateImage();
        break;

      case 6:
        buttonClick();
        console.log(`Round is ${round} Score is ${score}`);
        displayEnding();
        return;
    }
  }

  function handleButton1Click() {
    switch (round) {
      case 0: score += 1; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "+ 1";
      document.querySelector('.displayScore').style.color = "blue";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;

      case 1: score += 1; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "+ 1";
      document.querySelector('.displayScore').style.color = "blue";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;

      case 2: score += 0; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "+ 0";
      document.querySelector('.displayScore').style.color = "blue";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;

      case 3: endGame("/gh/ed01.png"); 
      document.querySelector('.msg').textContent = "牠患上抑鬱症" ;
      document.querySelector('.msg').style.transform = "translateX(160px) translateY(345px)";
      return;

      case 4: score += 1; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "+ 1";
      document.querySelector('.displayScore').style.color = "blue";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;

      case 5: score -= 1; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "- 1";
      document.querySelector('.displayScore').style.color = "red";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;
      case 6: displayEnding(); return;
    }
    round += 1;
    playRound();
  }

  function handleButton2Click() {
    switch (round) {
      case 0: score -= 1; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "- 1";
      document.querySelector('.displayScore').style.color = "red";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;

      case 1: score -= 1; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "- 1";
      document.querySelector('.displayScore').style.color = "red";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;

      case 2: score -= 1; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "- 1";
      document.querySelector('.displayScore').style.color = "red";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;

      case 3: score += 1; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "+ 1";
      document.querySelector('.displayScore').style.color = "blue";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;

      case 4: score += 0; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "+ 0";
      document.querySelector('.displayScore').style.color = "blue";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;

      case 5: score += 2; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "+ 2";
      document.querySelector('.displayScore').style.color = "blue";
      document.querySelector('.displayScore').style.zIndex = "3";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;

      case 6: displayEnding(); return;
    }
    round +=1;
    playRound();
  }

  function handleButton3Click() {
    switch (round) {
      case 0: score += 2; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "+ 2";
      document.querySelector('.displayScore').style.color = "blue";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;

      case 1: score -= 2; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "- 2";
      document.querySelector('.displayScore').style.color = "red";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;

      case 2: score += 2; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "+ 2";
      document.querySelector('.displayScore').style.color = "blue";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;

      case 3: score += 2; 
      document.querySelector('.displayScore').style.display = "block";
      document.querySelector('.displayScore').textContent = "+ 2";
      document.querySelector('.displayScore').style.color = "blue";
      setTimeout(function() { document.querySelector('.displayScore').style.display = 'none';}, 400);
      break;

      case 4: endGame("/gh/ed02.png");  
      document.querySelector('.msg').textContent = "牠餓死了" ;
      document.querySelector('.msg').style.transform = "translateX(175px) translateY(345px)";
      return;

      case 5: endGame("/gh/ed03.png"); 
      document.querySelector('.msg').textContent = "你缺氧死了" ;
      document.querySelector('.msg').style.transform = "translateX(168px) translateY(345px)";
      return;

      case 6: displayEnding(); return;
    }
    round += 1;
    playRound();
  }



  function endGame(imageSrc) {
    edImage.src = imageSrc;
    document.querySelector('.edImage').style.zIndex = "2";
    petText.style.display = "none";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    
    document.querySelector('.msg').style.display = "block";
    
    GameRestart();
  }

  function displayEnding() {
    if (score <= 1) {edImage.src = "/gh/pet01.png"}
    if (score >= 2) {edImage.src = "/gh/pet02.png"}
    if (score >= 4) {edImage.src = "/gh/pet03.png"}
    if (score >= 6) {edImage.src = "/gh/pet04.png"}
    if (score >= 8) {edImage.src = "/gh/pet05.png"}
    if (score <=-3) {edImage.src = "/gh/pet07.png"}
    if (score <=-5) {edImage.src = "/gh/pet08.png"}

    if (score >= 10)
      { edImage.src = "/gh/endingGD.png"
        
        function display() {
          document.querySelector('.edImage').style.zIndex = "2";
          document.querySelector('.edImage').style.width = '420px';
          document.querySelector('.edImage').style.height = '420px';
          document.querySelector('.edImage').style.transform = 'scale(1.5)';
          GameRestart();
        }
        setTimeout(display, 450); 
        return;
      }

    if (score <= -7) 
      { edImage.src = "/gh/endingBad.png" 

        function display() {
          document.querySelector('.edImage').style.zIndex = "2";
          document.querySelector('.edImage').style.width = '420px';
          document.querySelector('.edImage').style.height = '420px';
          document.querySelector('.edImage').style.transform = 'scale(1.5)';
          GameRestart();
        }
        setTimeout(display, 450); 
        return;
      }
    
    function display() {
      document.querySelector('.edImage').style.zIndex = "2";
      document.querySelector('.msg').style.display = "block";
      document.querySelector('.msg').textContent = `你的分數為 : ${score} ， 請再接再厲。` ;

      petText.style.display = "none";
      button1.style.display = "none";
      button2.style.display = "none";
      button3.style.display = "none";
      GameRestart();
    }

    setTimeout(display, 450); 

  }
 
  function GameOpening () {
    let num = 0;
    buttonOpening.addEventListener('click', () => {
      console.log(`GameOpening ${num}`)
      switch (num) {
        
        case 0: 
        buttonOpening.style.backgroundImage = "url('/gh/opening2.png')"; 
        buttonOpening.style.height = '270px';
        buttonOpening.style.transform = 'scale(1) translateY(2px)';

        document.querySelector('.msg').style.display = "block";
        document.querySelector('.msg').textContent = "這是你的電子寵物。\n你的任務是要養育牠成爲天使，但你在照顧牠時，必須選取正確的做法，否則牠將成爲惡魔。";
        document.querySelector('.msg').style.transform = "translateX(5px) translateY(330px)";
        document.querySelector('.msg').style.maxWidth = '410px';
        break;

        case 1:
          buttonOpening.style.display = "none";
          document.querySelector('.msg').style.display = "none";
          document.querySelector('.opening').style.zIndex = "0";
          playRound(); 
          return;
      }
      num += 1;
    });
  }

function GameRestart() {
  const buttonRestart = document.querySelector('.Restart');
  document.querySelector('.Restart').style.zIndex = "3";
  buttonRestart.style.display = "block";
  buttonRestart.addEventListener('click', () => { location.reload() });
}

  playRound(); 
  GameOpening();
});