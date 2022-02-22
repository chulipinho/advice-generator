const retrieveFromAPI = async () => {
    const APIURL = 'https://api.adviceslip.com/advice';
    const INIT = {
        method: 'GET'
    };

    let response = await fetch(APIURL, INIT)
        .then(response => response.json())
        .catch(error => console.log('Caught exeption: ' + error));

    return response;
}

const buildCard = async () => {
    const title = document.getElementById("title");
    const advice = document.getElementById("advice");
    const button = document.getElementById("circle");

    button.style.display = 'none';
    title.style.display = 'none';
    advice.textContent = 'loading...';

    let response = await retrieveFromAPI();
    let apiData = response['slip'];

    button.style.display = 'flex';
    title.style.display = 'block';
    title.textContent = `ADVICE # ${apiData['id']}`;
    advice.textContent = apiData['advice'];
}

const init = () => {
    const button = document.getElementById('circle');

    buildCard();
    button.addEventListener("click", buildCard);
}

init();