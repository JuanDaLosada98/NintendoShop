import React, { useEffect } from 'react';
import { NintendoSwitchProduct } from '../../components/NintendoSwitchProduct/NintendoSwitchProduct';
import { HashRouter } from 'react-router-dom';
import './App.css';
import { ComboContainer } from '../ComboContainer/ComboContainer';
import { ComboProps } from '../../components/Combo/Combo';
import { Summary } from '../../components/Summary/Summary';
import { ClientModal } from '../../components/ClientModal/ClientModal';
import { CreatedCombos } from '../../components/CreatedCombos/CreatedCombos';


const consoleImageUrl = '/images/console_images/';
const gameImageUrl = '/images/game_images/';
const joyConImageUrl = '/images/JoyCon_images/';
const accesoriesImageUrl = '/images/accesories_images/'


export interface productNintendo {
    name: string;
    price: number;
    id: string | number;
    image: string;
    type?: 'Nintendo Switch Game' | 'Nintendo Switch Console' | 'Joy Con Set' | 'Nintendo Switch Accesories' | 'Left Joy Con' | 'Right Joy Con' ,
    count?: number,
    joyConSet?: boolean;
}

const products: productNintendo[] = [
    {
        id: 0,
        type: 'Nintendo Switch Console',
        name: 'Super smash bros. Edition',
        price: 300,
        image: `${consoleImageUrl}smash.jpeg`,


    },
    {
        id: 1,
        type: 'Nintendo Switch Console',
        name: 'Mario 35 Aniversary Edition',
        price: 320,
        image: `${consoleImageUrl}mario35.jpeg`,

    },
    {
        id: 2,
        type: 'Nintendo Switch Console',
        name: 'Animal crossing Switch Edition',
        price: 320,
        image: `${consoleImageUrl}animalcrossing.jpeg`,

    },
    {
        id: 3,
        type: 'Nintendo Switch Console',
        name: 'Diablo Switch Edition',
        price: 320,
        image: `${consoleImageUrl}diablo.jpeg`,

    },
    {
        id: 4,
        type: 'Nintendo Switch Console',
        name: 'Fortnite Switch Edition',
        price: 320,
        image: `${consoleImageUrl}fortnite.jpeg`,

    },
    {
        id: 5,
        type: 'Nintendo Switch Console',
        name: 'Nintendo Switch with Gray Joy Con',
        price: 320,
        image: `${consoleImageUrl}grey.jpeg`,

    },
    {
        id: 6,
        type: 'Nintendo Switch Console',
        name: 'Nintendo Switch with Neon Joy Con',
        price: 320,
        image: `${consoleImageUrl}neon.jpeg`,

    },
    {
        id: 7,
        type: 'Nintendo Switch Console',
        name: 'Nintendo Switch Lite Blue',
        price: 320,
        image: `${consoleImageUrl}liteblue.jpeg`,

    },
    {
        id: 8,
        type: 'Nintendo Switch Console',
        name: 'Nintendo Switch Lite Gray',
        price: 320,
        image: `${consoleImageUrl}litegrey.webp`,

    },
    {
        id: 9,
        type: 'Nintendo Switch Console',
        name: 'Nintendo Switch Lite Rose',
        price: 320,
        image: `${consoleImageUrl}literose.webp`,

    },
    {
        id: 10,
        type: 'Nintendo Switch Console',
        name: 'Nintendo Switch Lite Yellow',
        price: 320,
        image: `${consoleImageUrl}liteyellow.webp`,

    },
    {
        id: 11,
        type: 'Nintendo Switch Console',
        name: 'Nintendo Switch Mario Kart Edition',
        price: 320,
        image: `${consoleImageUrl}mariokart.jpg`,

    },
    {
        id: 12,
        type: 'Nintendo Switch Console',
        name: 'Nintendo Switch Monster Hunter Rise',
        price: 320,
        image: `${consoleImageUrl}monsterhunter.webp`,

    },
    {
        id: 13,
        type: 'Nintendo Switch Console',
        name: 'Nintendo Switch Mario Odyssey Edition',
        price: 320,
        image: `${consoleImageUrl}oddyssi.jpeg`,

    },
    {
        id: 14,
        type: 'Nintendo Switch Console',
        name: 'Nintendo Switch Splatoon 2 Edition',
        price: 320,
        image: `${consoleImageUrl}splatoon.jpg`,

    },
    {
        id: 15,
        type: 'Nintendo Switch Game',
        name: 'Animal Crossing: New Horizon',
        price: 60,
        image: `${gameImageUrl}animalcrossing.webp`,


    },
    {
        id: 16,
        type: 'Nintendo Switch Game',
        name: 'Arms',
        price: 39,
        image: `${gameImageUrl}arms.jpeg`,

    },
    {
        id: 17,
        type: 'Nintendo Switch Game',
        name: 'Bravely Default II',
        price: 60,
        image: `${gameImageUrl}brave.webp`,

    },
    {
        id: 18,
        type: 'Nintendo Switch Game',
        name: 'Crash Bandicoot N.Sane Trilogy',
        price: 39,
        image: `${gameImageUrl}crash.jpeg`,

    },
    {
        id: 19,
        type: 'Nintendo Switch Game',
        name: 'Crash Bandicoot 4: It´s About Time',
        price: 39,
        image: `${gameImageUrl}crash4.jpeg`,

    },
    {
        id: 20,
        type: 'Nintendo Switch Game',
        name: 'Diablo III',
        price: 39,
        image: `${gameImageUrl}diablo.webp`,

    },
    {
        id: 21,
        type: 'Nintendo Switch Game',
        name: 'Luigis Mansion 3',
        price: 60,
        image: `${gameImageUrl}luigi.jpeg`,

    },
    {
        id: 22,
        type: 'Nintendo Switch Game',
        name: 'Super Mario 3d World + Bowser´s Fury',
        price: 60,
        image: `${gameImageUrl}mario3dworld.jpeg`,

    },
    {
        id: 23,
        type: 'Nintendo Switch Game',
        name: 'Mario Kart 8 Deluxe',
        price: 60,
        image: `${gameImageUrl}mariokart.jpeg`,

    },
    {
        id: 24,
        type: 'Nintendo Switch Game',
        name: 'Super Mario Party',
        price: 60,
        image: `${gameImageUrl}marioparty.jpeg`,

    },
    {
        id: 25,
        type: 'Nintendo Switch Game',
        name: 'Super Mario 3d All Starts',
        price: 60,
        image: `${gameImageUrl}mariostars.webp`,

    },
    {
        id: 26,
        type: 'Nintendo Switch Game',
        name: 'New Super Mario U Deluxe',
        price: 60,
        image: `${gameImageUrl}mariou.jpeg`,

    },
    {
        id: 27,
        type: 'Nintendo Switch Game',
        name: 'Minecraft',
        price: 39,
        image: `${gameImageUrl}minecraft.webp`,

    },
    {
        id: 28,
        type: 'Nintendo Switch Game',
        name: 'Monster Hunter Rise',
        price: 60,
        image: `${gameImageUrl}monsterhunter.webp`,

    },
    {
        id: 29,
        type: 'Nintendo Switch Game',
        name: 'Super Mario Odyssey',
        price: 60,
        image: `${gameImageUrl}odisi.jpeg`,

    },
    {
        id: 30,
        type: 'Nintendo Switch Game',
        name: 'Narita Boy',
        price: 30,
        image: `${gameImageUrl}naritaboy.webp`,

    },
    {
        id: 31,
        type: 'Nintendo Switch Game',
        name: 'Paper Mario The Origami King',
        price: 60,
        image: `${gameImageUrl}papermario.jpeg`,

    },
    {
        id: 32,
        type: 'Nintendo Switch Game',
        name: 'Pikmin 3 Deluxe',
        price: 60,
        image: `${gameImageUrl}pikmin.`,

    },
    {
        id: 33,
        type: 'Nintendo Switch Game',
        name: 'Skyrim',
        price: 39,
        image: `${gameImageUrl}skyrim.jpeg`,

    },
    {
        id: 34,
        type: 'Nintendo Switch Game',
        name: 'Super Smash Bros. Ultimate',
        price: 60,
        image: `${gameImageUrl}smash.jpeg`,

    },
    {
        id: 35,
        type: 'Nintendo Switch Game',
        name: 'Splatoon 2',
        price: 60,
        image: `${gameImageUrl}splatoon.jpeg`,

    },
    {
        id: 36,
        type: 'Nintendo Switch Game',
        name: 'Spyro Trilogy',
        price: 60,
        image: `${gameImageUrl}spyro.webp`,

    },
    {
        id: 37,
        type: 'Nintendo Switch Game',
        name: 'Don´t Starve Nintendo Switch Edition',
        price: 20,
        image: `${gameImageUrl}starve.webp`,

    },
    {
        id: 38,
        type: 'Nintendo Switch Game',
        name: 'Wolfenstein II',
        price: 39,
        image: `${gameImageUrl}wolf.webp`,

    },
    {
        id: 39,
        type: 'Nintendo Switch Game',
        name: 'The Legend Of Zelda Breath Of The Wild',
        price: 60,
        image: `${gameImageUrl}zelda.webp`,

    },
    {
        id: 40,
        type: 'Nintendo Switch Game',
        name: 'Hyrule Warriors Age Of Calamity',
        price: 60,
        image: `${gameImageUrl}zeldaw.webp`,

    },
    {
        id: 41,
        type: 'Nintendo Switch Game',
        name: 'The Legend Of Zelda: Link´s Awakening',
        price: 39,
        image: `${gameImageUrl}zeldawake.jpeg`,

    },
    {
        id: 42,
        type: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Gray Color',
        price: 120,
        image: `${joyConImageUrl}gray.png`,
       

    },
    {
        id: 43,
        type: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Neon Blue/Red',
        price: 120,
        image: `${joyConImageUrl}neonblue.png`,
      

    },
    {
        id: 44,
        type: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Neon Orange/Purple',
        price: 120,
        image: `${joyConImageUrl}orangeone.png`,
        

    },
    {
        id: 45,
        type: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Neon Rose/Green',
        price: 120,
        image: `${joyConImageUrl}roseneon.png`,
       

    },
    {
        id: 46,
        type: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Neon BLue/Yellow',
        price: 120,
        image: `${joyConImageUrl}yellowneon.png`,
        

    },
    {
        id: 47,
        type: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Neon Yellow',
        price: 120,
        image: `${joyConImageUrl}yellowset.jpeg`,
       

    },
    {
        id: 48,
        type: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Red Color',
        price: 120,
        image: `${joyConImageUrl}redset.png`,
        

    },
    {
        id: 49,
        type: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Blue Color',
        price: 120,
        image: `${joyConImageUrl}blueset.jpeg`,
      

    },
    {
        id: 50,
        type: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Zelda Skyward Sword',
        price: 140,
        image: `${joyConImageUrl}zeldaset.jpeg`,
       

    },
    {
        id: 51,
        type: 'Left Joy Con',
        name: 'Joy-Con (L) Gray',
        price: 60,
        image: `${joyConImageUrl}grayl.png`,
       

    },
    {
        id: 52,
        type: 'Left Joy Con',
        name: 'Joy-Con (L) Blue',
        price: 60,
        image: `${joyConImageUrl}bluel.webp`,
      

    },
    {
        id: 53,
        type: 'Right Joy Con',
        name: 'Joy-Con (R) Gray',
        price: 60,
        image: `${joyConImageUrl}grayr.jpeg`,
       

    },
    {
        id: 54,
        type: 'Right Joy Con',
        name: 'Joy-Con (R) Red',
        price: 60,
        image: `${joyConImageUrl}redr.webp`,
        

    },
    {
        id: 55,
        type: 'Nintendo Switch Accesories',
        name: 'Nintendo Switch Internet Conector',
        price: 40,
        image: `${accesoriesImageUrl}internet.jpeg`

    },
    {
        id: 56,
        type: 'Nintendo Switch Accesories',
        name: 'Animal Crossing Estuche/Protector de Pantalla',
        price: 50,
        image: `${accesoriesImageUrl}caseanimal.jpeg`

    },
    {
        id: 57,
        type: 'Nintendo Switch Accesories',
        name: 'Animal Crossing Estuche/Protector de Pantalla (Lite)',
        price: 50,
        image: `${accesoriesImageUrl}caseanimal2.jpeg`

    },
    {
        id: 58,
        type: 'Nintendo Switch Accesories',
        name: 'Cargador de Nintendo Switch',
        price: 30,
        image: `${accesoriesImageUrl}charger.jpg`

    },
    {
        id: 59,
        type: 'Nintendo Switch Accesories',
        name: 'Nintendo Switch Lite Estuche',
        price: 40,
        image: `${accesoriesImageUrl}caselite.jpeg`

    },
    {
        id: 60,
        type: 'Nintendo Switch Accesories',
        name: 'Stand Cargador Nintendo Switch',
        price: 30,
        image: `${accesoriesImageUrl}chargestand.jpeg`

    },
    {
        id: 61,
        type: 'Nintendo Switch Accesories',
        name: 'Flip Cover Nintendo Switch Lite',
        price: 50,
        image: `${accesoriesImageUrl}flipcover.jpeg`

    },
    {
        id: 62,
        type: 'Nintendo Switch Accesories',
        name: 'Grip Controller',
        price: 30,
        image: `${accesoriesImageUrl}grip.jpeg`

    },
    {
        id: 63,
        type: 'Nintendo Switch Accesories',
        name: 'Volante Joy-con',
        price: 30,
        image: `${accesoriesImageUrl}joyconwheel.jpeg`

    },
    {
        id: 64,
        type: 'Nintendo Switch Accesories',
        name: 'Memoria MicroSD 128 GB',
        price: 60,
        image: `${accesoriesImageUrl}memory.jpeg`

    },
    {
        id: 65,
        type: 'Nintendo Switch Accesories',
        name: 'Nintendo Switch Pokéball Plus',
        price: 50,
        image: `${accesoriesImageUrl}pokeball.jpeg`

    },
    {
        id: 66,
        type: 'Nintendo Switch Accesories',
        name: 'Protector de Pantalla Nintendo Switch',
        price: 30,
        image: `${accesoriesImageUrl}screenprotector.jpeg`

    },
    {
        id: 67,
        type: 'Nintendo Switch Accesories',
        name: 'Blue Strap para Joy-Con',
        price: 20,
        image: `${accesoriesImageUrl}strapblue.jpeg`

    },
    {
        id: 68,
        type: 'Nintendo Switch Accesories',
        name: 'Gray Strap para Joy-Con',
        price: 20,
        image: `${accesoriesImageUrl}strapgray.jpeg`

    },
    {
        id: 69,
        type: 'Nintendo Switch Accesories',
        name: 'Red Strap para Joy-Con',
        price: 20,
        image: `${accesoriesImageUrl}strapred.jpeg`

    },
]

