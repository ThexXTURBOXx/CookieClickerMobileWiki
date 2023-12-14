G.addData(function () {

    //====== Buildings ======


    new G.Building({
        name: `Cursor`,
        id: 0,
        single: `cursor`,
        plural: `cursors`,
        actionName: `clicked`,
        extraName: `[X] extra finger`,
        extraPlural: `[X] extra fingers`,
        desc: `Autoclicks once every 10 seconds.`,
        pic: 0,
        icon: [0, 0],
        cost: 15,
        cps: 0.1,/*function(me){
			var add=0;
			if (Game.Has('Thousand fingers')) add+=		0.1;
			if (Game.Has('Million fingers')) add+=		0.5;
			if (Game.Has('Billion fingers')) add+=		5;
			if (Game.Has('Trillion fingers')) add+=		50;
			if (Game.Has('Quadrillion fingers')) add+=	500;
			if (Game.Has('Quintillion fingers')) add+=	5000;
			if (Game.Has('Sextillion fingers')) add+=	50000;
			if (Game.Has('Septillion fingers')) add+=	500000;
			if (Game.Has('Octillion fingers')) add+=	5000000;
			var mult=1;
			var num=0;
			for (var i in Game.Objects) {if (Game.Objects[i].name!='Cursor') num+=Game.Objects[i].amount;}
			add=add*num;
			mult*=Game.GetTieredCpsMult(me);
			mult*=Game.magicCpS('Cursor');
			mult*=Game.eff('cursorCps');
			return Game.ComputeCps(0.1,Game.Has('Reinforced index finger')+Game.Has('Carpal tunnel prevention cream')+Game.Has('Ambidextrous'),add)*mult;
		},*/
    });

    new G.Building({
        name: `Grandma`,
        id: 1,
        single: `grandma`,
        plural: `grandmas`,
        actionName: `baked`,
        extraName: `Grandmas are [X] year older`,
        extraPlural: `Grandmas are [X] years older`,
        desc: `A nice grandma to bake more cookies.`,
        pic: 1,
        icon: [1, 0],
        cost: 100,
        cps: 1,
    });

    new G.Building({
        name: `Farm`,
        id: 2,
        single: `farm`,
        plural: `farms`,
        actionName: `harvested`,
        extraName: `[X] more acre`,
        extraPlural: `[X] more acres`,
        desc: `Grows cookie plants from cookie seeds.`,
        pic: 3,
        icon: [2, 0],
        cost: 1100,
        cps: 8,
    });

    new G.Building({
        name: `Mine`,
        id: 3,
        single: `mine`,
        plural: `mines`,
        actionName: `mined`,
        extraName: `[X] mile deeper`,
        extraPlural: `[X] miles deeper`,
        desc: `Mines out cookie dough and chocolate chips.`,
        pic: 4,
        icon: [3, 0],
        cost: 12000,
        cps: 47,
    });

    new G.Building({
        name: `Factory`,
        id: 4,
        single: `factory`,
        plural: `factories`,
        actionName: `mass-produced`,
        extraName: `[X] additional patent`,
        extraPlural: `[X] additional patents`,
        desc: `Produces large quantities of cookies.`,
        pic: 5,
        icon: [4, 0],
        cost: 130000,
        cps: 260,
    });

    new G.Building({
        name: `Bank`,
        id: 5,
        single: `bank`,
        plural: `banks`,
        actionName: `banked`,
        extraName: `Interest rates [X]% better`,
        extraPlural: `Interest rates [X]% better`,
        desc: `Generates cookies from interest.`,
        pic: 6,
        icon: [15, 0],
        cost: 1400000,
        cps: 1400,
    });

    new G.Building({
        name: `Temple`,
        id: 6,
        single: `temple`,
        plural: `temples`,
        actionName: `discovered`,
        extraName: `[X] sacred artifact retrieved`,
        extraPlural: `[X] sacred artifacts retrieved`,
        desc: `Full of precious, ancient chocolate.`,
        pic: 7,
        icon: [16, 0],
        cost: 20000000,
        cps: 7800,
    });

    new G.Building({
        name: `Wizard tower`,
        id: 7,
        single: `wizard tower`,
        plural: `wizard towers`,
        actionName: `summoned`,
        extraName: `Incantations have [X] more syllable`,
        extraPlural: `Incantations have [X] more syllables`,
        desc: `Summons cookies with magic spells.`,
        pic: 8,
        icon: [17, 0],
        cost: 330000000,
        cps: 44000,
    });

    new G.Building({
        name: `Shipment`,
        id: 8,
        single: `shipment`,
        plural: `shipments`,
        actionName: `shipped`,
        extraName: `[X] galaxy fully explored`,
        extraPlural: `[X] galaxies fully explored`,
        desc: `Brings in fresh cookies from the cookie planet.`,
        pic: 9,
        icon: [5, 0],
        cost: 5100000000,
        cps: 260000,
    });

    new G.Building({
        name: `Alchemy lab`,
        id: 9,
        single: `alchemy lab`,
        plural: `alchemy labs`,
        actionName: `transmuted`,
        extraName: `[X] primordial element mastered`,
        extraPlural: `[X] primordial elements mastered`,
        desc: `Turns gold into cookies!`,
        pic: 10,
        icon: [6, 0],
        cost: 75000000000,
        cps: 1600000,
    });

    new G.Building({
        name: `Portal`,
        id: 10,
        single: `portal`,
        plural: `portals`,
        actionName: `retrieved`,
        extraName: `[X] dimension enslaved`,
        extraPlural: `[X] dimensions enslaved`,
        desc: `Opens a door to the Cookieverse.`,
        pic: 11,
        icon: [7, 0],
        cost: 1000000000000,
        cps: 10000000,
    });

    new G.Building({
        name: `Time machine`,
        id: 11,
        single: `time machine`,
        plural: `time machines`,
        actionName: `recovered`,
        extraName: `[X] century secured`,
        extraPlural: `[X] centuries secured`,
        desc: `Brings cookies from the past, before they were even eaten.`,
        pic: 12,
        icon: [8, 0],
        cost: 14000000000000,
        cps: 65000000,
    });

    new G.Building({
        name: `Antimatter condenser`,
        id: 12,
        single: `antimatter condenser`,
        plural: `antimatter condensers`,
        actionName: `condensed`,
        extraName: `[X] extra quark flavor`,
        extraPlural: `[X] extra quark flavors`,
        desc: `Condenses the antimatter in the universe into cookies.`,
        pic: 13,
        icon: [13, 0],
        cost: 170000000000000,
        cps: 430000000,
    });

    new G.Building({
        name: `Prism`,
        id: 13,
        single: `prism`,
        plural: `prisms`,
        actionName: `converted`,
        extraName: `[X] new color discovered`,
        extraPlural: `[X] new colors discovered`,
        desc: `Converts light itself into cookies.`,
        pic: 14,
        icon: [14, 0],
        cost: 2100000000000000,
        cps: 2900000000,
    });

    new G.Building({
        name: `Chancemaker`,
        id: 14,
        single: `chancemaker`,
        plural: `chancemakers`,
        actionName: `spontaneously generated`,
        extraName: `Chancemakers are powered by [X]-leaf clovers`,
        extraPlural: `Chancemakers are powered by [X]-leaf clovers`,
        desc: `Generates cookies out of thin air through sheer luck.`,
        pic: 15,
        icon: [19, 0],
        cost: 26000000000000000,
        cps: 21000000000,
    });

    new G.Building({
        name: `Fractal engine`,
        id: 15,
        single: `fractal engine`,
        plural: `fractal engines`,
        actionName: `made from cookies`,
        extraName: `[X] iteration deep`,
        extraPlural: `[X] iterations deep`,
        desc: `Turns cookies into even more cookies.`,
        pic: 16,
        icon: [20, 0],
        cost: 310000000000000000,
        cps: 150000000000,
    });

    G.buildingsBN['Antimatter condenser'].style = 'font-size:90%;letter-spacing:-1px;';


    //====== Upgrades ======


    new G.Upgrade({
        name: `Plain cookies`,
        id: 33,
        desc: `Cookie production multiplier <b>+1%</b>.`,
        q: `We all gotta start somewhere.`,
        icon: [2, 3],
        cost: 999999,
        order: 10000.033,

        pool: 'cookie',
        power: 1,
        unlockAt: {cookies: 50000},

    });

    new G.Upgrade({
        name: `Sugar cookies`,
        id: 34,
        desc: `Cookie production multiplier <b>+1%</b>.`,
        q: `Tasty, if a little unimaginative.`,
        icon: [7, 3],
        cost: 4999995,
        order: 10000.034,

        pool: 'cookie',
        power: 1,
        unlockAt: {cookies: 250000},

    });

    new G.Upgrade({
        name: `Oatmeal raisin cookies`,
        id: 35,
        desc: `Cookie production multiplier <b>+1%</b>.`,
        q: `No raisin to hate these.`,
        icon: [0, 3],
        cost: 9999999,
        order: 10000.035,

        pool: 'cookie',
        power: 1,
        unlockAt: {cookies: 500000},

    });

    new G.Upgrade({
        name: `Peanut butter cookies`,
        id: 36,
        desc: `Cookie production multiplier <b>+1%</b>.`,
        q: `Get yourself some jam cookies!`,
        icon: [1, 3],
        cost: 49999995,
        order: 10000.036,

        pool: 'cookie',
        power: 1,
        unlockAt: {cookies: 2500000},

    });

    new G.Upgrade({
        name: `Coconut cookies`,
        id: 37,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Flaky, but not unreliable. Some people go crazy for these.`,
        icon: [3, 3],
        cost: 99999999,
        order: 10000.037,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 5000000},

    });

    new G.Upgrade({
        name: `White chocolate cookies`,
        id: 38,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `I know what you'll say. It's just cocoa butter! It's not real chocolate!<br>Oh please.`,
        icon: [4, 3],
        cost: 499999995,
        order: 10001.038,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 25000000},

    });

    new G.Upgrade({
        name: `Macadamia nut cookies`,
        id: 39,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `They're macadamn delicious!`,
        icon: [5, 3],
        cost: 999999999,
        order: 10001.039,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 50000000},

    });

    new G.Upgrade({
        name: `Double-chip cookies`,
        id: 40,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `DOUBLE THE CHIPS<br>DOUBLE THE TASTY<br>(double the calories)`,
        icon: [6, 3],
        cost: 4999999995,
        order: 10001.04,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 250000000},

    });

    new G.Upgrade({
        name: `White chocolate macadamia nut cookies`,
        id: 41,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Orteil's favorite.`,
        icon: [8, 3],
        cost: 9999999999,
        order: 10001.041,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 500000000},

    });

    new G.Upgrade({
        name: `All-chocolate cookies`,
        id: 42,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `CHOCOVERDOSE.`,
        icon: [9, 3],
        cost: 49999999995,
        order: 10001.042,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 2500000000},

    });

    new G.Upgrade({
        name: `Dark chocolate-coated cookies`,
        id: 55,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `These absorb light so well you almost need to squint to see them.`,
        icon: [10, 3],
        cost: 99999999999,
        order: 10020.055,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5000000000},

    });

    new G.Upgrade({
        name: `White chocolate-coated cookies`,
        id: 56,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `These dazzling cookies absolutely glisten with flavor.`,
        icon: [11, 3],
        cost: 99999999999,
        order: 10020.056,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5000000000},

    });

    new G.Upgrade({
        name: `Eclipse cookies`,
        id: 80,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Look to the cookie.`,
        icon: [0, 4],
        cost: 499999999995,
        order: 10020.08,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 25000000000},

    });

    new G.Upgrade({
        name: `Zebra cookies`,
        id: 81,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `...`,
        icon: [1, 4],
        cost: 999999999999,
        order: 10020.081,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 50000000000},

    });

    new G.Upgrade({
        name: `Snickerdoodles`,
        id: 88,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `True to their name.`,
        icon: [2, 4],
        cost: 4999999999995,
        order: 10020.088,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 250000000000},

    });

    new G.Upgrade({
        name: `Stroopwafels`,
        id: 89,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `If it ain't dutch, it ain't much.`,
        icon: [3, 4],
        cost: 9999999999999,
        order: 10020.089,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 500000000000},

    });

    new G.Upgrade({
        name: `Macaroons`,
        id: 90,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Not to be confused with macarons.<br>These have coconut, okay?`,
        icon: [4, 4],
        cost: 49999999999995,
        order: 10020.09,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 2500000000000},

    });

    new G.Upgrade({
        name: `Empire biscuits`,
        id: 92,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `For your growing cookie empire, of course!`,
        icon: [5, 4],
        cost: 99999999999999,
        order: 10030.092,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 5000000000000},

    });

    new G.Upgrade({
        name: `British tea biscuits`,
        id: 93,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Quite.`,
        icon: [6, 4],
        cost: 99999999999999,
        order: 10030.093,

        pool: 'cookie',
        power: 2,
        unlockAt: {
            cookies: 5000000000000,
            upgrade: `Tin of british tea biscuits`
        },

    });

    new G.Upgrade({
        name: `Chocolate british tea biscuits`,
        id: 94,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Yes, quite.`,
        icon: [7, 4],
        cost: 99999999999999,
        order: 10030.094,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 5000000000000, upgrade: `British tea biscuits`},

    });

    new G.Upgrade({
        name: `Round british tea biscuits`,
        id: 95,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Yes, quite riveting.`,
        icon: [8, 4],
        cost: 99999999999999,
        order: 10030.095,

        pool: 'cookie',
        power: 2,
        unlockAt: {
            cookies: 5000000000000,
            upgrade: `Chocolate british tea biscuits`
        },

    });

    new G.Upgrade({
        name: `Round chocolate british tea biscuits`,
        id: 96,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Yes, quite riveting indeed.`,
        icon: [9, 4],
        cost: 99999999999999,
        order: 10030.096,

        pool: 'cookie',
        power: 2,
        unlockAt: {
            cookies: 5000000000000,
            upgrade: `Round british tea biscuits`
        },

    });

    new G.Upgrade({
        name: `Round british tea biscuits with heart motif`,
        id: 97,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Yes, quite riveting, old chap.`,
        icon: [10, 4],
        cost: 99999999999999,
        order: 10030.097,

        pool: 'cookie',
        power: 2,
        unlockAt: {
            cookies: 5000000000000,
            upgrade: `Round chocolate british tea biscuits`
        },

    });

    new G.Upgrade({
        name: `Round chocolate british tea biscuits with heart motif`,
        id: 98,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `I like cookies.`,
        icon: [11, 4],
        cost: 99999999999999,
        order: 10030.098,

        pool: 'cookie',
        power: 2,
        unlockAt: {
            cookies: 5000000000000,
            upgrade: `Round british tea biscuits with heart motif`
        },

    });

    new G.Upgrade({
        name: `Madeleines`,
        id: 104,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Unforgettable!`,
        icon: [12, 3],
        cost: 499999999999995,
        order: 10020.104,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 25000000000000},

    });

    new G.Upgrade({
        name: `Palmiers`,
        id: 105,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Palmier than you!`,
        icon: [13, 3],
        cost: 499999999999995,
        order: 10020.105,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 25000000000000},

    });

    new G.Upgrade({
        name: `Palets`,
        id: 106,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `You could probably play hockey with these.<br>I mean, you're welcome to try.`,
        icon: [12, 4],
        cost: 999999999999999,
        order: 10020.106,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 50000000000000},

    });

    new G.Upgrade({
        name: `Sabl&eacute;s`,
        id: 107,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `The name implies they're made of sand. But you know better, don't you?`,
        icon: [13, 4],
        cost: 999999999999999,
        order: 10020.107,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 50000000000000},

    });

    new G.Upgrade({
        name: `Caramoas`,
        id: 120,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `Yeah. That's got a nice ring to it.`,
        icon: [14, 4],
        cost: 10000000000000000,
        order: 10020.12,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 500000000000000, upgrade: `Box of brand biscuits`},

    });

    new G.Upgrade({
        name: `Sagalongs`,
        id: 121,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `Grandma's favorite?`,
        icon: [15, 3],
        cost: 10000000000000000,
        order: 10020.121,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 500000000000000, upgrade: `Box of brand biscuits`},

    });

    new G.Upgrade({
        name: `Shortfoils`,
        id: 122,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `Foiled again!`,
        icon: [15, 4],
        cost: 10000000000000000,
        order: 10020.122,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 500000000000000, upgrade: `Box of brand biscuits`},

    });

    new G.Upgrade({
        name: `Win mints`,
        id: 123,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `They're the luckiest cookies you've ever tasted!`,
        icon: [14, 3],
        cost: 10000000000000000,
        order: 10020.123,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 500000000000000, upgrade: `Box of brand biscuits`},

    });

    new G.Upgrade({
        name: `Fig gluttons`,
        id: 125,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Got it all figured out.`,
        icon: [17, 4],
        cost: 4999999999999995,
        order: 10030.125,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 250000000000000, upgrade: `Box of brand biscuits`},

    });

    new G.Upgrade({
        name: `Loreols`,
        id: 126,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Because, uh... they're worth it?`,
        icon: [16, 3],
        cost: 4999999999999995,
        order: 10030.126,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 250000000000000, upgrade: `Box of brand biscuits`},

    });

    new G.Upgrade({
        name: `Jaffa cakes`,
        id: 127,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `If you want to bake a cookie from scratch, you must first build a factory.`,
        icon: [17, 3],
        cost: 4999999999999995,
        order: 10030.127,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 250000000000000, upgrade: `Box of brand biscuits`},

    });

    new G.Upgrade({
        name: `Grease's cups`,
        id: 128,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Extra-greasy peanut butter.`,
        icon: [16, 4],
        cost: 4999999999999995,
        order: 10030.128,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 250000000000000, upgrade: `Box of brand biscuits`},

    });

    new G.Upgrade({
        name: `Gingerbread men`,
        id: 150,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `You like to bite the legs off first, right? How about tearing off the arms? You sick monster.`,
        icon: [18, 4],
        cost: 10000000000000000,
        order: 10020.15,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 500000000000000},

    });

    new G.Upgrade({
        name: `Gingerbread trees`,
        id: 151,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Evergreens in pastry form. Yule be surprised what you can come up with.`,
        icon: [18, 3],
        cost: 10000000000000000,
        order: 10020.151,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 500000000000000},

    });

    new G.Upgrade({
        name: `Rose macarons`,
        id: 202,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `Although an odd flavor, these pastries recently rose in popularity.`,
        icon: [22, 3],
        cost: 9999,
        order: 10032.202,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 500, upgrade: `Box of macarons`},

    });

    new G.Upgrade({
        name: `Lemon macarons`,
        id: 203,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `Tastefully sour, delightful treats.`,
        icon: [23, 3],
        cost: 9999999,
        order: 10032.203,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 500000, upgrade: `Box of macarons`},

    });

    new G.Upgrade({
        name: `Chocolate macarons`,
        id: 204,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `They're like tiny sugary burgers!`,
        icon: [24, 3],
        cost: 9999999999,
        order: 10032.204,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 500000000, upgrade: `Box of macarons`},

    });

    new G.Upgrade({
        name: `Pistachio macarons`,
        id: 205,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `Pistachio shells now removed after multiple complaints.`,
        icon: [22, 4],
        cost: 9999999999999,
        order: 10032.205,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 500000000000, upgrade: `Box of macarons`},

    });

    new G.Upgrade({
        name: `Hazelnut macarons`,
        id: 206,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `These go especially well with coffee.`,
        icon: [23, 4],
        cost: 10000000000000000,
        order: 10032.206,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 500000000000000, upgrade: `Box of macarons`},

    });

    new G.Upgrade({
        name: `Violet macarons`,
        id: 207,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `It's like spraying perfume into your mouth!`,
        icon: [24, 4],
        cost: 10000000000000000000,
        order: 10032.207,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 500000000000000000, upgrade: `Box of macarons`},

    });

    new G.Upgrade({
        name: `Caramel macarons`,
        id: 230,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `The saltiest, chewiest of them all.`,
        icon: [25, 3],
        cost: 1e+22,
        order: 10032.23,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 500000000000000000000, upgrade: `Box of macarons`},

    });

    new G.Upgrade({
        name: `Licorice macarons`,
        id: 231,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `Also known as "blackarons".`,
        icon: [25, 4],
        cost: 1e+25,
        order: 10032.231,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 5.0000000000000006e+23, upgrade: `Box of macarons`},

    });

    new G.Upgrade({
        name: `Pure black chocolate cookies`,
        id: 256,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Dipped in a lab-made substance darker than the darkest cocoa (dubbed "chocoalate").`,
        icon: [26, 3],
        cost: 50000000000000000,
        order: 10020.256,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2500000000000000},

    });

    new G.Upgrade({
        name: `Pure white chocolate cookies`,
        id: 257,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Elaborated on the nano-scale, the coating on this biscuit is able to refract light even in a pitch-black environment.`,
        icon: [26, 4],
        cost: 50000000000000000,
        order: 10020.257,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2500000000000000},

    });

    new G.Upgrade({
        name: `Ladyfingers`,
        id: 258,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `Cleaned and sanitized so well you'd swear they're actual biscuits.`,
        icon: [27, 3],
        cost: 100000000000000000,
        order: 10020.258,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 5000000000000000},

    });

    new G.Upgrade({
        name: `Tuiles`,
        id: 259,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `These never go out of tile.`,
        icon: [27, 4],
        cost: 500000000000000000,
        order: 10020.259,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 25000000000000000},

    });

    new G.Upgrade({
        name: `Chocolate-stuffed biscuits`,
        id: 260,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `A princely snack!<br>The holes are so the chocolate stuffing can breathe.`,
        icon: [28, 3],
        cost: 1000000000000000000,
        order: 10020.26,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 50000000000000000},

    });

    new G.Upgrade({
        name: `Checker cookies`,
        id: 261,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `A square cookie? This solves so many storage and packaging problems! You're a genius!`,
        icon: [28, 4],
        cost: 5000000000000000000,
        order: 10020.261,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 250000000000000000},

    });

    new G.Upgrade({
        name: `Butter cookies`,
        id: 262,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `These melt right off your mouth and into your heart. (Let's face it, they're rather fattening.)`,
        icon: [29, 3],
        cost: 10000000000000000000,
        order: 10020.262,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 500000000000000000},

    });

    new G.Upgrade({
        name: `Cream cookies`,
        id: 263,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `It's like two chocolate chip cookies! But brought together with the magic of cream! It's fiendishly perfect!`,
        icon: [29, 4],
        cost: 50000000000000000000,
        order: 10020.263,

        pool: 'cookie',
        power: 3,
        unlockAt: {cookies: 2500000000000000000},

    });

    new G.Upgrade({
        name: `Gingersnaps`,
        id: 338,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Cookies with a soul. Probably.`,
        icon: [29, 10],
        cost: 100000000000000000000,
        order: 10020.338,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5000000000000000000},

    });

    new G.Upgrade({
        name: `Cinnamon cookies`,
        id: 339,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `The secret is in the patented swirly glazing.`,
        icon: [23, 8],
        cost: 500000000000000000000,
        order: 10020.339,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 25000000000000000000},

    });

    new G.Upgrade({
        name: `Vanity cookies`,
        id: 340,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `One tiny candied fruit sits atop this decadent cookie.`,
        icon: [22, 8],
        cost: 1e+21,
        order: 10020.34,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 50000000000000000000},

    });

    new G.Upgrade({
        name: `Cigars`,
        id: 341,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Close, but no match for those extravagant cookie straws they serve in coffee shops these days.`,
        icon: [25, 8],
        cost: 5e+21,
        order: 10020.341,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 250000000000000000000},

    });

    new G.Upgrade({
        name: `Pinwheel cookies`,
        id: 342,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Bringing you the dizzying combination of brown flavor and beige taste!`,
        icon: [22, 10],
        cost: 1e+22,
        order: 10020.342,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 500000000000000000000},

    });

    new G.Upgrade({
        name: `Fudge squares`,
        id: 343,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Not exactly cookies, but you won't care once you've tasted one of these.<br>They're so good, it's fudged-up!`,
        icon: [24, 8],
        cost: 5e+22,
        order: 10020.343,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+21},

    });

    new G.Upgrade({
        name: `Digits`,
        id: 344,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Three flavors, zero phalanges.`,
        icon: [26, 8],
        cost: 4999999999999995,
        order: 10030.344,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 250000000000000, upgrade: `Box of brand biscuits`},

    });

    new G.Upgrade({
        name: `Butter horseshoes`,
        id: 345,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `It would behoove you to not overindulge in these.`,
        icon: [22, 9],
        cost: 1e+23,
        order: 10030.345,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+21, upgrade: `Tin of butter cookies`},

    });

    new G.Upgrade({
        name: `Butter pucks`,
        id: 346,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Lord, what fools these mortals be!<br>(This is kind of a hokey reference.)`,
        icon: [23, 9],
        cost: 5e+23,
        order: 10030.346,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+22, upgrade: `Tin of butter cookies`},

    });

    new G.Upgrade({
        name: `Butter knots`,
        id: 347,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Look, you can call these pretzels if you want, but you'd just be fooling yourself, wouldn't you?`,
        icon: [24, 9],
        cost: 1e+24,
        order: 10030.347,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+22, upgrade: `Tin of butter cookies`},

    });

    new G.Upgrade({
        name: `Butter slabs`,
        id: 348,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Nothing butter than a slab to the face.`,
        icon: [25, 9],
        cost: 4.999999999999999e+24,
        order: 10030.348,

        pool: 'cookie',
        power: 4,
        unlockAt: {
            cookies: 2.4999999999999996e+23,
            upgrade: `Tin of butter cookies`
        },

    });

    new G.Upgrade({
        name: `Butter swirls`,
        id: 349,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `These are equal parts sugar, butter, and warm fuzzy feelings - all of which cause millions of deaths everyday.`,
        icon: [26, 9],
        cost: 1e+25,
        order: 10030.349,

        pool: 'cookie',
        power: 4,
        unlockAt: {
            cookies: 5.0000000000000006e+23,
            upgrade: `Tin of butter cookies`
        },

    });

    new G.Upgrade({
        name: `Shortbread biscuits`,
        id: 350,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `These rich butter cookies are neither short, nor bread. What a country!`,
        icon: [23, 10],
        cost: 1e+23,
        order: 10020.35,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+21},

    });

    new G.Upgrade({
        name: `Millionaires' shortbreads`,
        id: 351,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Three thought-provoking layers of creamy chocolate, hard-working caramel and crumbly biscuit in a poignant commentary of class struggle.`,
        icon: [24, 10],
        cost: 5e+23,
        order: 10020.351,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+22},

    });

    new G.Upgrade({
        name: `Caramel cookies`,
        id: 352,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `The polymerized carbohydrates adorning these cookies are sure to stick to your teeth for quite a while.`,
        icon: [25, 10],
        cost: 1e+24,
        order: 10020.352,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+22},

    });

    new G.Upgrade({
        name: `Lombardia cookies`,
        id: 401,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `These come from those farms with the really good memory.`,
        icon: [23, 13],
        cost: 5e+21,
        order: 10030.401,

        pool: 'cookie',
        power: 3,
        unlockAt: {
            cookies: 250000000000000000000,
            upgrade: `Box of brand biscuits`
        },

    });

    new G.Upgrade({
        name: `Bastenaken cookies`,
        id: 402,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `French cookies made of delicious cinnamon and candy sugar. These do not contain Nuts!`,
        icon: [24, 13],
        cost: 5e+21,
        order: 10030.402,

        pool: 'cookie',
        power: 3,
        unlockAt: {
            cookies: 250000000000000000000,
            upgrade: `Box of brand biscuits`
        },

    });

    new G.Upgrade({
        name: `Pecan sandies`,
        id: 403,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Stick a nut on a cookie and call it a day! Name your band after it! Whatever!`,
        icon: [25, 13],
        cost: 4.999999999999999e+24,
        order: 10020.403,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.4999999999999996e+23},

    });

    new G.Upgrade({
        name: `Moravian spice cookies`,
        id: 404,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Popular for being the world's moravianest cookies.`,
        icon: [26, 13],
        cost: 1e+25,
        order: 10020.404,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5.0000000000000006e+23},

    });

    new G.Upgrade({
        name: `Anzac biscuits`,
        id: 405,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Army biscuits from a bakery down under, containing no eggs but yes oats.`,
        icon: [27, 13],
        cost: 5e+25,
        order: 10020.405,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+24},

    });

    new G.Upgrade({
        name: `Buttercakes`,
        id: 406,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Glistening with cholesterol, these cookies moistly straddle the line between the legal definition of a cookie and just a straight-up stick of butter.`,
        icon: [29, 13],
        cost: 1e+26,
        order: 10020.406,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+24},

    });

    new G.Upgrade({
        name: `Ice cream sandwiches`,
        id: 407,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `In an alternate universe, "ice cream sandwich" designates an ice cream cone filled with bacon, lettuce, and tomatoes. Maybe some sprinkles too.`,
        icon: [28, 13],
        cost: 5e+26,
        order: 10020.407,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+25},

    });

    new G.Upgrade({
        name: `Pink biscuits`,
        id: 444,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `One of the oldest cookies. Traditionally dipped in champagne to soften it, because the French will use any opportunity to drink.`,
        icon: [21, 16],
        cost: 1e+27,
        order: 10020.444,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+25},

    });

    new G.Upgrade({
        name: `Whole-grain cookies`,
        id: 445,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Covered in seeds and other earthy-looking debris. Really going for that "5-second rule" look.`,
        icon: [22, 16],
        cost: 5e+27,
        order: 10020.445,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+26},

    });

    new G.Upgrade({
        name: `Candy cookies`,
        id: 446,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `These melt in your hands just a little bit.`,
        icon: [23, 16],
        cost: 1e+28,
        order: 10020.446,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+26},

    });

    new G.Upgrade({
        name: `Big chip cookies`,
        id: 447,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `You are in awe at the size of these chips. Absolute units.`,
        icon: [24, 16],
        cost: 5e+28,
        order: 10020.447,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+27},

    });

    new G.Upgrade({
        name: `One chip cookies`,
        id: 448,
        desc: `Cookie production multiplier <b>+1%</b>.`,
        q: `You get one.`,
        icon: [25, 16],
        cost: 1e+29,
        order: 10020.448,

        pool: 'cookie',
        power: 1,
        unlockAt: {cookies: 5e+27},

    });

    new G.Upgrade({
        name: `Sprinkles cookies`,
        id: 453,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `A bit of festive decorating helps hide the fact that this might be one of the blandest cookies you've ever tasted.`,
        icon: [21, 14],
        cost: 4.9999999999999994e+29,
        order: 10020.453,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+28},

    });

    new G.Upgrade({
        name: `Peanut butter blossoms`,
        id: 454,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Topped with a scrumptious chocolate squirt, which is something we really wish we didn't just write.`,
        icon: [22, 14],
        cost: 1e+30,
        order: 10020.454,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5.0000000000000005e+28},

    });

    new G.Upgrade({
        name: `No-bake cookies`,
        id: 455,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `You have no idea how these mysterious oven-less treats came to be or how they hold their shape. You're thinking either elephant glue or cold fusion.`,
        icon: [21, 15],
        cost: 5e+30,
        order: 10020.455,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+29},

    });

    new G.Upgrade({
        name: `Florentines`,
        id: 456,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `These make up for being the fruitcake of cookies by at least having the decency to feature chocolate.`,
        icon: [26, 16],
        cost: 1e+31,
        order: 10020.456,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+29},

    });

    new G.Upgrade({
        name: `Chocolate crinkles`,
        id: 457,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Non-denominational cookies to celebrate year-round deliciousness, and certainly not Christmas or some other nonsense.`,
        icon: [22, 15],
        cost: 4.999999999999999e+31,
        order: 10020.457,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.4999999999999996e+30},

    });

    new G.Upgrade({
        name: `Maple cookies`,
        id: 458,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Made with syrup from a land where milk comes in bags, instead of spontaneously pooling at the bottom of your screen depending on your achievements.`,
        icon: [21, 13],
        cost: 1e+32,
        order: 10020.458,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5.0000000000000004e+30},

    });

    new G.Upgrade({
        name: `Festivity loops`,
        id: 463,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `These garish biscuits are a perfect fit for children's birthday parties or the funerals of strange, eccentric billionaires.`,
        icon: [25, 17],
        cost: 4999999999999995,
        order: 10030.463,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 250000000000000, upgrade: `Box of brand biscuits`},

    });

    new G.Upgrade({
        name: `Persian rice cookies`,
        id: 464,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Rose water and poppy seeds are the secret ingredients of these small, butter-free cookies.`,
        icon: [28, 15],
        cost: 5.0000000000000004e+32,
        order: 10020.464,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+31},

    });

    new G.Upgrade({
        name: `Norwegian cookies`,
        id: 465,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `A flat butter cookie with a sliver of candied cherry on top. It is said that these illustrate the bleakness of scandinavian existentialism.`,
        icon: [22, 20],
        cost: 1e+33,
        order: 10020.465,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 4.999999999999999e+31},

    });

    new G.Upgrade({
        name: `Crispy rice cookies`,
        id: 466,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Fun to make at home! Store-bought cookies are obsolete! Topple the system! There's marshmallows in these! Destroy capitalism!`,
        icon: [23, 20],
        cost: 5e+33,
        order: 10020.466,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+32},

    });

    new G.Upgrade({
        name: `Ube cookies`,
        id: 467,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `The tint is obtained by the use of purple yams. According to color symbolism, these cookies are either noble, holy, or supervillains.`,
        icon: [24, 17],
        cost: 1e+34,
        order: 10020.467,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+32},

    });

    new G.Upgrade({
        name: `Butterscotch cookies`,
        id: 468,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `The butterscotch chips are just the right amount of sticky, and make you feel like you're eating candy.`,
        icon: [24, 20],
        cost: 5e+34,
        order: 10020.468,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+33},

    });

    new G.Upgrade({
        name: `Speculaas`,
        id: 469,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `These crunchy, almost obnoxiously cinnamony cookies are a source of dutch pride. About the origin of the name, one can only speculate.`,
        icon: [21, 20],
        cost: 1e+35,
        order: 10020.469,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+33},

    });

    new G.Upgrade({
        name: `Chocolate oatmeal cookies`,
        id: 498,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `These bad boys compensate for lack of a cohesive form and a lumpy, unsightly appearance by being just simply delicious. Something we should all aspire to.`,
        icon: [23, 28],
        cost: 4.9999999999999995e+35,
        order: 10020.498,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+34},

    });

    new G.Upgrade({
        name: `Molasses cookies`,
        id: 499,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Sticky, crackly, and dusted in fine sugar.<br>Some lunatics have been known to eat these with potatoes.`,
        icon: [24, 28],
        cost: 1e+36,
        order: 10020.499,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+34},

    });

    new G.Upgrade({
        name: `Biscotti`,
        id: 500,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Almonds and pistachios make these very robust cookies slightly more interesting to eat than to bludgeon people with.`,
        icon: [22, 28],
        cost: 5.0000000000000004e+36,
        order: 10020.5,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+35},

    });

    new G.Upgrade({
        name: `Waffle cookies`,
        id: 501,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Whether these are cookies with shockingly waffle-like features or simply regular cookie-sized waffles is a debate we're not getting into here.`,
        icon: [21, 28],
        cost: 1e+37,
        order: 10020.501,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 4.9999999999999995e+35},

    });

    new G.Upgrade({
        name: `Almond cookies`,
        id: 502,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Sometimes you feel like one of these. Sometimes you don't.`,
        icon: [21, 27],
        cost: 99999999,
        order: 10000.502,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 5000000},

    });

    new G.Upgrade({
        name: `Hazelnut cookies`,
        id: 503,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Tastes like a morning stroll through a fragrant forest, minus the clouds of gnats.`,
        icon: [22, 27],
        cost: 99999999,
        order: 10000.503,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 5000000},

    });

    new G.Upgrade({
        name: `Walnut cookies`,
        id: 504,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Some experts have pointed to the walnut's eerie resemblance to the human brain as a sign of its sentience - a theory most walnuts vehemently object to.`,
        icon: [23, 27],
        cost: 99999999,
        order: 10000.504,

        pool: 'cookie',
        power: 2,
        unlockAt: {cookies: 5000000},

    });

    new G.Upgrade({
        name: `Custard creams`,
        id: 535,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `British lore pits these in a merciless war against bourbon biscuits.<br>The filling evokes vanilla without quite approaching it.<br>They're tastier on the inside!`,
        icon: [23, 29],
        cost: 5e+37,
        order: 10020.535,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 2.5e+36},

    });

    new G.Upgrade({
        name: `Bourbon biscuits`,
        id: 536,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Two chocolate biscuits joined together with even more chocolate.<br>The sworn rivals of custard creams, as legend has it.`,
        icon: [24, 29],
        cost: 1e+38,
        order: 10020.536,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+36},

    });

    new G.Upgrade({
        name: `Mini-cookies`,
        id: 538,
        desc: `Cookie production multiplier <b>+5%</b>.`,
        q: `Have you ever noticed how the smaller something is, the easier it is to binge on it?`,
        icon: [29, 30],
        cost: 5e+38,
        order: 10020.538,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 2.5e+37},

    });

    new G.Upgrade({
        name: `Profiteroles`,
        id: 543,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Also known as cream puffs, these pastries are light, fluffy, filled with whipped cream and fun to throw at people when snowballs are running scarce.`,
        icon: [29, 29],
        cost: 1e+31,
        order: 10040.543,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+29, upgrade: `Box of pastries`},

    });

    new G.Upgrade({
        name: `Jelly donut`,
        id: 544,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Guaranteed to contain at least 0.3% jelly filling, or your money back.<br>You can still see the jelly stab wound!`,
        icon: [27, 28],
        cost: 1.0000000000000001e+33,
        order: 10040.544,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+31, upgrade: `Box of pastries`},

    });

    new G.Upgrade({
        name: `Glazed donut`,
        id: 545,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Absolutely gooey with sugar. The hole is the tastiest part!`,
        icon: [28, 28],
        cost: 1e+35,
        order: 10040.545,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+33, upgrade: `Box of pastries`},

    });

    new G.Upgrade({
        name: `Chocolate cake`,
        id: 546,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `The cake is a Portal reference!`,
        icon: [25, 27],
        cost: 1.0000000000000001e+37,
        order: 10040.546,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+35, upgrade: `Box of pastries`},

    });

    new G.Upgrade({
        name: `Strawberry cake`,
        id: 547,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `It's not easy to come up with flavor text for something as generic as this, but some would say it's a piece of cake.`,
        icon: [26, 27],
        cost: 1.0000000000000001e+39,
        order: 10040.547,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5.000000000000001e+37, upgrade: `Box of pastries`},

    });

    new G.Upgrade({
        name: `Apple pie`,
        id: 548,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `It is said that some grandmas go rogue and bake these instead.`,
        icon: [25, 28],
        cost: 1e+41,
        order: 10040.548,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+39, upgrade: `Box of pastries`},

    });

    new G.Upgrade({
        name: `Lemon meringue pie`,
        id: 549,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Meringue is a finicky substance made of sugar and egg whites that requires specific atmospheric conditions to be baked at all. The lemon, as far as we can tell, isn't nearly as picky.`,
        icon: [26, 28],
        cost: 1e+43,
        order: 10040.549,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+41, upgrade: `Box of pastries`},

    });

    new G.Upgrade({
        name: `Butter croissant`,
        id: 550,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Look around.<br>A rude man in a striped shirt bikes past you. He smells of cigarettes and caf&eacute;-au-lait. Somewhere, a mime uses his moustache to make fun of the British. 300 pigeons fly overhead.<br>Relax. You're experiencing croissant.`,
        icon: [29, 28],
        cost: 1.0000000000000001e+45,
        order: 10040.55,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+43, upgrade: `Box of pastries`},

    });

    new G.Upgrade({
        name: `Cookie dough`,
        id: 551,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Bursting with infinite potential, but can also be eaten as is. Arguably worth the salmonella.`,
        icon: [25, 30],
        cost: 1e+35,
        order: 10050.551,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+33, upgrade: `Box of maybe cookies`},

    });

    new G.Upgrade({
        name: `Burnt cookie`,
        id: 552,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `This cookie flew too close to the sun and is now a shadow of its former self. If only you remembered to set a timer, you wouldn't have this tragedy on your hands...`,
        icon: [23, 30],
        cost: 1.0000000000000001e+37,
        order: 10050.552,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+35, upgrade: `Box of maybe cookies`},

    });

    new G.Upgrade({
        name: `A chocolate chip cookie but with the chips picked off for some reason`,
        id: 553,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `This has to be the saddest thing you've ever seen.`,
        icon: [24, 30],
        cost: 1.0000000000000001e+39,
        order: 10050.553,

        pool: 'cookie',
        power: 3,
        unlockAt: {
            cookies: 5.000000000000001e+37,
            upgrade: `Box of maybe cookies`
        },

    });

    new G.Upgrade({
        name: `Flavor text cookie`,
        id: 554,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `What you're currently reading is what gives this cookie its inimitable flavor.`,
        icon: [22, 30],
        cost: 1e+41,
        order: 10050.554,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+39, upgrade: `Box of maybe cookies`},

    });

    new G.Upgrade({
        name: `High-definition cookie`,
        id: 555,
        desc: `Cookie production multiplier <b>+5%</b>.`,
        q: `Uncomfortably detailed, like those weird stories your aunt keeps telling at parties.`,
        icon: [28, 10],
        cost: 1e+43,
        order: 10050.555,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 5e+41, upgrade: `Box of maybe cookies`},

    });

    new G.Upgrade({
        name: `Toast`,
        id: 556,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `A crisp slice of bread, begging for some butter and jam.<br>Why do people keep proposing these at parties?`,
        icon: [27, 10],
        cost: 1.0000000000000001e+34,
        order: 10060.556,

        pool: 'cookie',
        power: 4,
        unlockAt: {
            cookies: 5.0000000000000004e+32,
            upgrade: `Box of not cookies`
        },

    });

    new G.Upgrade({
        name: `Peanut butter & jelly`,
        id: 557,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `It's time.`,
        icon: [29, 9],
        cost: 1e+36,
        order: 10060.557,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+34, upgrade: `Box of not cookies`},

    });

    new G.Upgrade({
        name: `Wookies`,
        id: 558,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `These aren't the cookies you're looking for.`,
        icon: [26, 30],
        cost: 1e+38,
        order: 10060.558,

        pool: 'cookie',
        power: 4,
        unlockAt: {cookies: 5e+36, upgrade: `Box of not cookies`},

    });

    new G.Upgrade({
        name: `Cheeseburger`,
        id: 559,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `Absolutely no relation to cookies whatsoever - Orteil just wanted an excuse to draw a cheeseburger.`,
        icon: [28, 30],
        cost: 1e+40,
        order: 10060.559,

        pool: 'cookie',
        power: 4,
        unlockAt: {
            cookies: 5.0000000000000005e+38,
            upgrade: `Box of not cookies`
        },

    });

    new G.Upgrade({
        name: `One lone chocolate chip`,
        id: 560,
        desc: `Cookie production multiplier <b>+1%</b>.`,
        q: `The start of something beautiful.`,
        icon: [27, 30],
        cost: 1e+42,
        order: 10060.56,

        pool: 'cookie',
        power: 1,
        unlockAt: {cookies: 5e+40, upgrade: `Box of not cookies`},

    });

    new G.Upgrade({
        name: `Whoopie pies`,
        id: 565,
        q: `Two chocolate halves joined together by a cream filling. It's got no eyebrows, but you never noticed until now.`,
        icon: [21, 31],
        cost: 1e+39,
        order: 10020.565,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 5e+37},

    });

    new G.Upgrade({
        name: `Caramel wafer biscuits`,
        id: 566,
        q: `Coated in delicious chocolate. As many layers as you'll get in a biscuit without involving onions.`,
        icon: [22, 31],
        cost: 3.162277660168379e+39,
        order: 10020.566,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 1.5811388300841896e+38},

    });

    new G.Upgrade({
        name: `Chocolate chip mocha cookies`,
        id: 567,
        q: `Mocha started out as an excuse to smuggle chocolate into coffee. And now, in a poignant display of diplomacy and cultural exchange, it's bringing coffee to chocolate cookies.`,
        icon: [23, 31],
        cost: 9.999999999999999e+39,
        order: 10020.567,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 5e+38},

    });

    new G.Upgrade({
        name: `Earl Grey cookies`,
        id: 568,
        q: `Captain Picard's favorite.`,
        icon: [24, 31],
        cost: 3.162277660168379e+40,
        order: 10020.568,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 1.5811388300841896e+39},

    });

    new G.Upgrade({
        name: `Corn syrup cookies`,
        id: 569,
        q: `The corn syrup makes it extra chewy. Not the type of stuff you'd think to put in a cookie, but bakers make do.`,
        icon: [25, 31],
        cost: 1e+41,
        order: 10020.569,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 5e+39},

    });

    new G.Upgrade({
        name: `Icebox cookies`,
        id: 570,
        q: `Can be prepared in a variety of shapes with a variety of ingredients. Made by freezing dough before baking it, mirroring a time-proven medieval torture practice. Gotta keep them guessing.`,
        icon: [26, 31],
        cost: 3.1622776601683795e+41,
        order: 10020.57,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 1.5811388300841897e+40},

    });

    new G.Upgrade({
        name: `Graham crackers`,
        id: 571,
        q: `Inspired in their design by the wish to live a life of austere temperance, free from pleasure or cheer; it's no wonder these are so tasty.`,
        icon: [27, 31],
        cost: 9.999999999999999e+41,
        order: 10020.571,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 4.999999999999999e+40},

    });

    new G.Upgrade({
        name: `Hardtack`,
        id: 572,
        q: `Extremely hard and, if we're being honest, extremely tack.<br>If you're considering eating this as a fun snack, you probably have other things to worry about than this game, like getting scurvy or your crew fomenting mutiny.`,
        icon: [28, 31],
        cost: 3.162277660168379e+42,
        order: 10020.572,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 1.5811388300841897e+41},

    });

    new G.Upgrade({
        name: `Cornflake cookies`,
        id: 573,
        q: `They're grrrrrroovy! Careful not to let it sit in your milk too long, lest you accidentally end up with a bowl of cereal and get confused.`,
        icon: [29, 31],
        cost: 9.999999999999999e+42,
        order: 10020.573,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 4.9999999999999995e+41},

    });

    new G.Upgrade({
        name: `Tofu cookies`,
        id: 574,
        q: `There's really two ways to go with tofu cooking; either it asserts itself in plain sight or it camouflages itself in the other ingredients. This happens to be the latter, and as such, you can't really tell the difference between this and a regular cookie, save for that one pixel on the left.`,
        icon: [30, 31],
        cost: 3.162277660168379e+43,
        order: 10020.574,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 1.5811388300841893e+42},

    });

    new G.Upgrade({
        name: `Gluten-free cookies`,
        id: 575,
        q: `Made with browned butter and milk to closely match the archetypal chocolate chip cookie.<br>For celiacs, a chance to indulge in a delicious risk-free pastry. For others, a strangely threatening confection whose empty eyes will never know heaven nor hell.`,
        icon: [30, 30],
        cost: 3.162277660168379e+43,
        order: 10020.575,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 1.5811388300841893e+42},

    });

    new G.Upgrade({
        name: `Russian bread cookies`,
        id: 576,
        q: `Also known as alphabet cookies; while most bakers follow the recipe to the letter, it is said that some substitute the flour for spelt. But don't take my word for it.`,
        icon: [30, 29],
        cost: 9.999999999999999e+43,
        order: 10020.576,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 4.9999999999999995e+42},

    });

    new G.Upgrade({
        name: `Lebkuchen`,
        id: 577,
        q: `Diverse cookies from Germany, fragrant with honey and spices, often baked around Christmas.<br>Once worn by warriors of old for protection in battle.<br>+5 STR, +20% magic resistance.`,
        icon: [30, 28],
        cost: 3.162277660168379e+44,
        order: 10020.577,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 1.5811388300841895e+43},

    });

    new G.Upgrade({
        name: `Aachener Printen`,
        id: 578,
        q: `The honey once used to sweeten these gingerbread-like treats has since been swapped out for beet sugar, providing another sad example of regressive evolution.`,
        icon: [30, 27],
        cost: 1e+45,
        order: 10020.578,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 4.999999999999999e+43},

    });

    new G.Upgrade({
        name: `Canistrelli`,
        id: 579,
        q: `A dry biscuit flavored with anise and wine, tough like the people of Corsica where it comes from.`,
        icon: [30, 26],
        cost: 3.1622776601683795e+45,
        order: 10020.579,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 1.5811388300841897e+44},

    });

    new G.Upgrade({
        name: `Nice biscuits`,
        id: 580,
        q: `Made with coconut and perfect with tea. Traces its origins to a French city so nice they named it that.`,
        icon: [30, 25],
        cost: 1e+46,
        order: 10020.58,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 5e+44},

    });

    new G.Upgrade({
        name: `French pure butter cookies`,
        id: 581,
        q: `You can't tell what's stronger coming off these - the smell of butter or condescension.`,
        icon: [31, 25],
        cost: 3.1622776601683787e+46,
        order: 10020.581,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 1.5811388300841894e+45},

    });

    new G.Upgrade({
        name: `Petit beurre`,
        id: 582,
        q: `An unassuming biscuit whose name simply means "little butter". Famed and feared for its four ears and forty-eight teeth.<br>When it hears ya, it'll get ya...`,
        icon: [31, 26],
        cost: 3.1622776601683787e+46,
        order: 10020.582,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 1.5811388300841894e+45},

    });

    new G.Upgrade({
        name: `Nanaimo bars`,
        id: 583,
        q: `A delicious no-bake pastry hailing from Canada. Probably beats eating straight-up snow with maple syrup poured on it, but what do I know.`,
        icon: [31, 27],
        cost: 9.999999999999998e+46,
        order: 10020.583,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 4.9999999999999993e+45},

    });

    new G.Upgrade({
        name: `Berger cookies`,
        id: 584,
        q: `Messily slathered with chocolate fudge, but one of the most popular bergers of Baltimore, along with the triple fried egg berger and the blue crab cheeseberger.`,
        icon: [31, 28],
        cost: 3.1622776601683793e+47,
        order: 10020.584,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 1.5811388300841896e+46},

    });

    new G.Upgrade({
        name: `Chinsuko`,
        id: 585,
        q: `A little piece of Okinawa in cookie form. Part of a Japanese custom of selling sweets as souvenirs. But hey, pressed pennies are cool too.`,
        icon: [31, 29],
        cost: 9.999999999999999e+47,
        order: 10020.585,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 4.999999999999999e+46},

    });

    new G.Upgrade({
        name: `Panda koala biscuits`,
        id: 586,
        q: `Assorted jungle animals with equally assorted fillings.<br>Comes in chocolate, strawberry, vanilla and green tea.<br>Eat them all before they go extinct!`,
        icon: [31, 13],
        cost: 9.999999999999999e+47,
        order: 10020.586,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 4.999999999999999e+46},

    });

    new G.Upgrade({
        name: `Putri salju`,
        id: 587,
        q: `A beloved Indonesian pastry; its name means "snow princess", for the powdered sugar it's coated with. Had we added these to Cookie Clicker some years ago, this is where we'd make a reference to that one Disney movie, but it's probably time to let it go.`,
        icon: [31, 30],
        cost: 3.162277660168379e+48,
        order: 10020.587,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 1.5811388300841897e+47},

    });

    new G.Upgrade({
        name: `Milk cookies`,
        id: 588,
        q: `Best eaten with a tall glass of chocolate.`,
        icon: [31, 31],
        cost: 1e+49,
        order: 10020.588,

        pool: 'cookie',
        power: 5,
        unlockAt: {cookies: 4.9999999999999994e+47},

    });

    new G.Upgrade({
        name: `Cookie crumbs`,
        id: 589,
        q: `There used to be a cookie here. Now there isn't.<br>Good heavens, what did you <i>DO?!</i>`,
        icon: [30, 13],
        cost: 100,
        order: 9999.589,

        pool: 'cookie',
        power: 1,
        unlockAt: {cookies: 5, upgrade: `Legacy`},

    });

    new G.Upgrade({
        name: `Chocolate chip cookie`,
        id: 590,
        q: `This is the cookie you've been clicking this whole time. It looks a bit dented and nibbled on, but it's otherwise good as new.`,
        icon: [10, 0],
        cost: 1000000000000,
        order: 9999.59,

        pool: 'cookie',
        power: 10,
        unlockAt: {cookies: 50000000000, upgrade: `Legacy`},

    });


