class UI {
    constructor(){
        this.result = document.querySelector("#result");
    }
  //show anu message in html
  printmesaage(mesaage, className) {
    //create div tag
    const div = document.createElement("div");
    //append text message to the div tag
    div.appendChild(document.createTextNode(mesaage));
    //append class name to the tag
    div.className = className;
    // show the message into the html
    document.querySelector("#message").appendChild(div);

    // console.log(div);

    //remove message after 3second
    setTimeout(() => {
      this.removeMesaage();
    }, 3000);
  }
  //ramove mesage after showing onfo the html
  removeMesaage() {
    const alert = document.querySelector(".alert");
    if (alert) {
      alert.remove();
    }
  }
//   showing result info the html
  shownews(news){
      console.log(news);
    //   let htmlTemplate='';
      news.forEach(newsInfo => {
          console.log(newsInfo.urlToImage);
          this.result.innerHTML += `
          <div class="col-md-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title text-center">${newsInfo.title.split("-",1)}</h2>
                    <img src="${newsInfo.urlToImage}" class="card-img-top">
                    <p class="card-text lead textto-info">news information:</p>
                    <span class="badge badge-primary">source:${newsInfo.source.name}</span>
                    <br>
                    <span class="badge badge-primary">Data & time:${newsInfo.publishedAt }</span>
                    <a href="${ newsInfo.url }" target="_blank" class="btn btn-primary btn-block">Complete News</a>
                </div>
            </div>
          </div>
          `;
      });
  }
}