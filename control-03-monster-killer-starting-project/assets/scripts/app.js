const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 15;
const STRONG_ATTACK_VALUE = 20;
const HEAL_VALUE = 10;

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK'
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK'
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL'
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK'
const LOG_EVENT_GAME_OVER = 'GAME_OVER'


// if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
//   console.log("Improper health value inserted, default 100 is used")
//   chosenMaxLife = 100;
// }
function getMaxLifeValues() {
  const enteredValue = prompt('Max life for you and the monster:', '100')

  const parsedValue = parseInt(enteredValue);
  if (isNaN(parsedValue) || parsedValue <= 0) {
    throw { message: 'Invalid user input' }

  }
  return parsedValue
}

try {
  chosenMaxLife = getMaxLifeValues();

} catch (error) {
  console.log(error);
  chosenMaxLife = 100
  alert('Invalid input, default 100 is being used')

}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true

let battleLog = []
function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  }
  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = 'MONSTER'
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = 'MONSTER'
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry.target = 'PLAYER'
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry.target = 'PLAYER'
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
      }
  }
  // if (ev === LOG_EVENT_PLAYER_ATTACK || ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: 'MONSTER',
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth
  //   }

  // } else if (ev === LOG_EVENT_MONSTER_ATTACK || ev === LOG_EVENT_PLAYER_HEAL) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: 'PLAYER',
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth
  //   }

  // } else if (ev === LOG_EVENT_GAME_OVER) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth
  //   }

  // }
  battleLog.push(logEntry)

}




adjustHealthBars(chosenMaxLife);

function attackMonster(mode) {
  let maxDamage
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE

  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE
  }
  const damage = dealMonsterDamage(maxDamage)
  currentMonsterHealth -= damage;
  // console.log(`Player deals ${damage} damage to monster!`)

  if (mode === 'ATTACK') {
    writeToLog(LOG_EVENT_PLAYER_ATTACK, damage, currentMonsterHealth, currentPlayerHealth)

  } else if (mode === 'STRONG_ATTACK') {
    writeToLog(LOG_EVENT_PLAYER_STRONG_ATTACK, damage, currentMonsterHealth, currentPlayerHealth)
  }

  endRound()
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  // Log the monster's attack after the player's health is updated
  writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    console.log("Bonus life consumed!");
  } else if (currentPlayerHealth <= 0 && !hasBonusLife) {
    console.log("You Lose!");
    writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WINS', currentMonsterHealth, currentPlayerHealth);
    reset();
  } else if (currentMonsterHealth <= 0) {
    console.log('You Win!');
    writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WINS', currentMonsterHealth, currentPlayerHealth);
    reset();
  }
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife)
}

function attackHandler() {
  attackMonster('ATTACK')
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK')
}

function healHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("No overheals")
    healValue = chosenMaxLife - currentPlayerHealth
  } else {
    healValue = HEAL_VALUE
  }
  increasePlayerHealth(healValue)
  currentPlayerHealth += healValue
  writeToLog(LOG_EVENT_PLAYER_HEAL, "HEAL", currentMonsterHealth, currentPlayerHealth)

  endRound()

}

function logHandler() {
  // for (let i = 0; i < battleLog.length; i++) {

  //   console.log(battleLog[i])
  // }

  for (const logEntry of battleLog) {
    console.log(logEntry);

  }
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healHandler)
logBtn.addEventListener('click', logHandler)


// function breakMe() {
//   throw { message: 'breakMe is working' }
// }

// function main() {
//   try {
//     breakMe();
//   } catch (error) {
//     return error
//   }
// }

// main()