//special cookies
    new G.Upgrade({
        name: `Skull cookies`,
        id: 134,
        q: `Wanna know something spooky? You've got one of these inside your head RIGHT NOW.`,
        icon: [12, 8],
        cost: 444444444444,
        order: 10100.134,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Ghost cookies`,
        id: 135,
        q: `They're something strange, but they look pretty good!`,
        icon: [13, 8],
        cost: 444444444444,
        order: 10100.135,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Bat cookies`,
        id: 136,
        q: `The cookies this town deserves.`,
        icon: [14, 8],
        cost: 444444444444,
        order: 10100.136,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Slime cookies`,
        id: 137,
        q: `The incredible melting cookies!`,
        icon: [15, 8],
        cost: 444444444444,
        order: 10100.137,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Pumpkin cookies`,
        id: 138,
        q: `Not even pumpkin-flavored. Tastes like glazing. Yeugh.`,
        icon: [16, 8],
        cost: 444444444444,
        order: 10100.138,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Eyeball cookies`,
        id: 139,
        q: `When you stare into the cookie, the cookie stares back at you.`,
        icon: [17, 8],
        cost: 444444444444,
        order: 10100.139,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Spider cookies`,
        id: 140,
        q: `You found the recipe on the web. They do whatever a cookie can.`,
        icon: [18, 8],
        cost: 444444444444,
        order: 10100.14,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Christmas tree biscuits`,
        id: 143,
        q: `Whose pine is it anyway?`,
        icon: [12, 10],
        cost: 252525252525,
        order: 10200.143,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Snowflake biscuits`,
        id: 144,
        q: `Mass-produced to be unique in every way.`,
        icon: [13, 10],
        cost: 252525252525,
        order: 10200.144,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Snowman biscuits`,
        id: 145,
        q: `It's frosted. Doubly so.`,
        icon: [14, 10],
        cost: 252525252525,
        order: 10200.145,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Holly biscuits`,
        id: 146,
        q: `You don't smooch under these ones. That would be the mistletoe (which, botanically, is a smellier variant of the mistlefinger).`,
        icon: [15, 10],
        cost: 252525252525,
        order: 10200.146,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Candy cane biscuits`,
        id: 147,
        q: `It's two treats in one!<br>(Further inspection reveals the frosting does not actually taste like peppermint, but like mundane sugary frosting.)`,
        icon: [16, 10],
        cost: 252525252525,
        order: 10200.147,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Bell biscuits`,
        id: 148,
        q: `What do these even have to do with christmas? Who cares, ring them in!`,
        icon: [17, 10],
        cost: 252525252525,
        order: 10200.148,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Present biscuits`,
        id: 149,
        q: `The prequel to future biscuits. Watch out!`,
        icon: [18, 10],
        cost: 252525252525,
        order: 10200.149,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Dragon cookie`,
        id: 330,
        q: `Imbued with the vigor and vitality of a full-grown cookie dragon, this mystical cookie will embolden your empire for the generations to come.`,
        icon: [10, 25],
        cost: 70000000000000000,
        order: 10300.33,

        pool: 'cookie',
        power: 5,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Milk chocolate butter biscuit`,
        id: 334,
        q: `Rewarded for owning 100 of everything.<br>It bears the engraving of a fine entrepreneur.`,
        icon: [27, 8],
        cost: 1e+21,
        order: 10300.334,

        pool: 'cookie',
        power: 10,
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 100;
            }
        },

    });

    new G.Upgrade({
        name: `Dark chocolate butter biscuit`,
        id: 335,
        q: `Rewarded for owning 150 of everything.<br>It is adorned with the image of an experienced cookie tycoon.`,
        icon: [27, 9],
        cost: 1e+24,
        order: 10300.335,

        pool: 'cookie',
        power: 10,
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 150;
            }
        },

    });

    new G.Upgrade({
        name: `White chocolate butter biscuit`,
        id: 336,
        q: `Rewarded for owning 200 of everything.<br>The chocolate is chiseled to depict a masterful pastry magnate.`,
        icon: [28, 9],
        cost: 1e+27,
        order: 10300.336,

        pool: 'cookie',
        power: 10,
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 200;
            }
        },

    });

    new G.Upgrade({
        name: `Ruby chocolate butter biscuit`,
        id: 337,
        q: `Rewarded for owning 250 of everything.<br>Covered in a rare red chocolate, this biscuit is etched to represent the face of a cookie industrialist gone mad with power.`,
        icon: [28, 8],
        cost: 1e+30,
        order: 10300.337,

        pool: 'cookie',
        power: 10,
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 250;
            }
        },

    });

    new G.Upgrade({
        name: `Lavender chocolate butter biscuit`,
        id: 400,
        q: `Rewarded for owning 300 of everything.<br>This subtly-flavored biscuit represents the accomplishments of decades of top-secret research. The molded design on the chocolate resembles a well-known entrepreneur who gave their all to the ancient path of baking.`,
        icon: [26, 10],
        cost: 1e+33,
        order: 10300.4,

        pool: 'cookie',
        power: 10,
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 300;
            }
        },

    });

    new G.Upgrade({
        name: `Elderwort biscuits`,
        id: 470,
        q: `They taste incredibly stale, even when baked fresh.`,
        icon: [22, 25],
        cost: 120,
        order: 10200.47,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Bakeberry cookies`,
        id: 471,
        q: `Really good dipped in hot chocolate.`,
        icon: [23, 25],
        cost: 60,
        order: 10200.471,

        pool: 'cookie',
        power: 2,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Duketater cookies`,
        id: 472,
        q: `Fragrant and mealy, with a slight yellow aftertaste.`,
        icon: [24, 25],
        cost: 180,
        order: 10200.472,

        pool: 'cookie',
        power: 10,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Green yeast digestives`,
        id: 473,
        q: `These are tastier than you'd expect, but not by much.`,
        icon: [25, 25],
        cost: 180,
        order: 10200.473,

        pool: 'cookie',
        power: 0,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Wheat slims`,
        id: 476,
        q: `The only reason you'd consider these to be cookies is because you feel slightly sorry for them.`,
        icon: [28, 25],
        cost: 30,
        order: 10200.476,

        pool: 'cookie',
        power: 1,
        unimplemented: true,

    });

    new G.Upgrade({
        name: `Synthetic chocolate green honey butter biscuit`,
        id: 477,
        q: `Rewarded for owning 350 of everything.<br>The recipe for this butter biscuit was once the sole heritage of an ancient mountain monastery. Its flavor is so refined that only a slab of lab-made chocolate specifically engineered to be completely tasteless could complement it.<br>Also it's got your face on it.`,
        icon: [24, 26],
        cost: 1e+36,
        order: 10300.477,

        pool: 'cookie',
        power: 10,
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 350;
            }
        },

    });

    new G.Upgrade({
        name: `Royal raspberry chocolate butter biscuit`,
        id: 478,
        q: `Rewarded for owning 400 of everything.<br>Once reserved for the megalomaniac elite, this unique strain of fruity chocolate has a flavor and texture unlike any other. Whether its exorbitant worth is improved or lessened by the presence of your likeness on it still remains to be seen.`,
        icon: [25, 26],
        cost: 1e+39,
        order: 10300.478,

        pool: 'cookie',
        power: 10,
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 400;
            }
        },

    });

    new G.Upgrade({
        name: `Ultra-concentrated high-energy chocolate butter biscuit`,
        id: 479,
        q: `Rewarded for owning 450 of everything.<br>Infused with the power of several hydrogen bombs through a process that left most nuclear engineers and shareholders perplexed. Currently at the center of some rather heated United Nations meetings. Going in more detail about this chocolate would violate several state secrets, but we'll just add that someone's bust seems to be pictured on it. Perhaps yours?`,
        icon: [26, 26],
        cost: 1e+42,
        order: 10300.479,

        pool: 'cookie',
        power: 10,
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 450;
            }
        },

    });

    new G.Upgrade({
        name: `Pure pitch-black chocolate butter biscuit`,
        id: 497,
        q: `Rewarded for owning 500 of everything.<br>This chocolate is so pure and so flawless that it has no color of its own, instead taking on the appearance of whatever is around it. You're a bit surprised to notice that this one isn't stamped with your effigy, as its surface is perfectly smooth (to the picometer) - until you realize it's quite literally reflecting your own face like a mirror.`,
        icon: [24, 27],
        cost: 1e+45,
        order: 10300.497,

        pool: 'cookie',
        power: 10,
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 500;
            }
        },

    });


