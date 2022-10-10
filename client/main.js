const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const goalBtn = document.getElementById("goalButton")
const input = document.getElementById("suggestionInput")
const getGoalsBtn = document.getElementById("listOfGoals")
const goalList = document.getElementById("unorganizedListOfGoals")

const deleteGoal = (index) => {
    axios.delete(`http://localhost:4000/api/goals/${index}`)

    .then(goalFunction)
    .catch(error => console.log(error));
    }

const goalFunction = (response) => {

    const data = response.data;
    const list = document.getElementById('add-goal')
    list.innerHTML = ''

    data.forEach((goal, index) => {
    const newList = document.createElement('li')
    newList.addEventListener('click', () => {
        deleteGoal(index)
    })
    newList.innerText = goal
    list.append(newList) 
    });
}




const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};



const getGoals = () => {
    axios.get("http://localhost:4000/api/getgoals")
        .then(goalFunction)
    };

const addGoal = (event) => {
    event.preventDefault();
    let newGoal = input.value
    let body = {goal: newGoal}
    axios.post("http://localhost:4000/api/goals/", body)
    .then(goalFunction)
    .catch(error => console.log(error));
};





complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goalBtn.addEventListener('click', addGoal)


getGoals();