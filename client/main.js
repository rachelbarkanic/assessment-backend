const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const goalBtn = document.getElementById("goalButton")
const input = document.getElementById("suggestionInput")
const deleteBtn = document.getElementsByClassName("delete-goal")

const errCallback = err => console.log(err.response.data)



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

const addGoal = (event) => {
    event.preventDefault();

    let newGoal = input.value
    let body = {goal: newGoal}
    
    axios.post("http://localhost:4000/api/goals/", body)
    .then(response => {
        const data = response.data;
        console.log(data)
        //the same input they put in OR
        const list = document.getElementById('add-goal')
        const newList = document.createElement('li')
        newList.innerText = data //whatever comes back from server
        //list of every item plus what they sent
        list.append(newList)
    })
    .catch(errCallback);
};



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goalBtn.addEventListener('click', addGoal)
deleteBtn.addEventListener('click', deleteGaol)
