let listOfGoal = ['Stay focused', 'Stay motivated', 'Work hard']
let goals = ['Goal 1', 'Goal 2', 'Goal 3']


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

    addGoal: (req, res) => {
        const { goal } = req.body;
        listOfGoal.push(goal);

        res.status(200).send(goal);

    },

    deleteGoal: (req, res) => {
        let goals = ['Goal 1', 'Goal 2', 'Goal 3']
        const { id } = req.params
        for (let i = 0; i < goals.length; i++){
            if(goals[i].id === id){
                goals.splice(i, 1)
            }
        }
    }
}