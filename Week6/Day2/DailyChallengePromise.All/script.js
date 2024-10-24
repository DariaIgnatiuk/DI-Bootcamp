const fetchMoscow = async()=> {
    const city = document.getElementById('Moscow');
    try {
        let res = await fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today&tzid=Europe/Moscow');
        let data = await res.json();
        city.innerHTML = `<strong>Moscow</strong>
        <div>Sunrise: ${data.results.sunrise}</div>
        <div>Sunset: ${data.results.sunset}</div>`
    } catch (e) {
        console.log(e);
    }
}

const fetchSeoul= async()=> {
    const city = document.getElementById('Seoul');
    try {
        let res = await fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today&tzid=Asia/Seoul');
        let data = await res.json();
        city.innerHTML = `<strong>Seoul</strong>
        <div>Sunrise: ${data.results.sunrise}</div>
        <div>Sunset: ${data.results.sunset}</div>`
    } catch (e) {
        console.log(e);
    }
}

let parallel = async function () {
    await Promise.all([
        (async () => fetchMoscow())(),
        (async () => fetchSeoul())()
    ]);
}

parallel();