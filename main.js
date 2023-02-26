console.log("Hello World!");

let newsAccordian = document.getElementById('accordian');

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`, true);

xhr.onload = function () {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    let newsHtml = "";
    articles.forEach(function (element, index) {
        let news = `<p>
                            <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample${index}" role="button" aria-expanded="false" aria-controls="multiCollapseExample${index}">${element['title']}</a>
                            <div class="row">
                                <div class="col">
                                <div class="collapse multi-collapse" id="multiCollapseExample${index}">
                                    <div class="card card-body" >
                                    ${element['description']}<a href="${element['url']}" target="_blank">Read more</a>
                                    <img src="${element['urlToImage']}" alt="">
                                    </div>
                                </div>
                                </div>
                            </div>
                        </p>`;
        newsHtml += news;
    });
    newsAccordian.innerHTML = newsHtml;
    console.log(articles);
}

xhr.send();
