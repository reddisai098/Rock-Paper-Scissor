const score = JSON.parse(localStorage.getItem('score')) || {
      user: 0,
      bot: 0,
      tie: 0
    };

    document.body.querySelector('.score').innerHTML = `<p>You : ${score.user} , Bot : ${score.bot} , Tie : ${score.tie}</p>`;

    function resetScore(){
      score.user = 0;
      score.bot = 0;
      score.tie = 0;
      document.body.querySelector('.winners').innerHTML = `<p></p>`;
      document.body.querySelector('.moves-text').innerHTML = `<p></p>`;
      document.body.querySelector('.score').innerHTML = `<p>You : ${score.user} , Bot : ${score.bot} , Tie : ${score.tie}</p>`;
      localStorage.removeItem('score');
    }

    function playgame(usermove){
      let bot = compMove();
      //let Wuser = false,Wbot = false;
      let winner = 'TIE';
      if(usermove == 'ROCK'){
        if(bot === 'ROCK'){
          score.tie++;
          // Wuser = true;
          // Wbot = true;

        }
        else if(bot === 'PAPER'){
          score.bot++;
          //Wbot = true;
          winner = 'BOT';
        }
        else{
          score.user++;
          // Wuser = true;
          winner = 'YOU';
        }
      }
      else if(usermove == 'PAPER'){
        if(bot === 'PAPER'){
          score.tie++;
          // Wuser = true;
          // Wbot = true;
        }
        else if(bot === 'SCISSOR'){
          score.bot++;
          // Wbot = true;
          winner = 'BOT';
        }
        else{
          score.user++;
          winner = 'YOU';
          //Wuser = true;
        }
      }
      else if(usermove == 'SCISSOR'){
        if(bot === 'SCISSOR'){
          score.tie++;
          // Wuser = true;
          // Wbot = true;
        }
        else if(bot === 'ROCK'){
          score.bot++;
          //Wbot = true;
          winner = 'BOT';
        }
        else{
          score.user++;
          winner = 'YOU';
          // Wuser = true;
        }
      }
      localStorage.setItem('score',JSON.stringify(score));

      if(winner === 'TIE') document.body.querySelector('.winners').innerHTML = `<p>TIE.</p>`;
      else document.body.querySelector('.winners').innerHTML = `<p>${winner} Won .</p>`;
      document.body.querySelector('.moves-text').innerHTML = `YOU chose <img class="moves" src="images/${usermove.toLowerCase()}.png" alt=""> . BOT chose <img class="moves" src="images/${bot.toLowerCase()}.png" alt="">`;
      document.body.querySelector('.score').innerHTML = `<p>You : ${score.user} , Bot : ${score.bot} , Tie : ${score.tie}.</p>`;
    }

    function compMove(){
      let bot;
      let temp = Math.random();
      if(temp>=0 && temp < 1/3) bot = 'ROCK';
      else if(temp >= 1/3 && temp < 2/3) bot = 'PAPER';
      else bot = 'SCISSOR';
      return bot;
    }