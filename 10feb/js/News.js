class News{
    constructor(){
        this.APIkey = "aa3bc557ee464813b0f0d632f79316c6";
    }

    //send url to the API
    queryAPI(newsNams, country, category){
        //bulid url
        let url = "https://newsapi.org/v2/";
        //check to country and country value
        if(country==='' && category===''){
            url+='everything?'
        }
        else{
            url+='top-headlines?'
        }


        //if newsname  exist 
        if(newsNams !==''){
            url+=`q=${newsNams}&`
        }


        //if country exiset
        if(country !==''){
            url+=`country=${country}&`
        }
        //if category exist
        if(category !==''){
            url+=`category${category}&`
        }

        //comp;ete url with key
        url+=`apiKey=${this.APIkey}`
        // console.log(url);
    }
}