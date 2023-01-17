const link = 'https://api-football-v1.p.rapidapi.com/v3/timezone';

const store = {
    city: "Oxford",
};

const fetchData = async () => {
    const result = await fetch(`${link}&quary=${store.city}`);
    const data = await result.json();

    console.log(data);
} 

fetchData();