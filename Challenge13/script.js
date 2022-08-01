// Exercice 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Affichage de l'équipe du Bayern de Munick
let players1 = [game.players[0]];
console.log(players1);

// Affichage de l'équipe de Dortmund
let players2 = [game.players[1]];
console.log(players2);

// Affichage du gardien du Bayern de Munick
let gk = game.players[0][0];
console.log(gk);

// Affichage des joueurs de champs
let fieldPlayers = [];
for (let i = 1; i < game.players[0].length; i++) {
  fieldPlayers.push(game.players[0][i]);
}
console.log (fieldPlayers);

// Affichage des joueurs des 2 équipes
let allPlayers = [];

for (let i = 0; i < game.players[0].length; i++) {
  allPlayers.push(game.players[0][i]);
}
for (let i = 0; i < game.players[1].length; i++) {
  allPlayers.push(game.players[1][i]);
}
console.log (allPlayers);

// Affichage de l'équipe du Bayern de Munick avec les remplaçants
let players1Final = players1;
players1Final[0].push('Thiago', 'Coutinho', 'Perisic');
console.log(players1Final);

// Variable pour les odds
let team1 = game.odds.team1;
let draw = game.odds['x'];
let team2 = game.odds.team2;

// Affichage des buteurs et du nombre de but total
function printGoals() {
  for (let i = 0; i < game.scored.length; i++)
    console.log(game.scored[i] + " 1 but");
    console.log(game.scored.length + " buts au total");
}
console.log(printGoals());

// Affichage de l'équipe qui à le plus de chance de gagner en fonction des odds
function favorite(oddsTeam1, oddsTeam2, nameTeam1, nameTeam2) {
  if (oddsTeam1 > oddsTeam2) {
    return `l'équipe ${nameTeam2} a le plus de chance de gagner`;
  } else {
    return `l'équipe ${nameTeam1} a le plus de chance de gagner`;
  }
}
console.log(favorite(team1, team2, game.team1, game.team2));


//******************************************************************************************
//Exercice 2

// Affichage du buteur et du numéro du but
for (let i = 0; i < game.scored.length; i++) {
  console.log(`But ${i + 1} : ${game.scored[i]}`);
}

// Affichage des probabilités de victoire
console.log(`Probabilité de victoire pour ${game.team1}: ${game.odds.team1}`);
console.log(`Probabilité d'égalité : ${game.odds.x}`);
console.log(`Probabilité de victoire de ${game.team2}: ${game.odds.team2}`);

const scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
};


//******************************************************************************************
// Exercice 3

const gameEvents = [
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
];

// Initialisation du tableau "events"
let events = [];

// Récupération des événements dans le tableau "events"
for (let i = 0; i < gameEvents.length; i++){
  events.push(gameEvents[i][1]);
}

// Suppression des doublons via la combinaison du "Spread operator" et de la fonction "new Set"
// Remarque: Ne pas mettre de spread fonction également mais présente l'array différemment.
events = [...new Set(events)];
console.log (events);

// Suppression du carton jaune de la 64eme minute
gameEvents.splice(4,1);
console.log(gameEvents);

// Calcul de la fréquence du nombre d'évènement
const eventFrequency = 90 /gameEvents.length;
console.log (`Un évènement est apparu en moyenne toutes les ${eventFrequency} minutes”.`);

// Affichage si évènement s'est déroulé pendant la première moitié ou la deuxième moitié du jeu
for (let i = 0; i < gameEvents.length; i++){
  if (gameEvents[i][0] <= 45){
    console.log(`[PREMIÈRE MOITIÉ]: ${gameEvents[i]}`);
  } else {
    console.log(`[DEUXIEME MOITIÉ]: ${gameEvents[i]}`);
  }
}




