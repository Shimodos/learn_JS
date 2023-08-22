"use strict";
/*
ЗАДАЧИ:

1.Создайте отдельные массивы игроков каждой команды. (Переменные pleayersTeamOne и pleayersTeamTwo)

2. Первый игрок в каждом массиве - это вратарь, остальные игроки это просто члены команды. Для первых игроков каждой команды, создайте переменную goalKeeper, а для всех остальных fieldPlayers.

3.Создайте один массив allPlayers который будет содержать всех игроков обеих команд.

4.Добавьте в массив allPlayers еще 3-х игроков. (Имена игроков придумайте сами)

5. В объекте game есть объект odds, внутри которого три свойства: 
team1: 1.33, 
x: 3.25,
team2: 6.5. 
С помощью деструктуризации объекта, создайте 3 переменные из этого объекта. При создании переменных, 
let team1 = 1.33,
let x = 3.25,
let team2 = 6.5
поменяйте имя свойства x на draw.




*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.Создайте отдельные массивы игроков каждой команды. (Переменные pleayersTeamOne и pleayersTeamTwo)

const [pleayersTeamOne, pleayersTeamTwo] = game.players;
console.log(pleayersTeamOne, pleayersTeamTwo);

// 2. Первый игрок в каждом массиве - это вратарь, остальные игроки это просто члены команды. Для первых игроков каждой команды, создайте переменную goalKeeper, а для всех остальных fieldPlayers.

const [goalKeeper, ...fieldPlayers] = pleayersTeamOne;
console.log(goalKeeper, fieldPlayers);

// 3.Создайте один массив allPlayers который будет содержать всех игроков обеих команд.

const allPlayers = [...pleayersTeamOne, ...pleayersTeamTwo];
console.log(allPlayers);

// 4.Добавьте в массив allPlayers еще 3-х игроков. (Имена игроков придумайте сами)

const allPlayersNew = [...allPlayers, "Thiago", "Coutinho", "Perisic"];
console.log(allPlayersNew);

// 5. В объекте game есть объект odds, внутри которого три свойства:
// team1: 1.33,
// x: 3.25,
// team2: 6.5.

// С помощью деструктуризации объекта, создайте 3 переменные из этого объекта. При создании переменных,

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);
