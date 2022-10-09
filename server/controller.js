let listOfGoal = ['Stay focused', 'Stay motivated', 'Work hard']



module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You will get an A on this test", "An inch of time is an inch of gold", 
        "Great success awaits you", "A faithful friend is a strong defense", 
        "A pleasant surprise is waiting for you"];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },


    getGoals: (req, res) => {
        res.status(200).send(listOfGoal)
    },

    addGoal: (req, res) => {
        const { goal } = req.body;
        listOfGoal.push(goal);
        res.status(200).send(listOfGoal);
    },

    deleteGoal: (req, res) => {
        const { index } = req.params;
        listOfGoal.splice(+index, 1);
        res.status(200).send(listOfGoal);
    },
}