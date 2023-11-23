"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll("article");

    const htmlArticles = Array.from(articles).filter((article) => {
        return article.querySelector('a[href*="html.html"]');
    });

    const articleData = htmlArticles.map((article) => {
        return article.outerHTML;
    });

    localStorage.setItem("htmlArticles", JSON.stringify(articleData));
});
