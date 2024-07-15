var button=document.querySelector("button")
button.addEventListener('click',show)

let resultdiv=document.createElement('div')
   resultdiv.className="result"
   document.querySelector(".box").appendChild(resultdiv)

function show()
{
    var input=document.getElementById("input")
    var city=input.options[input.selectedIndex].value
    console.log(city)

    let population=0,language=0,studyRate=0
    switch(city)
    {
        case 'Jaffna':
            population=65
            language='Tamil'
            studyRate='74%'
            break

        case 'Colombu':
            population=100
            language='Sinhala'
            studyRate='85%'
            break
        
        case 'Kandy':
            population=45
            language='Sinhala'
            studyRate='65%'
            break

        case 'Trincomalee':
            population=50
            language='Tamil'
            studyRate='45%'
            break

    }
    let text=`The city name is ${city}.Population of the city is ${population}.Language of the city is ${language}.Study rate of the city is ${studyRate}.`
    document.querySelector(".result").innerHTML=text
   
}