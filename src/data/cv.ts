import { template } from "@/settings";

export const experiences = [
	{
		company: '',
		time: 'Avr 2025 - juin 2025',
		title: 'T Perso',
		location: 'Fianarantsoa',
		description: "Création d'un site Ecommerce pour une ventes des chaussire",
		tech: 'Next Js,laravel, Tailwincss, PsQL',
	},
	{
		company: '',
		time: 'Juil 2024 - Nov 2024',
		title: 'Stage',
		location: 'Emit Fianarantsoa ',
		description: "Conception et réalisation d'une application web gestion du budget-extrabudgetaire du CHU Tambohobe",
		tech: 'Next Js, Nest Js, Tailwincss,Psql ',
	},
	{
		company: '',
		time: '1914 - 1934',
		title: 'Stage',
		location: 'Paris, France',
		description: 'Led groundbreaking studies on radioactivity and mentored future Nobel Prize laureates.',
		tech: 'Nodjs, React Js, Bootstrap',
	},
	{
		company: '',
		time: 'juin-2023 - sept 2023',
		title: 'Stage',
		location: 'Dren HM, Fianarantsoa',
		description: 'Conception et dvellopment du logiciel desktop gestion du matriels consomptible ',
		tech: 'Java Swing, Mysql',
	},
	{
		company: '',
		time: '1914 - 1934',
		title: 'T Perso',
		location: 'Paris, France',
		description: 'Led groundbreaking studies on radioactivity and mentored future Nobel Prize laureates.',
		tech: '',
	},
];

export const education = [
	{
		school: "Ecole de Management et d'Innovation tecnologique (EMIT)",
		time: '2024-2025',
		degree: 'Master 1 en SIGD',
		location: 'Fianarantsoa',
		description: 'Preparation du diplome de master ',
	},	{
		school: "Ecole de Management et d'Innovation tecnologique (EMIT)",
		time: '2021-2024',
		degree: 'Licencier en DA2I',
		location: 'Fianarantsoa',
		description: "Obtentioon de dîplome de licence en Developpemnt d'Application Internet et Intranet",
	},
	{
		school: 'Lycé Mairie Immaculée (LMI)',
		time: '2020',
		degree: 'BACC',
		location: 'Ikalamavoony',
		description: 'Obtention du dîplome bacclaureat',
	}
];

export const skillsDev = [
	{
		title: 'Java',
		description: 'Framework ',
		List:[]
	},
	{
		title: 'Java Script',
		description: 'Framework ',
		List:[]
	},
	{
		title: 'Java Script',
		description: 'Framework',
		List:[]
	},
];

export const skills_Other = [
	{
		title: 'Java',
		description: 'Framework ',
		List:[]
	},
	{
		title: 'Java Script',
		description: 'Framework ',
		List:[]
	},
	{
		title: 'Java Script',
		description: 'Framework',
		List:[]
	},
];

export const publications = [
	{
		title: '',
		authors: '',
		journal: '',
		time: '',
		link: '',
		abstract: '',
	},
	{
		title: 'The Radiation of Uranium Compounds',
		authors: 'Marie Curie',
	journal: 'Comptes Rendus de l’Académie des Sciences',
 	time: '1898',
	 	link: '#',
 	abstract: 'Early research leading to the identification of uranium’s radioactive properties.',
	 },
	 
	{
		title: 'The Radiation of Uranium Compounds',
		authors: 'Marie Curie',
	journal: 'Comptes Rendus de l’Académie des Sciences',
 	time: '1898',
	 	link: '#',
 	abstract: 'Early research leading to the identification of uranium’s radioactive properties.',
	 },
	 
	{
		title: 'The Radiation of Uranium Compounds',
		authors: 'Marie Curie',
	journal: 'Comptes Rendus de l’Académie des Sciences',
 	time: '1898',
	 	link: '#',
 	abstract: 'Early research leading to the identification of uranium’s radioactive properties.',
	 },
];


export const Projets = [
	{//laravel,next, tailwndcss, Psql,github
	  imageSrc: `${template.base}/Projet3_Ecom.png`,
	  title: 'site E-comerce',
	  description: 'Ventes Chaussures',
	  techIcons: [
		{
		  title: 'Next.JS',
		  path: 'http://www.w3.org/2000/svg',
		},
		{
		  title: 'Tailwind CSS',
		  path: 'http://www.w3.org/2000/svg',
		},
				{
		  title: 'Laravel',
		  path: 'http://www.w3.org/2000/svg',
		},
		{
		  title: 'PosgreSQL',
		  path: 'http://www.w3.org/2000/svg',
		}
	  ],
	},
	{
		imageSrc: `${template.base}/Porjet2_GExtr.png`,
		title: 'Application web',
		description: 'Surveillance environnementale avec des outils modernes.',
		techIcons: [
		  {
			title: 'JavaScript',
			path: 'http://www.w3.org/2000/svg',
		  },
		  {
			title: 'Tailwind CSS',
			path: 'http://www.w3.org/2000/svg',
		  },
		],
	  },
	  {// Next.js, Nest.js, tailwindcss, Psql,github
		imageSrc: `${template.base}/Porjet2_GExtr.png`,
		title: 'Projet Nature',
		description: 'Surveillance environnementale avec des outils modernes.',
		techIcons: [
		  {
			title: 'JavaScript',
			path: 'http://www.w3.org/2000/svg',
		  },
		  {
			title: 'Tailwind CSS',
			path: 'http://www.w3.org/2000/svg',
		  },
		],
	  },
	  {
		imageSrc: `${template.base}/Porjet2_GExtr.png`,
		title: 'Projet Nature',
		description: 'Surveillance environnementale avec des outils modernes.',
		techIcons: [
		  {
			title: 'JavaScript',
			path: 'http://www.w3.org/2000/svg',
		  },
		  {
			title: 'Github',
			path: 'http://www.w3.org/2000/svg',
		  },
		],
	  },
	{//java swing, mysql, Netbeans
	  imageSrc: `${template.base}/Projet1_Mconsomptible.png`,
	  title: 'E-Commerce',
	  description: 'Une boutique en ligne construite avec Laravel et Vue.',
	  techIcons: [
		{
		  title: 'Laravel',
		  path: 'http://www.w3.org/2000/svg',
		},
		{
		  title: 'Vue.js',
		  path: 'http://www.w3.org/2000/svg',
		},
	  ],
	},
  ];
  