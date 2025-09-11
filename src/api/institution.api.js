import { missionTmp } from "./data/mission.tmp.js";
import { valuesTmp } from "./data/values.tmp.js";
import { visionTmp } from "./data/vision.tmp.js";
import missionImage from "../assets/images/mission.jpg";
import visionImage from "../assets/images/vision.jpg";
import valuesImage from "../assets/images/values.jpg";

const KEY_INSTITUTION = "institution";

const initialize = () => {
    const initialData = {
        name: "Mi App",
        address: "Av. Siempreviva 100, San Juan, Argentina",
        phone: "264-411-2233",
        email: "info@miapp.com",
        about: {
            mission: {
                description: missionTmp,
                image: missionImage,
            },
            vision: {
                description: visionTmp,
                image: visionImage,

            },
            values: {
                description: valuesTmp,
                image: valuesImage,
            },
        },
    };

    localStorage.setItem(KEY_INSTITUTION, JSON.stringify(initialData));

    return initialData;
};

const getInstitutionFromLocalStorage = () => {
    const data = localStorage.getItem(KEY_INSTITUTION);
    return JSON.parse(data) || initialize();
};

const fetchInstitution = () => {
    return new Promise((resolve) => {
        resolve(getInstitutionFromLocalStorage());
    });
};

export default {
    fetchInstitution,
};