export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  price: number | null;
  discount?: number;
  rating: number;
  releaseDate: string;
  platform: string[];
  developer: string;
  publisher: string;
  features: string[];
}

export const featuredGames: Game[] = [
  {
    id: "1",
    title: "Cyber Nexus",
    description: "Immerse yourself in the neon-lit streets of New Meridian, a sprawling cyberpunk metropolis where corporations rule and technology has evolved beyond control. As a skilled hacker with enhanced abilities, navigate through the digital and physical realms to uncover a conspiracy that threatens to reshape reality itself.",
    imageUrl: "https://playism.com/wp-content/uploads/2024/12/01_Bladechimera_1920x1080.jpg",
    category: "Action RPG",
    price: 59.99,
    discount: 15,
    rating: 4.8,
    releaseDate: "2023-10-15",
    platform: ["PC", "PlayStation 5", "Xbox Series X"],
    developer: "Quantum Studios",
    publisher: "Digital Horizon",
    features: ["Open World", "Single Player", "Ray Tracing", "4K Support"]
  },
  {
    id: "2",
    title: "Legends of Valoria",
    description: "Embark on an epic journey through the mystical realm of Valoria, a land of ancient magic and forgotten secrets. As the last descendant of a legendary bloodline, master arcane powers and unite warring factions to face an awakening evil that threatens to consume the world.",
    imageUrl: "https://cdn2.unrealengine.com/fortnite-chapter-6-season-1-hunters-header-1900x600-d64708d185cf.jpg",
    category: "Fantasy RPG",
    price: 49.99,
    rating: 4.6,
    releaseDate: "2024-02-28",
    platform: ["PC", "PlayStation 5", "Xbox Series X", "Nintendo Switch"],
    developer: "Epic Tales Interactive",
    publisher: "Realm Games",
    features: ["Open World", "Multiplayer", "Controller Support", "Cloud Saves"]
  },
  {
    id: "3",
    title: "Velocity Surge",
    description: "Experience the adrenaline rush of next-generation racing in this futuristic combat racer. Pilot customizable anti-gravity vehicles through impossible tracks spanning exotic locations around the solar system, while deploying an arsenal of weapons to outmaneuver your opponents.",
    imageUrl: "https://www.wsgr.com/a/web/wqbLiY9WcexE1thekPhcRR/7DDDbV/egg-car-hero.jpg",
    category: "Racing",
    price: 39.99,
    discount: 20,
    rating: 4.5,
    releaseDate: "2024-01-05",
    platform: ["PC", "PlayStation 5", "Xbox Series X"],
    developer: "Turbo Pixel",
    publisher: "Hyperdrive Entertainment",
    features: ["Multiplayer", "Online Leaderboards", "120 FPS", "HDR Support"]
  },
  {
    id: "4",
    title: "Stellar Frontiers",
    description: "Command your own starship and crew in this vast space exploration adventure. Discover uncharted star systems, engage in diplomatic relations with alien civilizations, manage resources, and make decisions that will shape the fate of the galaxy.",
    imageUrl: "https://static-eu.prod-my.games/chronos-public-eu-hw-prod/site/news/2024/05/130-issue2/1180x690_Website_News.png",
    category: "Space Simulation",
    price: 54.99,
    rating: 4.7,
    releaseDate: "2023-11-20",
    platform: ["PC", "PlayStation 5", "Xbox Series X"],
    developer: "Interstellar Games",
    publisher: "Cosmic Entertainment",
    features: ["Open World", "Procedural Generation", "VR Support", "Mod Support"]
  }
];