//standard building upgrades

    new G.Upgrade({
        name: `Forwards from grandma`,
        id: 7,
        q: `RE:RE:thought you'd get a kick out of this ;))`,
        icon: [1, 0],
        cost: 1000,
        order: 200.007,

        pool: 'building',
        tie: 1, tier: 1,

    });

    new G.Upgrade({
        name: `Steel-plated rolling pins`,
        id: 8,
        q: `Just what you kneaded.`,
        icon: [1, 1],
        cost: 5000,
        order: 200.008,

        pool: 'building',
        tie: 1, tier: 2,

    });

    new G.Upgrade({
        name: `Lubricated dentures`,
        id: 9,
        q: `squish`,
        icon: [1, 2],
        cost: 50000,
        order: 200.009,

        pool: 'building',
        tie: 1, tier: 3,

    });

    new G.Upgrade({
        name: `Cheap hoes`,
        id: 10,
        q: `Rake in the dough!`,
        icon: [2, 0],
        cost: 11000,
        order: 300.01,

        pool: 'building',
        tie: 2, tier: 1,

    });

    new G.Upgrade({
        name: `Fertilizer`,
        id: 11,
        q: `It's chocolate, I swear.`,
        icon: [2, 1],
        cost: 55000,
        order: 300.011,

        pool: 'building',
        tie: 2, tier: 2,

    });

    new G.Upgrade({
        name: `Cookie trees`,
        id: 12,
        q: `A relative of the breadfruit.`,
        icon: [2, 2],
        cost: 550000,
        order: 300.012,

        pool: 'building',
        tie: 2, tier: 3,

    });

    new G.Upgrade({
        name: `Sturdier conveyor belts`,
        id: 13,
        q: `You're going places.`,
        icon: [4, 0],
        cost: 1300000,
        order: 500.013,

        pool: 'building',
        tie: 4, tier: 1,

    });

    new G.Upgrade({
        name: `Child labor`,
        id: 14,
        q: `Cheaper, healthier workforce.`,
        icon: [4, 1],
        cost: 6500000,
        order: 500.014,

        pool: 'building',
        tie: 4, tier: 2,

    });

    new G.Upgrade({
        name: `Sweatshop`,
        id: 15,
        q: `Slackers will be terminated.`,
        icon: [4, 2],
        cost: 65000000,
        order: 500.015,

        pool: 'building',
        tie: 4, tier: 3,

    });

    new G.Upgrade({
        name: `Sugar gas`,
        id: 16,
        q: `A pink, volatile gas, found in the depths of some chocolate caves.`,
        icon: [3, 0],
        cost: 120000,
        order: 400.016,

        pool: 'building',
        tie: 3, tier: 1,

    });

    new G.Upgrade({
        name: `Megadrill`,
        id: 17,
        q: `You're in deep.`,
        icon: [3, 1],
        cost: 600000,
        order: 400.017,

        pool: 'building',
        tie: 3, tier: 2,

    });

    new G.Upgrade({
        name: `Ultradrill`,
        id: 18,
        q: `Finally caved in?`,
        icon: [3, 2],
        cost: 6000000,
        order: 400.018,

        pool: 'building',
        tie: 3, tier: 3,

    });

    new G.Upgrade({
        name: `Vanilla nebulae`,
        id: 19,
        q: `If you removed your space helmet, you could probably smell it!<br>(Note : don't do that.)`,
        icon: [5, 0],
        cost: 51000000000,
        order: 600.019,

        pool: 'building',
        tie: 8, tier: 1,

    });

    new G.Upgrade({
        name: `Wormholes`,
        id: 20,
        q: `By using these as shortcuts, your ships can travel much faster.`,
        icon: [5, 1],
        cost: 255000000000,
        order: 600.02,

        pool: 'building',
        tie: 8, tier: 2,

    });

    new G.Upgrade({
        name: `Frequent flyer`,
        id: 21,
        q: `Come back soon!`,
        icon: [5, 2],
        cost: 2550000000000,
        order: 600.021,

        pool: 'building',
        tie: 8, tier: 3,

    });

    new G.Upgrade({
        name: `Antimony`,
        id: 22,
        q: `Actually worth a lot of mony.`,
        icon: [6, 0],
        cost: 750000000000,
        order: 700.022,

        pool: 'building',
        tie: 9, tier: 1,

    });

    new G.Upgrade({
        name: `Essence of dough`,
        id: 23,
        q: `Extracted through the 5 ancient steps of alchemical baking.`,
        icon: [6, 1],
        cost: 3750000000000,
        order: 700.023,

        pool: 'building',
        tie: 9, tier: 2,

    });

    new G.Upgrade({
        name: `True chocolate`,
        id: 24,
        q: `The purest form of cacao.`,
        icon: [6, 2],
        cost: 37500000000000,
        order: 700.024,

        pool: 'building',
        tie: 9, tier: 3,

    });

    new G.Upgrade({
        name: `Ancient tablet`,
        id: 25,
        q: `A strange slab of peanut brittle, holding an ancient cookie recipe. Neat!`,
        icon: [7, 0],
        cost: 10000000000000,
        order: 800.025,

        pool: 'building',
        tie: 10, tier: 1,

    });

    new G.Upgrade({
        name: `Insane oatling workers`,
        id: 26,
        q: `ARISE, MY MINIONS!`,
        icon: [7, 1],
        cost: 50000000000000,
        order: 800.026,

        pool: 'building',
        tie: 10, tier: 2,

    });

    new G.Upgrade({
        name: `Soul bond`,
        id: 27,
        q: `So I just sign up and get more cookies? Sure, whatever!`,
        icon: [7, 2],
        cost: 500000000000000,
        order: 800.027,

        pool: 'building',
        tie: 10, tier: 3,

    });

    new G.Upgrade({
        name: `Flux capacitors`,
        id: 28,
        q: `Bake to the future.`,
        icon: [8, 0],
        cost: 140000000000000,
        order: 900.028,

        pool: 'building',
        tie: 11, tier: 1,

    });

    new G.Upgrade({
        name: `Time paradox resolver`,
        id: 29,
        q: `No more fooling around with your own grandmother!`,
        icon: [8, 1],
        cost: 700000000000000,
        order: 900.029,

        pool: 'building',
        tie: 11, tier: 2,

    });

    new G.Upgrade({
        name: `Quantum conundrum`,
        id: 30,
        q: `There is only one constant, and that is universal uncertainty.<br>Or is it?`,
        icon: [8, 2],
        cost: 7000000000000000,
        order: 900.03,

        pool: 'building',
        tie: 11, tier: 3,

    });

    new G.Upgrade({
        name: `Prune juice`,
        id: 44,
        q: `Gets me going.`,
        icon: [1, 13],
        cost: 5000000,
        order: 200.044,

        pool: 'building',
        tie: 1, tier: 4,

    });

    new G.Upgrade({
        name: `Genetically-modified cookies`,
        id: 45,
        q: `All-natural mutations.`,
        icon: [2, 13],
        cost: 55000000,
        order: 300.045,

        pool: 'building',
        tie: 2, tier: 4,

    });

    new G.Upgrade({
        name: `Radium reactors`,
        id: 46,
        q: `Gives your cookies a healthy glow.`,
        icon: [4, 13],
        cost: 6500000000,
        order: 500.046,

        pool: 'building',
        tie: 4, tier: 4,

    });

    new G.Upgrade({
        name: `Ultimadrill`,
        id: 47,
        q: `Pierce the heavens, etc.`,
        icon: [3, 13],
        cost: 600000000,
        order: 400.047,

        pool: 'building',
        tie: 3, tier: 4,

    });

    new G.Upgrade({
        name: `Warp drive`,
        id: 48,
        q: `To boldly bake.`,
        icon: [5, 13],
        cost: 255000000000000,
        order: 600.048,

        pool: 'building',
        tie: 8, tier: 4,

    });

    new G.Upgrade({
        name: `Ambrosia`,
        id: 49,
        q: `Adding this to the cookie mix is sure to make them even more addictive!<br>Perhaps dangerously so.<br>Let's hope you can keep selling these legally.`,
        icon: [6, 13],
        cost: 3750000000000000,
        order: 700.049,

        pool: 'building',
        tie: 9, tier: 4,

    });

    new G.Upgrade({
        name: `Sanity dance`,
        id: 50,
        q: `We can change if we want to.<br>We can leave our brains behind.`,
        icon: [7, 13],
        cost: 50000000000000000,
        order: 800.05,

        pool: 'building',
        tie: 10, tier: 4,

    });

    new G.Upgrade({
        name: `Causality enforcer`,
        id: 51,
        q: `What happened, happened.`,
        icon: [8, 13],
        cost: 700000000000000000,
        order: 900.051,

        pool: 'building',
        tie: 11, tier: 4,

    });

    new G.Upgrade({
        name: `Farmer grandmas`,
        id: 57,
        q: `A nice farmer to grow more cookies.`,
        icon: [10, 9],
        cost: 55000,
        order: 250.057,

        pool: 'grandma',
        tie: 2, tier: 0,

    });

    new G.Upgrade({
        name: `Miner grandmas`,
        id: 58,
        q: `A nice miner to dig more cookies.`,
        icon: [10, 9],
        cost: 600000,
        order: 250.058,

        pool: 'grandma',
        tie: 3, tier: 0,

    });

    new G.Upgrade({
        name: `Worker grandmas`,
        id: 59,
        q: `A nice worker to manufacture more cookies.`,
        icon: [10, 9],
        cost: 6500000,
        order: 250.059,

        pool: 'grandma',
        tie: 4, tier: 0,

    });

    new G.Upgrade({
        name: `Cosmic grandmas`,
        id: 60,
        q: `A nice thing to... uh... cookies.`,
        icon: [10, 9],
        cost: 255000000000,
        order: 250.06,

        pool: 'grandma',
        tie: 8, tier: 0,

    });

    new G.Upgrade({
        name: `Transmuted grandmas`,
        id: 61,
        q: `A nice golden grandma to convert into more cookies.`,
        icon: [10, 9],
        cost: 3750000000000,
        order: 250.061,

        pool: 'grandma',
        tie: 9, tier: 0,

    });

    new G.Upgrade({
        name: `Altered grandmas`,
        id: 62,
        q: `a NiCe GrAnDmA tO bA##########`,
        icon: [10, 9],
        cost: 50000000000000,
        order: 250.062,

        pool: 'grandma',
        tie: 10, tier: 0,

    });

    new G.Upgrade({
        name: `Grandmas' grandmas`,
        id: 63,
        q: `A nice grandma's nice grandma to bake double the cookies.`,
        icon: [10, 9],
        cost: 700000000000000,
        order: 250.063,

        pool: 'grandma',
        tie: 11, tier: 0,

    });

    new G.Upgrade({
        name: `Sugar bosons`,
        id: 99,
        q: `Sweet firm bosons.`,
        icon: [13, 0],
        cost: 1700000000000000,
        order: 1000.099,

        pool: 'building',
        tie: 12, tier: 1,

    });

    new G.Upgrade({
        name: `String theory`,
        id: 100,
        q: `Reveals new insight about the true meaning of baking cookies (and, as a bonus, the structure of the universe).`,
        icon: [13, 1],
        cost: 8500000000000000,
        order: 1000.1,

        pool: 'building',
        tie: 12, tier: 2,

    });

    new G.Upgrade({
        name: `Large macaron collider`,
        id: 101,
        q: `How singular!`,
        icon: [13, 2],
        cost: 85000000000000000,
        order: 1000.101,

        pool: 'building',
        tie: 12, tier: 3,

    });

    new G.Upgrade({
        name: `Big bang bake`,
        id: 102,
        q: `And that's how it all began.`,
        icon: [13, 13],
        cost: 8500000000000000000,
        order: 1000.102,

        pool: 'building',
        tie: 12, tier: 4,

    });

    new G.Upgrade({
        name: `Antigrandmas`,
        id: 103,
        q: `A mean antigrandma to vomit more cookies.`,
        icon: [10, 9],
        cost: 8500000000000000,
        order: 255.103,

        pool: 'grandma',
        tie: 12, tier: 0,

    });

    new G.Upgrade({
        name: `Double-thick glasses`,
        id: 110,
        q: `Oh... so THAT's what I've been baking.`,
        icon: [1, 14],
        cost: 500000000,
        order: 200.11,

        pool: 'building',
        tie: 1, tier: 5,

    });

    new G.Upgrade({
        name: `Gingerbread scarecrows`,
        id: 111,
        q: `Staring at your crops with mischievous glee.`,
        icon: [2, 14],
        cost: 5500000000,
        order: 300.111,

        pool: 'building',
        tie: 2, tier: 5,

    });

    new G.Upgrade({
        name: `Recombobulators`,
        id: 112,
        q: `A major part of cookie recombobulation.`,
        icon: [4, 14],
        cost: 650000000000,
        order: 500.112,

        pool: 'building',
        tie: 4, tier: 5,

    });

    new G.Upgrade({
        name: `H-bomb mining`,
        id: 113,
        q: `Questionable efficiency, but spectacular nonetheless.`,
        icon: [3, 14],
        cost: 60000000000,
        order: 400.113,

        pool: 'building',
        tie: 3, tier: 5,

    });

    new G.Upgrade({
        name: `Chocolate monoliths`,
        id: 114,
        q: `My god. It's full of chocolate bars.`,
        icon: [5, 14],
        cost: 25500000000000000,
        order: 600.114,

        pool: 'building',
        tie: 8, tier: 5,

    });

    new G.Upgrade({
        name: `Aqua crustulae`,
        id: 115,
        q: `Careful with the dosing - one drop too much and you get muffins.<br>And nobody likes muffins.`,
        icon: [6, 14],
        cost: 375000000000000000,
        order: 700.115,

        pool: 'building',
        tie: 9, tier: 5,

    });

    new G.Upgrade({
        name: `Brane transplant`,
        id: 116,
        q: `This refers to the practice of merging higher dimensional universes, or "branes", with our own, in order to facilitate transit (and harvesting of precious cookie dough).`,
        icon: [7, 14],
        cost: 5000000000000000000,
        order: 800.116,

        pool: 'building',
        tie: 10, tier: 5,

    });

    new G.Upgrade({
        name: `Yestermorrow comparators`,
        id: 117,
        q: `Fortnights into milleniums.`,
        icon: [8, 14],
        cost: 70000000000000000000,
        order: 900.117,

        pool: 'building',
        tie: 11, tier: 5,

    });

    new G.Upgrade({
        name: `Reverse cyclotrons`,
        id: 118,
        q: `These can uncollision particles and unspin atoms. For... uh... better flavor, and stuff.`,
        icon: [13, 14],
        cost: 850000000000000000000,
        order: 1000.118,

        pool: 'building',
        tie: 12, tier: 5,

    });

    new G.Upgrade({
        name: `Gem polish`,
        id: 175,
        q: `Get rid of the grime and let more light in.<br>Truly, truly outrageous.`,
        icon: [14, 0],
        cost: 21000000000000000,
        order: 1100.175,

        pool: 'building',
        tie: 13, tier: 1,

    });

    new G.Upgrade({
        name: `9th color`,
        id: 176,
        q: `Delve into untouched optical depths where even the mantis shrimp hasn't set an eye!`,
        icon: [14, 1],
        cost: 105000000000000000,
        order: 1100.176,

        pool: 'building',
        tie: 13, tier: 2,

    });

    new G.Upgrade({
        name: `Chocolate light`,
        id: 177,
        q: `Bask into its cocoalescence.<br>(Warning : may cause various interesting albeit deadly skin conditions.)`,
        icon: [14, 2],
        cost: 1050000000000000000,
        order: 1100.177,

        pool: 'building',
        tie: 13, tier: 3,

    });

    new G.Upgrade({
        name: `Grainbow`,
        id: 178,
        q: `Remember the different grains using the handy Roy G. Biv mnemonic : R is for rice, O is for oats... uh, B for barley?...`,
        icon: [14, 13],
        cost: 105000000000000000000,
        order: 1100.178,

        pool: 'building',
        tie: 13, tier: 4,

    });

    new G.Upgrade({
        name: `Pure cosmic light`,
        id: 179,
        q: `Your prisms now receive pristine, unadulterated photons from the other end of the universe.`,
        icon: [14, 14],
        cost: 1.05e+22,
        order: 1100.179,

        pool: 'building',
        tie: 13, tier: 5,

    });

    new G.Upgrade({
        name: `Rainbow grandmas`,
        id: 180,
        q: `A luminous grandma to sparkle into cookies.`,
        icon: [10, 9],
        cost: 105000000000000000,
        order: 255.18,

        pool: 'grandma',
        tie: 13, tier: 0,

    });

    new G.Upgrade({
        name: `Aging agents`,
        id: 192,
        q: `Counter-intuitively, grandmas have the uncanny ability to become more powerful the older they get.`,
        icon: [1, 15],
        cost: 50000000000,
        order: 200.192,

        pool: 'building',
        tie: 1, tier: 6,

    });

    new G.Upgrade({
        name: `Pulsar sprinklers`,
        id: 193,
        q: `There's no such thing as over-watering. The moistest is the bestest.`,
        icon: [2, 15],
        cost: 550000000000,
        order: 300.193,

        pool: 'building',
        tie: 2, tier: 6,

    });

    new G.Upgrade({
        name: `Deep-bake process`,
        id: 194,
        q: `A patented process increasing cookie yield two-fold for the same amount of ingredients. Don't ask how, don't take pictures, and be sure to wear your protective suit.`,
        icon: [4, 15],
        cost: 65000000000000,
        order: 500.194,

        pool: 'building',
        tie: 4, tier: 6,

    });

    new G.Upgrade({
        name: `Coreforge`,
        id: 195,
        q: `You've finally dug a tunnel down to the Earth's core. It's pretty warm down here.`,
        icon: [3, 15],
        cost: 6000000000000,
        order: 400.195,

        pool: 'building',
        tie: 3, tier: 6,

    });

    new G.Upgrade({
        name: `Generation ship`,
        id: 196,
        q: `Built to last, this humongous spacecraft will surely deliver your cookies to the deep ends of space, one day.`,
        icon: [5, 15],
        cost: 2550000000000000000,
        order: 600.196,

        pool: 'building',
        tie: 8, tier: 6,

    });

    new G.Upgrade({
        name: `Origin crucible`,
        id: 197,
        q: `Built from the rarest of earths and located at the very deepest of the largest mountain, this legendary crucible is said to retain properties from the big-bang itself.`,
        icon: [6, 15],
        cost: 37500000000000000000,
        order: 700.197,

        pool: 'building',
        tie: 9, tier: 6,

    });

    new G.Upgrade({
        name: `Deity-sized portals`,
        id: 198,
        q: `It's almost like, say, an elder god could fit through this thing now. Hypothetically.`,
        icon: [7, 15],
        cost: 500000000000000000000,
        order: 800.198,

        pool: 'building',
        tie: 10, tier: 6,

    });

    new G.Upgrade({
        name: `Far future enactment`,
        id: 199,
        q: `The far future enactment authorizes you to delve deep into the future - where civilization has fallen and risen again, and cookies are plentiful.`,
        icon: [8, 15],
        cost: 7e+21,
        order: 900.199,

        pool: 'building',
        tie: 11, tier: 6,

    });

    new G.Upgrade({
        name: `Nanocosmics`,
        id: 200,
        q: `The theory of nanocosmics posits that each subatomic particle is in fact its own self-contained universe, holding unfathomable amounts of energy.<br>This somehow stacks with the nested universe theory, because physics.`,
        icon: [13, 15],
        cost: 8.5e+22,
        order: 1000.2,

        pool: 'building',
        tie: 12, tier: 6,

    });

    new G.Upgrade({
        name: `Glow-in-the-dark`,
        id: 201,
        q: `Your prisms now glow in the dark, effectively doubling their output!`,
        icon: [14, 15],
        cost: 1.05e+24,
        order: 1100.201,

        pool: 'building',
        tie: 13, tier: 6,

    });

    new G.Upgrade({
        name: `Taller tellers`,
        id: 232,
        q: `Able to process a higher amount of transactions. Careful though, as taller tellers tell tall tales.`,
        icon: [15, 0],
        cost: 14000000,
        order: 525.232,

        pool: 'building',
        tie: 5, tier: 1,

    });

    new G.Upgrade({
        name: `Scissor-resistant credit cards`,
        id: 233,
        q: `For those truly valued customers.`,
        icon: [15, 1],
        cost: 70000000,
        order: 525.233,

        pool: 'building',
        tie: 5, tier: 2,

    });

    new G.Upgrade({
        name: `Acid-proof vaults`,
        id: 234,
        q: `You know what they say : better safe than sorry.`,
        icon: [15, 2],
        cost: 700000000,
        order: 525.234,

        pool: 'building',
        tie: 5, tier: 3,

    });

    new G.Upgrade({
        name: `Chocolate coins`,
        id: 235,
        q: `This revolutionary currency is much easier to melt from and into ingots - and tastes much better, for a change.`,
        icon: [15, 13],
        cost: 70000000000,
        order: 525.235,

        pool: 'building',
        tie: 5, tier: 4,

    });

    new G.Upgrade({
        name: `Exponential interest rates`,
        id: 236,
        q: `Can't argue with mathematics! Now fork it over.`,
        icon: [15, 14],
        cost: 7000000000000,
        order: 525.236,

        pool: 'building',
        tie: 5, tier: 5,

    });

    new G.Upgrade({
        name: `Financial zen`,
        id: 237,
        q: `The ultimate grail of economic thought; the feng shui of big money, the stock market yoga - the Heimlich maneuver of dimes and nickels.`,
        icon: [15, 15],
        cost: 700000000000000,
        order: 525.237,

        pool: 'building',
        tie: 5, tier: 6,

    });

    new G.Upgrade({
        name: `Golden idols`,
        id: 238,
        q: `Lure even greedier adventurers to retrieve your cookies. Now that's a real idol game!`,
        icon: [16, 0],
        cost: 200000000,
        order: 550.238,

        pool: 'building',
        tie: 6, tier: 1,

    });

    new G.Upgrade({
        name: `Sacrifices`,
        id: 239,
        q: `What's a life to a gigaton of cookies?`,
        icon: [16, 1],
        cost: 1000000000,
        order: 550.239,

        pool: 'building',
        tie: 6, tier: 2,

    });

    new G.Upgrade({
        name: `Delicious blessing`,
        id: 240,
        q: `And lo, the Baker's almighty spoon came down and distributed holy gifts unto the believers - shimmering sugar, and chocolate dark as night, and all manner of wheats. And boy let me tell you, that party was mighty gnarly.`,
        icon: [16, 2],
        cost: 10000000000,
        order: 550.24,

        pool: 'building',
        tie: 6, tier: 3,

    });

    new G.Upgrade({
        name: `Sun festival`,
        id: 241,
        q: `Free the primordial powers of your temples with these annual celebrations involving fire-breathers, traditional dancing, ritual beheadings and other merriments!`,
        icon: [16, 13],
        cost: 1000000000000,
        order: 550.241,

        pool: 'building',
        tie: 6, tier: 4,

    });

    new G.Upgrade({
        name: `Enlarged pantheon`,
        id: 242,
        q: `Enough spiritual inadequacy! More divinities than you'll ever need, or your money back! 100% guaranteed!`,
        icon: [16, 14],
        cost: 100000000000000,
        order: 550.242,

        pool: 'building',
        tie: 6, tier: 5,

    });

    new G.Upgrade({
        name: `Great Baker in the sky`,
        id: 243,
        q: `This is it. The ultimate deity has finally cast Their sublimely divine eye upon your operation; whether this is a good thing or possibly the end of days is something you should find out very soon.`,
        icon: [16, 15],
        cost: 10000000000000000,
        order: 550.243,

        pool: 'building',
        tie: 6, tier: 6,

    });

    new G.Upgrade({
        name: `Pointier hats`,
        id: 244,
        q: `Tests have shown increased thaumic receptivity relative to the geometric proportions of wizardly conic implements.`,
        icon: [17, 0],
        cost: 3300000000,
        order: 575.244,

        pool: 'building',
        tie: 7, tier: 1,

    });

    new G.Upgrade({
        name: `Beardlier beards`,
        id: 245,
        q: `Haven't you heard? The beard is the word.`,
        icon: [17, 1],
        cost: 16500000000,
        order: 575.245,

        pool: 'building',
        tie: 7, tier: 2,

    });

    new G.Upgrade({
        name: `Ancient grimoires`,
        id: 246,
        q: `Contain interesting spells such as "Turn Water To Drool", "Grow Eyebrows On Furniture" and "Summon Politician".`,
        icon: [17, 2],
        cost: 165000000000,
        order: 575.246,

        pool: 'building',
        tie: 7, tier: 3,

    });

    new G.Upgrade({
        name: `Kitchen curses`,
        id: 247,
        q: `Exotic magic involved in all things pastry-related. Hexcellent!`,
        icon: [17, 13],
        cost: 16500000000000,
        order: 575.247,

        pool: 'building',
        tie: 7, tier: 4,

    });

    new G.Upgrade({
        name: `School of sorcery`,
        id: 248,
        q: `This cookie-funded academy of witchcraft is home to the 4 prestigious houses of magic : the Jocks, the Nerds, the Preps, and the Deathmunchers.`,
        icon: [17, 14],
        cost: 1650000000000000,
        order: 575.248,

        pool: 'building',
        tie: 7, tier: 5,

    });

    new G.Upgrade({
        name: `Dark formulas`,
        id: 249,
        q: `Eldritch forces are at work behind these spells - you get the feeling you really shouldn't be messing with those. But I mean, free cookies, right?`,
        icon: [17, 15],
        cost: 165000000000000000,
        order: 575.249,

        pool: 'building',
        tie: 7, tier: 6,

    });

    new G.Upgrade({
        name: `Banker grandmas`,
        id: 250,
        q: `A nice banker to cash in more cookies.`,
        icon: [10, 9],
        cost: 70000000,
        order: 250.25,

        pool: 'grandma',
        tie: 5, tier: 0,

    });

    new G.Upgrade({
        name: `Priestess grandmas`,
        id: 251,
        q: `A nice priestess to praise the one true Baker in the sky.`,
        icon: [10, 9],
        cost: 1000000000,
        order: 250.251,

        pool: 'grandma',
        tie: 6, tier: 0,

    });

    new G.Upgrade({
        name: `Witch grandmas`,
        id: 252,
        q: `A nice witch to cast a zip, and a zoop, and poof! Cookies.`,
        icon: [10, 9],
        cost: 16500000000,
        order: 250.252,

        pool: 'grandma',
        tie: 7, tier: 0,

    });

    new G.Upgrade({
        name: `Xtreme walkers`,
        id: 294,
        q: `Complete with flame decals and a little horn that goes "toot".`,
        icon: [1, 16],
        cost: 50000000000000,
        order: 200.294,

        pool: 'building',
        tie: 1, tier: 7,

    });

    new G.Upgrade({
        name: `Fudge fungus`,
        id: 295,
        q: `A sugary parasite whose tendrils help cookie growth.<br>Please do not breathe in the spores. In case of spore ingestion, seek medical help within the next 36 seconds.`,
        icon: [2, 16],
        cost: 550000000000000,
        order: 300.295,

        pool: 'building',
        tie: 2, tier: 7,

    });

    new G.Upgrade({
        name: `Planetsplitters`,
        id: 296,
        q: `These new state-of-the-art excavators have been tested on Merula, Globort and Flwanza VI, among other distant planets which have been curiously quiet lately.`,
        icon: [3, 16],
        cost: 6000000000000000,
        order: 400.296,

        pool: 'building',
        tie: 3, tier: 7,

    });

    new G.Upgrade({
        name: `Cyborg workforce`,
        id: 297,
        q: `Semi-synthetic organisms don't slack off, don't unionize, and have 20% shorter lunch breaks, making them ideal labor fodder.`,
        icon: [4, 16],
        cost: 65000000000000000,
        order: 500.297,

        pool: 'building',
        tie: 4, tier: 7,

    });

    new G.Upgrade({
        name: `Way of the wallet`,
        id: 298,
        q: `This new monetary school of thought is all the rage on the banking scene; follow its precepts and you may just profit from it.`,
        icon: [15, 16],
        cost: 700000000000000000,
        order: 525.298,

        pool: 'building',
        tie: 5, tier: 7,

    });

    new G.Upgrade({
        name: `Creation myth`,
        id: 299,
        q: `Stories have been circulating about the origins of the very first cookie that was ever baked; tales of how it all began, in the Dough beyond time and the Ovens of destiny.`,
        icon: [16, 16],
        cost: 10000000000000000000,
        order: 550.299,

        pool: 'building',
        tie: 6, tier: 7,

    });

    new G.Upgrade({
        name: `Cookiemancy`,
        id: 300,
        q: `There it is; the perfected school of baking magic. From summoning chips to hexing nuts, there is not a single part of cookie-making that hasn't been improved tenfold by magic tricks.`,
        icon: [17, 16],
        cost: 165000000000000000000,
        order: 575.3,

        pool: 'building',
        tie: 7, tier: 7,

    });

    new G.Upgrade({
        name: `Dyson sphere`,
        id: 301,
        q: `You've found a way to apply your knowledge of cosmic technology to slightly more local endeavors; this gigantic sphere of meta-materials, wrapping the solar system, is sure to kick your baking abilities up a notch.`,
        icon: [5, 16],
        cost: 2.55e+21,
        order: 600.301,

        pool: 'building',
        tie: 8, tier: 7,

    });

    new G.Upgrade({
        name: `Theory of atomic fluidity`,
        id: 302,
        q: `Pushing alchemy to its most extreme limits, you find that everything is transmutable into anything else - lead to gold, mercury to water; more importantly, you realize that anything can -and should- be converted to cookies.`,
        icon: [6, 16],
        cost: 3.75e+22,
        order: 700.302,

        pool: 'building',
        tie: 9, tier: 7,

    });

    new G.Upgrade({
        name: `End of times back-up plan`,
        id: 303,
        q: `Just in case, alright?`,
        icon: [7, 16],
        cost: 5e+23,
        order: 800.303,

        pool: 'building',
        tie: 10, tier: 7,

    });

    new G.Upgrade({
        name: `Great loop hypothesis`,
        id: 304,
        q: `What if our universe is just one instance of an infinite cycle? What if, before and after it, stretched infinite amounts of the same universe, themselves containing infinite amounts of cookies?`,
        icon: [8, 16],
        cost: 7e+24,
        order: 900.304,

        pool: 'building',
        tie: 11, tier: 7,

    });

    new G.Upgrade({
        name: `The Pulse`,
        id: 305,
        q: `You've tapped into the very pulse of the cosmos, a timeless rhythm along which every material and antimaterial thing beats in unison. This, somehow, means more cookies.`,
        icon: [13, 16],
        cost: 8.5e+25,
        order: 1000.305,

        pool: 'building',
        tie: 12, tier: 7,

    });

    new G.Upgrade({
        name: `Lux sanctorum`,
        id: 306,
        q: `Your prism attendants have become increasingly mesmerized with something in the light - or maybe something beyond it; beyond us all, perhaps?`,
        icon: [14, 16],
        cost: 1.05e+27,
        order: 1100.306,

        pool: 'building',
        tie: 13, tier: 7,

    });

    new G.Upgrade({
        name: `The Unbridling`,
        id: 307,
        q: `It might be a classic tale of bad parenting, but let's see where grandma is going with this.`,
        icon: [1, 17],
        cost: 50000000000000000,
        order: 200.307,

        pool: 'building',
        tie: 1, tier: 8,

    });

    new G.Upgrade({
        name: `Wheat triffids`,
        id: 308,
        q: `Taking care of crops is so much easier when your plants can just walk about and help around the farm.<br>Do not pet. Do not feed. Do not attempt to converse with.`,
        icon: [2, 17],
        cost: 550000000000000000,
        order: 300.308,

        pool: 'building',
        tie: 2, tier: 8,

    });

    new G.Upgrade({
        name: `Canola oil wells`,
        id: 309,
        q: `A previously untapped resource, canola oil permeates the underground olifers which grant it its particular taste and lucrative properties.`,
        icon: [3, 17],
        cost: 6000000000000000000,
        order: 400.309,

        pool: 'building',
        tie: 3, tier: 8,

    });

    new G.Upgrade({
        name: `78-hour days`,
        id: 310,
        q: `Why didn't we think of this earlier?`,
        icon: [4, 17],
        cost: 65000000000000000000,
        order: 500.31,

        pool: 'building',
        tie: 4, tier: 8,

    });

    new G.Upgrade({
        name: `The stuff rationale`,
        id: 311,
        q: `If not now, when? If not it, what? If not things... stuff?`,
        icon: [15, 17],
        cost: 700000000000000000000,
        order: 525.311,

        pool: 'building',
        tie: 5, tier: 8,

    });

    new G.Upgrade({
        name: `Theocracy`,
        id: 312,
        q: `You've turned your cookie empire into a perfect theocracy, gathering the adoration of zillions of followers from every corner of the universe.<br>Don't let it go to your head.`,
        icon: [16, 17],
        cost: 1e+22,
        order: 550.312,

        pool: 'building',
        tie: 6, tier: 8,

    });

    new G.Upgrade({
        name: `Rabbit trick`,
        id: 313,
        q: `Using nothing more than a fancy top hat, your wizards have found a way to simultaneously curb rabbit population and produce heaps of extra cookies for basically free!<br>Resulting cookies may or may not be fit for vegans.`,
        icon: [17, 17],
        cost: 1.65e+23,
        order: 575.313,

        pool: 'building',
        tie: 7, tier: 8,

    });

    new G.Upgrade({
        name: `The final frontier`,
        id: 314,
        q: `It's been a long road, getting from there to here. It's all worth it though - the sights are lovely and the oil prices slightly more reasonable.`,
        icon: [5, 17],
        cost: 2.55e+24,
        order: 600.314,

        pool: 'building',
        tie: 8, tier: 8,

    });

    new G.Upgrade({
        name: `Beige goo`,
        id: 315,
        q: `Well now you've done it. Good job. Very nice. That's 3 galaxies you've just converted into cookies. Good thing you can hop from universe to universe.`,
        icon: [6, 17],
        cost: 3.75e+25,
        order: 700.315,

        pool: 'building',
        tie: 9, tier: 8,

    });

    new G.Upgrade({
        name: `Maddening chants`,
        id: 316,
        q: `A popular verse goes like so : "jau'hn madden jau'hn madden aeiouaeiouaeiou brbrbrbrbrbrbr"`,
        icon: [7, 17],
        cost: 5e+26,
        order: 800.316,

        pool: 'building',
        tie: 10, tier: 8,

    });

    new G.Upgrade({
        name: `Cookietopian moments of maybe`,
        id: 317,
        q: `Reminiscing how things could have been, should have been, will have been.`,
        icon: [8, 17],
        cost: 7e+27,
        order: 900.317,

        pool: 'building',
        tie: 11, tier: 8,

    });

    new G.Upgrade({
        name: `Some other super-tiny fundamental particle? Probably?`,
        id: 318,
        q: `When even the universe is running out of ideas, that's when you know you're nearing the end.`,
        icon: [13, 17],
        cost: 8.5e+28,
        order: 1000.318,

        pool: 'building',
        tie: 12, tier: 8,

    });

    new G.Upgrade({
        name: `Reverse shadows`,
        id: 319,
        q: `Oh man, this is really messing with your eyes.`,
        icon: [14, 17],
        cost: 1.05e+30,
        order: 1100.319,

        pool: 'building',
        tie: 13, tier: 8,

    });

    new G.Upgrade({
        name: `Lucky grandmas`,
        id: 415,
        q: `A fortunate grandma that always seems to find more cookies.`,
        icon: [10, 9],
        cost: 1300000000000000000,
        order: 255.415,

        pool: 'grandma',
        tie: 14, tier: 0,

    });

    new G.Upgrade({
        name: `Your lucky cookie`,
        id: 416,
        q: `This is the first cookie you've ever baked. It holds a deep sentimental value and, after all this time, an interesting smell.`,
        icon: [19, 0],
        cost: 260000000000000000,
        order: 1200.416,

        pool: 'building',
        tie: 14, tier: 1,

    });

    new G.Upgrade({
        name: `"All Bets Are Off" magic coin`,
        id: 417,
        q: `A coin that always lands on the other side when flipped. Not heads, not tails, not the edge. The <i>other side</i>.`,
        icon: [19, 1],
        cost: 1300000000000000000,
        order: 1200.417,

        pool: 'building',
        tie: 14, tier: 2,

    });

    new G.Upgrade({
        name: `Winning lottery ticket`,
        id: 418,
        q: `What lottery? THE lottery, that's what lottery! Only lottery that matters!`,
        icon: [19, 2],
        cost: 13000000000000000000,
        order: 1200.418,

        pool: 'building',
        tie: 14, tier: 3,

    });

    new G.Upgrade({
        name: `Four-leaf clover field`,
        id: 419,
        q: `No giant monsters here, just a whole lot of lucky grass.`,
        icon: [19, 13],
        cost: 1.3e+21,
        order: 1200.419,

        pool: 'building',
        tie: 14, tier: 4,

    });

    new G.Upgrade({
        name: `A recipe book about books`,
        id: 420,
        q: `Tip the scales in your favor with 28 creative new ways to cook the books.`,
        icon: [19, 14],
        cost: 1.3e+23,
        order: 1200.42,

        pool: 'building',
        tie: 14, tier: 5,

    });

    new G.Upgrade({
        name: `Leprechaun village`,
        id: 421,
        q: `You've finally become accepted among the local leprechauns, who lend you their mythical luck as a sign of friendship (as well as some rather foul-tasting tea).`,
        icon: [19, 15],
        cost: 1.3e+25,
        order: 1200.421,

        pool: 'building',
        tie: 14, tier: 6,

    });

    new G.Upgrade({
        name: `Improbability drive`,
        id: 422,
        q: `A strange engine that turns statistics on their head. Recommended by the Grandmother's Guide to the Bakery.`,
        icon: [19, 16],
        cost: 1.3e+28,
        order: 1200.422,

        pool: 'building',
        tie: 14, tier: 7,

    });

    new G.Upgrade({
        name: `Antisuperstistronics`,
        id: 423,
        q: `An exciting new field of research that makes unlucky things lucky. No mirror unbroken, no ladder unwalked under!`,
        icon: [19, 17],
        cost: 1.3e+31,
        order: 1200.423,

        pool: 'building',
        tie: 14, tier: 8,

    });

    new G.Upgrade({
        name: `Reverse dementia`,
        id: 428,
        q: `Extremely unsettling, and somehow even worse than the regular kind.`,
        icon: [1, 18],
        cost: 50000000000000000000,
        order: 200.428,

        pool: 'building',
        tie: 1, tier: 9,

    });

    new G.Upgrade({
        name: `Humane pesticides`,
        id: 429,
        q: `Made by people, for people, from people and ready to unleash some righteous scorching pain on those pesky insects that so deserve it.`,
        icon: [2, 18],
        cost: 550000000000000000000,
        order: 300.429,

        pool: 'building',
        tie: 2, tier: 9,

    });

    new G.Upgrade({
        name: `Mole people`,
        id: 430,
        q: `Engineered from real human beings within your very labs, these sturdy little folks have a knack for finding the tastiest underground minerals in conditions that more expensive machinery probably wouldn't survive.`,
        icon: [3, 18],
        cost: 6e+21,
        order: 400.43,

        pool: 'building',
        tie: 3, tier: 9,

    });

    new G.Upgrade({
        name: `Machine learning`,
        id: 431,
        q: `You figured you might get better productivity if you actually told your workers to learn how to work the machines. Sometimes, it's the little things...`,
        icon: [4, 18],
        cost: 6.5e+22,
        order: 500.431,

        pool: 'building',
        tie: 4, tier: 9,

    });

    new G.Upgrade({
        name: `Edible money`,
        id: 432,
        q: `It's really quite simple; you make all currency too delicious not to eat, solving world hunger and inflation in one fell swoop!`,
        icon: [15, 18],
        cost: 7e+23,
        order: 525.432,

        pool: 'building',
        tie: 5, tier: 9,

    });

    new G.Upgrade({
        name: `Sick rap prayers`,
        id: 433,
        q: `With their ill beat and radical rhymes, these way-hip religious tunes are sure to get all the youngins who thought they were 2 cool 4 church back on the pews and praying for more! Wicked!`,
        icon: [16, 18],
        cost: 1e+25,
        order: 550.433,

        pool: 'building',
        tie: 6, tier: 9,

    });

    new G.Upgrade({
        name: `Deluxe tailored wands`,
        id: 434,
        q: `In this age of science, most skillful wand-makers are now long gone; but thankfully - not all those wanders are lost.`,
        icon: [17, 18],
        cost: 1.65e+26,
        order: 575.434,

        pool: 'building',
        tie: 7, tier: 9,

    });

    new G.Upgrade({
        name: `Autopilot`,
        id: 435,
        q: `Your ships are now fitted with completely robotic crews! It's crazy how much money you save when you don't have to compensate the families of those lost in space.`,
        icon: [5, 18],
        cost: 2.55e+27,
        order: 600.435,

        pool: 'building',
        tie: 8, tier: 9,

    });

    new G.Upgrade({
        name: `The advent of chemistry`,
        id: 436,
        q: `You know what? That whole alchemy nonsense was a load of baseless rubbish. Dear god, what were you thinking?`,
        icon: [6, 18],
        cost: 3.75e+28,
        order: 700.436,

        pool: 'building',
        tie: 9, tier: 9,

    });

    new G.Upgrade({
        name: `The real world`,
        id: 437,
        q: `It turns out that our universe is actually the twisted dimension of another, saner plane of reality. Time to hop on over there and loot the place!`,
        icon: [7, 18],
        cost: 5e+29,
        order: 800.437,

        pool: 'building',
        tie: 10, tier: 9,

    });

    new G.Upgrade({
        name: `Second seconds`,
        id: 438,
        q: `That's twice as many seconds in the same amount of time! What a deal! Also, what in god's name!`,
        icon: [8, 18],
        cost: 7e+30,
        order: 900.438,

        pool: 'building',
        tie: 11, tier: 9,

    });

    new G.Upgrade({
        name: `Quantum comb`,
        id: 439,
        q: `Quantum entanglement is one of those things that are so annoying to explain that we might honestly be better off without it. This is finally possible thanks to the quantum comb!`,
        icon: [13, 18],
        cost: 8.5e+31,
        order: 1000.439,

        pool: 'building',
        tie: 12, tier: 9,

    });

    new G.Upgrade({
        name: `Crystal mirrors`,
        id: 440,
        q: `Designed to filter more light back into your prisms, reaching levels of brightness that reality itself had never planned for.`,
        icon: [14, 18],
        cost: 1.05e+33,
        order: 1100.44,

        pool: 'building',
        tie: 13, tier: 9,

    });

    new G.Upgrade({
        name: `Bunnypedes`,
        id: 441,
        q: `You've taken to breeding rabbits with hundreds of paws, which makes them intrinsically very lucky and thus a very handy (if very disturbing) pet.`,
        icon: [19, 18],
        cost: 1.3e+34,
        order: 1200.441,

        pool: 'building',
        tie: 14, tier: 9,

    });

    new G.Upgrade({
        name: `Timeproof hair dyes`,
        id: 480,
        q: `Why do they always have those strange wispy pink dos? What do they know about candy floss that we don't?`,
        icon: [1, 19],
        cost: 5e+22,
        order: 200.48,

        pool: 'building',
        tie: 1, tier: 10,

    });

    new G.Upgrade({
        name: `Barnstars`,
        id: 481,
        q: `Ah, yes. These help quite a bit. Somehow.`,
        icon: [2, 19],
        cost: 5.5e+23,
        order: 300.481,

        pool: 'building',
        tie: 2, tier: 10,

    });

    new G.Upgrade({
        name: `Mine canaries`,
        id: 482,
        q: `These aren't used for anything freaky! The miners just enjoy having a pet or two down there.`,
        icon: [3, 19],
        cost: 6e+24,
        order: 400.482,

        pool: 'building',
        tie: 3, tier: 10,

    });

    new G.Upgrade({
        name: `Brownie point system`,
        id: 483,
        q: `Oh, these are lovely! You can now reward your factory employees for good behavior, such as working overtime or snitching on coworkers. 58 brownie points gets you a little picture of a brownie, and 178 of those pictures gets you an actual brownie piece for you to do with as you please! Infantilizing? Maybe. Oodles of fun? You betcha!`,
        icon: [4, 19],
        cost: 6.5e+25,
        order: 500.483,

        pool: 'building',
        tie: 4, tier: 10,

    });

    new G.Upgrade({
        name: `Grand supercycles`,
        id: 484,
        q: `We let the public think these are complicated financial terms when really we're just rewarding the bankers with snazzy bicycles for a job well done. It's only natural after you built those fancy gold swimming pools for them, where they can take a dip and catch Kondratiev waves.`,
        icon: [15, 19],
        cost: 7e+26,
        order: 525.484,

        pool: 'building',
        tie: 5, tier: 10,

    });

    new G.Upgrade({
        name: `Psalm-reading`,
        id: 485,
        q: `A theologically dubious and possibly blasphemous blend of fortune-telling and scripture studies.`,
        icon: [16, 19],
        cost: 1e+28,
        order: 550.485,

        pool: 'building',
        tie: 6, tier: 10,

    });

    new G.Upgrade({
        name: `Immobile spellcasting`,
        id: 486,
        q: `Wizards who master this skill can now cast spells without having to hop and skip and gesticulate embarrassingly, which is much sneakier and honestly quite a relief.`,
        icon: [17, 19],
        cost: 1.65e+29,
        order: 575.486,

        pool: 'building',
        tie: 7, tier: 10,

    });

    new G.Upgrade({
        name: `Restaurants at the end of the universe`,
        id: 487,
        q: `Since the universe is spatially infinite, and therefore can be construed to have infinite ends, you've opened an infinite chain of restaurants where your space truckers can rest and partake in some home-brand cookie-based meals.`,
        icon: [5, 19],
        cost: 2.55e+30,
        order: 600.487,

        pool: 'building',
        tie: 8, tier: 10,

    });

    new G.Upgrade({
        name: `On second thought`,
        id: 488,
        q: `Disregard that last upgrade, alchemy is where it's at! Your eggheads just found a way to transmute children's nightmares into rare metals!`,
        icon: [6, 19],
        cost: 3.75e+31,
        order: 700.488,

        pool: 'building',
        tie: 9, tier: 10,

    });

    new G.Upgrade({
        name: `Dimensional garbage gulper`,
        id: 489,
        q: `So we've been looking for a place to dispose of all the refuse that's been accumulating since we started baking - burnt cookies, failed experiments, unruly workers - and well, we figured rather than sell it to poor countries like we've been doing, we could just dump it in some alternate trash dimension where it's not gonna bother anybody! Probably!`,
        icon: [7, 19],
        cost: 5e+32,
        order: 800.489,

        pool: 'building',
        tie: 10, tier: 10,

    });

    new G.Upgrade({
        name: `Additional clock hands`,
        id: 490,
        q: `It seemed like a silly idea at first, but it turns out these have the strange ability to twist time in interesting new ways.`,
        icon: [8, 19],
        cost: 7e+33,
        order: 900.49,

        pool: 'building',
        tie: 11, tier: 10,

    });

    new G.Upgrade({
        name: `Baking Nobel prize`,
        id: 491,
        q: `What better way to sponsor scientific growth than to motivate those smarmy nerds with a meaningless award! What's more, each prize comes with a fine print lifelong exclusive contract to come work for you (or else)!`,
        icon: [13, 19],
        cost: 8.5e+34,
        order: 1000.491,

        pool: 'building',
        tie: 12, tier: 10,

    });

    new G.Upgrade({
        name: `Reverse theory of light`,
        id: 492,
        q: `A whole new world of physics opens up when you decide that antiphotons are real and posit that light is merely a void in shadow.`,
        icon: [14, 19],
        cost: 1.05e+36,
        order: 1100.492,

        pool: 'building',
        tie: 13, tier: 10,

    });

    new G.Upgrade({
        name: `Revised probabilistics`,
        id: 493,
        q: `Either something happens or it doesn't. That's a 50% chance! This suddenly makes a lot of unlikely things very possible.`,
        icon: [19, 19],
        cost: 1.3e+37,
        order: 1200.493,

        pool: 'building',
        tie: 14, tier: 10,

    });

    new G.Upgrade({
        name: `Good manners`,
        id: 506,
        q: `Apparently these ladies are much more amiable if you take the time to learn their strange, ancient customs, which seem to involve saying "please" and "thank you" and staring at the sun with bulging eyes while muttering eldritch curses under your breath.`,
        icon: [1, 28],
        cost: 5.000000000000001e+26,
        order: 200.506,

        pool: 'building',
        tie: 1, tier: 11,

    });

    new G.Upgrade({
        name: `Lindworms`,
        id: 507,
        q: `You have to import these from far up north, but they really help areate the soil!`,
        icon: [2, 28],
        cost: 5.500000000000001e+27,
        order: 300.507,

        pool: 'building',
        tie: 2, tier: 11,

    });

    new G.Upgrade({
        name: `Bore again`,
        id: 508,
        q: `After extracting so much sediment for so long, you've formed some veritable mountains of your own from the accumulated piles of rock and dirt. Time to dig through those and see if you find anything fun!`,
        icon: [3, 28],
        cost: 6e+28,
        order: 400.508,

        pool: 'building',
        tie: 3, tier: 11,

    });

    new G.Upgrade({
        name: `"Volunteer" interns`,
        id: 509,
        q: `If you're bad at something, always do it for free.`,
        icon: [4, 28],
        cost: 6.500000000000001e+29,
        order: 500.509,

        pool: 'building',
        tie: 4, tier: 11,

    });

    new G.Upgrade({
        name: `Rules of acquisition`,
        id: 510,
        q: `Rule 387 : a cookie baked is a cookie kept.`,
        icon: [15, 28],
        cost: 7e+30,
        order: 525.51,

        pool: 'building',
        tie: 5, tier: 11,

    });

    new G.Upgrade({
        name: `War of the gods`,
        id: 511,
        q: `An interesting game; the only winning move is not to pray.`,
        icon: [16, 28],
        cost: 1e+32,
        order: 550.511,

        pool: 'building',
        tie: 6, tier: 11,

    });

    new G.Upgrade({
        name: `Electricity`,
        id: 512,
        q: `Ancient magicks and forbidden hexes shroud this arcane knowledge, whose unfathomable power can mysteriously turn darkness into light and shock an elephant to death.`,
        icon: [17, 28],
        cost: 1.6500000000000002e+33,
        order: 575.512,

        pool: 'building',
        tie: 7, tier: 11,

    });

    new G.Upgrade({
        name: `Universal alphabet`,
        id: 513,
        q: `You've managed to chart a language that can be understood by any sentient species in the galaxy; its exciting vocabulary contains over 56 trillion words that sound and look like sparkly burps, forming intricate sentences that usually translate to something like "give us your cookies, or else".`,
        icon: [5, 28],
        cost: 2.55e+34,
        order: 600.513,

        pool: 'building',
        tie: 8, tier: 11,

    });

    new G.Upgrade({
        name: `Public betterment`,
        id: 514,
        q: `Why do we keep trying to change useless matter into cookies, or cookies into even better cookies? Clearly, the way of the future is to change the people who eat the cookies into people with a greater understanding, appreciation and respect for the cookies they're eating. Into the vat you go!`,
        icon: [6, 28],
        cost: 3.75e+35,
        order: 700.514,

        pool: 'building',
        tie: 9, tier: 11,

    });

    new G.Upgrade({
        name: `Embedded microportals`,
        id: 515,
        q: `We've found out that if we bake the portals into the cookies themselves, we can transport people's taste buds straight into the taste dimension! Good thing your army of lawyers got rid of the FDA a while ago!`,
        icon: [7, 28],
        cost: 5.0000000000000004e+36,
        order: 800.515,

        pool: 'building',
        tie: 10, tier: 11,

    });

    new G.Upgrade({
        name: `Nostalgia`,
        id: 516,
        q: `Your time machine technicians insist that this is some advanced new time travel tech, and not just an existing emotion universal to mankind. Either way, you have to admit that selling people the same old cookies just because it reminds them of the good old times is an interesting prospect.`,
        icon: [8, 28],
        cost: 7.000000000000001e+37,
        order: 900.516,

        pool: 'building',
        tie: 11, tier: 11,

    });

    new G.Upgrade({
        name: `The definite molecule`,
        id: 517,
        q: `Your scientists have found a way to pack a cookie into one single continuous molecule, opening exciting new prospects in both storage and flavor despite the fact that these take up to a whole year to digest.`,
        icon: [13, 28],
        cost: 8.500000000000001e+38,
        order: 1000.517,

        pool: 'building',
        tie: 12, tier: 11,

    });

    new G.Upgrade({
        name: `Light capture measures`,
        id: 518,
        q: `As the universe gets ever so slightly dimmer due to you converting more and more of its light into cookies, you've taken to finding new and unexplored sources of light for your prisms; for instance, the warm glow emitted by a pregnant woman, or the twinkle in the eye of a hopeful child.`,
        icon: [14, 28],
        cost: 1.05e+40,
        order: 1100.518,

        pool: 'building',
        tie: 13, tier: 11,

    });

    new G.Upgrade({
        name: `0-sided dice`,
        id: 519,
        q: `The advent of the 0-sided dice has had unexpected and tumultuous effects on the gambling community, and saw experts around the world calling you both a genius and an imbecile.`,
        icon: [19, 28],
        cost: 1.3e+41,
        order: 1200.519,

        pool: 'building',
        tie: 14, tier: 11,

    });

    new G.Upgrade({
        name: `Metagrandmas`,
        id: 521,
        q: `A fractal grandma to make more grandmas to make more cookies.`,
        icon: [10, 9],
        cost: 15500000000000000000,
        order: 255.521,

        pool: 'grandma',
        tie: 15, tier: 0,

    });

    new G.Upgrade({
        name: `Metabakeries`,
        id: 522,
        q: `They practically bake themselves!`,
        icon: [20, 0],
        cost: 3100000000000000000,
        order: 1300.522,

        pool: 'building',
        tie: 15, tier: 1,

    });

    new G.Upgrade({
        name: `Mandelbrown sugar`,
        id: 523,
        q: `A substance that displays useful properties such as fractal sweetness and instant contact lethality.`,
        icon: [20, 1],
        cost: 15500000000000000000,
        order: 1300.523,

        pool: 'building',
        tie: 15, tier: 2,

    });

    new G.Upgrade({
        name: `Fractoids`,
        id: 524,
        q: `Here's a frun fract : all in all, these were a terrible idea.`,
        icon: [20, 2],
        cost: 155000000000000000000,
        order: 1300.524,

        pool: 'building',
        tie: 15, tier: 3,

    });

    new G.Upgrade({
        name: `Nested universe theory`,
        id: 525,
        q: `Asserts that each subatomic particle is host to a whole new universe, and therefore, another limitless quantity of cookies.<br>This somehow stacks with the theory of nanocosmics, because physics.`,
        icon: [20, 13],
        cost: 1.55e+22,
        order: 1300.525,

        pool: 'building',
        tie: 15, tier: 4,

    });

    new G.Upgrade({
        name: `Menger sponge cake`,
        id: 526,
        q: `Frighteningly absorbent thanks to its virtually infinite surface area. Keep it isolated in a dry chamber, never handle it with an open wound, and do not ever let it touch a body of water.`,
        icon: [20, 14],
        cost: 1.55e+24,
        order: 1300.526,

        pool: 'building',
        tie: 15, tier: 5,

    });

    new G.Upgrade({
        name: `One particularly good-humored cow`,
        id: 527,
        q: `This unassuming bovine was excruciatingly expensive and it may seem at first like you were ripped off. On closer inspection however, you notice that its earrings (it's wearing earrings) are actually fully functional copies of itself, each of which also wearing their own cow earrings, and so on, infinitely. It appears your dairy concerns will be taken care of for a while, although you'll have to put up with the cow's annoying snickering.`,
        icon: [20, 15],
        cost: 1.55e+26,
        order: 1300.527,

        pool: 'building',
        tie: 15, tier: 6,

    });

    new G.Upgrade({
        name: `Chocolate ouroboros`,
        id: 528,
        q: `Forever eating its own tail and digesting itself, in a metabolically dubious tale of delicious tragedy.`,
        icon: [20, 16],
        cost: 1.55e+29,
        order: 1300.528,

        pool: 'building',
        tie: 15, tier: 7,

    });

    new G.Upgrade({
        name: `Nested`,
        id: 529,
        q: `Clever self-reference or shameful cross-promotion? This upgrade apparently has the gall to advertise a link to <u>orteil.dashnet.org/nested</u>, in a tooltip you can't even click.`,
        icon: [20, 17],
        cost: 1.55e+32,
        order: 1300.529,

        pool: 'building',
        tie: 15, tier: 8,

    });

    new G.Upgrade({
        name: `Space-filling fibers`,
        id: 530,
        q: `This special ingredient has the incredible ability to fill the local space perfectly, effectively eradicating hunger in those who consume it!<br>Knowing that no hunger means no need for cookies, your marketers urge you to repurpose this product into next-level packing peanuts.`,
        icon: [20, 18],
        cost: 1.55e+35,
        order: 1300.53,

        pool: 'building',
        tie: 15, tier: 9,

    });

    new G.Upgrade({
        name: `Endless book of prose`,
        id: 531,
        q: `Snatched right out of the library of Babel.`,
        icon: [20, 19],
        cost: 1.55e+38,
        order: 1300.531,

        pool: 'building',
        tie: 15, tier: 10,

    });

    new G.Upgrade({
        name: `The set of all sets`,
        id: 532,
        q: `The answer, of course, is a definite maybe.`,
        icon: [20, 28],
        cost: 1.55e+42,
        order: 1300.532,

        pool: 'building',
        tie: 15, tier: 11,

    });


    new G.Upgrade({
        name: `Reinforced index finger`,
        id: 0,
        q: `prod prod`,
        icon: [0, 0],
        cost: 100,
        order: 100,

        pool: 'finger', tier: 1,

    });

    new G.Upgrade({
        name: `Carpal tunnel prevention cream`,
        id: 1,
        q: `it... it hurts to click...`,
        icon: [0, 1],
        cost: 500,
        order: 100.001,

        pool: 'finger', tier: 2,

    });

    new G.Upgrade({
        name: `Ambidextrous`,
        id: 2,
        q: `Look ma, both hands!`,
        icon: [0, 2],
        cost: 10000,
        order: 100.002,

        pool: 'finger', tier: 3,

    });

    new G.Upgrade({
        name: `Thousand fingers`,
        id: 3,
        q: `clickity`,
        icon: [0, 13],
        cost: 100000,
        order: 100.003,

        pool: 'finger', tier: 4,

    });

    new G.Upgrade({
        name: `Million fingers`,
        id: 4,
        q: `clickityclickity`,
        icon: [0, 14],
        cost: 10000000,
        order: 100.004,

        pool: 'finger', tier: 5,

    });

    new G.Upgrade({
        name: `Billion fingers`,
        id: 5,
        q: `clickityclickityclickity`,
        icon: [0, 15],
        cost: 100000000,
        order: 100.005,

        pool: 'finger', tier: 6,

    });

    new G.Upgrade({
        name: `Trillion fingers`,
        id: 6,
        q: `clickityclickityclickityclickity`,
        icon: [0, 16],
        cost: 1000000000,
        order: 100.006,

        pool: 'finger', tier: 7,

    });

    new G.Upgrade({
        name: `Kitten helpers`,
        id: 31,
        q: `meow may I help you`,
        icon: [18, 0],
        cost: 9000000,
        order: 20000.031,

        pool: 'kitten', tier: 1, power: 0.1,

    });

    new G.Upgrade({
        name: `Kitten workers`,
        id: 32,
        q: `meow meow meow meow`,
        icon: [18, 1],
        cost: 9000000000,
        order: 20000.032,

        pool: 'kitten', tier: 2, power: 0.125,

    });

    new G.Upgrade({
        name: `Quadrillion fingers`,
        id: 43,
        q: `clickityclickityclickityclickityclick`,
        icon: [0, 17],
        cost: 10000000000,
        order: 100.043,

        pool: 'finger', tier: 8,

    });

    new G.Upgrade({
        name: `Kitten engineers`,
        id: 54,
        q: `meow meow meow meow, sir`,
        icon: [18, 2],
        cost: 90000000000000,
        order: 20000.054,

        pool: 'kitten', tier: 3, power: 0.15,

    });

    new G.Upgrade({
        name: `Plastic mouse`,
        id: 75,
        q: `Slightly squeaky.<br>(Look, pal. We both know you\'re tapping these cookies instead of clicking them. Let\'s just pretend this mouse helps somehow.)`,
        icon: [11, 0],
        cost: 50000,
        order: 150.075,

        pool: 'mouse', tier: 1,

    });

    new G.Upgrade({
        name: `Iron mouse`,
        id: 76,
        q: `Click like it's 1,349!`,
        icon: [11, 1],
        cost: 5000000,
        order: 150.076,

        pool: 'mouse', tier: 2,

    });

    new G.Upgrade({
        name: `Titanium mouse`,
        id: 77,
        q: `Heavy, but powerful.`,
        icon: [11, 2],
        cost: 500000000,
        order: 150.077,

        pool: 'mouse', tier: 3,

    });

    new G.Upgrade({
        name: `Adamantium mouse`,
        id: 78,
        q: `You could cut diamond with these.`,
        icon: [11, 13],
        cost: 50000000000,
        order: 150.078,

        pool: 'mouse', tier: 4,

    });

    new G.Upgrade({
        name: `Quintillion fingers`,
        id: 82,
        q: `man, just go click click click click click, it's real easy, man.`,
        icon: [0, 18],
        cost: 10000000000000,
        order: 100.082,

        pool: 'finger', tier: 9,

    });

    new G.Upgrade({
        name: `Kitten overseers`,
        id: 108,
        q: `my purrpose is to serve you, sir`,
        icon: [18, 13],
        cost: 90000000000000000,
        order: 20000.108,

        pool: 'kitten', tier: 4, power: 0.175,

    });

    new G.Upgrade({
        name: `Sextillion fingers`,
        id: 109,
        q: `sometimes<br>things just<br>click`,
        icon: [0, 19],
        cost: 10000000000000000,
        order: 100.109,

        pool: 'finger', tier: 10,

    });

    new G.Upgrade({
        name: `Unobtainium mouse`,
        id: 119,
        q: `These nice mice should suffice.`,
        icon: [11, 14],
        cost: 5000000000000,
        order: 150.119,

        pool: 'mouse', tier: 5,

    });

    new G.Upgrade({
        name: `Kitten managers`,
        id: 187,
        q: `that's not gonna paws any problem, sir`,
        icon: [18, 14],
        cost: 900000000000000000000,
        order: 20000.187,

        pool: 'kitten', tier: 5, power: 0.2,

    });

    new G.Upgrade({
        name: `Septillion fingers`,
        id: 188,
        q: `[cursory flavor text]`,
        icon: [0, 28],
        cost: 10000000000000000000,
        order: 100.188,

        pool: 'finger', tier: 11,

    });

    new G.Upgrade({
        name: `Octillion fingers`,
        id: 189,
        q: `Turns out you <b>can</b> quite put your finger on it.`,
        icon: [0, 30],
        cost: 1e+22,
        order: 100.189,

        pool: 'finger', tier: 12,

    });

    new G.Upgrade({
        name: `Eludium mouse`,
        id: 190,
        q: `I rodent do that if I were you.`,
        icon: [11, 15],
        cost: 500000000000000,
        order: 150.19,

        pool: 'mouse', tier: 6,

    });

    new G.Upgrade({
        name: `Wishalloy mouse`,
        id: 191,
        q: `Clicking is fine and dandy, but don't smash your mouse over it. Get your game on. Go play.`,
        icon: [11, 16],
        cost: 50000000000000000,
        order: 150.191,

        pool: 'mouse', tier: 7,

    });

    new G.Upgrade({
        name: `Kitten accountants`,
        id: 320,
        q: `business going great, sir`,
        icon: [18, 15],
        cost: 9e+23,
        order: 20000.32,

        pool: 'kitten', tier: 6, power: 0.2,

    });

    new G.Upgrade({
        name: `Kitten specialists`,
        id: 321,
        q: `optimeowzing your workflow like whoah, sir`,
        icon: [18, 16],
        cost: 9e+26,
        order: 20000.321,

        pool: 'kitten', tier: 7, power: 0.2,

    });

    new G.Upgrade({
        name: `Kitten experts`,
        id: 322,
        q: `10 years expurrrtise in the cookie business, sir`,
        icon: [18, 17],
        cost: 9e+29,
        order: 20000.322,

        pool: 'kitten', tier: 8, power: 0.2,

    });

    new G.Upgrade({
        name: `Fantasteel mouse`,
        id: 366,
        q: `You could be clicking using your touchpad and we'd be none the wiser.`,
        icon: [11, 17],
        cost: 5000000000000000000,
        order: 150.366,

        pool: 'mouse', tier: 8,

    });

    new G.Upgrade({
        name: `Nevercrack mouse`,
        id: 367,
        q: `How much beefier can you make a mouse until it's considered a rat?`,
        icon: [11, 18],
        cost: 500000000000000000000,
        order: 150.367,

        pool: 'mouse', tier: 9,

    });

    new G.Upgrade({
        name: `Kitten consultants`,
        id: 425,
        q: `glad to be overpaid to work with you, sir`,
        icon: [18, 18],
        cost: 9e+32,
        order: 20000.425,

        pool: 'kitten', tier: 9, power: 0.2,

    });

    new G.Upgrade({
        name: `Armythril mouse`,
        id: 427,
        q: `This one takes about 53 people to push it around and another 48 to jump down on the button and trigger a click. You could say it's got some heft to it.`,
        icon: [11, 19],
        cost: 5e+22,
        order: 150.427,

        pool: 'mouse', tier: 10,

    });

    new G.Upgrade({
        name: `Kitten assistants to the regional manager`,
        id: 442,
        q: `nothing stresses meowt... except having to seek the approval of my inferiors, sir`,
        icon: [18, 19],
        cost: 9e+35,
        order: 20000.442,

        pool: 'kitten', tier: 10, power: 0.175,

    });

    new G.Upgrade({
        name: `Technobsidian mouse`,
        id: 460,
        q: `A highly advanced mouse of a sophisticated design. Only one thing on its mind : to click.`,
        icon: [11, 28],
        cost: 5e+24,
        order: 150.46,

        pool: 'mouse', tier: 11,

    });

    new G.Upgrade({
        name: `Plasmarble mouse`,
        id: 461,
        q: `A shifting blur in the corner of your eye, this mouse can trigger a flurry of clicks when grazed by even the slightest breeze.`,
        icon: [11, 30],
        cost: 5e+26,
        order: 150.461,

        pool: 'mouse', tier: 12,

    });

    new G.Upgrade({
        name: `Kitten marketeers`,
        id: 462,
        q: `no such thing as a saturated markit, sir`,
        icon: [18, 28],
        cost: 9e+38,
        order: 20000.462,

        pool: 'kitten', tier: 11, power: 0.15,

    });

    new G.Upgrade({
        name: `Kitten analysts`,
        id: 494,
        q: `based on purrent return-on-investment meowdels we should be able to affurd to pay our empawyees somewhere around next century, sir`,
        icon: [18, 30],
        cost: 9e+41,
        order: 20000.494,

        pool: 'kitten', tier: 12, power: 0.125,

    });


    new G.Upgrade({
        name: `Lucky day`,
        id: 52,
        desc: `Golden cookies appear <b>twice as often</b> and stay <b>twice as long</b>.`,
        q: `Oh hey, a four-leaf penny!`,
        icon: [27, 6],
        order: 5000.052,
        cost: 777777777,
        pool: '',
        effs: [['gcFreqM', 2, 1], ['gcLifeM', 2, 1]],
        unlockAt: {
            spe: v => {
                return G.gcClicksTotal >= 7;
            }
        },
    });

    new G.Upgrade({
        name: `Serendipity`,
        id: 53,
        desc: `Golden cookies appear <b>twice as often</b> and stay <b>twice as long</b>.`,
        q: `What joy! Seven horseshoes!`,
        icon: [27, 6],
        order: 5000.053,
        cost: 77777777777,
        pool: '',
        effs: [['gcFreqM', 2, 1], ['gcLifeM', 2, 1]],
        unlockAt: {
            spe: v => {
                return G.gcClicksTotal >= 27;
            }
        },
    });

    new G.Upgrade({
        name: `Get lucky`,
        id: 86,
        desc: `Golden cookie effects last <b>twice as long</b>.`,
        q: `You've been up all night, haven't you?`,
        icon: [27, 6],
        order: 5000.086,
        cost: 77777777777777,
        pool: '',
        effs: [['gcEffectsLifeM', 2, 1], ['gcWrathEffectsLifeM', 2, 1]],
        unlockAt: {
            spe: v => {
                return G.gcClicksTotal >= 77;
            }
        },
    });

    new G.Upgrade({
        name: `Heavenly chip secret`,
        id: 129,
        desc: `Unlocks <b>5%</b> of the potential of your prestige level.`,
        q: `Grants the knowledge of heavenly chips, and how to use them to make baking more efficient.<br>It's a secret to everyone.`,
        icon: [19, 7],
        order: 30000.129,
        cost: 11,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.resets > 0;
            }
        },
    });
    new G.Upgrade({
        name: `Heavenly cookie stand`,
        id: 130,
        desc: `Unlocks <b>25%</b> of the potential of your prestige level.`,
        q: `Don't forget to visit the heavenly lemonade stand afterwards. When afterlife gives you lemons...`,
        icon: [18, 7],
        order: 30000.13,
        cost: 1111,
        pool: '',
        unlockAt: {upgrade: `Heavenly chip secret`},
    });
    new G.Upgrade({
        name: `Heavenly bakery`,
        id: 131,
        desc: `Unlocks <b>50%</b> of the potential of your prestige level.`,
        q: `Also sells godly cakes and divine pastries. The pretzels aren't too bad either.`,
        icon: [17, 7],
        order: 30000.131,
        cost: 111111,
        pool: '',
        unlockAt: {upgrade: `Heavenly cookie stand`},
    });
    new G.Upgrade({
        name: `Heavenly confectionery`,
        id: 132,
        desc: `Unlocks <b>75%</b> of the potential of your prestige level.`,
        q: `They say angel bakers work there. They take angel lunch breaks and sometimes go on angel strikes.`,
        icon: [16, 7],
        order: 30000.132,
        cost: 11111111,
        pool: '',
        unlockAt: {upgrade: `Heavenly bakery`},
    });
    new G.Upgrade({
        name: `Heavenly key`,
        id: 133,
        desc: `Unlocks <b>100%</b> of the potential of your prestige level.`,
        q: `This is the key to the pearly (and tasty) gates of pastry heaven, granting you access to your entire stockpile of heavenly chips for baking purposes.<br>May you use them wisely.`,
        icon: [15, 7],
        order: 30000.133,
        cost: 1111111111,
        pool: '',
        unlockAt: {upgrade: `Heavenly confectionery`},
    });


    //research

    new G.Upgrade({
        name: `Bingo center/Research facility`,
        id: 64,
        desc: `Grandmas are <b>4 times</b> as efficient.<br><b>Unlocks research in the Special tab.</b>`,
        q: `Grandma-operated science lab and leisure club.<br>What could possibly keep those grandmothers in check?...<br>Bingo.`,
        icon: [11, 9],
        order: 14000.064,
        cost: 1000000000000000,
        pool: '',
        effs: [['building1M', 4, 1]],
        unlockAt: {achievs: ['Elder'], buildings: [1, 6]},
        func: e => {
            G.pingScreen('special');
        },
    });

    new G.Upgrade({
        name: `Specialized chocolate chips`,
        id: 65,
        desc: `Cookie production multiplier <b>+1%</b>.`,
        q: `Computer-designed chocolate chips. Computer chips, if you will.`,
        icon: [0, 9],
        order: 15000.065,
        cost: 1000000000000000,
        pool: 'science',
        effs: [['cpsM', 1.01, 1]],
        unlockAt: {upgrades: [`Bingo center/Research facility`]},
    });
    new G.Upgrade({
        name: `Designer cocoa beans`,
        id: 66,
        desc: `Cookie production multiplier <b>+2%</b>.`,
        q: `Now more aerodynamic than ever!`,
        icon: [1, 9],
        order: 15000.066,
        cost: 2000000000000000,
        pool: 'science',
        effs: [['cpsM', 1.02, 1]],
        unlockAt: {upgrades: [`Specialized chocolate chips`]},
    });
    new G.Upgrade({
        name: `Ritual rolling pins`,
        id: 67,
        desc: `Grandmas are <b>twice</b> as efficient.`,
        q: `The result of years of scientific research!`,
        icon: [2, 9],
        order: 15000.067,
        cost: 4000000000000000,
        pool: 'science',
        effs: [['building1M', 2, 1]],
        unlockAt: {upgrades: [`Designer cocoa beans`]},
    });
    new G.Upgrade({
        name: `Underworld ovens`,
        id: 68,
        desc: `Cookie production multiplier <b>+3%</b>.`,
        q: `Powered by science, of course!`,
        icon: [3, 9],
        order: 15000.068,
        cost: 8000000000000000,
        pool: 'science',
        effs: [['cpsM', 1.03, 1]],
        unlockAt: {upgrades: [`Ritual rolling pins`]},
    });
    new G.Upgrade({
        name: `One mind`,
        id: 69,
        desc: `Each grandma gains <b>+0.02 base CpS per grandma</b>.<div class="warning">Note : the grandmothers are growing restless. Do not encourage them.</div>`,
        q: `We are one. We are many.`,
        icon: [4, 9],
        order: 15000.069,
        cost: 16000000000000000,
        pool: 'science',
        effs: [['building1A', v => {
            return v + (1 + 0.02 * G.buildings[1].amount);
        }, 2]],
        unlockAt: {upgrades: [`Underworld ovens`]},
    });
    new G.Upgrade({
        name: `Exotic nuts`,
        id: 70,
        desc: `Cookie production multiplier <b>+4%</b>.`,
        q: `You'll go crazy over these!`,
        icon: [5, 9],
        order: 15000.07,
        cost: 32000000000000000,
        pool: 'science',
        effs: [['cpsM', 1.04, 1]],
        unlockAt: {upgrades: [`One mind`]},
    });
    new G.Upgrade({
        name: `Communal brainsweep`,
        id: 71,
        desc: `Each grandma gains <b>+0.02 base CpS per grandma</b>.<div class="warning">Note : proceeding any further in scientific research may have unexpected results. You have been warned.</div>`,
        q: `We fuse. We merge. We grow.`,
        icon: [6, 9],
        order: 15000.071,
        cost: 64000000000000000,
        pool: 'science',
        effs: [['building1A', v => {
            return v + (1 + 0.02 * G.buildings[1].amount);
        }, 2]],
        unlockAt: {upgrades: [`Exotic nuts`]},
    });
    new G.Upgrade({
        name: `Arcane sugar`,
        id: 72,
        desc: `Cookie production multiplier <b>+5%</b>.`,
        q: `Tastes like insects, ligaments, and molasses.`,
        icon: [7, 9],
        order: 15000.072,
        cost: 128000000000000000,
        pool: 'science',
        effs: [['cpsM', 1.05, 1]],
        unlockAt: {upgrades: [`Communal brainsweep`]},
    });
    new G.Upgrade({
        name: `Elder Pact`,
        id: 73,
        desc: `Each grandma gains <b>+0.05 base CpS per portal</b>.<div class="warning">Note : this is a bad idea.</div>`,
        q: `squirm crawl slither writhe<br>today we rise`,
        icon: [8, 9],
        order: 15000.073,
        cost: 256000000000000000,
        pool: 'science',
        effs: [['building1A', v => {
            return v + (1 + 0.05 * G.buildings[10].amount);
        }, 2]],
        unlockAt: {upgrades: [`Arcane sugar`]},
        func: (me) => {
            G.unlock('Elder Pledge');
        },
    });
    new G.Upgrade({
        name: `Sacrificial rolling pins`,
        id: 87,
        desc: `Elder pledges last <b>twice</b> as long.`,
        q: `These are mostly just for spreading the anti-aging cream.<br>(And accessorily, shortening the chicken's suffering.)`,
        icon: [2, 9],
        order: 15000.087,
        cost: 2888888888888,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.pledges >= 10;
            }
        },
    });

    new G.Upgrade({
        name: `Elder Pledge`,
        id: 74,
        desc: `Contains the wrath of the elders, at least for a while.`,
        q: `This is a simple ritual involving anti-aging cream, cookie batter mixed in the moonlight, and a live chicken.`,
        icon: [9, 9],
        order: 15000.074,
        costFunc: () => {
            return Math.pow(8, Math.min(G.pledges + 2, 14));
        },
        pool: 'toggle',
        func: (me) => {
            G.elderWrath = 0;
            G.collectWrinklers();
            G.pledges++;
            G.win('Elder nap');
            if (G.pledges >= 5) G.win('Elder slumber');
            G.pledgeT = Date.now() + G.getPledgeDuration() * 1000;
            G.unlock('Elder Covenant');
            me.owned = 0;
            G.toast(me.name, 'Grandmatriarchs appeased.', me.icon, true);
        },
    });
    G.getPledgeDuration = function () {
        return 60 * (G.Has('Sacrificial rolling pins') ? 60 : 30);
    };//in seconds

    new G.Upgrade({
        name: `Elder Covenant`,
        id: 84,
        desc: `Puts a permanent end to the elders' wrath, at the price of 5% of your CpS.`,
        q: `This is a complicated ritual involving silly, inconsequential trivialities such as cursed laxatives, century-old cacao, and an infant.<br>Don't question it.`,
        icon: [8, 9],
        order: 15000.084,
        cost: 66666666666666,
        pool: 'toggle',
        func: (me) => {
            G.elderWrath = 0;
            G.collectWrinklers();
            G.pledgeT = 0;
            G.win('Elder calm');
            G.toggleOff('Elder Covenant');
            G.toggleOn('Revoke Elder Covenant');
            G.toast(me.name, 'Grandmapocalypse ended.', me.icon, true);
        },
        effs: [['cpsM', 0.95, 1]],
    });

    new G.Upgrade({
        name: `Revoke Elder Covenant`,
        id: 85,
        desc: `You will get 5% of your CpS back, but the grandmatriarchs will return.`,
        q: `we<br>rise<br>again`,
        icon: [8, 9],
        order: 15000.085,
        cost: 6666666666,
        pool: 'toggle',
        func: (me) => {
            G.toggleOff('Revoke Elder Covenant');
            G.toggleOn('Elder Covenant');
            G.toast(me.name, 'Covenant has been revoked...', me.icon, true);
        },
    });


    //====== Heavenly upgrades ======
    new G.Upgrade({
        name: `Legacy`,
        id: 363,
        desc: `This is the first heavenly upgrade; it unlocks the <b>Heavenly chips</b> system.<line></line>Each time you ascend, the cookies you made in your past life are turned into <b>heavenly chips</b> and <b>prestige</b>.<line></line><b>Heavenly chips</b> can be spent on a variety of permanent transcendental upgrades.<line></line>Your <b>prestige level</b> also gives you a permanent <b>+1% CpS</b> per level.`,
        q: `We've all been waiting for you.`,
        icon: [21, 6],
        order: 363,
        cost: 1,
        pool: 'prestige',
    });

    new G.Upgrade({
        name: `Heavenly cookies`,
        id: 395,
        desc: `Cookie production multiplier <b>+10% permanently</b>.`,
        q: `Baked with heavenly chips. An otherwordly flavor that transcends time and space.`,
        icon: [25, 12],
        order: 395,
        cost: 3,
        pool: 'prestige',
        effs: [['cpsM', 1.1, 1]],
    });

    new G.Upgrade({
        name: `Tin of butter cookies`,
        id: 326,
        desc: `Contains an assortment of rich butter cookies.`,
        q: `Five varieties of danish cookies.<br>Complete with little paper cups.`,
        icon: [21, 9],
        order: 326,
        cost: 25,
        pool: 'prestige',
    });

    new G.Upgrade({
        name: `Tin of british tea biscuits`,
        id: 253,
        desc: `Contains an assortment of fancy biscuits.`,
        q: `Every time is tea time.`,
        icon: [21, 8],
        order: 253,
        cost: 25,
        pool: 'prestige',
    });

    new G.Upgrade({
        name: `Box of brand biscuits`,
        id: 255,
        desc: `Contains an assortment of popular biscuits.`,
        q: `They're brand new!`,
        icon: [20, 9],
        order: 255,
        cost: 25,
        pool: 'prestige',
    });

    new G.Upgrade({
        name: `Box of macarons`,
        id: 254,
        desc: `Contains an assortment of macarons.`,
        q: `Multicolored delicacies filled with various kinds of jam.<br>Not to be confused with macaroons, macaroni, macarena or any of that nonsense.`,
        icon: [20, 8],
        order: 254,
        cost: 25,
        pool: 'prestige',
    });

    new G.Upgrade({
        name: `Starter kit`,
        id: 288,
        desc: `You start with <b>10 cursors</b>.`,
        q: `This can come in handy.`,
        icon: [0, 14],
        order: 288,
        cost: 50,
        pool: 'prestige',
        effs: [['building0Free', 10]],
    });

    new G.Upgrade({
        name: `Halo gloves`,
        id: 290,
        desc: `Clicks are <b>10% more powerful</b>.`,
        q: `Smite that cookie.`,
        icon: [22, 7],
        order: 290,
        cost: 55555,
        pool: 'prestige',
        effs: [['clickM', 1.1, 1]],
    });

    new G.Upgrade({
        name: `Starter kitchen`,
        id: 289,
        desc: `You start with <b>5 grandmas</b>.`,
        q: `Where did these come from?`,
        icon: [1, 14],
        order: 289,
        cost: 5000,
        pool: 'prestige',
        effs: [['building1Free', 5]],
    });

    new G.Upgrade({
        name: `Unholy bait`,
        id: 292,
        desc: `Wrinklers appear <b>5 times</b> as fast.`,
        q: `No wrinkler can resist the scent of worm biscuits.`,
        icon: [15, 12],
        order: 292,
        cost: 44444,
        pool: 'prestige',
    });

    new G.Upgrade({
        name: `Elder spice`,
        id: 364,
        desc: `You can attract <b>2 more wrinklers</b>.`,
        q: `The cookie your cookie could smell like.`,
        icon: [19, 8],
        order: 364,
        cost: 444444,
        pool: 'prestige',
    });

    new G.Upgrade({
        name: `Sacrilegious corruption`,
        id: 293,
        desc: `Wrinklers regurgitate <b>5%</b> more cookies.`,
        q: `Unique in the animal kingdom, the wrinkler digestive tract is able to withstand an incredible degree of dilation - provided you prod them appropriately.`,
        icon: [19, 8],
        order: 293,
        cost: 444444,
        pool: 'prestige',
    });

    new G.Upgrade({
        name: `Wrinkly cookies`,
        id: 396,
        desc: `Cookie production multiplier <b>+10% permanently</b>.`,
        q: `The result of regular cookies left to age out for countless eons in a place where time and space are meaningless.`,
        icon: [26, 12],
        order: 396,
        cost: 6666666,
        pool: 'prestige',
        effs: [['cpsM', 1.1, 1]],
    });

    new G.Upgrade({
        name: `Persistent memory`,
        id: 141,
        desc: `Subsequent research will be <b>10 times</b> as fast.`,
        q: `It's all making sense!<br>Again!`,
        icon: [9, 2],
        order: 141,
        cost: 500,
        pool: 'prestige',
    });

    new G.Upgrade({
        name: `Heavenly luck`,
        id: 282,
        desc: `Golden cookies appear <b>5%</b> more often.`,
        q: `Someone up there likes you.`,
        icon: [22, 6],
        order: 282,
        cost: 77,
        pool: 'prestige',
        effs: [['gcFreqM', 1.05, 1]],
    });

    new G.Upgrade({
        name: `Lasting fortune`,
        id: 283,
        desc: `Golden cookies effects last <b>10%</b> longer.`,
        q: `This isn't your average everyday luck. This is... advanced luck.`,
        icon: [23, 6],
        order: 283,
        cost: 777,
        pool: 'prestige',
        effs: ['gcEffectsLifeM', 1.1, 1],
    });

    new G.Upgrade({
        name: `Decisive fate`,
        id: 284,
        desc: `Golden cookies stay <b>5%</b> longer.`,
        q: `Life just got a bit more intense.`,
        icon: [10, 14],
        order: 284,
        cost: 7777,
        pool: 'prestige',
        effs: ['gcLifeM', 1.05, 1],
    });

    new G.Upgrade({
        name: `Divine sales`,
        id: 286,
        desc: `Upgrades are <b>1% cheaper</b>.`,
        q: `Everything must go!`,
        icon: [18, 7],
        order: 286,
        cost: 99999,
        pool: 'prestige',
        effs: ['upgradeCostM', 0.99, 1],
    });

    new G.Upgrade({
        name: `Divine discount`,
        id: 285,
        desc: `Buildings are <b>1% cheaper</b>.`,
        q: `Someone special deserves a special price.`,
        icon: [21, 7],
        order: 285,
        cost: 99999,
        pool: 'prestige',
        effs: ['buildingCostM', 0.99, 1],
    });

    new G.Upgrade({
        name: `Divine bakeries`,
        id: 287,
        desc: `Cookie upgrades are <b>5 times cheaper</b>.`,
        q: `They sure know what they're doing.`,
        icon: [17, 7],
        order: 287,
        cost: 399999,
        pool: 'prestige',
    });

    new G.Upgrade({
        name: `Permanent upgrade slot I`,
        id: 264,
        desc: ``,
        q: ``,
        icon: [0, 10],
        order: 264,
        cost: 100,
        pool: 'prestige',
    });

    new G.Upgrade({
        name: `Permanent upgrade slot II`,
        id: 265,
        desc: ``,
        q: ``,
        icon: [1, 10],
        order: 265,
        cost: 2000,
        pool: 'prestige',
    });

    new G.Upgrade({
        name: `Permanent upgrade slot III`,
        id: 266,
        desc: ``,
        q: ``,
        icon: [2, 10],
        order: 266,
        cost: 30000,
        pool: 'prestige',
    });

    new G.Upgrade({
        name: `Permanent upgrade slot IV`,
        id: 267,
        desc: ``,
        q: ``,
        icon: [3, 10],
        order: 267,
        cost: 400000,
        pool: 'prestige',
    });

    new G.Upgrade({
        name: `Permanent upgrade slot V`,
        id: 268,
        desc: ``,
        q: ``,
        icon: [4, 10],
        order: 268,
        cost: 5000000,
        pool: 'prestige',
    });

    G.permanentUpgrades = [0, 1, 2, 3, 32];

    var slots = ['Permanent upgrade slot I', 'Permanent upgrade slot II', 'Permanent upgrade slot III', 'Permanent upgrade slot IV', 'Permanent upgrade slot V'];
    for (let i = 0; i < slots.length; i++) {
        let slot = G.upgradesBN[slots[i]];
        slot.descFunc = function () {
            var str = ``;
            str += `You can assign any upgrade you've purchased last playthrough into this slot.</p><p>Doing so will make its effects <b>permanent across all playthroughs</b>.</p><p>You can reassign this slot anytime you ascend.`;
            if (G.permanentUpgrades[i] != -1) {
                let upgrade = G.upgradesBID[G.permanentUpgrades[i]];
                let icon = upgrade.iconFunc ? upgrade.iconFunc() : upgrade.icon;
                str = `<div style="text-align:center;">Current : <div class="icon" style="vertical-align:middle;display:inline-block;background-position:` + (-icon[0] * 48) + `px ` + (-icon[1] * 48) + `px;transform:scale(0.5);margin:-16px;"></div> <b>` + upgrade.name + `</b></div><line></line>` + str;
            }

            return str;
        };

        slot.iconFunc = function () {
            if (G.permanentUpgrades[i] == -1) return [i, 10];
            return G.upgradesBID[G.permanentUpgrades[i]].icon;
        };

        let slotAssignPopup = function (id) {
            PlaySound('snd/tick.mp3');

            var list = [];
            for (let ii = 0; ii < G.upgrades.length; ii++) {
                let me = G.upgrades[ii];
                if (me.owned && me.unlocked && noPerm.indexOf(me.name) == -1 && (me.pool == '' || me.pool == 'cookie') && G.permanentUpgrades.indexOf(me.id == -1)) list.push(me);
            }
            list.sort((a, b) => a.order - b.order);

            var str = '';
            for (var ii = 0; ii < list.length; ii++) {
                let me = list[ii];
                let icon = me.iconFunc ? me.iconFunc() : me.icon;
                str += G.button({
                    text: '-',
                    classes: 'upgradeIcon icon',
                    style: `background-position:${-icon[0] * 48}px ${-icon[1] * 48}px;display:inline-block;color:transparent;`,
                    onclick: function (e, el) {
                        //me.showInfo();
                        G.permanentUpgrades[i] = me.id;
                        l(`prestigeUpgrade-${slot.id}`).style.backgroundPosition = `${-icon[0] * 48}px ${-icon[1] * 48}px`;
                        G.closePopup();
                    }
                });
            }

            G.popup({
                text: `
				<h3>Pick an upgrade to make permanent</h3>
				<div style="text-align:center;text-shadow:none;">
					${str}
				</div>
			`, close: `Cancel`
            });
        }

        slot.preDescFunc = function () {
            let me = this;
            if (!me.owned || G.onAscend != 1) return ``;
            return `
			` + G.button({
                text: `Assign upgrade`,
                classes: 'fancy magicButton bumpButton',
                style: 'padding:6px 16px;margin:2px 16px 6px 16px;display:block;font-size:14px;',
                onclick: function () {
                    slotAssignPopup(i);
                }
            }) + `
			<line></line>`;
        }
    }

    let noPerm = [`Bingo center/Research facility`, `Heavenly chip secret`, `Heavenly cookie stand`, `Heavenly bakery`, `Heavenly confectionery`, `Heavenly key`];


    //====== Achievements ======
    new G.Achiev({
        name: `Wake and bake`,
        id: 0,
        q: ``,
        icon: [0, 5],
        order: 100,

        pool: 'bank', tier: 0,

    });

    new G.Achiev({
        name: `Making some dough`,
        id: 1,
        q: ``,
        icon: [1, 5],
        order: 100.01,

        pool: 'bank', tier: 1,

    });

    new G.Achiev({
        name: `So baked right now`,
        id: 2,
        q: ``,
        icon: [2, 5],
        order: 100.02,

        pool: 'bank', tier: 2,

    });

    new G.Achiev({
        name: `Fledgling bakery`,
        id: 3,
        q: ``,
        icon: [3, 5],
        order: 100.03,

        pool: 'bank', tier: 3,

    });

    new G.Achiev({
        name: `Affluent bakery`,
        id: 4,
        q: ``,
        icon: [4, 5],
        order: 100.04,

        pool: 'bank', tier: 4,

    });

    new G.Achiev({
        name: `World-famous bakery`,
        id: 5,
        q: ``,
        icon: [5, 5],
        order: 100.05,

        pool: 'bank', tier: 5,

    });

    new G.Achiev({
        name: `Cosmic bakery`,
        id: 6,
        q: ``,
        icon: [6, 5],
        order: 100.06,

        pool: 'bank', tier: 6,

    });

    new G.Achiev({
        name: `Galactic bakery`,
        id: 7,
        q: ``,
        icon: [7, 5],
        order: 100.07,

        pool: 'bank', tier: 7,

    });

    new G.Achiev({
        name: `Universal bakery`,
        id: 8,
        q: ``,
        icon: [8, 5],
        order: 100.08,

        pool: 'bank', tier: 8,

    });

    new G.Achiev({
        name: `Timeless bakery`,
        id: 9,
        q: ``,
        icon: [9, 5],
        order: 100.09,

        pool: 'bank', tier: 9,

    });

    new G.Achiev({
        name: `Infinite bakery`,
        id: 10,
        q: ``,
        icon: [10, 5],
        order: 100.1,

        pool: 'bank', tier: 10,

    });

    new G.Achiev({
        name: `Immortal bakery`,
        id: 11,
        q: ``,
        icon: [11, 5],
        order: 100.11,

        pool: 'bank', tier: 11,

    });

    new G.Achiev({
        name: `Don't stop me now`,
        id: 12,
        q: ``,
        icon: [18, 5],
        order: 100.12,

        pool: 'bank', tier: 12,

    });

    new G.Achiev({
        name: `You can stop now`,
        id: 13,
        q: ``,
        icon: [19, 5],
        order: 100.13,

        pool: 'bank', tier: 13,

    });

    new G.Achiev({
        name: `Cookies all the way down`,
        id: 14,
        q: ``,
        icon: [20, 5],
        order: 100.14,

        pool: 'bank', tier: 14,

    });

    new G.Achiev({
        name: `Overdose`,
        id: 15,
        q: ``,
        icon: [21, 5],
        order: 100.15,

        pool: 'bank', tier: 15,

    });

    new G.Achiev({
        name: `How?`,
        id: 223,
        q: ``,
        icon: [22, 5],
        order: 100.16,

        pool: 'bank', tier: 16,

    });

    new G.Achiev({
        name: `The land of milk and cookies`,
        id: 224,
        q: ``,
        icon: [23, 5],
        order: 100.17,

        pool: 'bank', tier: 17,

    });

    new G.Achiev({
        name: `He who controls the cookies controls the universe`,
        id: 225,
        q: `The milk must flow!`,
        icon: [24, 5],
        order: 100.18,

        pool: 'bank', tier: 18,

    });

    new G.Achiev({
        name: `Tonight on Hoarders`,
        id: 226,
        q: ``,
        icon: [25, 5],
        order: 100.19,

        pool: 'bank', tier: 19,

    });

    new G.Achiev({
        name: `Are you gonna eat all that?`,
        id: 227,
        q: ``,
        icon: [26, 5],
        order: 100.2,

        pool: 'bank', tier: 20,

    });

    new G.Achiev({
        name: `We're gonna need a bigger bakery`,
        id: 228,
        q: ``,
        icon: [27, 5],
        order: 100.21,

        pool: 'bank', tier: 21,

    });

    new G.Achiev({
        name: `In the mouth of madness`,
        id: 229,
        q: `A cookie is just what we tell each other it is.`,
        icon: [28, 5],
        order: 100.22,

        pool: 'bank', tier: 22,

    });

    new G.Achiev({
        name: `Brought to you by the letter <div style="display:inline-block;background:url(img/cookicon.png);width:16px;height:16px;"></div>`,
        id: 230,
        q: ``,
        icon: [29, 5],
        order: 100.23,

        pool: 'bank', tier: 23,

    });

    new G.Achiev({
        name: `The dreams in which I'm baking are the best I've ever had`,
        id: 279,
        q: ``,
        icon: [21, 2],
        order: 100.24,

        pool: 'bank', tier: 24,

    });

    new G.Achiev({
        name: `Set for life`,
        id: 280,
        q: ``,
        icon: [22, 2],
        order: 100.25,

        pool: 'bank', tier: 25,

    });

    new G.Achiev({
        name: `Panic! at Nabisco`,
        id: 372,
        q: ``,
        icon: [23, 2],
        order: 100.26,

        pool: 'bank', tier: 26,

    });

    new G.Achiev({
        name: `Bursting at the seams`,
        id: 373,
        q: ``,
        icon: [24, 2],
        order: 100.27,

        pool: 'bank', tier: 27,

    });

    new G.Achiev({
        name: `Just about full`,
        id: 374,
        q: ``,
        icon: [25, 2],
        order: 100.28,

        pool: 'bank', tier: 28,

    });

    new G.Achiev({
        name: `Hungry for more`,
        id: 375,
        q: ``,
        icon: [26, 2],
        order: 100.29,

        pool: 'bank', tier: 29,

    });

    new G.Achiev({
        name: `Feed me, Orteil`,
        id: 390,
        q: ``,
        icon: [27, 2],
        order: 100.3,

        pool: 'bank', tier: 30,

    });

    new G.Achiev({
        name: `And then what?`,
        id: 391,
        q: ``,
        icon: [28, 2],
        order: 100.31,

        pool: 'bank', tier: 31,

    });

    new G.Achiev({
        name: `I think it's safe to say you've got it made`,
        id: 429,
        q: ``,
        icon: [29, 2],
        order: 100.32,

        pool: 'bank', tier: 32,

    });

    new G.Achiev({
        name: `Casual baking`,
        id: 16,
        q: ``,
        icon: [0, 5],
        order: 200,

        pool: 'cps', tier: 0,

    });

    new G.Achiev({
        name: `Hardcore baking`,
        id: 17,
        q: ``,
        icon: [1, 5],
        order: 200.01,

        pool: 'cps', tier: 1,

    });

    new G.Achiev({
        name: `Steady tasty stream`,
        id: 18,
        q: ``,
        icon: [2, 5],
        order: 200.02,

        pool: 'cps', tier: 2,

    });

    new G.Achiev({
        name: `Cookie monster`,
        id: 19,
        q: ``,
        icon: [3, 5],
        order: 200.03,

        pool: 'cps', tier: 3,

    });

    new G.Achiev({
        name: `Mass producer`,
        id: 20,
        q: ``,
        icon: [4, 5],
        order: 200.04,

        pool: 'cps', tier: 4,

    });

    new G.Achiev({
        name: `Cookie vortex`,
        id: 21,
        q: ``,
        icon: [5, 5],
        order: 200.05,

        pool: 'cps', tier: 5,

    });

    new G.Achiev({
        name: `Cookie pulsar`,
        id: 22,
        q: ``,
        icon: [6, 5],
        order: 200.06,

        pool: 'cps', tier: 6,

    });

    new G.Achiev({
        name: `Cookie quasar`,
        id: 23,
        q: ``,
        icon: [7, 5],
        order: 200.07,

        pool: 'cps', tier: 7,

    });

    new G.Achiev({
        name: `Oh hey, you're still here`,
        id: 24,
        q: ``,
        icon: [8, 5],
        order: 200.08,

        pool: 'cps', tier: 8,

    });

    new G.Achiev({
        name: `Let's never bake again`,
        id: 25,
        q: ``,
        icon: [9, 5],
        order: 200.09,

        pool: 'cps', tier: 9,

    });

    new G.Achiev({
        name: `A world filled with cookies`,
        id: 231,
        q: ``,
        icon: [10, 5],
        order: 200.1,

        pool: 'cps', tier: 10,

    });

    new G.Achiev({
        name: `When this baby hits 36 quadrillion cookies per hour`,
        id: 232,
        q: ``,
        icon: [11, 5],
        order: 200.11,

        pool: 'cps', tier: 11,

    });

    new G.Achiev({
        name: `Fast and delicious`,
        id: 233,
        q: ``,
        icon: [18, 5],
        order: 200.12,

        pool: 'cps', tier: 12,

    });

    new G.Achiev({
        name: `Cookiehertz : a really, really tasty hertz`,
        id: 234,
        q: `Tastier than a hertz donut, anyway.`,
        icon: [19, 5],
        order: 200.13,

        pool: 'cps', tier: 13,

    });

    new G.Achiev({
        name: `Woops, you solved world hunger`,
        id: 235,
        q: ``,
        icon: [20, 5],
        order: 200.14,

        pool: 'cps', tier: 14,

    });

    new G.Achiev({
        name: `Turbopuns`,
        id: 236,
        q: `Mother Nature will be like "slowwwww dowwwwwn".`,
        icon: [21, 5],
        order: 200.15,

        pool: 'cps', tier: 15,

    });

    new G.Achiev({
        name: `Faster menner`,
        id: 237,
        q: ``,
        icon: [22, 5],
        order: 200.16,

        pool: 'cps', tier: 16,

    });

    new G.Achiev({
        name: `And yet you're still hungry`,
        id: 238,
        q: ``,
        icon: [23, 5],
        order: 200.17,

        pool: 'cps', tier: 17,

    });

    new G.Achiev({
        name: `The Abakening`,
        id: 239,
        q: ``,
        icon: [24, 5],
        order: 200.18,

        pool: 'cps', tier: 18,

    });

    new G.Achiev({
        name: `There's really no hard limit to how long these achievement names can be and to be quite honest I'm rather curious to see how far we can go.<br>Adolphus W. Green (1844–1917) started as the Principal of the Groton School in 1864. By 1865, he became second assistant librarian at the New York Mercantile Library; from 1867 to 1869, he was promoted to full librarian. From 1869 to 1873, he worked for Evarts, Southmayd & Choate, a law firm co-founded by William M. Evarts, Charles Ferdinand Southmayd and Joseph Hodges Choate. He was admitted to the New York State Bar Association in 1873.<br>Anyway, how's your day been?`,
        id: 240,
        q: ``,
        icon: [25, 5],
        order: 200.19,

        pool: 'cps', tier: 19,

    });

    new G.Achiev({
        name: `Fast`,
        id: 241,
        q: `Wow!`,
        icon: [26, 5],
        order: 200.2,

        pool: 'cps', tier: 20,

    });

    new G.Achiev({
        name: `Knead for speed`,
        id: 274,
        q: `How did we not make that one yet?`,
        icon: [27, 5],
        order: 200.21,

        pool: 'cps', tier: 21,

    });

    new G.Achiev({
        name: `Well the cookies start coming and they don't stop coming`,
        id: 275,
        q: `Didn't make sense not to click for fun.`,
        icon: [28, 5],
        order: 200.22,

        pool: 'cps', tier: 22,

    });

    new G.Achiev({
        name: `I don't know if you've noticed but all these icons are very slightly off-center`,
        id: 276,
        q: ``,
        icon: [29, 5],
        order: 200.23,

        pool: 'cps', tier: 23,

    });

    new G.Achiev({
        name: `The proof of the cookie is in the baking`,
        id: 277,
        q: `How can you have any cookies if you don't bake your dough?`,
        icon: [21, 2],
        order: 200.24,

        pool: 'cps', tier: 24,

    });

    new G.Achiev({
        name: `If it's worth doing, it's worth overdoing`,
        id: 278,
        q: ``,
        icon: [22, 2],
        order: 200.25,

        pool: 'cps', tier: 25,

    });

    new G.Achiev({
        name: `Running with scissors`,
        id: 368,
        q: ``,
        icon: [23, 2],
        order: 200.26,

        pool: 'cps', tier: 26,

    });

    new G.Achiev({
        name: `Rarefied air`,
        id: 369,
        q: ``,
        icon: [24, 2],
        order: 200.27,

        pool: 'cps', tier: 27,

    });

    new G.Achiev({
        name: `Push it to the limit`,
        id: 370,
        q: ``,
        icon: [25, 2],
        order: 200.28,

        pool: 'cps', tier: 28,

    });

    new G.Achiev({
        name: `Green cookies sleep furiously`,
        id: 371,
        q: ``,
        icon: [26, 2],
        order: 200.29,

        pool: 'cps', tier: 29,

    });

    new G.Achiev({
        name: `Leisurely pace`,
        id: 388,
        q: ``,
        icon: [27, 2],
        order: 200.3,

        pool: 'cps', tier: 30,

    });

    new G.Achiev({
        name: `Hypersonic`,
        id: 389,
        q: ``,
        icon: [28, 2],
        order: 200.31,

        pool: 'cps', tier: 31,

    });

    new G.Achiev({
        name: `Gotta go fast`,
        id: 428,
        q: ``,
        icon: [29, 2],
        order: 200.32,

        pool: 'cps', tier: 32,

    });


    new G.Achiev({
        name: `Grandma's cookies`,
        id: 40,
        q: ``,
        icon: [1, 0],
        order: 1100.04,

        pool: 'building', tie: 1, tier: 1,

    });

    new G.Achiev({
        name: `Sloppy kisses`,
        id: 41,
        q: ``,
        icon: [1, 1],
        order: 1100.041,

        pool: 'building', tie: 1, tier: 2,

    });

    new G.Achiev({
        name: `Retirement home`,
        id: 42,
        q: ``,
        icon: [1, 2],
        order: 1100.042,

        pool: 'building', tie: 1, tier: 3,

    });

    new G.Achiev({
        name: `My first farm`,
        id: 43,
        q: ``,
        icon: [2, 0],
        order: 1200.043,

        pool: 'building', tie: 2, tier: 1,

    });

    new G.Achiev({
        name: `Reap what you sow`,
        id: 44,
        q: ``,
        icon: [2, 1],
        order: 1200.044,

        pool: 'building', tie: 2, tier: 2,

    });

    new G.Achiev({
        name: `Farm ill`,
        id: 45,
        q: ``,
        icon: [2, 2],
        order: 1200.045,

        pool: 'building', tie: 2, tier: 3,

    });

    new G.Achiev({
        name: `Production chain`,
        id: 46,
        q: ``,
        icon: [4, 0],
        order: 1400.046,

        pool: 'building', tie: 4, tier: 1,

    });

    new G.Achiev({
        name: `Industrial revolution`,
        id: 47,
        q: ``,
        icon: [4, 1],
        order: 1400.047,

        pool: 'building', tie: 4, tier: 2,

    });

    new G.Achiev({
        name: `Global warming`,
        id: 48,
        q: ``,
        icon: [4, 2],
        order: 1400.048,

        pool: 'building', tie: 4, tier: 3,

    });

    new G.Achiev({
        name: `You know the drill`,
        id: 49,
        q: ``,
        icon: [3, 0],
        order: 1300.049,

        pool: 'building', tie: 3, tier: 1,

    });

    new G.Achiev({
        name: `Excavation site`,
        id: 50,
        q: ``,
        icon: [3, 1],
        order: 1300.05,

        pool: 'building', tie: 3, tier: 2,

    });

    new G.Achiev({
        name: `Hollow the planet`,
        id: 51,
        q: ``,
        icon: [3, 2],
        order: 1300.051,

        pool: 'building', tie: 3, tier: 3,

    });

    new G.Achiev({
        name: `Expedition`,
        id: 52,
        q: ``,
        icon: [5, 0],
        order: 1500.052,

        pool: 'building', tie: 8, tier: 1,

    });

    new G.Achiev({
        name: `Galactic highway`,
        id: 53,
        q: ``,
        icon: [5, 1],
        order: 1500.053,

        pool: 'building', tie: 8, tier: 2,

    });

    new G.Achiev({
        name: `Far far away`,
        id: 54,
        q: ``,
        icon: [5, 2],
        order: 1500.054,

        pool: 'building', tie: 8, tier: 3,

    });

    new G.Achiev({
        name: `Transmutation`,
        id: 55,
        q: ``,
        icon: [6, 0],
        order: 1600.055,

        pool: 'building', tie: 9, tier: 1,

    });

    new G.Achiev({
        name: `Transmogrification`,
        id: 56,
        q: ``,
        icon: [6, 1],
        order: 1600.056,

        pool: 'building', tie: 9, tier: 2,

    });

    new G.Achiev({
        name: `Gold member`,
        id: 57,
        q: ``,
        icon: [6, 2],
        order: 1600.057,

        pool: 'building', tie: 9, tier: 3,

    });

    new G.Achiev({
        name: `A whole new world`,
        id: 58,
        q: ``,
        icon: [7, 0],
        order: 1700.058,

        pool: 'building', tie: 10, tier: 1,

    });

    new G.Achiev({
        name: `Now you're thinking`,
        id: 59,
        q: ``,
        icon: [7, 1],
        order: 1700.059,

        pool: 'building', tie: 10, tier: 2,

    });

    new G.Achiev({
        name: `Dimensional shift`,
        id: 60,
        q: ``,
        icon: [7, 2],
        order: 1700.06,

        pool: 'building', tie: 10, tier: 3,

    });

    new G.Achiev({
        name: `Time warp`,
        id: 61,
        q: ``,
        icon: [8, 0],
        order: 1800.061,

        pool: 'building', tie: 11, tier: 1,

    });

    new G.Achiev({
        name: `Alternate timeline`,
        id: 62,
        q: ``,
        icon: [8, 1],
        order: 1800.062,

        pool: 'building', tie: 11, tier: 2,

    });

    new G.Achiev({
        name: `Rewriting history`,
        id: 63,
        q: ``,
        icon: [8, 2],
        order: 1800.063,

        pool: 'building', tie: 11, tier: 3,

    });

    new G.Achiev({
        name: `Antibatter`,
        id: 87,
        q: ``,
        icon: [13, 0],
        order: 1900.087,

        pool: 'building', tie: 12, tier: 1,

    });

    new G.Achiev({
        name: `Quirky quarks`,
        id: 88,
        q: ``,
        icon: [13, 1],
        order: 1900.088,

        pool: 'building', tie: 12, tier: 2,

    });

    new G.Achiev({
        name: `It does matter!`,
        id: 89,
        q: ``,
        icon: [13, 2],
        order: 1900.089,

        pool: 'building', tie: 12, tier: 3,

    });

    new G.Achiev({
        name: `Friend of the ancients`,
        id: 101,
        q: ``,
        icon: [1, 13],
        order: 1100.101,

        pool: 'building', tie: 1, tier: 4,

    });

    new G.Achiev({
        name: `Ruler of the ancients`,
        id: 102,
        q: ``,
        icon: [1, 14],
        order: 1100.102,

        pool: 'building', tie: 1, tier: 5,

    });

    new G.Achiev({
        name: `Perfected agriculture`,
        id: 115,
        q: ``,
        icon: [2, 13],
        order: 1200.115,

        pool: 'building', tie: 2, tier: 4,

    });

    new G.Achiev({
        name: `Ultimate automation`,
        id: 116,
        q: ``,
        icon: [4, 13],
        order: 1400.116,

        pool: 'building', tie: 4, tier: 4,

    });

    new G.Achiev({
        name: `Can you dig it`,
        id: 117,
        q: ``,
        icon: [3, 13],
        order: 1300.117,

        pool: 'building', tie: 3, tier: 4,

    });

    new G.Achiev({
        name: `Type II civilization`,
        id: 118,
        q: ``,
        icon: [5, 13],
        order: 1500.118,

        pool: 'building', tie: 8, tier: 4,

    });

    new G.Achiev({
        name: `Gild wars`,
        id: 119,
        q: ``,
        icon: [6, 13],
        order: 1600.119,

        pool: 'building', tie: 9, tier: 4,

    });

    new G.Achiev({
        name: `Brain-split`,
        id: 120,
        q: ``,
        icon: [7, 13],
        order: 1700.12,

        pool: 'building', tie: 10, tier: 4,

    });

    new G.Achiev({
        name: `Time duke`,
        id: 121,
        q: ``,
        icon: [8, 13],
        order: 1800.121,

        pool: 'building', tie: 11, tier: 4,

    });

    new G.Achiev({
        name: `Molecular maestro`,
        id: 122,
        q: ``,
        icon: [13, 13],
        order: 1900.122,

        pool: 'building', tie: 12, tier: 4,

    });

    new G.Achiev({
        name: `Lone photon`,
        id: 123,
        q: ``,
        icon: [14, 0],
        order: 2000.123,

        pool: 'building', tie: 13, tier: 1,

    });

    new G.Achiev({
        name: `Dazzling glimmer`,
        id: 124,
        q: ``,
        icon: [14, 1],
        order: 2000.124,

        pool: 'building', tie: 13, tier: 2,

    });

    new G.Achiev({
        name: `Blinding flash`,
        id: 125,
        q: ``,
        icon: [14, 2],
        order: 2000.125,

        pool: 'building', tie: 13, tier: 3,

    });

    new G.Achiev({
        name: `Unending glow`,
        id: 126,
        q: ``,
        icon: [14, 13],
        order: 2000.126,

        pool: 'building', tie: 13, tier: 4,

    });

    new G.Achiev({
        name: `The old never bothered me anyway`,
        id: 149,
        q: ``,
        icon: [1, 15],
        order: 1100.149,

        pool: 'building', tie: 1, tier: 6,

    });

    new G.Achiev({
        name: `Homegrown`,
        id: 150,
        q: ``,
        icon: [2, 14],
        order: 1200.15,

        pool: 'building', tie: 2, tier: 5,

    });

    new G.Achiev({
        name: `Technocracy`,
        id: 151,
        q: ``,
        icon: [4, 14],
        order: 1400.151,

        pool: 'building', tie: 4, tier: 5,

    });

    new G.Achiev({
        name: `The center of the Earth`,
        id: 152,
        q: ``,
        icon: [3, 14],
        order: 1300.152,

        pool: 'building', tie: 3, tier: 5,

    });

    new G.Achiev({
        name: `We come in peace`,
        id: 153,
        q: ``,
        icon: [5, 14],
        order: 1500.153,

        pool: 'building', tie: 8, tier: 5,

    });

    new G.Achiev({
        name: `The secrets of the universe`,
        id: 154,
        q: ``,
        icon: [6, 14],
        order: 1600.154,

        pool: 'building', tie: 9, tier: 5,

    });

    new G.Achiev({
        name: `Realm of the Mad God`,
        id: 155,
        q: ``,
        icon: [7, 14],
        order: 1700.155,

        pool: 'building', tie: 10, tier: 5,

    });

    new G.Achiev({
        name: `Forever and ever`,
        id: 156,
        q: ``,
        icon: [8, 14],
        order: 1800.156,

        pool: 'building', tie: 11, tier: 5,

    });

    new G.Achiev({
        name: `Walk the planck`,
        id: 157,
        q: ``,
        icon: [13, 14],
        order: 1900.157,

        pool: 'building', tie: 12, tier: 5,

    });

    new G.Achiev({
        name: `Rise and shine`,
        id: 158,
        q: ``,
        icon: [14, 14],
        order: 2000.158,

        pool: 'building', tie: 13, tier: 5,

    });

    new G.Achiev({
        name: `Pretty penny`,
        id: 171,
        q: ``,
        icon: [15, 0],
        order: 1425.171,

        pool: 'building', tie: 5, tier: 1,

    });

    new G.Achiev({
        name: `Fit the bill`,
        id: 172,
        q: ``,
        icon: [15, 1],
        order: 1425.172,

        pool: 'building', tie: 5, tier: 2,

    });

    new G.Achiev({
        name: `A loan in the dark`,
        id: 173,
        q: ``,
        icon: [15, 2],
        order: 1425.173,

        pool: 'building', tie: 5, tier: 3,

    });

    new G.Achiev({
        name: `Need for greed`,
        id: 174,
        q: ``,
        icon: [15, 13],
        order: 1425.174,

        pool: 'building', tie: 5, tier: 4,

    });

    new G.Achiev({
        name: `It's the economy, stupid`,
        id: 175,
        q: ``,
        icon: [15, 14],
        order: 1425.175,

        pool: 'building', tie: 5, tier: 5,

    });

    new G.Achiev({
        name: `Your time to shrine`,
        id: 176,
        q: ``,
        icon: [16, 0],
        order: 1450.176,

        pool: 'building', tie: 6, tier: 1,

    });

    new G.Achiev({
        name: `Shady sect`,
        id: 177,
        q: ``,
        icon: [16, 1],
        order: 1450.177,

        pool: 'building', tie: 6, tier: 2,

    });

    new G.Achiev({
        name: `New-age cult`,
        id: 178,
        q: ``,
        icon: [16, 2],
        order: 1450.178,

        pool: 'building', tie: 6, tier: 3,

    });

    new G.Achiev({
        name: `Organized religion`,
        id: 179,
        q: ``,
        icon: [16, 13],
        order: 1450.179,

        pool: 'building', tie: 6, tier: 4,

    });

    new G.Achiev({
        name: `Fanaticism`,
        id: 180,
        q: ``,
        icon: [16, 14],
        order: 1450.18,

        pool: 'building', tie: 6, tier: 5,

    });

    new G.Achiev({
        name: `Bewitched`,
        id: 181,
        q: ``,
        icon: [17, 0],
        order: 1475.181,

        pool: 'building', tie: 7, tier: 1,

    });

    new G.Achiev({
        name: `The sorcerer's apprentice`,
        id: 182,
        q: ``,
        icon: [17, 1],
        order: 1475.182,

        pool: 'building', tie: 7, tier: 2,

    });

    new G.Achiev({
        name: `Charms and enchantments`,
        id: 183,
        q: ``,
        icon: [17, 2],
        order: 1475.183,

        pool: 'building', tie: 7, tier: 3,

    });

    new G.Achiev({
        name: `Curses and maledictions`,
        id: 184,
        q: ``,
        icon: [17, 13],
        order: 1475.184,

        pool: 'building', tie: 7, tier: 4,

    });

    new G.Achiev({
        name: `Magic kingdom`,
        id: 185,
        q: ``,
        icon: [17, 14],
        order: 1475.185,

        pool: 'building', tie: 7, tier: 5,

    });

    new G.Achiev({
        name: `The agemaster`,
        id: 208,
        q: ``,
        icon: [1, 16],
        order: 1100.208,

        pool: 'building', tie: 1, tier: 7,

    });

    new G.Achiev({
        name: `To oldly go`,
        id: 209,
        q: ``,
        icon: [1, 17],
        order: 1100.209,

        pool: 'building', tie: 1, tier: 8,

    });

    new G.Achiev({
        name: `Gardener extraordinaire`,
        id: 210,
        q: ``,
        icon: [2, 15],
        order: 1200.21,

        pool: 'building', tie: 2, tier: 6,

    });

    new G.Achiev({
        name: `Tectonic ambassador`,
        id: 211,
        q: ``,
        icon: [3, 15],
        order: 1300.211,

        pool: 'building', tie: 3, tier: 6,

    });

    new G.Achiev({
        name: `Rise of the machines`,
        id: 212,
        q: ``,
        icon: [4, 15],
        order: 1400.212,

        pool: 'building', tie: 4, tier: 6,

    });

    new G.Achiev({
        name: `Acquire currency`,
        id: 213,
        q: ``,
        icon: [15, 15],
        order: 1425.213,

        pool: 'building', tie: 5, tier: 6,

    });

    new G.Achiev({
        name: `Zealotry`,
        id: 214,
        q: ``,
        icon: [16, 15],
        order: 1450.214,

        pool: 'building', tie: 6, tier: 6,

    });

    new G.Achiev({
        name: `The wizarding world`,
        id: 215,
        q: ``,
        icon: [17, 15],
        order: 1475.215,

        pool: 'building', tie: 7, tier: 6,

    });

    new G.Achiev({
        name: `Parsec-masher`,
        id: 216,
        q: ``,
        icon: [5, 15],
        order: 1500.216,

        pool: 'building', tie: 8, tier: 6,

    });

    new G.Achiev({
        name: `The work of a lifetime`,
        id: 217,
        q: ``,
        icon: [6, 15],
        order: 1600.217,

        pool: 'building', tie: 9, tier: 6,

    });

    new G.Achiev({
        name: `A place lost in time`,
        id: 218,
        q: ``,
        icon: [7, 15],
        order: 1700.218,

        pool: 'building', tie: 10, tier: 6,

    });

    new G.Achiev({
        name: `Heat death`,
        id: 219,
        q: ``,
        icon: [8, 15],
        order: 1800.219,

        pool: 'building', tie: 11, tier: 6,

    });

    new G.Achiev({
        name: `Microcosm`,
        id: 220,
        q: ``,
        icon: [13, 15],
        order: 1900.22,

        pool: 'building', tie: 12, tier: 6,

    });

    new G.Achiev({
        name: `Bright future`,
        id: 221,
        q: ``,
        icon: [14, 15],
        order: 2000.221,

        pool: 'building', tie: 13, tier: 6,

    });

    new G.Achiev({
        name: `Seedy business`,
        id: 250,
        q: ``,
        icon: [2, 16],
        order: 1200.25,

        pool: 'building', tie: 2, tier: 7,

    });

    new G.Achiev({
        name: `Freak fracking`,
        id: 251,
        q: ``,
        icon: [3, 16],
        order: 1300.251,

        pool: 'building', tie: 3, tier: 7,

    });

    new G.Achiev({
        name: `Modern times`,
        id: 252,
        q: ``,
        icon: [4, 16],
        order: 1400.252,

        pool: 'building', tie: 4, tier: 7,

    });

    new G.Achiev({
        name: `The nerve of war`,
        id: 253,
        q: ``,
        icon: [15, 16],
        order: 1425.253,

        pool: 'building', tie: 5, tier: 7,

    });

    new G.Achiev({
        name: `Wololo`,
        id: 254,
        q: ``,
        icon: [16, 16],
        order: 1450.254,

        pool: 'building', tie: 6, tier: 7,

    });

    new G.Achiev({
        name: `And now for my next trick, I'll need a volunteer from the audience`,
        id: 255,
        q: ``,
        icon: [17, 16],
        order: 1475.255,

        pool: 'building', tie: 7, tier: 7,

    });

    new G.Achiev({
        name: `It's not delivery`,
        id: 256,
        q: ``,
        icon: [5, 16],
        order: 1500.256,

        pool: 'building', tie: 8, tier: 7,

    });

    new G.Achiev({
        name: `Gold, Jerry! Gold!`,
        id: 257,
        q: ``,
        icon: [6, 16],
        order: 1600.257,

        pool: 'building', tie: 9, tier: 7,

    });

    new G.Achiev({
        name: `Forbidden zone`,
        id: 258,
        q: ``,
        icon: [7, 16],
        order: 1700.258,

        pool: 'building', tie: 10, tier: 7,

    });

    new G.Achiev({
        name: `cookie clicker forever and forever a hundred years cookie clicker, all day long forever, forever a hundred times, over and over cookie clicker adventures dot com`,
        id: 259,
        q: ``,
        icon: [8, 16],
        order: 1800.259,

        pool: 'building', tie: 11, tier: 7,

    });

    new G.Achiev({
        name: `Scientists baffled everywhere`,
        id: 260,
        q: ``,
        icon: [13, 16],
        order: 1900.26,

        pool: 'building', tie: 12, tier: 7,

    });

    new G.Achiev({
        name: `Harmony of the spheres`,
        id: 261,
        q: ``,
        icon: [14, 16],
        order: 2000.261,

        pool: 'building', tie: 13, tier: 7,

    });

    new G.Achiev({
        name: `You and the beanstalk`,
        id: 281,
        q: ``,
        icon: [2, 17],
        order: 1200.281,

        pool: 'building', tie: 2, tier: 8,

    });

    new G.Achiev({
        name: `Romancing the stone`,
        id: 282,
        q: ``,
        icon: [3, 17],
        order: 1300.282,

        pool: 'building', tie: 3, tier: 8,

    });

    new G.Achiev({
        name: `Ex machina`,
        id: 283,
        q: ``,
        icon: [4, 17],
        order: 1400.283,

        pool: 'building', tie: 4, tier: 8,

    });

    new G.Achiev({
        name: `And I need it now`,
        id: 284,
        q: ``,
        icon: [15, 17],
        order: 1425.284,

        pool: 'building', tie: 5, tier: 8,

    });

    new G.Achiev({
        name: `Pray on the weak`,
        id: 285,
        q: ``,
        icon: [16, 17],
        order: 1450.285,

        pool: 'building', tie: 6, tier: 8,

    });

    new G.Achiev({
        name: `It's a kind of magic`,
        id: 286,
        q: ``,
        icon: [17, 17],
        order: 1475.286,

        pool: 'building', tie: 7, tier: 8,

    });

    new G.Achiev({
        name: `Make it so`,
        id: 287,
        q: ``,
        icon: [5, 17],
        order: 1500.287,

        pool: 'building', tie: 8, tier: 8,

    });

    new G.Achiev({
        name: `All that glitters is gold`,
        id: 288,
        q: ``,
        icon: [6, 17],
        order: 1600.288,

        pool: 'building', tie: 9, tier: 8,

    });

    new G.Achiev({
        name: `H̸̷͓̳̳̯̟͕̟͍͍̣͡ḛ̢̦̰̺̮̝͖͖̘̪͉͘͡ ̠̦͕̤̪̝̥̰̠̫̖̣͙̬͘ͅC̨̦̺̩̲̥͉̭͚̜̻̝̣̼͙̮̯̪o̴̡͇̘͎̞̲͇̦̲͞͡m̸̩̺̝̣̹̱͚̬̥̫̳̼̞̘̯͘ͅẹ͇̺̜́̕͢s̶̙̟̱̥̮̯̰̦͓͇͖͖̝͘͘͞`,
        id: 289,
        q: ``,
        icon: [7, 17],
        order: 1700.289,

        pool: 'building', tie: 10, tier: 8,

    });

    new G.Achiev({
        name: `Way back then`,
        id: 290,
        q: ``,
        icon: [8, 17],
        order: 1800.29,

        pool: 'building', tie: 11, tier: 8,

    });

    new G.Achiev({
        name: `Exotic matter`,
        id: 291,
        q: ``,
        icon: [13, 17],
        order: 1900.291,

        pool: 'building', tie: 12, tier: 8,

    });

    new G.Achiev({
        name: `At the end of the tunnel`,
        id: 292,
        q: ``,
        icon: [14, 17],
        order: 2000.292,

        pool: 'building', tie: 13, tier: 8,

    });

    new G.Achiev({
        name: `Lucked out`,
        id: 325,
        q: ``,
        icon: [19, 0],
        order: 2100.325,

        pool: 'building', tie: 14, tier: 1,

    });

    new G.Achiev({
        name: `What are the odds`,
        id: 326,
        q: ``,
        icon: [19, 1],
        order: 2100.326,

        pool: 'building', tie: 14, tier: 2,

    });

    new G.Achiev({
        name: `Grandma needs a new pair of shoes`,
        id: 327,
        q: ``,
        icon: [19, 2],
        order: 2100.327,

        pool: 'building', tie: 14, tier: 3,

    });

    new G.Achiev({
        name: `Million to one shot, doc`,
        id: 328,
        q: ``,
        icon: [19, 13],
        order: 2100.328,

        pool: 'building', tie: 14, tier: 4,

    });

    new G.Achiev({
        name: `As luck would have it`,
        id: 329,
        q: ``,
        icon: [19, 14],
        order: 2100.329,

        pool: 'building', tie: 14, tier: 5,

    });

    new G.Achiev({
        name: `Ever in your favor`,
        id: 330,
        q: ``,
        icon: [19, 15],
        order: 2100.33,

        pool: 'building', tie: 14, tier: 6,

    });

    new G.Achiev({
        name: `Be a lady`,
        id: 331,
        q: ``,
        icon: [19, 16],
        order: 2100.331,

        pool: 'building', tie: 14, tier: 7,

    });

    new G.Achiev({
        name: `Dicey business`,
        id: 332,
        q: ``,
        icon: [19, 17],
        order: 2100.332,

        pool: 'building', tie: 14, tier: 8,

    });

    new G.Achiev({
        name: `Aged well`,
        id: 338,
        q: ``,
        icon: [1, 18],
        order: 1100.338,

        pool: 'building', tie: 1, tier: 9,

    });

    new G.Achiev({
        name: `101st birthday`,
        id: 339,
        q: ``,
        icon: [1, 19],
        order: 1100.339,

        pool: 'building', tie: 1, tier: 10,

    });

    new G.Achiev({
        name: `Defense of the ancients`,
        id: 340,
        q: ``,
        icon: [1, 28],
        order: 1100.34,

        pool: 'building', tie: 1, tier: 11,

    });

    new G.Achiev({
        name: `Harvest moon`,
        id: 341,
        q: ``,
        icon: [2, 18],
        order: 1200.341,

        pool: 'building', tie: 2, tier: 9,

    });

    new G.Achiev({
        name: `Mine?`,
        id: 342,
        q: ``,
        icon: [3, 18],
        order: 1300.342,

        pool: 'building', tie: 3, tier: 9,

    });

    new G.Achiev({
        name: `In full gear`,
        id: 343,
        q: ``,
        icon: [4, 18],
        order: 1400.343,

        pool: 'building', tie: 4, tier: 9,

    });

    new G.Achiev({
        name: `Treacle tart economics`,
        id: 344,
        q: ``,
        icon: [15, 18],
        order: 1425.344,

        pool: 'building', tie: 5, tier: 9,

    });

    new G.Achiev({
        name: `Holy cookies, grandma!`,
        id: 345,
        q: ``,
        icon: [16, 18],
        order: 1450.345,

        pool: 'building', tie: 6, tier: 9,

    });

    new G.Achiev({
        name: `The Prestige`,
        id: 346,
        q: `(Unrelated to the Cookie Clicker feature of the same name.)`,
        icon: [17, 18],
        order: 1475.346,

        pool: 'building', tie: 7, tier: 9,

    });

    new G.Achiev({
        name: `That's just peanuts to space`,
        id: 347,
        q: ``,
        icon: [5, 18],
        order: 1500.347,

        pool: 'building', tie: 8, tier: 9,

    });

    new G.Achiev({
        name: `Worth its weight in lead`,
        id: 348,
        q: ``,
        icon: [6, 18],
        order: 1600.348,

        pool: 'building', tie: 9, tier: 9,

    });

    new G.Achiev({
        name: `What happens in the vortex stays in the vortex`,
        id: 349,
        q: ``,
        icon: [7, 18],
        order: 1700.349,

        pool: 'building', tie: 10, tier: 9,

    });

    new G.Achiev({
        name: `Invited to yesterday's party`,
        id: 350,
        q: ``,
        icon: [8, 18],
        order: 1800.35,

        pool: 'building', tie: 11, tier: 9,

    });

    new G.Achiev({
        name: `Downsizing`,
        id: 351,
        q: ``,
        icon: [13, 18],
        order: 1900.351,

        pool: 'building', tie: 12, tier: 9,

    });

    new G.Achiev({
        name: `My eyes`,
        id: 352,
        q: ``,
        icon: [14, 18],
        order: 2000.352,

        pool: 'building', tie: 13, tier: 9,

    });

    new G.Achiev({
        name: `Maybe a chance in hell, actually`,
        id: 353,
        q: ``,
        icon: [19, 18],
        order: 2100.353,

        pool: 'building', tie: 14, tier: 9,

    });

    new G.Achiev({
        name: `Make like a tree`,
        id: 354,
        q: ``,
        icon: [2, 19],
        order: 1200.354,

        pool: 'building', tie: 2, tier: 10,

    });

    new G.Achiev({
        name: `Cave story`,
        id: 355,
        q: ``,
        icon: [3, 19],
        order: 1300.355,

        pool: 'building', tie: 3, tier: 10,

    });

    new G.Achiev({
        name: `In-cog-neato`,
        id: 356,
        q: ``,
        icon: [4, 19],
        order: 1400.356,

        pool: 'building', tie: 4, tier: 10,

    });

    new G.Achiev({
        name: `Save your breath because that's all you've got left`,
        id: 357,
        q: ``,
        icon: [15, 19],
        order: 1425.357,

        pool: 'building', tie: 5, tier: 10,

    });

    new G.Achiev({
        name: `Vengeful and almighty`,
        id: 358,
        q: ``,
        icon: [16, 19],
        order: 1450.358,

        pool: 'building', tie: 6, tier: 10,

    });

    new G.Achiev({
        name: `Spell it out for you`,
        id: 359,
        q: ``,
        icon: [17, 19],
        order: 1475.359,

        pool: 'building', tie: 7, tier: 10,

    });

    new G.Achiev({
        name: `Space space space space space`,
        id: 360,
        q: `It's too far away...`,
        icon: [5, 19],
        order: 1500.36,

        pool: 'building', tie: 8, tier: 10,

    });

    new G.Achiev({
        name: `Don't get used to yourself, you're gonna have to change`,
        id: 361,
        q: ``,
        icon: [6, 19],
        order: 1600.361,

        pool: 'building', tie: 9, tier: 10,

    });

    new G.Achiev({
        name: `Objects in the mirror dimension are closer than they appear`,
        id: 362,
        q: ``,
        icon: [7, 19],
        order: 1700.362,

        pool: 'building', tie: 10, tier: 10,

    });

    new G.Achiev({
        name: `Groundhog day`,
        id: 363,
        q: ``,
        icon: [8, 19],
        order: 1800.363,

        pool: 'building', tie: 11, tier: 10,

    });

    new G.Achiev({
        name: `A matter of perspective`,
        id: 364,
        q: ``,
        icon: [13, 19],
        order: 1900.364,

        pool: 'building', tie: 12, tier: 10,

    });

    new G.Achiev({
        name: `Optical illusion`,
        id: 365,
        q: ``,
        icon: [14, 19],
        order: 2000.365,

        pool: 'building', tie: 13, tier: 10,

    });

    new G.Achiev({
        name: `Jackpot`,
        id: 366,
        q: ``,
        icon: [19, 19],
        order: 2100.366,

        pool: 'building', tie: 14, tier: 10,

    });

    new G.Achiev({
        name: `But wait 'til you get older`,
        id: 399,
        q: ``,
        icon: [1, 30],
        order: 1100.399,

        pool: 'building', tie: 1, tier: 12,

    });

    new G.Achiev({
        name: `Sharpest tool in the shed`,
        id: 400,
        q: ``,
        icon: [2, 28],
        order: 1200.4,

        pool: 'building', tie: 2, tier: 11,

    });

    new G.Achiev({
        name: `Hey now, you're a rock`,
        id: 401,
        q: ``,
        icon: [3, 28],
        order: 1300.401,

        pool: 'building', tie: 3, tier: 11,

    });

    new G.Achiev({
        name: `Break the mold`,
        id: 402,
        q: ``,
        icon: [4, 28],
        order: 1400.402,

        pool: 'building', tie: 4, tier: 11,

    });

    new G.Achiev({
        name: `Get the show on, get paid`,
        id: 403,
        q: ``,
        icon: [15, 28],
        order: 1425.403,

        pool: 'building', tie: 5, tier: 11,

    });

    new G.Achiev({
        name: `My world's on fire, how about yours`,
        id: 404,
        q: ``,
        icon: [16, 28],
        order: 1450.404,

        pool: 'building', tie: 6, tier: 11,

    });

    new G.Achiev({
        name: `The meteor men beg to differ`,
        id: 405,
        q: ``,
        icon: [17, 28],
        order: 1475.405,

        pool: 'building', tie: 7, tier: 11,

    });

    new G.Achiev({
        name: `Only shooting stars`,
        id: 406,
        q: ``,
        icon: [5, 28],
        order: 1500.406,

        pool: 'building', tie: 8, tier: 11,

    });

    new G.Achiev({
        name: `We could all use a little change`,
        id: 407,
        q: ``,
        icon: [6, 28],
        order: 1600.407,

        pool: 'building', tie: 9, tier: 11,

    });

    new G.Achiev({
        name: `Your brain gets smart but your head gets dumb`,
        id: 408,
        q: ``,
        icon: [7, 28],
        order: 1700.408,

        pool: 'building', tie: 10, tier: 11,

    });

    new G.Achiev({
        name: `The years start coming`,
        id: 409,
        q: ``,
        icon: [8, 28],
        order: 1800.409,

        pool: 'building', tie: 11, tier: 11,

    });

    new G.Achiev({
        name: `What a concept`,
        id: 410,
        q: ``,
        icon: [13, 28],
        order: 1900.41,

        pool: 'building', tie: 12, tier: 11,

    });

    new G.Achiev({
        name: `You'll never shine if you don't glow`,
        id: 411,
        q: ``,
        icon: [14, 28],
        order: 2000.411,

        pool: 'building', tie: 13, tier: 11,

    });

    new G.Achiev({
        name: `You'll never know if you don't go`,
        id: 412,
        q: ``,
        icon: [19, 28],
        order: 2100.412,

        pool: 'building', tie: 14, tier: 11,

    });

    new G.Achiev({
        name: `Self-contained`,
        id: 413,
        q: ``,
        icon: [20, 0],
        order: 2200.413,

        pool: 'building', tie: 15, tier: 1,

    });

    new G.Achiev({
        name: `Threw you for a loop`,
        id: 414,
        q: ``,
        icon: [20, 1],
        order: 2200.414,

        pool: 'building', tie: 15, tier: 2,

    });

    new G.Achiev({
        name: `The sum of its parts`,
        id: 415,
        q: ``,
        icon: [20, 2],
        order: 2200.415,

        pool: 'building', tie: 15, tier: 3,

    });

    new G.Achiev({
        name: `Bears repeating`,
        id: 416,
        q: `Where did these come from?`,
        icon: [20, 13],
        order: 2200.416,

        pool: 'building', tie: 15, tier: 4,

    });

    new G.Achiev({
        name: `More of the same`,
        id: 417,
        q: ``,
        icon: [20, 14],
        order: 2200.417,

        pool: 'building', tie: 15, tier: 5,

    });

    new G.Achiev({
        name: `Last recurse`,
        id: 418,
        q: ``,
        icon: [20, 15],
        order: 2200.418,

        pool: 'building', tie: 15, tier: 6,

    });

    new G.Achiev({
        name: `Out of one, many`,
        id: 419,
        q: ``,
        icon: [20, 16],
        order: 2200.419,

        pool: 'building', tie: 15, tier: 7,

    });

    new G.Achiev({
        name: `An example of recursion`,
        id: 420,
        q: ``,
        icon: [20, 17],
        order: 2200.42,

        pool: 'building', tie: 15, tier: 8,

    });

    new G.Achiev({
        name: `For more information on this achievement, please refer to its title`,
        id: 421,
        q: ``,
        icon: [20, 18],
        order: 2200.421,

        pool: 'building', tie: 15, tier: 9,

    });

    new G.Achiev({
        name: `I'm so meta, even this achievement`,
        id: 422,
        q: ``,
        icon: [20, 19],
        order: 2200.422,

        pool: 'building', tie: 15, tier: 10,

    });

    new G.Achiev({
        name: `Never get bored`,
        id: 423,
        q: ``,
        icon: [20, 28],
        order: 2200.423,

        pool: 'building', tie: 15, tier: 11,

    });


    new G.Achiev({
        name: `Click delegator`,
        id: 134,
        q: ``,
        icon: [0, 22],
        order: 1070.134,

        pool: 'buildingProd', tie: 0, tier: 1,

    });

    new G.Achiev({
        name: `Finger clickin' good`,
        id: 189,
        q: ``,
        icon: [0, 23],
        order: 1070.189,

        pool: 'buildingProd', tie: 0, tier: 2,

    });

    new G.Achiev({
        name: `Click (starring Adam Sandler)`,
        id: 293,
        q: ``,
        icon: [0, 24],
        order: 1070.293,

        pool: 'buildingProd', tie: 0, tier: 3,

    });

    new G.Achiev({
        name: `Gushing grannies`,
        id: 135,
        q: ``,
        icon: [1, 22],
        order: 1120.135,

        pool: 'buildingProd', tie: 1, tier: 1,

    });

    new G.Achiev({
        name: `Panic at the bingo`,
        id: 190,
        q: ``,
        icon: [1, 23],
        order: 1120.19,

        pool: 'buildingProd', tie: 1, tier: 2,

    });

    new G.Achiev({
        name: `Frantiquities`,
        id: 294,
        q: ``,
        icon: [1, 24],
        order: 1120.294,

        pool: 'buildingProd', tie: 1, tier: 3,

    });

    new G.Achiev({
        name: `I hate manure`,
        id: 136,
        q: ``,
        icon: [2, 22],
        order: 1220.136,

        pool: 'buildingProd', tie: 2, tier: 1,

    });

    new G.Achiev({
        name: `Rake in the dough`,
        id: 191,
        q: ``,
        icon: [2, 23],
        order: 1220.191,

        pool: 'buildingProd', tie: 2, tier: 2,

    });

    new G.Achiev({
        name: `Overgrowth`,
        id: 295,
        q: ``,
        icon: [2, 24],
        order: 1220.295,

        pool: 'buildingProd', tie: 2, tier: 3,

    });

    new G.Achiev({
        name: `Never dig down`,
        id: 137,
        q: ``,
        icon: [3, 22],
        order: 1320.137,

        pool: 'buildingProd', tie: 3, tier: 1,

    });

    new G.Achiev({
        name: `Quarry on`,
        id: 192,
        q: ``,
        icon: [3, 23],
        order: 1320.192,

        pool: 'buildingProd', tie: 3, tier: 2,

    });

    new G.Achiev({
        name: `Sedimentalism`,
        id: 296,
        q: ``,
        icon: [3, 24],
        order: 1320.296,

        pool: 'buildingProd', tie: 3, tier: 3,

    });

    new G.Achiev({
        name: `The incredible machine`,
        id: 138,
        q: ``,
        icon: [4, 22],
        order: 1420.138,

        pool: 'buildingProd', tie: 4, tier: 1,

    });

    new G.Achiev({
        name: `Yes I love technology`,
        id: 193,
        q: ``,
        icon: [4, 23],
        order: 1420.193,

        pool: 'buildingProd', tie: 4, tier: 2,

    });

    new G.Achiev({
        name: `Labor of love`,
        id: 297,
        q: ``,
        icon: [4, 24],
        order: 1420.297,

        pool: 'buildingProd', tie: 4, tier: 3,

    });

    new G.Achiev({
        name: `Vested interest`,
        id: 186,
        q: ``,
        icon: [15, 22],
        order: 1445.186,

        pool: 'buildingProd', tie: 5, tier: 1,

    });

    new G.Achiev({
        name: `Paid in full`,
        id: 194,
        q: ``,
        icon: [15, 23],
        order: 1445.194,

        pool: 'buildingProd', tie: 5, tier: 2,

    });

    new G.Achiev({
        name: `Reverse funnel system`,
        id: 298,
        q: ``,
        icon: [15, 24],
        order: 1445.298,

        pool: 'buildingProd', tie: 5, tier: 3,

    });

    new G.Achiev({
        name: `New world order`,
        id: 187,
        q: ``,
        icon: [16, 22],
        order: 1470.187,

        pool: 'buildingProd', tie: 6, tier: 1,

    });

    new G.Achiev({
        name: `Church of Cookiology`,
        id: 195,
        q: ``,
        icon: [16, 23],
        order: 1470.195,

        pool: 'buildingProd', tie: 6, tier: 2,

    });

    new G.Achiev({
        name: `Thus spoke you`,
        id: 299,
        q: ``,
        icon: [16, 24],
        order: 1470.299,

        pool: 'buildingProd', tie: 6, tier: 3,

    });

    new G.Achiev({
        name: `Hocus pocus`,
        id: 188,
        q: ``,
        icon: [17, 22],
        order: 1495.188,

        pool: 'buildingProd', tie: 7, tier: 1,

    });

    new G.Achiev({
        name: `Too many rabbits, not enough hats`,
        id: 196,
        q: ``,
        icon: [17, 23],
        order: 1495.196,

        pool: 'buildingProd', tie: 7, tier: 2,

    });

    new G.Achiev({
        name: `Manafest destiny`,
        id: 300,
        q: ``,
        icon: [17, 24],
        order: 1495.3,

        pool: 'buildingProd', tie: 7, tier: 3,

    });

    new G.Achiev({
        name: `And beyond`,
        id: 139,
        q: ``,
        icon: [5, 22],
        order: 1520.139,

        pool: 'buildingProd', tie: 8, tier: 1,

    });

    new G.Achiev({
        name: `The most precious cargo`,
        id: 197,
        q: ``,
        icon: [5, 23],
        order: 1520.197,

        pool: 'buildingProd', tie: 8, tier: 2,

    });

    new G.Achiev({
        name: `Neither snow nor rain nor heat nor gloom of night`,
        id: 301,
        q: ``,
        icon: [5, 24],
        order: 1520.301,

        pool: 'buildingProd', tie: 8, tier: 3,

    });

    new G.Achiev({
        name: `Magnum Opus`,
        id: 140,
        q: ``,
        icon: [6, 22],
        order: 1620.14,

        pool: 'buildingProd', tie: 9, tier: 1,

    });

    new G.Achiev({
        name: `The Aureate`,
        id: 198,
        q: ``,
        icon: [6, 23],
        order: 1620.198,

        pool: 'buildingProd', tie: 9, tier: 2,

    });

    new G.Achiev({
        name: `I've got the Midas touch`,
        id: 302,
        q: ``,
        icon: [6, 24],
        order: 1620.302,

        pool: 'buildingProd', tie: 9, tier: 3,

    });

    new G.Achiev({
        name: `With strange eons`,
        id: 141,
        q: ``,
        icon: [7, 22],
        order: 1720.141,

        pool: 'buildingProd', tie: 10, tier: 1,

    });

    new G.Achiev({
        name: `Ever more hideous`,
        id: 199,
        q: ``,
        icon: [7, 23],
        order: 1720.199,

        pool: 'buildingProd', tie: 10, tier: 2,

    });

    new G.Achiev({
        name: `Which eternal lie`,
        id: 303,
        q: ``,
        icon: [7, 24],
        order: 1720.303,

        pool: 'buildingProd', tie: 10, tier: 3,

    });

    new G.Achiev({
        name: `Spacetime jigamaroo`,
        id: 142,
        q: ``,
        icon: [8, 22],
        order: 1820.142,

        pool: 'buildingProd', tie: 11, tier: 1,

    });

    new G.Achiev({
        name: `Be kind, rewind`,
        id: 200,
        q: ``,
        icon: [8, 23],
        order: 1820.2,

        pool: 'buildingProd', tie: 11, tier: 2,

    });

    new G.Achiev({
        name: `D&eacute;j&agrave; vu`,
        id: 304,
        q: ``,
        icon: [8, 24],
        order: 1820.304,

        pool: 'buildingProd', tie: 11, tier: 3,

    });

    new G.Achiev({
        name: `Supermassive`,
        id: 143,
        q: ``,
        icon: [13, 22],
        order: 1920.143,

        pool: 'buildingProd', tie: 12, tier: 1,

    });

    new G.Achiev({
        name: `Infinitesimal`,
        id: 201,
        q: ``,
        icon: [13, 23],
        order: 1920.201,

        pool: 'buildingProd', tie: 12, tier: 2,

    });

    new G.Achiev({
        name: `Powers of Ten`,
        id: 305,
        q: ``,
        icon: [13, 24],
        order: 1920.305,

        pool: 'buildingProd', tie: 12, tier: 3,

    });

    new G.Achiev({
        name: `Praise the sun`,
        id: 144,
        q: ``,
        icon: [14, 22],
        order: 2020.144,

        pool: 'buildingProd', tie: 13, tier: 1,

    });

    new G.Achiev({
        name: `A still more glorious dawn`,
        id: 202,
        q: ``,
        icon: [14, 23],
        order: 2020.202,

        pool: 'buildingProd', tie: 13, tier: 2,

    });

    new G.Achiev({
        name: `Now the dark days are gone`,
        id: 306,
        q: ``,
        icon: [14, 24],
        order: 2020.306,

        pool: 'buildingProd', tie: 13, tier: 3,

    });

    new G.Achiev({
        name: `Fingers crossed`,
        id: 333,
        q: ``,
        icon: [19, 22],
        order: 2120.333,

        pool: 'buildingProd', tie: 14, tier: 1,

    });

    new G.Achiev({
        name: `Just a statistic`,
        id: 334,
        q: ``,
        icon: [19, 23],
        order: 2120.334,

        pool: 'buildingProd', tie: 14, tier: 2,

    });

    new G.Achiev({
        name: `Murphy's wild guess`,
        id: 335,
        q: ``,
        icon: [19, 24],
        order: 2120.335,

        pool: 'buildingProd', tie: 14, tier: 3,

    });

    new G.Achiev({
        name: `The needs of the many`,
        id: 424,
        q: ``,
        icon: [20, 22],
        order: 2220.424,

        pool: 'buildingProd', tie: 15, tier: 1,

    });

    new G.Achiev({
        name: `Eating its own`,
        id: 425,
        q: ``,
        icon: [20, 23],
        order: 2220.425,

        pool: 'buildingProd', tie: 15, tier: 2,

    });

    new G.Achiev({
        name: `We must go deeper`,
        id: 426,
        q: ``,
        icon: [20, 24],
        order: 2220.426,

        pool: 'buildingProd', tie: 15, tier: 3,

    });


    new G.Achiev({
        name: `Click`,
        id: 34,
        desc: `Have <b>1</b> cursor.`,
        q: ``,
        icon: [0, 0],
        order: 1050.034,
        pool: '',
        unlockAt: {buildings: [0, 1]},
    });

    new G.Achiev({
        name: `Double-click`,
        id: 35,
        desc: `Have <b>2</b> cursors.`,
        q: ``,
        icon: [0, 6],
        order: 1050.035,
        pool: '',
        unlockAt: {buildings: [0, 2]},
    });

    new G.Achiev({
        name: `Mouse wheel`,
        id: 36,
        desc: `Have <b>50</b> cursors.`,
        q: ``,
        icon: [1, 6],
        order: 1050.036,
        pool: '',
        unlockAt: {buildings: [0, 50]},
    });

    new G.Achiev({
        name: `Of Mice and Men`,
        id: 37,
        desc: `Have <b>100</b> cursors.`,
        q: ``,
        icon: [0, 1],
        order: 1050.037,
        pool: '',
        unlockAt: {buildings: [0, 100]},
    });

    new G.Achiev({
        name: `The Digital`,
        id: 38,
        desc: `Have <b>200</b> cursors.`,
        q: ``,
        icon: [0, 2],
        order: 1050.038,
        pool: '',
        unlockAt: {buildings: [0, 200]},
    });

    new G.Achiev({
        name: `Extreme polydactyly`,
        id: 147,
        desc: `Have <b>300</b> cursors.`,
        q: ``,
        icon: [0, 13],
        order: 1050.147,
        pool: '',
        unlockAt: {buildings: [0, 300]},
    });

    new G.Achiev({
        name: `Dr. T`,
        id: 148,
        desc: `Have <b>400</b> cursors.`,
        q: ``,
        icon: [0, 14],
        order: 1050.148,
        pool: '',
        unlockAt: {buildings: [0, 400]},
    });

    new G.Achiev({
        name: `Thumbs, phalanges, metacarpals`,
        id: 246,
        desc: `Have <b>500</b> cursors.`,
        q: `& KNUCKLES`,
        icon: [0, 15],
        order: 1050.246,
        pool: '',
        unlockAt: {buildings: [0, 500]},
    });

    new G.Achiev({
        name: `With her finger and her thumb`,
        id: 398,
        desc: `Have <b>600</b> cursors.`,
        q: ``,
        icon: [0, 16],
        order: 1050.398,
        pool: '',
        unlockAt: {buildings: [0, 600]},
    });


    new G.Achiev({
        name: `Clicktastic`,
        id: 30,
        q: ``,
        icon: [11, 0],
        order: 1000.03,
        pool: 'mouse', tier: 1,

    });

    new G.Achiev({
        name: `Clickathlon`,
        id: 31,
        q: ``,
        icon: [11, 1],
        order: 1000.031,
        pool: 'mouse', tier: 2,

    });

    new G.Achiev({
        name: `Clickolympics`,
        id: 32,
        q: ``,
        icon: [11, 2],
        order: 1000.032,
        pool: 'mouse', tier: 3,

    });

    new G.Achiev({
        name: `Clickorama`,
        id: 33,
        q: ``,
        icon: [11, 13],
        order: 1000.033,
        pool: 'mouse', tier: 4,

    });

    new G.Achiev({
        name: `Clickasmic`,
        id: 100,
        q: ``,
        icon: [11, 14],
        order: 1000.1,
        pool: 'mouse', tier: 5,

    });

    new G.Achiev({
        name: `Clickageddon`,
        id: 145,
        q: ``,
        icon: [11, 15],
        order: 1000.145,
        pool: 'mouse', tier: 6,

    });

    new G.Achiev({
        name: `Clicknarok`,
        id: 146,
        q: ``,
        icon: [11, 16],
        order: 1000.146,
        pool: 'mouse', tier: 7,

    });

    new G.Achiev({
        name: `Clickastrophe`,
        id: 244,
        q: ``,
        icon: [11, 17],
        order: 1000.244,
        pool: 'mouse', tier: 8,

    });

    new G.Achiev({
        name: `Clickataclysm`,
        id: 245,
        q: ``,
        icon: [11, 18],
        order: 1000.245,
        pool: 'mouse', tier: 9,

    });

    new G.Achiev({
        name: `The ultimate clickdown`,
        id: 337,
        q: `(of ultimate destiny.)`,
        icon: [11, 19],
        order: 1000.337,
        pool: 'mouse', tier: 10,

    });

    new G.Achiev({
        name: `All the other kids with the pumped up clicks`,
        id: 376,
        q: ``,
        icon: [11, 28],
        order: 1000.376,
        pool: 'mouse', tier: 11,

    });

    new G.Achiev({
        name: `One...more...click...`,
        id: 377,
        q: ``,
        icon: [11, 30],
        order: 1000.377,
        pool: 'mouse', tier: 12,

    });

    new G.Achiev({
        name: `Centennial`,
        id: 91,
        desc: `Have at least <b>100</b> of everything.`,
        q: ``,
        icon: [6, 6],
        order: 7000.091,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 100;
            }
        },
    });

    new G.Achiev({
        name: `Centennial and a half`,
        id: 131,
        desc: `Have at least <b>150</b> of everything.`,
        q: ``,
        icon: [7, 6],
        order: 7001.131,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 150;
            }
        },
    });

    new G.Achiev({
        name: `Bicentennial`,
        id: 129,
        desc: `Have at least <b>200</b> of everything.`,
        q: `You crazy person.`,
        icon: [8, 6],
        order: 7002.129,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 200;
            }
        },
    });

    new G.Achiev({
        name: `Bicentennial and a half`,
        id: 242,
        desc: `Have at least <b>250</b> of everything.`,
        q: `Keep on truckin'.`,
        icon: [9, 6],
        order: 7002.242,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 250;
            }
        },
    });

    new G.Achiev({
        name: `Tricentennial`,
        id: 273,
        desc: `Have at least <b>300</b> of everything.`,
        q: `Can't stop, won't stop. Probably should stop, though.`,
        icon: [29, 12],
        order: 7002.273,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 300;
            }
        },
    });

    new G.Achiev({
        name: `Tricentennial and a half`,
        id: 392,
        desc: `Have at least <b>350</b> of everything.`,
        q: `(it's free real estate)`,
        icon: [21, 26],
        order: 7002.392,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 350;
            }
        },
    });

    new G.Achiev({
        name: `Quadricentennial`,
        id: 393,
        desc: `Have at least <b>400</b> of everything.`,
        q: `You've had to do horrible things to get this far.<br>Horrible... horrible things.`,
        icon: [22, 26],
        order: 7002.393,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 400;
            }
        },
    });

    new G.Achiev({
        name: `Quadricentennial and a half`,
        id: 394,
        desc: `Have at least <b>450</b> of everything.`,
        q: `At this point, you might just be compensating for something.`,
        icon: [23, 26],
        order: 7002.394,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 450;
            }
        },
    });

    new G.Achiev({
        name: `Quincentennial`,
        id: 395,
        desc: `Have at least <b>500</b> of everything.`,
        q: `Some people would say you're halfway there.<br>We do not care for those people and their reckless sense of unchecked optimism.`,
        icon: [29, 25],
        order: 7002.395,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.buildingsNmin >= 500;
            }
        },
    });


    new G.Achiev({
        name: `Golden cookie`,
        id: 67,
        desc: `Click a <b>golden cookie</b>.`,
        q: ``,
        icon: [10, 14],
        order: 10000.067,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.gcClicksTotal >= 1;
            }
        },
    });

    new G.Achiev({
        name: `Lucky cookie`,
        id: 68,
        desc: `Click <b>7 golden cookies</b>.`,
        q: ``,
        icon: [22, 6],
        order: 10000.068,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.gcClicksTotal >= 7;
            }
        },
    });

    new G.Achiev({
        name: `A stroke of luck`,
        id: 69,
        desc: `Click <b>27 golden cookies</b>.`,
        q: ``,
        icon: [23, 6],
        order: 10000.069,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.gcClicksTotal >= 27;
            }
        },
    });

    new G.Achiev({
        name: `Fortune`,
        id: 77,
        desc: `Click <b>77 golden cookies</b>.`,
        q: `You should really go to bed.`,
        icon: [24, 6],
        order: 10000.077,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.gcClicksTotal >= 77;
            }
        },
    });

    new G.Achiev({
        name: `Leprechaun`,
        id: 84,
        desc: `Click <b>777 golden cookies</b>.`,
        q: ``,
        icon: [25, 6],
        order: 10000.084,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.gcClicksTotal >= 777;
            }
        },
    });

    new G.Achiev({
        name: `Black cat's paw`,
        id: 85,
        desc: `Click <b>7,777 golden cookies</b>.`,
        q: ``,
        icon: [26, 6],
        order: 10000.085,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.gcClicksTotal >= 7777;
            }
        },
    });


    new G.Achiev({
        name: `Just wrong`,
        id: 39,
        desc: `Sell a grandma.`,
        q: `I thought you loved me.`,
        icon: [10, 9],
        order: 1100.039,
        pool: '',
        unlockAt: {
            spe: v => {
                var grans = G.buildingsBN['Grandma'];
                return grans.bought > grans.amount;
            }
        },
    });
    new G.Achiev({
        name: `Elder`,
        id: 81,
        desc: `Own at least <b>7</b> grandma types.`,
        q: ``,
        icon: [10, 9],
        order: 1150.081,
        pool: '',
        unlockAt: {
            spe: v => {
                var pool = G.upgradePools['grandma'];
                var n = 0;
                for (var i = 0; i < pool.length; i++) {
                    if (pool[i].owned) n++;
                }
                return n >= 7;
            }
        },
    });
    new G.Achiev({
        name: `Veteran`,
        id: 431,
        desc: `Own at least <b>14</b> grandma types.`,
        q: `14's a crowd!`,
        icon: [10, 9],
        order: 1150.431,
        pool: '',
        unlockAt: {
            spe: v => {
                var pool = G.upgradePools['grandma'];
                var n = 0;
                for (var i = 0; i < pool.length; i++) {
                    if (pool[i].owned) n++;
                }
                return n >= 14;
            }
        },
    });


    new G.Achiev({
        name: `Elder nap`,
        id: 79,
        desc: `Appease the grandmatriarchs at least <b>once</b>.`,
        q: `we<br>are<br>eternal`,
        icon: [8, 9],
        order: 20000.079,
        pool: '',
    });
    new G.Achiev({
        name: `Elder slumber`,
        id: 80,
        desc: `Appease the grandmatriarchs at least <b>5 times</b>.`,
        q: `our mind<br>outlives<br>the universe`,
        icon: [8, 9],
        order: 20000.08,
        pool: '',
    });
    new G.Achiev({
        name: `Elder calm`,
        id: 82,
        desc: `Declare a covenant with the grandmatriarchs.`,
        q: `we<br>have<br>fed`,
        icon: [8, 9],
        order: 20000.082,
        pool: '',
    });

    new G.Achiev({
        name: `Itchscratcher`,
        id: 105,
        desc: `Burst <b>1 wrinkler</b>.`,
        q: ``,
        icon: [19, 8],
        order: 21000.105,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.wrinklersPopped >= 1;
            }
        },
    });

    new G.Achiev({
        name: `Wrinklesquisher`,
        id: 106,
        desc: `Burst <b>50 wrinklers</b>.`,
        q: ``,
        icon: [19, 8],
        order: 21000.106,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.wrinklersPopped >= 50;
            }
        },
    });

    new G.Achiev({
        name: `Moistburster`,
        id: 107,
        desc: `Burst <b>200 wrinklers</b>.`,
        q: ``,
        icon: [19, 8],
        order: 21000.107,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.wrinklersPopped >= 200;
            }
        },
    });

    new G.Achiev({
        name: `Last Chance to See`,
        id: 262,
        desc: `Burst the near-extinct <b>shiny wrinkler</b>.`,
        q: `You monster!`,
        icon: [24, 12],
        order: 35000.262,
        pool: '',
    });

    new G.Achiev({
        name: `Early bird`,
        id: 263,
        desc: `Click a golden cookie <b>less than 1 second after it spawns</b>.`,
        q: ``,
        icon: [10, 14],
        order: 10000.263,
        pool: '',
    });

    new G.Achiev({
        name: `Fading luck`,
        id: 264,
        desc: `Click a golden cookie <b>less than 1 second before it dies</b>.`,
        q: ``,
        icon: [10, 14],
        order: 10000.264,
        pool: '',
    });


    new G.Achiev({
        name: `Builder`,
        id: 72,
        desc: `Own <b>100</b> buildings.`,
        q: ``,
        icon: [2, 6],
        order: 5000.072,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.buildingsN >= 100;
            }
        },
    });
    new G.Achiev({
        name: `Architect`,
        id: 73,
        desc: `Own <b>500</b> buildings.`,
        q: ``,
        icon: [3, 6],
        order: 5000.073,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.buildingsN >= 500;
            }
        },
    });
    new G.Achiev({
        name: `Engineer`,
        id: 83,
        desc: `Own <b>1,000</b> buildings.`,
        q: ``,
        icon: [4, 6],
        order: 5000.083,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.buildingsN >= 1000;
            }
        },
    });
    new G.Achiev({
        name: `Lord of Constructs`,
        id: 127,
        desc: `Own <b>2,000</b> buildings.`,
        q: `He saw the vast plains stretching ahead of him, and he said : let there be civilization.`,
        icon: [5, 6],
        order: 5000.127,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.buildingsN >= 2000;
            }
        },
    });

    new G.Achiev({
        name: `Enhancer`,
        id: 74,
        desc: `Purchase <b>20</b> upgrades.`,
        q: ``,
        icon: [9, 0],
        order: 6000.074,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.upgradesN >= 20;
            }
        },
    });
    new G.Achiev({
        name: `Augmenter`,
        id: 75,
        desc: `Purchase <b>50</b> upgrades.`,
        q: ``,
        icon: [9, 1],
        order: 6000.075,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.upgradesN >= 20;
            }
        },
    });
    new G.Achiev({
        name: `Upgrader`,
        id: 90,
        desc: `Purchase <b>100</b> upgrades.`,
        q: ``,
        icon: [9, 2],
        order: 6000.09,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.upgradesN >= 100;
            }
        },
    });
    new G.Achiev({
        name: `Lord of Progress`,
        id: 128,
        desc: `Purchase <b>200</b> upgrades.`,
        q: `One can always do better. But should you?`,
        icon: [9, 14],
        order: 6000.128,
        pool: '',
        unlockAt: {
            spe: v => {
                return G.upgradesN >= 200;
            }
        },
    });

    new G.Achiev({
        name: `Polymath`,
        id: 247,
        desc: `Own <b>300</b> upgrades and <b>3,000</b> buildings.`,
        q: `Excellence doesn't happen overnight - it usually takes a good couple days.`,
        icon: [29, 7],
        order: 6000.247,
        pool: '',
        unlockAt: {
            spe: v => {
                return (G.buildingsN >= 3000 && G.upgradesN >= 300);
            }
        },
    });
    new G.Achiev({
        name: `Renaissance baker`,
        id: 430,
        desc: `Own <b>400</b> upgrades and <b>4,000</b> buildings.`,
        q: `If you have seen further, it is by standing on the shoulders of giants - a mysterious species of towering humanoids until now thought long-extinct.`,
        icon: [10, 10],
        order: 6000.43,
        pool: '',
        unlockAt: {
            spe: v => {
                return (G.buildingsN >= 4000 && G.upgradesN >= 400);
            }
        },
    });

    new G.Achiev({
        name: `The elder scrolls`,
        id: 248,
        desc: `Own a combined <b>777</b> grandmas and cursors.`,
        q: `Let me guess. Someone stole your cookie.`,
        icon: [10, 9],
        order: 6005.248,
        pool: '',
        unlockAt: {
            spe: v => {
                return (G.buildings[0].amount + G.buildings[1].amount) >= 777;
            }
        },
    });

    new G.Achiev({
        name: `One with everything`,
        id: 64,
        desc: `Have <b>at least 1</b> of every building.`,
        q: ``,
        icon: [2, 7],
        order: 7000.064,
        pool: '',
        unlockAt: {
            spe: v => {
                for (var i = 0; i < G.buildings.length; i++) {
                    if (G.buildings[i].amount <= 0) return false;
                }
                return true;
            }
        },
    });

    new G.Achiev({
        name: `Mathematician`,
        id: 65,
        desc: `Have at least <b>1 of the most expensive object, 2 of the second-most expensive, 4 of the next</b> and so on (capped at 128).`,
        q: ``,
        icon: [23, 12],
        order: 7000.065,
        pool: '',
        unlockAt: {
            spe: v => {
                for (var i = 0; i < G.buildings.length; i++) {
                    if (G.buildings[i].amount < Math.min(128, Math.pow(2, (G.buildings.length - i) - 1))) return false;
                }
                return true;
            }
        },
    });
    new G.Achiev({
        name: `Base 10`,
        id: 66,
        desc: `Have at least <b>10 of the most expensive object, 20 of the second-most expensive, 30 of the next</b> and so on.`,
        q: ``,
        icon: [23, 12],
        order: 7000.066,
        pool: '',
        unlockAt: {
            spe: v => {
                for (var i = 0; i < G.buildings.length; i++) {
                    if (G.buildings[i].amount < (G.buildings.length - i) * 10) return false;
                }
                return true;
            }
        },
    });


    new G.Achiev({
        name: `Rebirth`,
        id: 203,
        desc: `Ascend at least once.`,
        q: ``,
        icon: [21, 6],
        order: 30000.203,
        pool: '',
        unlockAt: {spe: v => G.resets >= 1},
    });
    new G.Achiev({
        name: `Resurrection`,
        id: 205,
        desc: `Ascend <b>10 times</b>.`,
        q: ``,
        icon: [21, 6],
        order: 30000.205,
        pool: '',
        unlockAt: {spe: v => G.resets >= 10},
    });
    new G.Achiev({
        name: `Reincarnation`,
        id: 206,
        desc: `Ascend <b>100 times</b>.`,
        q: ``,
        icon: [21, 6],
        order: 30000.206,
        pool: '',
        unlockAt: {spe: v => G.resets >= 100},
    });
    new G.Achiev({
        //todo : shadow
        name: `Endless cycle`,
        id: 207,
        desc: `Ascend <b>1,000 times</b>.`,
        q: `Oh hey, it's you again.`,
        icon: [2, 7],
        order: 30000.207,
        pool: '',
        unlockAt: {spe: v => G.resets >= 1000},
    });

    new G.Achiev({
        name: `Sacrifice`,
        id: 26,
        desc: `Ascend with <b>1 million</b> cookies baked.`,
        q: `Easy come, easy go.`,
        icon: [11, 6],
        order: 30010.026,
        pool: '',
    });
    new G.Achiev({
        name: `Oblivion`,
        id: 27,
        desc: `Ascend with <b>1 billion</b> cookies baked.`,
        q: `Back to square one.`,
        icon: [11, 6],
        order: 30010.027,
        pool: '',
    });
    new G.Achiev({
        name: `From scratch`,
        id: 28,
        desc: `Ascend with <b>1 trillion</b> cookies baked.`,
        q: `It's been fun.`,
        icon: [11, 6],
        order: 30010.028,
        pool: '',
    });
    new G.Achiev({
        name: `Nihilism`,
        id: 86,
        desc: `Ascend with <b>1 quadrillion</b> cookies baked.`,
        q: `There are many things<br>that need to be erased`,
        icon: [11, 7],
        order: 30050.086,
        pool: '',
    });
    new G.Achiev({
        name: `Dematerialize`,
        id: 161,
        desc: `Ascend with <b>1 quintillion</b> cookies baked.`,
        q: `Presto!<br>...where'd the cookies go?`,
        icon: [11, 7],
        order: 30050.161,
        pool: '',
    });
    new G.Achiev({
        name: `Nil zero zilch`,
        id: 162,
        desc: `Ascend with <b>1 sextillion</b> cookies baked.`,
        q: `To summarize : really not very much at all.`,
        icon: [11, 7],
        order: 30050.162,
        pool: '',
    });
    new G.Achiev({
        name: `Transcendence`,
        id: 163,
        desc: `Ascend with <b>1 septillion</b> cookies baked.`,
        q: `Your cookies are now on a higher plane of being.`,
        icon: [11, 8],
        order: 30050.163,
        pool: '',
    });
    new G.Achiev({
        name: `Obliterate`,
        id: 164,
        desc: `Ascend with <b>1 octillion</b> cookies baked.`,
        q: `Resistance is futile, albeit entertaining.`,
        icon: [11, 8],
        order: 30050.164,
        pool: '',
    });
    new G.Achiev({
        name: `Negative void`,
        id: 165,
        desc: `Ascend with <b>1 nonillion</b> cookies baked.`,
        q: `You now have so few cookies that it's almost like you have a negative amount of them.`,
        icon: [11, 8],
        order: 30050.165,
        pool: '',
    });
    new G.Achiev({
        name: `To crumbs, you say?`,
        id: 249,
        desc: `Ascend with <b>1 decillion</b> cookies baked.`,
        q: `Very well then.`,
        icon: [29, 6],
        order: 30050.249,
        pool: '',
    });
    new G.Achiev({
        name: `You get nothing`,
        id: 383,
        desc: `Ascend with <b>1 undecillion</b> cookies baked.`,
        q: `Good day sir!`,
        icon: [29, 6],
        order: 30050.383,
        pool: '',
    });
    new G.Achiev({
        name: `Humble rebeginnings`,
        id: 384,
        desc: `Ascend with <b>1 duodecillion</b> cookies baked.`,
        q: `Started from the bottom, now we're here.`,
        icon: [29, 6],
        order: 30050.384,
        pool: '',
    });
    new G.Achiev({
        name: `The end of the world`,
        id: 385,
        desc: `Ascend with <b>1 tredecillion</b> cookies baked.`,
        q: `(as we know it)`,
        icon: [21, 25],
        order: 30050.385,
        pool: '',
    });
    new G.Achiev({
        name: `Oh, you're back`,
        id: 386,
        desc: `Ascend with <b>1 quattuordecillion</b> cookies baked.`,
        q: `Missed us?`,
        icon: [21, 25],
        order: 30050.386,
        pool: '',
    });
    new G.Achiev({
        name: `Lazarus`,
        id: 387,
        desc: `Ascend with <b>1 quindecillion</b> cookies baked.`,
        q: `All rise.`,
        icon: [21, 25],
        order: 30050.387,
        pool: '',
    });
    new G.Achiev({
        name: `Smurf account`,
        id: 454,
        desc: `Ascend with <b>1 sexdecillion</b> cookies baked.`,
        q: `It's like you just appeared out of the blue!`,
        icon: [21, 32],
        order: 30050.454,
        pool: '',
    });
    new G.Achiev({
        name: `If at first you don't succeed`,
        id: 455,
        desc: `Ascend with <b>1 septendecillion</b> cookies baked.`,
        q: `If at first you don't succeed, try, try, try again.<br>But isn't that the definition of insanity?`,
        icon: [21, 32],
        order: 30050.455,
        pool: '',
    });

    new G.Achiev({
        //todo : shadow
        name: `When the cookies ascend just right`,
        id: 397,
        desc: `Ascend with exactly <b>1 trillion cookies</b>.`,
        q: ``,
        icon: [25, 7],
        order: 30250.397,
        pool: '',
    });

    new G.Achiev({
        name: `Wholesome`,
        id: 103,
        desc: `Unlock <b>100%</b> of your heavenly chips power.`,
        q: ``,
        icon: [15, 7],
        order: 32000.103,
        pool: '',
        unlockAt: {upgrade: `Heavenly key`},
    });


    //====== Misc ======
    G.HeavenlyUpgradePositions = {
        141: [176, -66],
        181: [-555, -93],
        253: [-272, -231],
        254: [-99, -294],
        255: [-193, -279],
        264: [48, 123],
        265: [133, 154],
        266: [223, 166],
        267: [305, 137],
        268: [382, 85],
        269: [-640, 42],
        270: [-607, -246],
        271: [-728, -120],
        272: [-688, -201],
        273: [-711, -33],
        274: [270, -328],
        275: [317, -439],
        276: [333, -556],
        277: [334, -676],
        278: [333, -796],
        279: [328, -922],
        280: [303, -1040],
        281: [194, -230],
        282: [-265, 212],
        283: [-321, 297],
        284: [-322, 406],
        285: [-243, 501],
        286: [-403, 501],
        287: [-314, 606],
        288: [-312, -374],
        289: [-375, -502],
        290: [-206, -476],
        291: [453, -745],
        292: [-375, -651],
        293: [-399, -794],
        323: [-86, 120],
        325: [192, -1127],
        326: [-328, -158],
        327: [-192, 290],
        328: [-3, 237],
        329: [92, 376],
        353: [121, -326],
        354: [77, -436],
        355: [64, -548],
        356: [57, -673],
        357: [52, -793],
        358: [58, -924],
        359: [82, -1043],
        360: [-188, 408],
        362: [158, 289],
        363: [-30, -30],
        364: [-232, -730],
        365: [-77, 349],
        368: [-82, -532],
        393: [196, -714],
        394: [197, -964],
        395: [-143, -140],
        396: [-264, -889],
        397: [-69, 563],
        408: [-204, -1036],
        409: [-72, -1152],
        410: [-70, -1328],
        411: [-388, 137],
        412: [-470, 253],
        413: [-482, 389],
        449: [-367, -1113],
        450: [-334, -1214],
        451: [-278, -1303],
        495: [-402, -966],
        496: [200, 49],
        505: [-545, -570],
        520: [-279, -8],
        537: [-937, -149],
        539: [-508, -1270],
        540: [-629, -1291],
        541: [-594, -1186],
        542: [-548, -1374],
        561: [300, -17],
        562: [52, 646],
        591: [154, 744],
        592: [180, 608],
    };

    G.HeavenlyUpgradeParents = {
        141: [363],
        181: [520],
        253: [395],
        254: [395],
        255: [395],
        264: [363],
        265: [264],
        266: [265],
        267: [266],
        268: [267],
        269: [181],
        270: [181],
        271: [181],
        272: [181],
        273: [181],
        274: [281],
        275: [274],
        276: [275],
        277: [276],
        278: [277],
        279: [278],
        280: [279],
        281: [363],
        282: [363],
        283: [282],
        284: [283],
        285: [284],
        286: [284],
        287: [286, 285],
        288: [253, 254, 255, 326],
        289: [288],
        290: [288],
        291: [277],
        292: [289],
        293: [292],
        323: [363],
        325: [280, 359, 394],
        326: [395],
        327: [282],
        328: [363],
        329: [328],
        353: [281],
        354: [353],
        355: [354],
        356: [355],
        357: [356],
        358: [357],
        359: [358],
        360: [284, 327],
        362: [328],
        363: [],
        364: [292],
        365: [327],
        368: [290, 355],
        393: [356, 277],
        394: [358, 279, 393],
        395: [363],
        396: [293, 364],
        397: [287, 365],
        408: [396],
        409: [408, 359],
        410: [409],
        411: [282],
        412: [411, 283],
        413: [412, 284],
        449: [408],
        450: [449],
        451: [450, 409],
        495: [396],
        496: [141, 267],
        505: [289],
        520: [363],
        537: [270, 272, 271, 273, 269],
        539: [449],
        540: [539],
        541: [539],
        542: [539],
        561: [496],
        562: [397],
        591: [562],
        592: [562],
        643: [397],
    };

    G.HeavenlyUpgradeChildren = {};
    for (var i in G.HeavenlyUpgradeParents) {
        for (var ii in G.HeavenlyUpgradeParents[i]) {
            if (!G.HeavenlyUpgradeChildren[G.HeavenlyUpgradeParents[i][ii]]) G.HeavenlyUpgradeChildren[G.HeavenlyUpgradeParents[i][ii]] = [];
            if (G.upgradesBID[parseInt(i)]) G.HeavenlyUpgradeChildren[G.HeavenlyUpgradeParents[i][ii]].push(parseInt(i));
        }
    }

});