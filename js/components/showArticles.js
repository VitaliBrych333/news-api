import { createButtonNext, createButtonPrev } from './createButtons';
import drawArticles from './drawArticles';
import search from './search';

let startNum = 0;
let endNum = 10;
let articles;

export function showPrevArticles() {
    search().then((res) => {
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

        drawArticles(res, startNum, endNum);
    });
}

export function showNextArticles() {
    search().then((res) => {
        articles = res;
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

        drawArticles(res, startNum, endNum);
    });
}

export function showLastArticles() {
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

    drawArticles(startNum, endNum);
}
