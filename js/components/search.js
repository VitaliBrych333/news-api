import { API } from './globalVar';
import { creteButtonSwowLastArticles, createButtonNext } from './createButtons';
import drawArticles from './drawArticles';

export default async function search() {
    // startNum = 0;
    // endNum = 10;
    document.querySelector('#button').innerHTML = '';
    const e = document.querySelector('#sources');
    const valueResource = e.options[e.selectedIndex].value;
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const currentDate = `${year}-${month}-${date}`;
    const responseNews = await fetch(`https://newsapi.org/v2/everything?sources=${valueResource}&from=${currentDate}&to=${currentDate}&pageSize=100&sortBy=popularity&apiKey=${API}`);
    const jsonNews = await responseNews.json();
    let articles = jsonNews.articles;
    const length = jsonNews.articles.length;
    console.log('ffffffffff', articles);
    return articles;
}