/*
const switchProducts = [
    {
        id: 0,
        product: 'Nintendo Switch Console',
        name: 'Super smash bros. Edition',
        price: 300,
        image: `${consoleImageUrl}smash.jpeg`,


    },
    {
        id: 1,
        product: 'Nintendo Switch Console',
        name: 'Mario 35 Aniversary Edition',
        price: 320,
        image: `${consoleImageUrl}mario35.jpeg`,

    },
    {
        id: 2,
        product: 'Nintendo Switch Console',
        name: 'Animal crossing Switch Edition',
        price: 320,
        image: `${consoleImageUrl}animalcrossing.jpeg`,

    },
    {
        id: 3,
        product: 'Nintendo Switch Console',
        name: 'Diablo Switch Edition',
        price: 320,
        image: `${consoleImageUrl}diablo.jpeg`,

    },
    {
        id: 4,
        product: 'Nintendo Switch Console',
        name: 'Fortnite Switch Edition',
        price: 320,
        image: `${consoleImageUrl}fortnite.jpeg`,

    },
    {
        id: 5,
        product: 'Nintendo Switch Console',
        name: 'Nintendo Switch with Gray Joy Con',
        price: 320,
        image: `${consoleImageUrl}grey.jpeg`,

    },
    {
        id: 6,
        product: 'Nintendo Switch Console',
        name: 'Nintendo Switch with Neon Joy Con',
        price: 320,
        image: `${consoleImageUrl}neon.jpeg`,

    },
    {
        id: 7,
        product: 'Nintendo Switch Console',
        name: 'Nintendo Switch Lite Blue',
        price: 320,
        image: `${consoleImageUrl}liteblue.jpeg`,

    },
    {
        id: 8,
        product: 'Nintendo Switch Console',
        name: 'Nintendo Switch Lite Gray',
        price: 320,
        image: `${consoleImageUrl}litegrey.webp`,

    },
    {
        id: 9,
        product: 'Nintendo Switch Console',
        name: 'Nintendo Switch Lite Rose',
        price: 320,
        image: `${consoleImageUrl}literose.webp`,

    },
    {
        id: 10,
        product: 'Nintendo Switch Console',
        name: 'Nintendo Switch Lite Yellow',
        price: 320,
        image: `${consoleImageUrl}liteyellow.webp`,

    },
    {
        id: 11,
        product: 'Nintendo Switch Console',
        name: 'Nintendo Switch Mario Kart Edition',
        price: 320,
        image: `${consoleImageUrl}mariokart.jpg`,

    },
    {
        id: 12,
        product: 'Nintendo Switch Console',
        name: 'Nintendo Switch Monster Hunter Rise',
        price: 320,
        image: `${consoleImageUrl}monsterhunter.webp`,

    },
    {
        id: 13,
        product: 'Nintendo Switch Console',
        name: 'Nintendo Switch Mario Odyssey Edition',
        price: 320,
        image: `${consoleImageUrl}oddyssi.jpeg`,

    },
    {
        id: 14,
        product: 'Nintendo Switch Console',
        name: 'Nintendo Switch Splatoon 2 Edition',
        price: 320,
        image: `${consoleImageUrl}splatoon.jpg`,

    },
]
const gameProducts = [
    {
        id: 0,
        product: 'Nintendo Switch Game',
        name: 'Animal Crossing: New Horizon',
        price: 60,
        image: `${gameImageUrl}animalcrossing.webp`,


    },
    {
        id: 1,
        product: 'Nintendo Switch Game',
        name: 'Arms',
        price: 39,
        image: `${gameImageUrl}arms.jpeg`,

    },
    {
        id: 2,
        product: 'Nintendo Switch Game',
        name: 'Bravely Default II',
        price: 60,
        image: `${gameImageUrl}brave.webp`,

    },
    {
        id: 3,
        product: 'Nintendo Switch Game',
        name: 'Crash Bandicoot N.Sane Trilogy',
        price: 39,
        image: `${gameImageUrl}crash.jpeg`,

    },
    {
        id: 4,
        product: 'Nintendo Switch Game',
        name: 'Crash Bandicoot 4: It´s About Time',
        price: 39,
        image: `${gameImageUrl}crash4.jpeg`,

    },
    {
        id: 5,
        product: 'Nintendo Switch Game',
        name: 'Diablo III',
        price: 39,
        image: `${gameImageUrl}diablo.webp`,

    },
    {
        id: 6,
        product: 'Nintendo Switch Game',
        name: 'Luigis Mansion 3',
        price: 60,
        image: `${gameImageUrl}luigi.jpeg`,

    },
    {
        id: 7,
        product: 'Nintendo Switch Game',
        name: 'Super Mario 3d World + Bowser´s Fury',
        price: 60,
        image: `${gameImageUrl}mario3dworld.jpeg`,

    },
    {
        id: 8,
        product: 'Nintendo Switch Game',
        name: 'Mario Kart 8 Deluxe',
        price: 60,
        image: `${gameImageUrl}mariokart.jpeg`,

    },
    {
        id: 9,
        product: 'Nintendo Switch Game',
        name: 'Super Mario Party',
        price: 60,
        image: `${gameImageUrl}marioparty.jpeg`,

    },
    {
        id: 10,
        product: 'Nintendo Switch Game',
        name: 'Super Mario 3d All Starts',
        price: 60,
        image: `${gameImageUrl}mariostars.webp`,

    },
    {
        id: 11,
        product: 'Nintendo Switch Game',
        name: 'New Super Mario U Deluxe',
        price: 60,
        image: `${gameImageUrl}mariou.jpeg`,

    },
    {
        id: 12,
        product: 'Nintendo Switch Game',
        name: 'Minecraft',
        price: 39,
        image: `${gameImageUrl}minecraft.webp`,

    },
    {
        id: 13,
        product: 'Nintendo Switch Game',
        name: 'Monster Hunter Rise',
        price: 60,
        image: `${gameImageUrl}monsterhunter.webp`,

    },
    {
        id: 14,
        product: 'Nintendo Switch Game',
        name: 'Super Mario Odyssey',
        price: 60,
        image: `${gameImageUrl}odisi.jpeg`,

    },
    {
        id: 15,
        product: 'Nintendo Switch Game',
        name: 'Narita Boy',
        price: 30,
        image: `${gameImageUrl}naritaboy.webp`,

    },
    {
        id: 16,
        product: 'Nintendo Switch Game',
        name: 'Paper Mario The Origami King',
        price: 60,
        image: `${gameImageUrl}papermario.jpeg`,

    },
    {
        id: 17,
        product: 'Nintendo Switch Game',
        name: 'Pikmin 3 Deluxe',
        price: 60,
        image: `${gameImageUrl}pikmin.`,

    },
    {
        id: 18,
        product: 'Nintendo Switch Game',
        name: 'Skyrim',
        price: 39,
        image: `${gameImageUrl}skyrim.jpeg`,

    },
    {
        id: 19,
        product: 'Nintendo Switch Game',
        name: 'Super Smash Bros. Ultimate',
        price: 60,
        image: `${gameImageUrl}smash.jpeg`,

    },
    {
        id: 20,
        product: 'Nintendo Switch Game',
        name: 'Splatoon 2',
        price: 60,
        image: `${gameImageUrl}splatoon.jpeg`,

    },
    {
        id: 21,
        product: 'Nintendo Switch Game',
        name: 'Spyro Trilogy',
        price: 60,
        image: `${gameImageUrl}spyro.webp`,

    },
    {
        id: 22,
        product: 'Nintendo Switch Game',
        name: 'Don´t Starve Nintendo Switch Edition',
        price: 20,
        image: `${gameImageUrl}starve.webp`,

    },
    {
        id: 23,
        product: 'Nintendo Switch Game',
        name: 'Wolfenstein II',
        price: 39,
        image: `${gameImageUrl}wolf.webp`,

    },
    {
        id: 24,
        product: 'Nintendo Switch Game',
        name: 'The Legend Of Zelda Breath Of The Wild',
        price: 60,
        image: `${gameImageUrl}zelda.webp`,

    },
    {
        id: 25,
        product: 'Nintendo Switch Game',
        name: 'Hyrule Warriors Age Of Calamity',
        price: 60,
        image: `${gameImageUrl}zeldaw.webp`,

    },
    {
        id: 26,
        product: 'Nintendo Switch Game',
        name: 'The Legend Of Zelda: Link´s Awakening',
        price: 39,
        image: `${gameImageUrl}zeldawake.jpeg`,

    },
]
const joyCons = [
    {
        id: 0,
        product: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Gray Color',
        price: 120,
        image: `${joyConImageUrl}gray.png`,
        joyConSet: true

    },
    {
        id: 1,
        product: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Neon Blue/Red',
        price: 120,
        image: `${joyConImageUrl}neonblue.png`,
        joyConSet: true

    },
    {
        id: 2,
        product: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Neon Orange/Purple',
        price: 120,
        image: `${joyConImageUrl}orangeone.png`,
        joyConSet: true

    },
    {
        id: 3,
        product: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Neon Rose/Green',
        price: 120,
        image: `${joyConImageUrl}roseneon.png`,
        joyConSet: true

    },
    {
        id: 4,
        product: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Neon BLue/Yellow',
        price: 120,
        image: `${joyConImageUrl}yellowneon.png`,
        joyConSet: true

    },
    {
        id: 5,
        product: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Neon Yellow',
        price: 120,
        image: `${joyConImageUrl}yellowset.jpeg`,
        joyConSet: true

    },
    {
        id: 6,
        product: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Red Color',
        price: 120,
        image: `${joyConImageUrl}redset.png`,
        joyConSet: true

    },
    {
        id: 7,
        product: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Blue Color',
        price: 120,
        image: `${joyConImageUrl}blueset.jpeg`,
        joyConSet: true

    },
    {
        id: 8,
        product: 'Joy Con Set',
        name: 'Joy-Con (L)/(R) Zelda Skyward Sword',
        price: 140,
        image: `${joyConImageUrl}zeldaset.jpeg`,
        joyConSet: true

    },
    {
        id: 9,
        product: 'Left Joy Con',
        name: 'Joy-Con (L) Gray',
        price: 60,
        image: `${joyConImageUrl}grayl.png`,
        joyConL: true

    },
    {
        id: 10,
        product: 'Left Joy Con',
        name: 'Joy-Con (L) Blue',
        price: 60,
        image: `${joyConImageUrl}bluel.webp`,
        joyConL: true

    },
    {
        id: 11,
        product: 'Right Joy Con',
        name: 'Joy-Con (R) Gray',
        price: 60,
        image: `${joyConImageUrl}grayr.jpeg`,
        joyConR: true

    },
    {
        id: 12,
        product: 'Right Joy Con',
        name: 'Joy-Con (R) Red',
        price: 60,
        image: `${joyConImageUrl}redr.webp`,
        joyConR: true

    },
]
const switchAccesories = [
    {
        id: 0,
        product: 'Nintendo Switch Accesories',
        name: 'Nintendo Switch Internet Conector',
        price: 40,
        image: `${accesoriesImageUrl}internet.jpeg`

    },
    {
        id: 1,
        product: 'Nintendo Switch Accesories',
        name: 'Animal Crossing Estuche/Protector de Pantalla',
        price: 50,
        image: `${accesoriesImageUrl}caseanimal.jpeg`

    },
    {
        id: 2,
        product: 'Nintendo Switch Accesories',
        name: 'Animal Crossing Estuche/Protector de Pantalla (Lite)',
        price: 50,
        image: `${accesoriesImageUrl}caseanimal2.jpeg`

    },
    {
        id: 3,
        product: 'Nintendo Switch Accesories',
        name: 'Cargador de Nintendo Switch',
        price: 30,
        image: `${accesoriesImageUrl}charger.jpg`

    },
    {
        id: 4,
        product: 'Nintendo Switch Accesories',
        name: 'Nintendo Switch Lite Estuche',
        price: 40,
        image: `${accesoriesImageUrl}caselite.jpeg`

    },
    {
        id: 5,
        product: 'Nintendo Switch Accesories',
        name: 'Stand Cargador Nintendo Switch',
        price: 30,
        image: `${accesoriesImageUrl}chargestand.jpeg`

    },
    {
        id: 6,
        product: 'Nintendo Switch Accesories',
        name: 'Flip Cover Nintendo Switch Lite',
        price: 50,
        image: `${accesoriesImageUrl}flipcover.jpeg`

    },
    {
        id: 7,
        product: 'Nintendo Switch Accesories',
        name: 'Grip Controller',
        price: 30,
        image: `${accesoriesImageUrl}grip.jpeg`

    },
    {
        id: 8,
        product: 'Nintendo Switch Accesories',
        name: 'Volante Joy-con',
        price: 30,
        image: `${accesoriesImageUrl}joyconwheel.jpeg`

    },
    {
        id: 9,
        product: 'Nintendo Switch Accesories',
        name: 'Memoria MicroSD 128 GB',
        price: 60,
        image: `${accesoriesImageUrl}memory.jpeg`

    },
    {
        id: 10,
        product: 'Nintendo Switch Accesories',
        name: 'Nintendo Switch Pokéball Plus',
        price: 50,
        image: `${accesoriesImageUrl}pokeball.jpeg`

    },
    {
        id: 11,
        product: 'Nintendo Switch Accesories',
        name: 'Protector de Pantalla Nintendo Switch',
        price: 30,
        image: `${accesoriesImageUrl}screenprotector.jpeg`

    },
    {
        id: 12,
        product: 'Nintendo Switch Accesories',
        name: 'Blue Strap para Joy-Con',
        price: 20,
        image: `${accesoriesImageUrl}strapblue.jpeg`

    },
    {
        id: 13,
        product: 'Nintendo Switch Accesories',
        name: 'Gray Strap para Joy-Con',
        price: 20,
        image: `${accesoriesImageUrl}strapgray.jpeg`

    },
    {
        id: 14,
        product: 'Nintendo Switch Accesories',
        name: 'Red Strap para Joy-Con',
        price: 20,
        image: `${accesoriesImageUrl}strapred.jpeg`

    },
]
*/

