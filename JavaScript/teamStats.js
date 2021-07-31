const team = {
    _players: [
      {
        firstName: 'Padre',
        lastName: 'Madre',
        age: 61,
      },
      {
        firstName: 'Dumbo',
        lastName: 'Reagal',
        age: 22,
      },
      {
        firstName: 'Maximus',
        lastName: 'Draximus',
        age: 18,
      }
    ],
    _games: [
      {opponent: 'Manu', teamPoints: 77, opponentPoints: 92},
      {opponent: 'Brocoly', teamPoints: 98, opponentPoints: 23},    
      {opponent: 'Paprika', teamPoints: 29, opponentPoints: 100},
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games
    },
  
    addPlayer(firstName, lastName, age){
      let player = {
        firstName,
        lastName,
        age,
      };
      this.players.push(player);
    },
    
    addGame(opponentName, teamPoints, opponentPoints){
      const game = {
        opponent: opponentName,
        teamPoints,
        opponentPoints,
      }
      this.games.push(game);
    }
  };
  
  team.addPlayer("Steph","Curry", 28)
  team.addPlayer("Lisa","Leslie", 44)
  team.addPlayer("Bugs","Bunny", 76)
  console.log(team.players)
  
  team.addGame("Sea Lions", 100, 50);
  team.addGame("Wolfes", 80, 60);
  team.addGame("Assholes", 30, 100);
  console.log(team.games)