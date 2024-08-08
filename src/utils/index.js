import ego from "../assets/svg/ego.svg"
import motor from '../assets/images/motor.png'
import suspension from '../assets/images/suspension.png'
import transmision from '../assets/images/transmision.png'
import transmisionM from '../assets/images/transmisionM.png'
import hilux from '../assets/images/hilux.png'
import der from '../assets/images/der.png'
import izq from '../assets/images/izq.png'


export const Hilux = hilux;
export const Der = der;
export const Izq = izq;
export const egoImg = ego


export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Dos alternativas diesel con turbo",
        "de geometría variable, 1GD (2.8 L)",
        "y 2GD (2.4 L).",
      ],
      image: motor,
    },
    {
      id: 2,
      textLists: ["Mayor confort de marcha,", "estabilidad y capacidad Off Road."],
      image: suspension,
    },
    {
      id: 3,
      textLists: [
        "Posibilidad de elección de caja",
        "atomática de manejo."
      ],
      image: transmision,
    },
    {
      id: 4,
      textLists: ["Posibilidad de elección de caja", "manual de manejo."],
      image: transmisionM,
    },
  ];