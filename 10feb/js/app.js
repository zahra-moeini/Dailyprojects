//class
const ui=new UI();
const newsAPI=new News()
//listeners
 listeners();
function listeners(){
    document.querySelector("#submitBtn").addEventListener('click',search);
}


//functions
function search(e){
    e.preventDefault()
    // console.log('hiii');
    const newsNams = document.querySelector("#news-name").value;
    const country = document.querySelector("#country").value;
    const category = document.querySelector("#category").value;

    // console.log(newsNams);
    // console.log(country);
    // console.log(category);
    
    if(newsNams !=='' || country !=='' || category !=='' ){
     newsAPI.queryAPI(newsNams, country,category)
     .then(news=>{
        const newsArray = news.news.articles;
        if (newsArray.length>0) {
            ui.shownews(newsArray);
        } else {
            ui.printmesaage(
              "There is no news in with your filtering",
              "text-center alert alert-danger mt-4"
            );
        }
     })
    }
    else{
       ui.printmesaage('please enter atleast one parameter','text-center alert alert-danger mt-4')
    }

}