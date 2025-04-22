class QuestionaireDataManager {
    // Initialize the GameData object
    questionaireData = {
        type: "",
        answers: [],
        subscales: [],
        indexes: []
    };

    setType(type) {
        this.gameData.type = type;
    }
    // add a difficulty entry
    addAnswer(answer) {
        this.questionaireData.answers.push({ answer });
    }
    // Add a time entry
    addSubscales(subscale) {
        this.questionaireData.subscales.push({ subscale });
    }

    // Add a index entry
    addIndex(index) {
        this.questionaireData.indexes.push({ index });
    }

    save() {
        JSONCreator.data.questionaireData = this.questionaireData; // Save the game data to the JSONCreator object
    }

    // Get the current questionaireData object (for debugging or display)
    getData() {
        return this.questionaireData;
    }
}