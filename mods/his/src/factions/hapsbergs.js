
    this.importFaction('faction1', {
      id		:	"faction1" ,
      key		: 	"hapsburg",
      name		: 	"Hapsburg",
      nickname		: 	"Hapsburg",
      capitals          :       ["valladolid","vienna"],
      img		:	"hapsburgs.png",
      cards_bonus	:	0,
      returnCardsSaved  :       function(game_mod) {
 
        let base = 2;
        return base; 

      },
      returnCardsDealt  :       function(game_mod) {
        
        let kc = game_mod.returnNumberOfKeysControlledByFaction("hapsburg");
        let base = 0;
        
        switch (kc) {
          case 1: { base = 1; break; }
          case 2: { base = 2; break; }
          case 3: { base = 2; break; }
          case 4: { base = 3; break; }
          case 5: { base = 3; break; }
          case 6: { base = 4; break; }
          case 7: { base = 4; break; }
          case 8: { base = 5; break; }
          case 9: { base = 5; break; }
          case 10: { base = 6; break; }
          case 11: { base = 6; break; }
          case 12: { base = 7; break; }
          case 13: { base = 7; break; }
          default: { base = 0; break; }
        }

        if (game_mod.game.state.leaders_charles_v == 1) { base += 0; }
       
        // TODO - bonus for home spaces under protestant control
        return base;

      },
      calculateBaseVictoryPoints  : function(game_mod) {
        
        let kc = game_mod.returnNumberOfKeysControlledByFaction("hapsburg");
        let base = this.vp;
        
        switch (kc) {
          case 1: { base += 2; break; }
          case 2: { base += 3; break; }
          case 3: { base += 4; break; }
          case 4: { base += 5; break; }
          case 5: { base += 6; break; }
          case 6: { base += 7; break; }
          case 7: { base += 8; break; }
          case 8: { base += 9; break; }
          case 9: { base += 10; break; }
          case 10: { base += 11; break; }
          case 11: { base += 12; break; }
          case 12: { base += 13; break; }
          case 13: { base += 14; break; }
        } 
        
        return base;

      },
      calculateBonusVictoryPoints  :    function(game_mod) {
        return this.bonus_vp;
      },
      calculateSpecialVictoryPoints  :  function(game_mod) {
        return this.special_vp;
      },
    });
 


