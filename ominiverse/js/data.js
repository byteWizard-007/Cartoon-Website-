const multiverseData = {
    ben10: {
        id: 'ben10', title: 'Ben 10', bg: 'var(--neon-green)',
        heroImage: 'C:/Users/shiav/.gemini/antigravity/brain/f100df31-2d85-4d12-bb32-1787ad449cb3/ben10_banner_1775830257789.png',
        desc: 'Wield the power of the Omnitrix. Transform into incredible alien forms.',
        characters: [
            { name: 'Ben Tennyson', img: '', desc: 'Wielder of the Omnitrix.', powers: 90, speed: 70, weak: 'Recharge time' },
            { name: 'Gwen Tennyson', img: '', desc: 'Magic user and Anodite.', powers: 85, speed: 60, weak: 'Physical strength' },
            { name: 'Kevin Levin', img: '', desc: 'Osmosian matter absorber.', powers: 80, speed: 65, weak: 'Energy overload' }
        ]
    },
    pokemon: {
        id: 'pokemon', title: 'Pokémon', bg: '#FFDE00',
        heroImage: 'C:/Users/shiav/.gemini/antigravity/brain/f100df31-2d85-4d12-bb32-1787ad449cb3/pokemon_banner_1775830272532.png',
        desc: 'Gotta catch em all! Journey through vibrant regions.',
        characters: [
            { name: 'Pikachu', img: '', desc: 'Electric mouse.', powers: 80, speed: 95, weak: 'Ground' },
            { name: 'Charizard', img: '', desc: 'Fire/Flying dragon.', powers: 92, speed: 85, weak: 'Water/Rock' },
            { name: 'Mewtwo', img: '', desc: 'Genetic psychic.', powers: 100, speed: 90, weak: 'Bug/Ghost/Dark' }
        ]
    },
    doraemon: {
        id: 'doraemon', title: 'Doraemon', bg: '#00A0E9',
        heroImage: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80',
        desc: 'A robotic cat from the 22nd century with a 4D pocket of gadgets.',
        characters: [
            { name: 'Doraemon', img: '', desc: 'Robot cat.', powers: 100, speed: 40, weak: 'Mice' },
            { name: 'Nobita', img: '', desc: 'Lazy but kind boy.', powers: 10, speed: 10, weak: 'Everything' },
            { name: 'Gian', img: '', desc: 'Bully with a soft heart.', powers: 50, speed: 30, weak: 'His mom' }
        ]
    },
    avengers: {
        id: 'avengers', title: 'Avengers', bg: '#E23636',
        heroImage: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&q=80',
        desc: 'Earths mightiest heroes assembling to save the universe.',
        characters: [
            { name: 'Iron Man', img: '', desc: 'Genius billionaire.', powers: 90, speed: 85, weak: 'Heart/Ego' },
            { name: 'Thor', img: '', desc: 'God of Thunder.', powers: 98, speed: 70, weak: 'Magic' },
            { name: 'Hulk', img: '', desc: 'Rage monster.', powers: 100, speed: 50, weak: 'Calmness' }
        ]
    },
    chhotabheem: { id: 'chhotabheem', title: 'Chhota Bheem', bg: '#F8981D', heroImage: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80', desc: 'The strongest boy of Dholakpur.', characters: [{name: 'Bheem', powers: 95, speed: 80, weak: 'Laddoos'}, {name: 'Chutki', powers: 40, speed: 50, weak: 'None'}, {name: 'Raju', powers: 30, speed: 60, weak: 'Fear'}] },
    jackiechan: { id: 'jackiechan', title: 'Jackie Chan Adv', bg: '#E51A22', heroImage: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80', desc: 'Magic talismans and martial arts.', characters: [{name: 'Jackie', powers: 75, speed: 90, weak: 'Magic'}, {name: 'Uncle', powers: 85, speed: 20, weak: 'Age'}, {name: 'Jade', powers: 40, speed: 80, weak: 'Impatience'}] },
    naruto: { id: 'naruto', title: 'Naruto', bg: '#FF7B00', heroImage: 'https://images.unsplash.com/photo-1614583224978-f05cea51a089?auto=format&fit=crop&q=80', desc: 'Believe it! The path of the ninja.', characters: [{name: 'Naruto', powers: 95, speed: 90, weak: 'Genjutsu'}, {name: 'Sasuke', powers: 95, speed: 95, weak: 'Arrogance'}] },
    dragonball: { id: 'dragonball', title: 'Dragon Ball', bg: '#F47321', heroImage: 'https://images.unsplash.com/photo-1580477651160-c39ddff72c91?auto=format&fit=crop&q=80', desc: 'Super Saiyans and eternal dragons.', characters: [{name: 'Goku', powers: 100, speed: 100, weak: 'Needles'}, {name: 'Vegeta', powers: 98, speed: 98, weak: 'Pride'}] },
    shinchan: { id: 'shinchan', title: 'Shinchan', bg: '#ED1E24', heroImage: 'https://images.unsplash.com/photo-1627483256030-97c72957bd94?auto=format&fit=crop&q=80', desc: 'Mischievous 5-year-old taking over Kasukabe.', characters: [{name: 'Shinchan', powers: 20, speed: 60, weak: 'Bell peppers'}] },
    teentitans: { id: 'teentitans', title: 'Teen Titans', bg: '#5D2E8C', heroImage: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80', desc: 'When there is trouble, you know who to call.', characters: [{name: 'Robin', powers: 60, speed: 85, weak: 'No powers'}, {name: 'Raven', powers: 95, speed: 70, weak: 'Emotions'}] },
    powerrangers: { id: 'powerrangers', title: 'Power Rangers', bg: '#E51A22', heroImage: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?auto=format&fit=crop&q=80', desc: 'Morphin time!', characters: [{name: 'Red Ranger', powers: 80, speed: 80, weak: 'Without suit'}, {name: 'Green Ranger', powers: 85, speed: 85, weak: 'Megazord destroys'}] },
    scoobydoo: { id: 'scoobydoo', title: 'Scooby-Doo', bg: '#79C142', heroImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80', desc: 'Solving mysteries in the Mystery Machine.', characters: [{name: 'Scooby', powers: 10, speed: 70, weak: 'Ghosts'}, {name: 'Shaggy', powers: 10, speed: 80, weak: 'Food'}] },
    tomandjerry: { id: 'tomandjerry', title: 'Tom & Jerry', bg: '#E2973E', heroImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80', desc: 'The eternal cat and mouse chase.', characters: [{name: 'Tom', powers: 30, speed: 70, weak: 'Jerry'}, {name: 'Jerry', powers: 40, speed: 90, weak: 'Cheese'}] },
    kungfupanda: { id: 'kungfupanda', title: 'Kung Fu Panda', bg: '#DAA520', heroImage: 'https://images.unsplash.com/photo-1533558701576-23c65e2373ed?auto=format&fit=crop&q=80', desc: 'The Dragon Warrior is here.', characters: [{name: 'Po', powers: 90, speed: 50, weak: 'Food'}, {name: 'Tigress', powers: 85, speed: 90, weak: 'Rigidity'}] },
    spiderman: { id: 'spiderman', title: 'Spider-Man', bg: '#D00E2B', heroImage: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80', desc: 'Into the Spider-Verse!', characters: [{name: 'Peter Parker', powers: 85, speed: 90, weak: 'Mary Jane'}, {name: 'Miles Morales', powers: 88, speed: 95, weak: 'Inexperience'}] },
    batman: { id: 'batman', title: 'Batman', bg: '#232323', heroImage: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80', desc: 'The Dark Knight of Gotham.', characters: [{name: 'Batman', powers: 80, speed: 70, weak: 'No powers'}, {name: 'Joker', powers: 50, speed: 50, weak: 'Insanity'}] },
    superman: { id: 'superman', title: 'Superman', bg: '#005CE6', heroImage: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80', desc: 'The Man of Steel.', characters: [{name: 'Superman', powers: 100, speed: 100, weak: 'Kryptonite'}, {name: 'Lex', powers: 60, speed: 30, weak: 'Ego'}] },
    minions: { id: 'minions', title: 'Minions', bg: '#FCE029', heroImage: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&q=80', desc: 'Banana! Serving the most despicable masters.', characters: [{name: 'Kevin', powers: 20, speed: 40, weak: 'Bananas'}, {name: 'Bob', powers: 15, speed: 30, weak: 'Teddy'}] },
    frozen: { id: 'frozen', title: 'Frozen', bg: '#81D8D0', heroImage: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&q=80', desc: 'Let it go!', characters: [{name: 'Elsa', powers: 95, speed: 40, weak: 'Fear'}, {name: 'Anna', powers: 20, speed: 50, weak: 'Impulsiveness'}] },
    cars: { id: 'cars', title: 'Cars', bg: '#E51A22', heroImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80', desc: 'Ka-chow!', characters: [{name: 'Lightning McQueen', powers: 40, speed: 100, weak: 'Dirt tracks'}, {name: 'Mater', powers: 30, speed: 60, weak: 'Rust'}] }
};
