let poem = '';

let grammar = tracery.createGrammar({
"origin":["UH OH THE #monster# APOCALYPSE IS HAPPENING #location# \!\n\nYOU FIND A MYSTERY BOX THAT HOLDS A WEAPON TO HELP DEFEND YOURSELF !\nLETS SEE WHAT YA GOT: #weapon#\n\nWOAH NICE WEAPON! LET'S PUT THAT THING TO USE, HERE COMES A HOARDE OF EVIL DOERS NOW. GO GET EM, #nickname# \nEVIL DOERS ELIMINATED: #eliminated#\n\nWOW #rate# JOB, BUT MORE ARE COMING YOUR WAY!\nIT'S TIME TO ESCAPE, YOU DO THIS BY: #escape#\n\nYOUR PLAN #plan# \n\nBUT, WAIT A MINUTE ? YOU FEEL A #tap# ON YOUR SHOULDER\n\nOH NO, IT'S THEIR LEADER!\n YOU SAY YOUR ICONIC CATHCPHRASE: #catchphrase#\n\nYOU GRIP YOUR WEAPON AND FIGHT AN EPIC FIGHT TO THE DEATH\nWHO WINS?\n#loser#"],
"location":["IN WASHINGTON DC","RIGHT OUTSIDE YOUR HOUSE","IN YOUR BEDROOM","IN A PUBLIC RESTROOM AT THE MALL YOU'RE AT", "AT AN AQUABATS CONCERT","AT WAFFLE HOUSE"],
"monster":["TROLL","ZOMBIE","GOBLIN","DEMON","ULTRA MUTANT EVIL MECHANIZED SHARK","ANIME","TORNADO"],
"weapon":["A KATANA","A RPG","GREEN LANTERN'S POWER RING","A CROWBAR","RAY GUN","NOTHING!","A COCA COLA CAN","A FRYING PAN","A STAFF THAT CAN SHOOT FIRE","IRON MAN'S SUIT","A PAIR OF SICK NUNCHUCKS"],
"nickname":["DOOMGUY","CHAMP","HERO","TOP DAWG","BOSS","BOSS MAN","MR. POPULAR","SILLY","MR. BOSS","MRS. POPULAR","POPULAR","MRS. BOSS"],
"eliminated":["1,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000","1","400","458230","343","23","324","6","50","1/2","100","50000"],
"rate":["POOR","AVERAGE","EH","REALLY GOOD","FANTASTIC","WONDERFUL","BAD","10/10"],
"escape":["RUNNING", "FINDING A SKATEBOARD AND HITTING A SICK KICK FLIP OUT OF THERE","CALLING AN UBER","PRETENDING TO BE ONE OF THE MONSTERS"],
"plan":["WORKS AND YOU GET OUT SAFELY","FAILS HORRIBLY...BUT YOU MAKE IT OUT SOMEHOW"],
"tap":["TAP","HAND","SLAP","GROSS WET SPIT LAND","BURNING ACID","KISS","LIGHTLY GRAZED TOUCH","CLAW","ROTTING HAND","TENTACLE","MILLIONS OF TINY LITTLE SPIDERS","AL PACINO DANCING"],
"catchphrase":["IT'S NERF OR NOTHIN'","TIME TO TAKE YOU DOWN TOWN","OH FUCK!","READ EM AND WEEP","BOOM SHAKA LAKA","COWABUNGA","IT'S SHOWTIME","SAY HELLO TO MY LITTLE FRIEND","*JOJO POSE*"],
"loser":["YOU WIN! A RESCUE HELICOPTER SAVES YOU SHORTLY AFTER AND YOU BECOME LEADER OF AMERICA 2","YOU LOSE WOMP WOMP, REFRESH TO TRY AGAIN...IF YOU DARE"]




});

function setup() {
  createCanvas(1500, 830);
  noLoop()
}

function draw() {
  background("brown");
  poem = grammar.flatten("#origin#");
  textFont("impact");
  textSize(30);
  text(poem,5,60);
}