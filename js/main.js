const container = document.querySelector(".container")
const loading = document.querySelector('.loading')



loading.addEventListener("click",() =>{
    
function func(numberimages=5) {
    let i = 0
    while(i<=numberimages){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>res.json())
        .then((data)=> {
            const img = document.createElement("img");
            img.src=`${data.message}`;
            container.appendChild(img);
        })
        i++;
    }
}

func();

})


