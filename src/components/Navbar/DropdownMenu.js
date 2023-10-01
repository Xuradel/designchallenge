import React from 'react'
import { SiEpicgames } from 'react-icons/si'
import { HiChevronRight } from 'react-icons/hi'
import Search from '../Search';
const DropdownMenu = ({ title }) => {

    const gamesList = [
        "Among Us",
        "Apex Legends",
        "Call of Duty: Warzone",
        "Counter-Strike: Global Offensive",
        "Dota 2",
        "Fall Guys: Ultimate Knockout",
        "Fortnite",
        "Grand Theft Auto V",
        "League of Legends",
        "Minecraft",
        "Overwatch",
        "PlayerUnknown's Battlegrounds",
        "Rainbow Six Siege",
        "Rocket League",
        "The Elder Scrolls V: Skyrim",
        "Valorant",
        "World of Warcraft",
        "Animal Crossing: New Horizons",
        "Cyberpunk 2077",
        "Dead by Daylight",
        "Destiny 2",
        "FIFA 21",
        "Genshin Impact",
        "Breath of the Wild",
    ];
    const gamesList2 = [
        "Dead Cells",
        "Hollow Knight",
        "The Witcher 3: Wild Hunt",
        "Stardew Valley",
        "Terraria",
        "Undertale",
        "Hades",
        "Dark Souls III",
        "Sekiro: Shadows Die Twice",
        "Resident Evil Village",
        "The Legend of Zelda: Ocarina of Time",
        "Super Mario Odyssey",
        "Red Dead Redemption 2",
        "The Last of Us Part II",
        "Horizon Zero Dawn",
        "Celeste",
        "Monster Hunter: World",
        "Super Smash Bros. Ultimate",
        "Gears 5",
        "Assassin's Creed Valhalla",
        "Rainbow Six Siege",
        "Fallout 4",
        "Civilization VI",
    ];

    const gamesList3 = [
        "Mortal Kombat 11",
        "Bioshock Infinite",
        "The Outer Worlds",
        "Cuphead",
        "Bastion",
        "Transistor",
        "The Stanley Parable",
        "Limbo",
        "Ori and the Blind Forest",
        "Subnautica",
        "Doom Eternal",
        "Star Wars Jedi: Fallen Order",
        "Control",
        "The Witness",
        "Katana Zero",
        "Slay the Spire",
        "Undertale",
        "Braid",
        "Oxenfree",
        "Hyper Light Drifter",
        "Firewatch",
        "Hollow Knight",
        "Dead by Daylight",
    ];
    const gamesList4 = [
        "OSRS",
        "Runescape 3",
        "Valorant",
        "League of Legends"
    ];
    const gamesList5 = [
        "OSRS",
        "Runescape 3"
    ];
    const gamesList6 = [
        "Celeste",
        "Terraria",
        "Sekiro: Shadows Die Twice",
        "Red Dead Redemption 2",
        "Hades",
        "Fall Guys: Ultimate Knockout",
        "Stardew Valley",
        "Cuphead",
        "Breath of the Wild",
        "Apex Legends",
        "Minecraft",
        "Super Smash Bros. Ultimate",
        "Control",
        "Genshin Impact",
        "The Witcher 3: Wild Hunt",
        "Monster Hunter: World",
        "Among Us",
        "Civilization VI",
        "Rainbow Six Siege",
        "Overwatch",
        "Super Mario Odyssey",
        "Fortnite",
        "PlayerUnknown's Battlegrounds",
        "Dota 2"
    ];
    let games = [];

    switch (title) {
        case 'CURRENCY':
            games = [
                'OSRS',
                'Runescape 3',
                'WoW Retail',
                'Final Fantasy XIV',
                'WoW Classic',
                'Roblox',
            ];
            break;
        case 'ITEMS':
            games = [
                'OSRS',
                'Runescape 3',
                'Diablo 2',
                'Path of Exile',
                'WoW Classic',
                'Roblox',
            ];
            break;
        case 'ACCOUNTS':
            games = [
                'OSRS',
                'Runescape 3',
                'League of Legends',
                'Valorant',
                'Fortnite',
                'Apex Legends',
            ];
            break;
        case 'SERVICES':
            games = [];
            break;
        case 'SWAP':
            games = [];
            break;
        case 'SELL':
            games = [];
            break;
        default:
            games = [];
            break;
    }


    return (
        <div className="dropdown-menu">
            <div className='left-menu'>
                <div className='dropdown-title'>
                    {title === 'SWAP' ? (
                        <div className='games-list change-service'>
                            <div className='change'><div className='service-text'>Skins</div> <HiChevronRight size={20} /></div>
                            <div className='change'><div className='service-text'>Accounts</div> <HiChevronRight size={20} /></div>
                        </div>
                    ) : title === 'SELL' ? (
                        <div className='games-list change-service'>
                            <div className='change'><div className='service-text'>Currency</div> <HiChevronRight size={20} /></div>
                            <div className='change'><div className='service-text'>Items</div> <HiChevronRight size={20} /></div>
                            <div className='change'><div className='service-text'>Accounts</div> <HiChevronRight size={20} /></div>
                        </div>
                    ) : (
                        <div className='title-dropdown'>
                            <span className='green-underline'>Trending</span> Games</div>
                    )}
                </div>
                <div className='games-list'>
                    {games.map(game => (
                        <div className='games'>
                            {games ? <SiEpicgames size={24} color='#fff' /> : null}
                            {game}
                        </div>
                    ))}
                </div>
            </div>
            <div className='right-menu'>
                <div className='dropdown-search'>
                    <Search />
                </div>
                <div className='dropdown-items'>
                    {title === 'CURRENCY' && gamesList.sort().map((game, index) => (
                        <div key={index} className='grid-item'>
                            <div className='game-icon-grid'><SiEpicgames size={20} color='#fff' /></div>
                             {game}
                        </div>
                    ))}
                    {title === 'ITEMS' && gamesList2.sort().map((game, index) => (
                        <div key={index} className='grid-item'>
                            <div className='game-icon-grid'><SiEpicgames size={20} color='#fff' /></div> {game}
                        </div>
                    ))}
                    {title === 'ACCOUNTS' && gamesList3.sort().map((game, index) => (
                        <div key={index} className='grid-item'>
                            <div className='game-icon-grid'><SiEpicgames size={20} color='#fff' /></div> {game}
                        </div>
                    ))}
                    {title === 'SERVICES' && gamesList4.sort().map((game, index) => (
                        <div key={index} className='grid-item'>
                            <div className='game-icon-grid'><SiEpicgames size={20} color='#fff' /></div> {game}
                        </div>
                    ))}
                    {title === 'SWAP' && gamesList5.sort().map((game, index) => (
                        <div key={index} className='grid-item'>
                            <div className='game-icon-grid'><SiEpicgames size={20} color='#fff' /></div> {game}
                        </div>
                    ))}
                    {title === 'SELL' && gamesList6.sort().map((game, index) => (
                        <div key={index} className='grid-item'>
                            <div className='game-icon-grid'><SiEpicgames size={20} color='#fff' /></div> {game}
                        </div>
                    ))}
                </div>



            </div>
        </div>
    )
}

export default DropdownMenu
