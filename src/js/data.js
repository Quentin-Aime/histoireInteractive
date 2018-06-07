var map = {
	1: {
		startingX: 480,
		startingY: 430,
		name: 'docks',
		exits: [[0, 15, 375, 410],], //xmin, xmax, ymin, ymax
		exitDest: [2], //id de la map
		text: 'Vous êtes Althéos, le jeune héros envoyé par les dieux pour réclamer justice au nom de votre famille.\
				Après un long périple au sein des contrées grecques, votre voyage vous emmène sur les terres crétoises.\
				Après un rapide échange avec Hermès, le messager des dieux, vous descendez de votre navire, accompagnés\
				des autres sacrifices humains pour le minotaure, ainsi que par le capitaine de navire.\
				Celui-ci se dirige vers le garde afin de discuter de votre sort. Vous remarquez cependant une sortie\
				peu gardée sur votre gauche ...',
		changes: '',
		// pnj: [], // [x y sprite] on verra plus tard
		functionsCalled: ['timeout', [45, 3]] // function, [args]
	},
	2: {
		startingX: 780,
		startingY: 300,
		name: 'fields',
		exits: [[350, 450, 480, 550], [350, 450, 230, 260], [0, 15, 375, 410]], //xmin, xmax, ymin, ymax
		exitDest: [4, 5, 6], //id de la map
		text: 'Vous vous êtes enfui. Devant se dresse des campagnes dont vous ne savez rien, avec deux sentiers, l\'un vous\
		ramene dans la ville que vous venez de quitter sur votre gauche, l\'autre part sur votre droite. Vous pouvez également bravez\
		\' l\'aventure et vous engouffrez dans cette campagne.',
		changes: '',
		// pnj: [], // [x y sprite] on verra plus tard
		functionsCalled: [] // function, [args]		
	},
	3: {
		startingX: 780,
		startingY: 300,
		name: 'dungeon',
		exits: [], //xmin, xmax, ymin, ymax
		exitDest: [], //id de la map
		text: '',
		changes: '',
		// pnj: [], // [x y sprite] on verra plus tard
		functionsCalled: ['theEnd'] // function, [args]		
	},
	4: {
		startingX: 780,
		startingY: 300,
		name: 'dungeon',
		exits: [], //xmin, xmax, ymin, ymax
		exitDest: [], //id de la map
		text: '',
		changes: '',
		// pnj: [], // [x y sprite] on verra plus tard
		functionsCalled: ['theEnd'] // function, [args]		
	},
	5: {
		startingX: 780,
		startingY: 300,
		name: 'dungeon',
		exits: [], //xmin, xmax, ymin, ymax
		exitDest: [], //id de la map
		text: '',
		changes: '',
		// pnj: [], // [x y sprite] on verra plus tard
		functionsCalled: ['theEnd'] // function, [args]		
	},
	6: {
		startingX: 780,
		startingY: 300,
		name: 'dungeon',
		exits: [], //xmin, xmax, ymin, ymax
		exitDest: [], //id de la map
		text: '',
		changes: '',
		// pnj: [], // [x y sprite] on verra plus tard
		functionsCalled: ['theEnd'] // function, [args]		
	},
}