const initialCombo = {
    
    comboTotal: 0,
    client: '',
    deleted: false,
    products: [] as productNintendo[],
}
export const App = () => {

    const [chosenConsole, setChosenConsole] = React.useState(true);
    const [chosenGame, setChosenGame] = React.useState(false);
    const [chosenHardware, setChosenHardware] = React.useState(false);
    const [chosenAccesories, setChosenAccesories] = React.useState(false);
    const [combo, setCombo] = React.useState<ComboProps[]>([]);
    const [editCombo, setEditCombo] = React.useState<ComboProps | null>(null);
    const [showModal, setShowModal] = React.useState(false);
    const [showCreatedCombos, setShowCreatedCombos] = React.useState(false);
    const [addMessage, setAddMessage] = React.useState(true);
    const [addMessageSwitch, setAddMessageSwitch] = React.useState(true);
    const [productType, setProductType] = React.useState('Nintendo Switch Console');
    const [productFiltered, setProductFiltered] = React.useState(products);
    const [isEdit, setIsEdit] = React.useState(false);
   

    
    React.useEffect(() => {
        if (productType === '') {
            setProductFiltered(products);
        } else {
            setProductFiltered(prev =>
                [...products.filter((item) => item.type === productType)])
        }
    }, [productType])

    /*
    const handleDelete= (id: number) => {
        const index = combo.findIndex((elem) => {
            return elem.id === id;
        }); 
        const copyCombo = combo.slice();
        copy.splice(index,1);
        setCombo(copyCombo);
    }
    
    */

    const changeProductCount = (name:string, price:number, amount:number) => {
        let temp = editCombo!;
        temp.comboTotal += price*amount;

        let productsTemp = temp.products;
        const currentProduct = productsTemp.find((listProduct) => listProduct.name === name);
        currentProduct!.count = currentProduct!.count! + amount;

        setEditCombo({...temp, products: productsTemp})
    }

    const handleChoseConsole = () => {
        setChosenConsole(true);
        setChosenGame(false);
        setChosenHardware(false);
        setChosenAccesories(false);
        setProductType('Nintendo Switch Console');
      
    }
    const handleChoseGame = () => {
        setChosenConsole(true);
        setChosenGame(true);
        setChosenHardware(false);
        setChosenAccesories(false);
        setProductType('Nintendo Switch Game');

    }
    const handleChoseHardware = () => {
        setChosenConsole(true);
        setChosenGame(true);
        setChosenHardware(true);
        setChosenAccesories(false);
        setProductType('Joy Con Set');

    }
    const handleChoseAccesories = () => {
        setChosenConsole(true);
        setChosenGame(true);
        setChosenHardware(true);
        setChosenAccesories(true);
        setProductType('Nintendo Switch Accesories');

    }

    const handleAddCombo = () => {
        setAddMessage(false);
        setAddMessageSwitch(false);
        setIsEdit(true);
        setShowModal(true);
        setEditCombo(({
            ...initialCombo,
            products: [],
            id: Date.now(),
        }));
       
      
    }

    const handleEditCombo = (comboChange: ComboProps) => {
        setAddMessageSwitch(false);
        setIsEdit(true);
        let temp = combo;
        const filteredTemp = temp.filter((listCombo) => listCombo.id !== comboChange.id);
        
        setCombo(filteredTemp);
        setEditCombo(comboChange);
       
    }

    const handleConfirmCombo = () => {
        
        editCombo!.confirm = true;
        setCombo(prev => ([
            ...prev,
            editCombo!,
        ]));
        setEditCombo(null);
        console.log('Confirm' ,editCombo);
        setAddMessageSwitch(true);
        setIsEdit(false);
       
    }

    const handleAddName = (name: string) => {
        if (name === '') name = "N.N."
        setShowModal(false);
        if (!editCombo) return
        setEditCombo(prev => ({ ...prev!, client: name }));
    }
    const changeName = () => {
        setShowModal(true);
    }

    const handleShowCreatedCombos = () => {
        setShowCreatedCombos(true);
    }

    const handleCloseWindowFromCreatedCombos = () => {
        setShowCreatedCombos(false);
    }

    const onContinueBtn = () => {
        switch (productType) {
            case 'Joy Con Set':
                setProductType('Nintendo Switch Accesories')
                setChosenAccesories(true)
                break;
            case 'Nintendo Switch Game':
                setProductType('Joy Con Set')
                setChosenHardware(true)
                break;
            case 'Nintendo Switch Console':
                setProductType('Nintendo Switch Game')
                setChosenGame(true)
                break;
            default:
                break;
        }
    }

    const handleAddProductsToCombo = (product: productNintendo) => {
    
        
        if (editCombo) {
            let temp = editCombo;
            temp.comboTotal += product.price;
            let productsTemp = editCombo.products;
            const filteredList = editCombo.products.filter((listProduct) => listProduct.name === product.name);
            if(filteredList.length === 0) {
                product.count = 1;
                productsTemp.push(product);
            } else if(filteredList.length === 1) { 
                filteredList[0].count = filteredList[0].count! + 1;
            }

            setEditCombo({...temp, products: productsTemp})
        }
    }
    const handleDeleteProductsToCombo = (product: productNintendo) => {
        
        console.log(product);
        console.log("count"+product.count)
        
        if (editCombo) {
            let temp = editCombo;
            temp.comboTotal = temp.comboTotal - (product.price*product.count!);
            let productsTemp = editCombo.products.filter(item => item.id !== product.id)
            

            setEditCombo({...temp, products: productsTemp})
        }
    }
   
    const handleDeleteCombo = (comboChange: ComboProps) => {
        
        let temp = combo;
        const filteredTemp = temp.filter((listCombo) => listCombo.id !== comboChange.id);
        setCombo(filteredTemp);
        setAddMessageSwitch(true);
        
       
        console.log(combo.length)
        
        
    }
    const handleDeleteEditCombo = (comboChange: ComboProps) => {
        setIsEdit(false);
        setEditCombo(null);
        setAddMessageSwitch(true);
        
        
    }

    useEffect(( ) => {
        if(combo.length===0 && !editCombo){
            setAddMessage(true);
        }
    }, [combo, editCombo])

    const handleClean = () => {
        setCombo([]);
    }
    
    return (
        <main className="mainContainer">
        

        
            <HashRouter>

                <header className="header">
                    <div className="headerLogo">
                        <img src="/images/data/logonintendo.png" alt="" className="logoNintendo" />
                        <img src="/images/data/supermario.png" alt="" />
                    </div>
                    <div className="headerCenter">
                        <img src="/images/data/headerCenter.png" alt="" className="headerImgCenter" />
                    </div>
                    <div className="headerRight">
                        <button onClick={handleClean} className="button2">

                            <img src="/images/data/yoshi.gif" alt="" className="imagen" />
                            Limpiar
                            <img src="/images/data/yoshi.gif" alt="" className="imagen" />

                        </button>
                    </div>
                </header>
                <div className="optionSummaryC">

                    <div className="options">

                        <button onClick={handleChoseConsole} className={`option ${chosenConsole ? 'option--chose' : ''}`} >
                            <img className="optionStyle" src="/images/product_images/console.png" alt="" />
                            Consolas
                        </button>
                        <div className={`progresionLine ${chosenGame ? 'progresionLine--passed' : ''}`}></div>
                        <button onClick={handleChoseGame} className={`option ${chosenGame ? 'option--chose' : ''}`} >
                            <img className="optionStyle" src="/images/product_images/game.png" alt="" />
                            Juegos
                        </button>
                        <div className={`progresionLine2 ${chosenHardware ? 'progresionLine2--passed' : ''}`}></div>
                        <button onClick={handleChoseHardware} className={`option ${chosenHardware ? 'option--chose' : ''}`}>
                            <img className="optionStyle" src="/images/product_images/controls.png" alt="" />
                            Joy-Cons
                        </button>
                        <div className={`progresionLine3 ${chosenAccesories ? 'progresionLine3--passed' : ''}`}></div>
                        <button onClick={handleChoseAccesories} className={`option ${chosenAccesories ? 'option--chose' : ''}`} >
                            <img className="optionStyle" src="/images/product_images/accesories.png" alt="" />
                            Accesorios
                        </button>

                    </div>
                    <div className="summary">
                        <Summary
                            combos={combo}
                        ></Summary>
                    </div>
                </div>
                <div className="container">
       
                    <ComboContainer
                        onAdd={handleAddCombo}
                        combo={combo}
                        editCombo={editCombo}
                        changeCount={changeProductCount}
                        onConfirm={handleConfirmCombo}
                        addMessage={addMessage}
                        changeName={changeName}
                        handleDeleteProduct={handleDeleteProductsToCombo}
                        handleEditCombo={handleEditCombo}
                        isEdit={isEdit}
                        handleDeleteCombo={handleDeleteCombo}
                        handleDeleteEditCombo={handleDeleteEditCombo}
                        

                    >

                    </ComboContainer>

                    <div className="containerProducts">

                        {productFiltered.map(({ type, name, price, id, image }) => {

                            return <NintendoSwitchProduct
                                id={id}
                                key={id}
                                type={type}
                                name={name}
                                price={price}
                                image={image}
                                addMessage={addMessageSwitch}
                                handleAddProductsToCombo={handleAddProductsToCombo}
                            
                                
                            />;
                        })}
                        <div className="containerProg">

                            <div onClick={handleShowCreatedCombos} className="btn-float" >Combos creados</div>
                            {
                                productType === 'Nintendo Switch Accesories' ?
                                    <div onClick={handleShowCreatedCombos} className="btn-float" >Finalizar</div>
                                    :
                                    <div onClick={onContinueBtn} className="btn-float" >Continuar</div>

                            }
                        </div>
                    </div>

                </div>

                <ClientModal
                    visible={showModal}
                    onAddName={handleAddName}
                ></ClientModal>
                <CreatedCombos
                    visible={showCreatedCombos}
                    onCloseWindow={handleCloseWindowFromCreatedCombos}
                    combos={combo}
                ></CreatedCombos>
            </HashRouter>
                           
        </main>);
}