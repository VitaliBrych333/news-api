// import API from './components/apiKey';
let articles;
let startNum = 0;
let endNum = 10;

function showPrevArticles() {
    if ((startNum - 10) <= 0) {
        startNum = 0;
        document.querySelector('#prev').remove();
    } else {
        startNum -= 10;
    }

    if (!document.querySelector('#next')) {
        createButtonNext();
    }

    endNum -= 10;

    drawArticles();
}

function showNextArticles() {
    const length = articles.length;
    startNum += 10;
    if (length > (endNum + 10)) {
        endNum += 10;
    } else {
        endNum = length;
        document.querySelector('#next').remove();
    }

    if (!document.querySelector('#prev')) {
        createButtonPrev();
    }

    drawArticles();
}

function showLastArticles() {
    if (document.querySelector('#next')) {
        document.querySelector('#next').remove();
    }
    if (document.querySelector('#prev')) {
        document.querySelector('#prev').remove();
    }

    articles = articles.sort((a, b) => {
        a = new Date(a.publishedAt);
        b = new Date(b.publishedAt);
        return a > b ? -1 : a < b ? 1 : 0;
    });

    startNum = 0;
    endNum = 10;

    drawArticles();
}

function creteButtonSwowLastArticles() {
    const newButtonLast = document.createElement('button');
    newButtonLast.id = 'last';
    newButtonLast.innerHTML = 'Show 10 last';
    newButtonLast.addEventListener('click', showLastArticles);
    document.querySelector('#button').appendChild(newButtonLast);
}

function createButtonNext() {
    const newButtonNext = document.createElement('button');
    newButtonNext.id = 'next';
    newButtonNext.innerHTML = 'Next 10';
    newButtonNext.addEventListener('click', showNextArticles);
    document.querySelector('#button').insertBefore(newButtonNext, document.querySelector('#last'));
}

function createButtonPrev() {
    const prevButtonNext = document.createElement('button');
    prevButtonNext.id = 'prev';
    prevButtonNext.innerHTML = 'Previous 10';
    prevButtonNext.addEventListener('click', showPrevArticles);
    document.querySelector('#button').insertBefore(prevButtonNext, document.querySelector('#next'));
}

function drawArticles() {
    document.querySelector('.articles').innerHTML = '';
    articles.slice(startNum, endNum).forEach((item) => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `<div>
            <p>Author: ${item.author}</p>
            <p>Title: ${item.title}</p>
            <p>Content: ${item.content}</p>
            <p>Description: ${item.description}</p>
            <p>Date: ${item.publishedAt.slice(0, 10)} ${item.publishedAt.slice(11, 19)}</p>
            <p>Source: <a href='${item.url}'> Read more...</a></p>
            <p>Link on image: <a href='${item.urlToImage}'> please click</a><p>
        </div>`;
        document.querySelector('.articles').appendChild(newDiv);
    });
}


async function search() {
    document.querySelector('#button').innerHTML = '';
    startNum = 0;
    endNum = 10;
    const e = document.querySelector('#sources');
    const valueResource = e.options[e.selectedIndex].value;
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const currentDate = `${year}-${month}-${date}`;
    const responseNews = await fetch(`https://newsapi.org/v2/everything?sources=${valueResource}&from=${currentDate}&to=${currentDate}&pageSize=100&sortBy=popularity&apiKey=14e1a857dcdb4a0ebdaf593042b1ab27`);
    const jsonNews = await responseNews.json();
    articles = jsonNews.articles;
    const length = jsonNews.articles.length;

    if (!document.querySelector('#last')) {
        creteButtonSwowLastArticles();
    }

    if (length > 10) {
        createButtonNext();
    }

    drawArticles();
}

function setSources(sources) {
    document.querySelector('#sources').innerHTML = '';
    sources.forEach((item) => {
        const newOption = document.createElement('option');
        newOption.innerHTML = `${item.id}`;
        document.querySelector('#sources').appendChild(newOption);
    });
    document.querySelector('#sources').disabled = false;
    document.querySelector('#search').disabled = false;
    document.querySelector('#search').addEventListener('click', search);
}

async function getSources() {
    document.querySelector('#search').disabled = true;
    const language = document.querySelector('input[name="language"]:checked').value;
    const response = await fetch(`https://newsapi.org/v2/sources?language=${language}&apiKey=14e1a857dcdb4a0ebdaf593042b1ab27`);
    const myJson = await response.json();
    const sources = myJson.sources;
    setSources(sources);
}

window.onload = () => {
    document.querySelectorAll('input[name="language"]').forEach(item => item.addEventListener('click', getSources));
};
