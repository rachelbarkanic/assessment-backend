const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const goalBtn = document.getElementById("goalButton")
const input = document.getElementById("suggestionInput")
const getGoalsBtn = document.getElementById("listOfGoals")
const goalList = document.getElementById("unorganizedListOfGoals")

const deleteGoal = (index) => {
    axios.default.delete(`http://localhost:4000/api/goals/${index}`)

    .then(goalFunction)
        .catch
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
// const deleteBtn = document.getElementById("deleteButton")
// let checkedBox = document.getElementsByClassName('delete-goal')




const getCompliment = () => {
    axios.default.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.default.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};



const getGoals = () => {
    axios.default.get("http://localhost:4000/api/getgoals")
        .then(goalFunction)
    };

const addGoal = (event) => {
    event.preventDefault();
    let newGoal = input.value
    let body = {goal: newGoal}
    axios.default.post("http://localhost:4000/api/goals/", body)
    .then(goalFunction)
    .catch(error => console.log(error));
};






complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goalBtn.addEventListener('click', addGoal)
getGoalsBtn.addEventListener('click', () =>{
    axios.default.get("http://localhost:4000/api/getgoals")
    .then((response) => {
        const list = response.data
        list.forEach(id => {
            let goalEl = document.createElement('li')
            goalEl.textContent = id
            
        goalList.appendChild(id)
        })
       

    })
    .catch(error => console.log(error));
})

getGoals();