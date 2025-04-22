import JSONCreator from "./JSONCreator.js"; // Import the JSONCreator module
export default class QuestionaireDataManager {
    // Initialize the GameData object
    questionaireData = {
        type: "",
        answers: [],
        subscales: [],
        indexes: []
    };

    addQuestionaireData(answers, subscales, indexes) {
        this.questionaireData.answers.push({ answers });
        this.questionaireData.subscales.push({ subscales });
        this.questionaireData.indexes.push({ indexes });
    }

    setType(type) {
        this.gameData.type = type;
    }

    save() {
        JSONCreator.data.questionaireData = this.questionaireData; // Save the game data to the JSONCreator object
    }

    // Get the current questionaireData object (for debugging or display)
    getData() {
        return this.questionaireData;
    }
}