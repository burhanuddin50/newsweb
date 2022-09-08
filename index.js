document.getElementById("bt").addEventListener("click",()=>{
    document.getElementById("b1").style.display="none";
})

let cont = document.getElementById("cont");

function displaynews(data){
    let articles=data.articles;
    articles.forEach(element => {
        cont.innerHTML +=`<div class="flex flex-row w-full h-full">
        <main class="mx-auto mt-10 max-w-full px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 xl:mr-14  flex flex-row">
          <div class="sm:text-center lg:text-left w-screen">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">${element.title}</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">${element.content}</p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="${element.url}" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
                  Source
                </a>
              </div>
            </div>
          </div>
        </main>
        <img src="${element.urlToImage}" alt="" srcset="" class="w-auto relative right-4 h-5/6 pt-52 ">
       </div>`
    });
}
function displayerr(){
    console.log("Error");
}
fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=521fd02fa3da4352b9a25e5f0f14d1e5").then(response=>response.json()).then(data=>displaynews(data));