


  ////////////////////////////////
  /// Cards and Card Functions ///
  ////////////////////////////////
  returnBlueDeck() {

    var deck = {};

    deck['b001'] 	= {
	name: "Unguided Spirit"					, 
	type: "Creature - Spirit"				,
	color: "blue"						,
	cost: ['*','*','*','blue']				,
	power: 3						,
	toughness: 1						,
	properties: ['flying']
	text= "Flight - At the start of the battle pick one of the following:
		• Flip one creature.
		• Chose one creature, it will not flip during its Master's unflip phase."				,
	lore: "You'll see whatever I choose to show you. Don't get your hopes up."
	img: "/realms/img/cards/sample.png"			,
    }
    deck['b002'] 		= { 
	name: "The Big Wave"    				, 
	type: "sorcery"						,
	color: "blue"						,
	cost: ['*','*','*','*','blue']				,
	text: "Each player picks a non-domain permanent under their command. 
		Every other non-domain permanent must return to their Master's hand. After they do, 
		you may draw a card for each opponent that had more cards in their hand than you do.",
	img: "/realms/img/cards/sample.png"			,
	
    }

   deck['b003'] 	= { 
	name: "Fake Destiny"    				, 
	type: "Instant"						,
	color: "blue"						,
	cost: ['*','blue']
	text: "Send back a creature of your choosing to its Master's hand. If its Soul value is 3 or less, you get Foresight 1. 
	(Check the first card on your compendium. You may shuffle that card to the bottom of your compendium)"		,
	img: "/realms/img/cards/sample.png"			,
    }

    deck['b004'] 	= { 
	name: "Luminous Being"    				, 
	type: "Creature - Horror"				,
	color: "blue"						,
	cost: ['*','*', '*','*','*','blue,'blue']		,
	power: 7						,
	toughness: 8						,
	properties: ['blaze']
	text: "Blaze - This spell cannot be countered.
	Every time you conjure a spell pick one of the following:
	• Return a spell outside of your command to its Master's hand.
	• Return a non-domain permanent to its Master's hand."	,
	img: "/realms/img/cards/sample.png"			,
    }

   deck['b005'] 	= { 
	name: "Symbiotic Possesion"    					, 
	type: "Instant"						,
	color: "blue"						,
	cost: ['*','*','blue']
	text: "Chose a creature, for the rest of the turn it becomes a 5/5 wisdom ghost.",
	lore: ""“A simple trade. Our brains for your brawn.”
		-Ancestral Hive Mind""				,
	img: "/realms/img/cards/sample.png"			,
    }

  deck['b006'] 	= { 
	name: "Lakeshire Hippogriff"    			, 
	type: "Creature - Hippogriff"				,
	color: "blue"						,
	cost: ['*','*','*','*','*','blue']			,
	power: 3						,
	toughness: 3						,
	properties: ['flying']	['blaze']
	text: ""Blaze
		Flight"						,
	lore: ""With the dragons gone, Lakeshire's hippogriffs eagerly reclaimed their perches atop the valley's mountain peaks."" ,
	img: "/realms/img/cards/sample.png"			,
    }

    deck['b007'] 	= { 
	name: "Deformed Scarecrow"    				, 
	type: "Creature - Zombie Horror"			,
	color: "blue"						,
	cost: ['*','*','blue']			 		,
	power: 2						,
	toughness: 1						,
	text: "When Deformed Scarecrow is killed, search through your compendium for another Deformed Scarecrow, 
		put it on your hand after showing it to your opponent and then reshuffle the deck."	,				,
	lore: ""Anything, or anybody, can be replaced.""	,
	img: "/realms/img/cards/sample.png"			,
    }

  /*  deck['b003'] 	= { 
	name: "b003"    					, 
	type: "creature"					,
	color: "blue"						,
	cost: ['*','*','*','blue']			,
	power: 3							,
	toughness: 2						,
	properties: ['flying']					,
	img: "/realms/img/cards/sample.png"		,
    }

    deck['b004'] 	= { 
	name: "b004"    					, 
	type: "instant"						,
	color: "blue"						,
	cost: ['*','*','blue']					,
	img: "/realms/img/cards/sample.png"			,
    }
    deck['b005'] 		= { 
	name: "b005"    					, 
	type: "sorcery"						,
	color: "blue"						,
	cost: ['*','*','blue']					,
	img: "/realms/img/cards/sample.png"			,
	onCostAdjustment: function(game_self, player, card) {
	  game_self.updateLog("UNIMPLEMENTED: card costs 1 less to cast if player controlls creature with flying.");
	  return 1;
	}							,
	onInstant: function(game_self, player, card) {
	  game_self.updateLog("UNIMPLEMENTED: draw two cards");
	  return 1;
	}
    } 
    deck['island1'] 		= { 
	name: "Isle"    					, 
	type: "land"						,
	color: "blue"						,
	img: "/realms/img/cards/sample.png"
    }
    deck['island2'] 		= { 
	name: "Isle"    					, 
	type: "land"						,
	color: "blue"						,
	img: "/realms/img/cards/sample.png"
    }
    deck['island3'] 		= { 
	name: "Isle"    					, 
	type: "land"						,
	color: "blue"						,
	img: "/realms/img/cards/sample.png"
    } */

    deck['island'] 		= { 
	name: "Island"    					, 
	type: "land"						,
	color: "blue"						,
	img: "/realms/img/cards/sample.png"
    }
    deck['Waterfall Ruin'] 		= { 
	name: "Waterfall Ruin"    					, 
	type: "land"						,
	color: "blue"&&"white"						,
	img: "/realms/img/cards/sample.png"
    }

    return deck;

  }
  returnWhiteDeck() {

    var deck = {};

    deck['w001'] 	= {
	name: "Shellring Vindicator"				, 
	type: "Creature - Human Rogue"					,
	color: "white"						,
	cost: ['*','*','*','white']					,
	power: 3						,
	toughness: 2						,
	properties: []
	text: ""Drain- As Shellring Vindicator joins the fray, bring back a creature with a Sould value of 2 or less from the crypt into the fray. 
	As long as Shellring Vindicator is fielded, that creature cannot attack or block.""					,
	img: "/realms/img/cards/sample.png"
    }

    deck['w002'] 	= { 
	name: "Triumphant Hippogriff"    					, 
	type: "Creature - Hippogriff"					,
	color: "white"						,
	cost: ['*','*','*','white']				,
	power: 2						,
	toughness: 3						,
	properties: ['flying']					,
	text: ""Flight - Once a turn, when a creature with 2 or higher Strentgh joins the fray under your command you may draw a card."" ,
	lore: ""Hope descended on lily-white wings, just as the prophet foretold."" ,
	img: "/realms/img/cards/sample.png"			,
    }

  deck['w003'] 	= { 
	name: "Shellring Guard"					, 
	type: "Creature - Human"					,
	color: "white"						,
	cost: ['*','*','white']					,
	power: 1						,
	toughness: 1						,
	properties: []					,
	text: "As the Shellring Guard enters the fray, give a +1/+1 counter to a creature of your choosing.",
	lore: ""Scuffle breaks out? Blow the whistle. Garbage fire? Blow the whistle. Undead come crawling out from the grave? Blow that godsdamned whistle."
		-Lieutenant Felk"		,
	img: "/realms/img/cards/sample.png"			,	
    }

	deck['w004'] 	= { 
	name: "Shellring Official"					, 
	type: "Creature - Human"					,
	color: "white"						,
	cost: ['*','white']					,
	power: 1						,
	toughness: 2						,
	properties: []					,
	text: "Lookout - 4'white': Add a +1/+1 counter to Shellring Official.",
	lore: ""You'll never wear the crown, heretic. Not on my watch."",
	img: "/realms/img/cards/sample.png"			,	
    }

    deck['w005'] 	= { 
	name: "Mastodon Rider"    					, 
	type: "Creature - Human"					,
	color: "white"						,
	cost: ['*','*','*','*','white']				,
	power: 2						,
	toughness: 3						,
	properties: []					,
	text: "When Mastodon Rider joins the fray or is killed, chose a creature or vessel under your command to give a +1/+1 counter to.",
	lore: ""Find me a bigger horse." -Pickler the Troll King",
	img: "/realms/img/cards/sample.png"			,
    }

    deck['w006'] 	= { 
	name: "Haven Judicator"    				,
	type: "Creature - Angel"					,
	color: "white"						,
	cost: ['*','*','white']					,
	power: 3						,
	toughness: 2						,
	properties: ['flying']						,
	text: "Flight - When Haven Judicator joins the fray, you recover 1 life and may draw a card.",
	lore: ""To serve the righteous, and cleanse the rest." -Judicator's Oath",
	img: "/realms/img/cards/sample.png"			,
    }

   deck['w007'] 	= { 
	name: "Burned Walker"    				, 
	type: "Instant"						,
	color: "white"						,
	cost: ['*','*','*','white']				,
	text: "Choose an attacking creature and destroy it."	,
	lore: ""It would take more than a few sips of water to quench Nero's thirst for revenge."",				,
	img: "/realms/img/cards/sample.png"			,
    }

   deck['w008'] 	= { 
	name: "Trickster Spirit"    				, 
	type: "Creature - Spirit"				,
	color: "white"						,
	cost: ['*','*','*','*','*','white']			,
	power: 2						,
	toughness: 5						,
	properties: ['flip']					,
	text: "Order, Flip: Flip a creature."			,
	lore: ""You'd offer me your soul? But there's hardly any left." -Fanpetal, faerie courtesan",
	img: "/realms/img/cards/sample.png"			,
    }

  /*  deck['w004'] 	= { 
	name: "w004"    				, 
	type: "creature"						,
	color: "white"						,
	cost: ['*','*','white']					,
	power: 2						,
	toughness: 2						,
	properties: ['flying']					,
	img: "/realms/img/cards/sample.png"			,
    } */

   
    deck['Steppe'] 		= { 
	name: "Steppe"    					, 
	type: "land"						,
	color: "white"						,
	img: "/realms/img/cards/sample.png"
    }
    deck['Waterfall Ruin'] 		= { 
	name: "Waterfall Ruin"    					, 
	type: "land"						,
	color: "white"&&"blue"						,
	img: "/realms/img/cards/sample.png"
    }

  /*  deck['plains3'] 		= { 
	name: "Grasslands"    					, 
	type: "land"						,
	color: "white"						,
	img: "/realms/img/cards/sample.png"
    }
    deck['plains4'] 		= { 
	name: "Grasslands"    					, 
	type: "land"						,
	color: "white"						,
	img: "/realms/img/cards/sample.png"
 */
    return deck;

  }

  returnRedDeck() {

    var deck = {};

    deck['r001'] 	= { 
	name: "Magic Cube"    					, 
	type: "instant"						,
	color: "red"						,
	cost: ['*','*','red']					,
	text: "Pick one of the following:
	• Magic cube inflicts 3 damage to a creature of your choosing.
	• Destroy a Relic of your choosing."			,
	lore: ""One by one, the pretenders crumbled into rubble and dust."" ,
	img: "/realms/img/cards/sample.png"			,
    }

    deck['r002'] 	= { 
	name: "Unwavering Lighting"    				, 
	type: "Instant"						,
	color: "red"						,
	cost: ['*','*','*','*','*','red']			,
	text: "Unwavering Lighting inflicts 5 damage to a creature of your choosing and 2 damage to its Master. 
		The creature is banished, not destroyed, if it cannot endured the attack." ,
	lore: ""Begone, lichling. And give your master my regards."" ,
	img: "/realms/img/cards/sample.png"			,
    }

    deck['r003'] 	= { 
	name: "Unformed Assassin"    				, 
	type: "Creature - Human Rogue"				,
	color: "red"						,
	cost: ['*','*','*','*','red']				,
	power: 4						,
	toughness: 3						,
	properties: ['Swiftness']				,
	text: "Swiftness - When Unformed Assassin attacks alonside exactly 1 creature on the same turn, it will copy 
		that creature's strength and endurance becomes 4/3 for the rest of the turn."	,
	lore: ""I like your style. Mind if I take it?""		,
	img: "/realms/img/cards/sample.png"			,
    }

    deck['r004'] 	= { 
	name: "Restless Flameband"    				, 
	type: "Creature - Orc Berserker"			,
	color: "red"						,
	cost: ['*','*','*','*','*','red']			,
	power: 5						,
	toughness: 4						,
	properties: ['Crush']				,
	text: "Crush - Restless Flameband joins the fray with a +1/+1 counter on it if an opponent has received damage this turn.",
	lore: ""The flamebands only ever agree to do one thing: kill.""	,
	img: "/realms/img/cards/sample.png"			,
    }

    deck['r005'] 	= { 
	name: "Thisty Palemane"    				, 
	type: "Creature - Kobold"				,
	color: "red"						,
	cost: ['*','*','red']					,
	power: 5						,
	toughness: 4						,
	//properties: ['Crush']				,
	text: "3'red': Chose a creature. That creature can't block this turn."	,
	lore: ""It won't hurt when they bleed you dry. But it won't be quick, either." - Oswyn Adal, monster hunter"	,
	img: "/realms/img/cards/sample.png"			,
    }

    deck['r006'] 	= { 
	name: "Tempest Ravager"    				, 
	type: "Creature - Spirit"				,
	color: "red"						,
	cost: ['*','*','red']					,
	power: 3						,
	toughness: 3						,
	properties: ['Swiftness']				,
	text: "Swiftness- Each time Tempest Ravager attacks, add +1/+1 to a creature under your command. 
	Then Tempest Ravager deals damage to each opponent by the same number of modified creatures you control other than itself. 
	(Equipment, Auras and counters are all valid modifications.)"	,
	img: "/realms/img/cards/sample.png"			,
    }

    deck['r007'] 	= { 
	name: "Outcast Palemane"    				, 
	type: "Creature - Kobold Warrior"			,
	color: "red"						,
	cost: ['*','red']					,
	power: 1						,
	toughness: 1						,
	//properties: ['Crush']				,
	text: ""As long as Outcast Palemane is attacking, it has Initiative. 2'red': Outcast Palemane gains +2/+0 for the rest of the turn."	,
	lore: ""Hunger and hatred embodied. It's a small body, though.""		,
	img: "/realms/img/cards/sample.png"			,
    }
    deck['volcano'] 		= { 
	name: "Volcano"    					, 
	type: "land"						,
	color: "red"						,
	img: "/realms/img/cards/sample.png"
    }
    deck['Duskwood Edge'] 		= { 
	name: "Duskwood Edge"    					, 
	type: "land"						,
	color: "red"&&"green""						,
	img: "/realms/img/cards/sample.png"
    }

 	return deck;

  }

returnGreenDeck() {

    var deck = {};

    deck['g001'] 	= { 
	name: "Leshy"    					, 
	type: "Creature - Fungus"				,
	color: "green"						,
	cost: ['*','green']					,
	power: 2						,
	toughness: 1						,
	properties: []				,
	text: "If you control a permanent with a Soul value of 4 or higher, Leshy enters the fray with a +1/+1 counter.
	Every time you conjure a spell with a Soul value of 4 or higher, give a +1/+1 counter to Leshy."	,
	img: "/realms/img/cards/sample.png"			,
    }

  deck['g002'] 	= { 
	name: "Dormant Predator"    				, 
	type: "Creature - Treant Spirit"			,
	color: "green"						,
	cost: ['*','*','*','*','*','green','green']		,
	power: 6						,
	toughness: 6						,
	properties: []					,
	text: "As Dormant Predator joins the fray, your life increases by the same amount as the highest 
		endurance among the creatures you have fielded."	,
	lore: ""All the fury of the forest, fixed with a knowing mind and a hunger to grow."",
	img: "/realms/img/cards/sample.png"			,
    }

  deck['g003'] 	= { 
	name: "Dormant Wacher"    				, 
	type: "Creature - Treant"				,
	color: "green"						,
	cost: ['*','*','*','green']				,
	power: 2						,
	toughness: 3						,
	properties: ['Grasp']					,
	text: "Grasp - If Dormant Watcher blocks a creature with flight, add +2/+0 to Dormant Watcher until end of turn." ,
	lore: ""The more of mankind it saw, the more there was to hate."",
	img: "/realms/img/cards/sample.png"			,
    }

    deck['g004'] 	= { 
	name: "Forest Dreamcatcher"    					, 
	type: "Enchatment"						,
	color: "green"							,
	cost: ['*','*','*','*','*','red']					,
	text: "At the start of the batlte, during your turn, pick one of the following —
	• Creatures under your command gain +1/+1 and the Crush effect.
	• A domain of your choosing gains ""Flip: Add 'green'green'green"" for the rest of the turn.
	• If you have fielded a creature with 3 strength or higher, draw a card.
	• Your Lifeforce increases bt 3."				,
	img: "/realms/img/cards/sample.png"				,
    }

    deck['g005'] 	= { 
	name: "Deadwood Ranger"    				, 
	type: "Creature - Human Scout"				,
	color: "green"						,
	cost: ['*','*','green']			  		,
	power: 1						,
	toughness: 1						,
	properties: []					,
	text: "As Deadwood Ranger joins the fray, add a +1/+1 counter to a creature of your choosing.",
	lore: ""Come on, Risst. We'll follow this path to the end." -Oswyn Adal, monster hunter",
	img: "/realms/img/cards/sample.png"			,
    }

  deck['g006'] 	= { 
	name: "Dormant Sleeper"    				, 
	type: "Creature - Treant"				,
	color: "green"						,
	cost: ['*','*','*','green']				,
	power: 4						,
	toughness: 4						,
	properties: ['Wariness']					,
	text: "Wariness- As Dormant Sleeper joins the fray, look through your compendium for a basic domain card, add it to the fray flipped, 
		then reshuffle. Unless you control seven domains or more, Dormant Sleeper can't attack." ,
	lore: ""The leaves rustled softly, as if something massive slumbered just beneath the forest floor."",
	img: "/realms/img/cards/sample.png"			,
    }
  deck['g007'] 	= { 
	name: "Leshy Fruit"    				, 
	type: "Creature - Fungus"				,
	color: "green"						,
	cost: ['*','*','*','green']				,
	power: 3						,
	toughness: 2						,
	properties: []					,
	text: "When Leshy Fruit is killed, you may draw a card." ,
	lore: ""Flowers blossomed from the corpses' slack-jawed mouths, and Leshy smiled at his garden's bountiful harvest."" ,
	img: "/realms/img/cards/sample.png"			,
    }

 deck['g008'] 	= { 
	name: "Spider's Game"    				, 
	type: "Instant"						,
	color: "green"						,
	cost: ['*','*','green']				,
	properties: []					,
	text: "A creature of your choosing gains +3/+3 and the grasp effect for the rest of the turn. Unflip that creature." ,
	lore: ""I'll help you, human. But not until I've had my fun.""-Mother of Thousands"" ,
	img: "/realms/img/cards/sample.png"			,
    }

   
    deck['forest'] 		= { 
	name: "Forest"    					, 
	type: "land"						,
	color: "green"						,
	img: "/realms/img/cards/sample.png"
    }
    deck['Duskwood Edge'] 		= { 
	name: "Duskwood Edge"    			, 
	type: "land"						,
	color: "red"&&"green""				,
	img: "/realms/img/cards/sample.png"
    }

 	return deck;

  }

 returnColorLessDeck() {

    var deck = {};
 
deck['c001'] 	= {
	name: "Hollow Battlegear"			, 
	type: "Artifact - Vehicle"			,
	color: "Colorless"					,
	cost: ['*','*','*']				 	,
	power: 4							,
	toughness: 3						,
	properties: ['Wariness']
	text: ""Wariness - Recruit 1 (Flip as many creatures as you like, each must at leas posses more than 1 in strength: 
		This Vessel turns into a Relic creature until end of turn.)"					,
	lore: ""Make the wyrm hurt like hell if he swallows me."-Lydda Nightblade, to the royal armorer"	,
	img: "/realms/img/cards/sample.png"			,
    }

	return deck;
}


  importCard(key, card, player) {

    let game_self = this;

    let c = {};
	c.key = key;
	c.player = player;
        c.name = "Unnamed";
        c.color = "*";
        c.cost = [];
        c.power = 0;
        c.toughness = 0;
        c.text = "This card has not provided text";
	c.img = "/img/cards/sample.png";
	c.tapped = "";

    if (card.name) 	{ c.name = card.name; }
    if (card.color) 	{ c.color = card.color; }
    if (card.cost) 	{ c.cost = card.cost; }
    if (card.text) 	{ c.text = card.text; }
    if (card.type) 	{ c.type = card.type; }
    if (card.power) 	{ c.power = card.power; }
    if (card.toughness) { c.toughness = card.toughness; }
    if (card.img) 	{ c.img = card.img; }

    //
    // add dummy events that return 0 (do nothing)
    //
    if (!c.onInstant) 		{ c.onInstant = function(game_self, player, card) { return 0; } };
    if (!c.onEnterBattlefield) 	{ c.onEnterBattlefield = function(game_self, player, card) { return 0; } };
    if (!c.onCostAdjustment) 	{ c.onCostAdjustment = function(game_self, player, card) { return 0; } };

    c.returnElement = function(card) { return game_self.returnElement(game_self, player, c.key); }

    game_self.game.cards[c.key] = c;

  }


