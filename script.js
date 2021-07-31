


const apiUrl="https://api.jikan.moe/v3/search/anime";

async function getJSON(){

    try {
      document.getElementById("row").innerHTML = "";
        let search = document.getElementById("search").value;
        let resp = await fetch(`${apiUrl}?q=${search}&page=1`);
        let data = await resp.json();
       foo(data)
      } catch (error) {
        console.log(error);
      }
}

    

    function foo(data){
      
   
        data.results.forEach(element => {
          var row=document.getElementById("row");
  
          var col=document.createElement("div")
          col.setAttribute('class','col-4 mb-3')
    
          var card=document.createElement("div")
          card.setAttribute('class','card h-100')
    
          var cardImg=document.createElement("img")
          cardImg.setAttribute('class','card-img-top')
          cardImg.setAttribute('src',element.image_url)
    
          var cardBody=document.createElement("div")
          cardBody.setAttribute('class','card-body')
    
          var cardTitle=document.createElement("h2")
          cardTitle.setAttribute('class','h2')
          cardTitle.innerHTML=element.title
    
          var cardText=document.createElement('p')
          cardText.setAttribute('class','card-text')
       //   cardText.innerHTML="Start Date"+":"+element.start_date +"End Date"+":"+element.end_date +"Type of Series"+":"+element.type +"IMDB Rating"+":"+ element.score;
          cardText.innerHTML=`<div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Start Date : ${element.start_date.substr(0, 10)}</li>
            <li class="list-group-item">End Date : ${element.end_date.substr(0, 10)}</li>
            <li class="list-group-item">Type of Series : ${element.type}</li>
            <li class="list-group-item">IMDB Rating : ${element.score}</li>
          </ul>
          </div>`;
          cardBody.append(cardTitle,cardText)
          card.append(cardImg,cardBody)
    
          
          col.append(card)
          row.append(col)
        });

       
}




    
