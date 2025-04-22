import JSONCreator from "./JSONCreator.js"; // Import the JSONCreator module
export default class TestDataManager {
    // Initialize the GameData object
    testData = {
        type: "",
        times: [],
        answers: [],
        difficulty: []
    };

    addTestData(times, answers, difficulty) {
        this.testData.times.push(times);
        this.testData.answers.push(answers);
        this.testData.difficulty.push(difficulty);
    }

    setType(type) {
        this.testData.type = type;
    }

    save() {
        JSONCreator.data.questionaireData = this.questionaireData; // Save the game data to the JSONCreator object
    }

    // Get the current questionaireData object (for debugging or display)
    getData() {
        return this.testData;
    }
}