"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll("article");

    const htmlArticles = Array.from(articles).filter((article) => {
        return article.querySelector('a[href*="html.html"]');
    });

    const cssArticles = Array.from(articles).filter((article) => {
        return article.querySelector('a[href*="css.html"]');
    });

    const responsiveArticles = Array.from(articles).filter((article) => {
        return article.querySelector('a[href*="responsive.html"]');
    });

    const htmlData = htmlArticles.map((article) => {
        return article.outerHTML;
    });

    const cssData = cssArticles.map((article) => {
        return article.outerHTML;
    });
    const responsiveData = responsiveArticles.map((article) => {
        return article.outerHTML;
    });

    localStorage.setItem("htmlArticles", JSON.stringify(htmlData));
    localStorage.setItem("cssArticles", JSON.stringify(cssData));
    localStorage.setItem("responsiveArticles", JSON.stringify(responsiveData));
});
