// ||||||||||||||||||||||||||||||
// |||     SPACE BATTLE      ||||
// ||||||||||||||||||||||||||||||

// Window Alerts for the Instructions //
// console.log(window);
// window.alert("Welcome to the Space Battle!");
// window.alert("Earth has been attacked by a horde of aliens!");
// window.alert("You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship.");
// window.alert("Battle the aliens as you try to destroy them with your lasers.");
// window.alert("There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship.");
// window.alert("Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat. ");
// window.alert(" A game round would look like this: - You attack the first alien ship - If the ship survives, it attacks you - If you survive, you attack the ship again - If it survives, it attacks you again - Etc. ");
// window.alert("- If you destroy the ship, you have the option to 'attack' the next ship or to 'retreat' ");
// window.alert("- If you retreat, the game is over.");
// window.alert(" - You win the game if you destroy all of the aliens. - You lose the game if you are destroyed.");
// window.alert("Good luck on your mission!");

let App = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType){
        switch(classType){
            case "USS Schwarzenegger":
                player = new Player(classType, 20, 5, 0.7);
                break;
            case "USS Stallone":
                player = new Player(classType, 18, 7, 0.7);
                break;
// switch works like if... case one is equal to listed player, then  stats will equal what's listed for the player
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="./assets/uss/' + classType.toLowerCase() + '.png" class="img-uss"><div><h3>' + classType + '</h3><p>Hull: ' + player.hull + '</p> <p>Firepower: ' + player.firepower + '</p> <p>Accuracy: ' + player.accuracy + '</p></div>';
    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getDefend = document.querySelector(".defend");
        getHeader.innerHTML = '<p>Task: Destroy the Alien Spaceships!</p>';
        getActions.innerHTML = '<a href="#" class=btn-prefight" onclick="App.setFight()">Start your battle!</a>';
        getDefend.style.visibility = "visible";
    },

    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // Create enemies
        let enemy00 = new Enemy("Alien Spaceship 1", "", "", "");
        let enemy01 = new Enemy("Alien Spaceship 2", "","","");
        let enemy02 = new Enemy("Alien Spaceship 3", "","","");
        let enemy03 = new Enemy("Alien Spaceship 4", "","","");
        let enemy04 = new Enemy("Alien Spaceship 5", "","","");
        let enemy05 = new Enemy("Alien Spaceship 6", "","","");
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(6));
        // Will  randomly select an enemy opponent based on the random number beetween 0 and 5. if the random number is 0, it will choose enemy00, if 1 is generated, it will choose    
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
            case 3:
                enemy = enemy03;
                break;
            case 4:
                enemy = enemy04;
                break;
            case 5:
                enemy = enemy05;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move!</p>'
        getActions.innerHTML = '<a href="#" class=btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML ='<img src="./assets/alien/' + enemy.enemyType.toLowerCase() + '.png" alt="'+ enemy.enemyType + '"class="img-alien"> <div><h3>' + enemy.enemyType + '</h3><p class="hull-enemy">Hull: ' + enemy.hull + '</p> <p>Firepower: ' + enemy.firepower + '</p> <p>Accuracy: ' + enemy.accuracy + '</p></div>';
    }

}