export const popularGames: Game[] = [
  {
    id: "5",
    title: "Shadow Protocol",
    description: "Enter the world of covert operations as an elite agent with access to cutting-edge technology and training. Infiltrate high-security facilities, execute precision takedowns, and unravel a global conspiracy in this immersive stealth-action experience.",
    imageUrl: "https://assets.justinmind.com/wp-content/uploads/2020/10/video-hero-image-example.png",
    category: "Stealth Action",
    price: 45.99,
    rating: 4.4,
    releaseDate: "2023-09-01",
    platform: ["PC", "PlayStation 5", "Xbox Series X"],
    developer: "Phantom Studios",
    publisher: "Covert Operations",
    features: ["Single Player", "Ray Tracing", "HDR Support", "Adaptive Triggers"]
  },
  {
    id: "6",
    title: "Battle Arena Champions",
    description: "Compete in intense multiplayer battles featuring a diverse roster of heroes, each with unique abilities and playstyles. Master your favorite champion, climb the competitive ladder, and become a legend in the global arena.",
    imageUrl: "https://assets-prd.ignimgs.com/2023/11/17/souilslike-blogroll-2023-1700185497045.jpeg",
    category: "Multiplayer",
    price: null,
    rating: 4.2,
    releaseDate: "2022-07-15",
    platform: ["PC", "PlayStation 5", "Xbox Series X", "Mobile"],
    developer: "Victory Games",
    publisher: "Legend Entertainment",
    features: ["Free-to-Play", "Competitive", "Cross-Platform", "Regular Updates"]
  },
  {
    id: "7",
    title: "Wilderness Survivors",
    description: "Test your survival skills in a vast, procedurally generated wilderness. Craft tools, build shelters, hunt for food, and adapt to dynamic weather systems and wildlife behaviors in this immersive survival experience.",
    imageUrl: "https://cdn.prod.website-files.com/61897942a111e71d881c9cf0/6757c9737394e2e8ae775ccd_UNO_2024-Oct_09-01_Herobanner-min.png",
    category: "Survival",
    price: 29.99,
    discount: 25,
    rating: 4.3,
    releaseDate: "2023-03-10",
    platform: ["PC", "PlayStation 5", "Xbox Series X"],
    developer: "Horizon Studios",
    publisher: "Frontier Games",
    features: ["Open World", "Crafting", "Multiplayer", "Dynamic Weather"]
  },
  {
    id: "8",
    title: "Pixel Kingdoms",
    description: "Build and manage your medieval kingdom in this charming strategy simulation. Construct buildings, assign villagers to different professions, trade with neighboring realms, and defend your territory from invaders.",
    imageUrl: "https://cdn2.unrealengine.com/en-fnfig-32-40-c1s3-coverart-3840x2160-3840x2160-237378246f70.jpg",
    category: "Strategy",
    price: 19.99,
    rating: 4.5,
    releaseDate: "2023-06-20",
    platform: ["PC", "Mobile", "Nintendo Switch"],
    developer: "Tiny Crown Studios",
    publisher: "Pixel Perfect Games",
    features: ["Building", "Resource Management", "Offline Play", "Regular Updates"]
  }
];

export const newReleases: Game[] = [
  {
    id: "9",
    title: "Astral Odyssey",
    description: "Embark on a mind-bending journey through surreal landscapes and abstract dimensions. Solve environmental puzzles, encounter bizarre entities, and uncover the mysteries of consciousness in this artistic exploration game.",
    imageUrl: "https://www.mso.org/app/uploads/2024/10/2425_MSO-S04-web-calHdr_1250x385.jpg",
    category: "Adventure",
    price: 24.99,
    rating: 4.6,
    releaseDate: "2024-03-15",
    platform: ["PC", "PlayStation 5", "Xbox Series X"],
    developer: "Dream Canvas",
    publisher: "Abstract Visions",
    features: ["Immersive Story", "Unique Art Style", "Original Soundtrack", "Accessibility Options"]
  },
  {
    id: "10",
    title: "Touchdown Champions",
    description: "Experience the most authentic football simulation with realistic player movements, advanced team management, and immersive stadium atmospheres. Lead your team to glory through multiple seasons and competitions.",
    imageUrl: "https://assets.justinmind.com/wp-content/uploads/2018/07/10-hero-image-website-ideas-to-inspire-you-header-3-768x492.png",
    category: "Sports",
    price: 59.99,
    rating: 4.4,
    releaseDate: "2024-04-05",
    platform: ["PC", "PlayStation 5", "Xbox Series X"],
    developer: "Endzone Interactive",
    publisher: "Sports Games Inc.",
    features: ["Realistic Physics", "Online Leagues", "Career Mode", "Commentary"]
  },
  {
    id: "11",
    title: "Monster Tamers",
    description: "Explore a vibrant world filled with mysterious creatures that you can befriend, train, and battle alongside. Discover new regions, uncover ancient legends, and become the greatest monster tamer in this charming adventure.",
    imageUrl: "https://cdn2.unrealengine.com/en-fnfig-32-40-c1s3-coverart-3840x2160-3840x2160-237378246f70.jpg",
    category: "RPG",
    price: 49.99,
    discount: 10,
    rating: 4.7,
    releaseDate: "2024-02-10",
    platform: ["Nintendo Switch", "PC", "PlayStation 5", "Xbox Series X"],
    developer: "Creature Studios",
    publisher: "Adventure Games",
    features: ["Open World", "Collecting", "Multiplayer Battles", "Post-Game Content"]
  },
  {
    id: "12",
    title: "Rhythmic Beats",
    description: "Feel the rhythm and test your reflexes in this dynamic music game featuring tracks from popular artists across multiple genres. Perfect your timing, unlock new songs, and climb the global leaderboards.",
    imageUrl: "https://playism.com/wp-content/uploads/2024/12/01_Bladechimera_1920x1080.jpg",
    category: "Music",
    price: 19.99,
    rating: 4.3,
    releaseDate: "2024-01-25",
    platform: ["PC", "PlayStation 5", "Xbox Series X", "Mobile"],
    developer: "Harmony Games",
    publisher: "Beat Entertainment",
    features: ["Rhythm Action", "Licensed Music", "Custom Difficulty", "Party Mode"]
  }
];

export const allGames = [...featuredGames, ...popularGames, ...newReleases];

export const getGameById = (id: string): Game | undefined => {
  return allGames.find(game => game.id === id);
};

export const getGamesByCategory = (category: string): Game[] => {
  return allGames.filter(game => game.category.toLowerCase() === category.toLowerCase());
};
