import search from './search';
import drawArticles from './drawArticles';

function draw() {
    search().then((res) => { drawArticles(res, 0, 10); });
}
export default function setSources(sources) {
    document.querySelector('#sources').innerHTML = '';
    sources.forEach((item) => {
        const newOption = document.createElement('option');
        newOption.innerHTML = `${item.id}`;
        document.querySelector('#sources').appendChild(newOption);
    });
    document.querySelector('#sources').disabled = false;
    document.querySelector('#search').disabled = false;
    document.querySelector('#search').addEventListener('click', draw);
}
