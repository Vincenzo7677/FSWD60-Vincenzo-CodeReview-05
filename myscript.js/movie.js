for(i=0; i<movieData.length; i++){

		
document.getElementsByClassName("box")[i].innerHTML += 

`<div class="card">
	<h1 class="card-title">${movieData[i].Title}</h1>
 	 <img class="card-img-top" src='${movieData[i].image}' alt="image">
 	 
 	 <div class="card-body">
    
    <p class="card-text">${movieData[i].description}</p>
<button class="btn" onclick="clickME()">Like</button>
    <p>clicks: <a class="two"> 0</a></p>
	</div>
</div>`

var clk = 0;
var btn = document.getElementsByClassName("btn");

	function clickME() {
		 
		clk += 1;
		document.getElementsByClassName('two')[0].innerHTML = clk;

	}

}

 



