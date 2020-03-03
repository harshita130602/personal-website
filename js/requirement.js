
function inc() 
{
    if('count' in localStorage)
    {
        var counter = localStorage.getItem('count')
    }
    else
    {
        var counter = 0
    }
    counter++
    localStorage.setItem('count', counter)
    document.getElementById("countem").innerHTML = counter;
}

function tablePrint()
{
    var namez = document.getElementById("name_input").value
    var skillz = document.getElementById("skill_input").value
    var levelz = document.getElementById("level_input").value
    var commentz = document.getElementById("comment_input").value

    if('namesarr' in localStorage)
    {
        var namesarr = JSON.parse(localStorage.getItem('namesarr'))
    }
    if('skillsarr' in localStorage)
    {
        var skillsarr = JSON.parse(localStorage.getItem('skillsarr'))
    }
    if('levelsarr' in localStorage)
    {
        var levelsarr = JSON.parse(localStorage.getItem('levelsarr'))
    }
    if('commentsarr' in localStorage)
    {
        var commentsarr = JSON.parse(localStorage.getItem('commentsarr'))   
    }

    if(namesarr != null)
    {
        namesarr.push(namez)
        skillsarr.push(skillz)
        levelsarr.push(levelz)
        commentsarr.push(commentz)
    }
    else
    {
        var namesarr = [namez]
        var skillsarr = [skillz]
        var levelsarr = [levelz]
        var commentsarr = [commentz] 
    }
    

    localStorage.setItem("namesarr", JSON.stringify(namesarr))
    localStorage.setItem("skillsarr", JSON.stringify(skillsarr))
    localStorage.setItem("levelsarr", JSON.stringify(levelsarr))
    localStorage.setItem("commentsarr", JSON.stringify(commentsarr))

    
    var tablevar = document.getElementById("storeData").getElementsByTagName("tbody")[0]
    var nr = tablevar.insertRow();
    var c1 = nr.insertCell(0)
    var c2 = nr.insertCell(1)
    var c3 = nr.insertCell(2)
    var c4 = nr.insertCell(3)
    c1.innerHTML = namesarr[commentsarr.length-1]
    c2.innerHTML = skillsarr[commentsarr.length-1]
    c3.innerHTML = levelsarr[commentsarr.length-1]
    c4.innerHTML = commentsarr[commentsarr.length-1]
    

    document.getElementById("formMeAaja").reset();
}

function loadTable()
{
    if('namesarr' in localStorage)
    {
        var namesarr = JSON.parse(localStorage.getItem('namesarr'))
    }
    if('skillsarr' in localStorage)
    {
        var skillsarr = JSON.parse(localStorage.getItem('skillsarr'))
    }
    if('levelsarr' in localStorage)
    {
        var levelsarr = JSON.parse(localStorage.getItem('levelsarr'))
    }
    if('commentsarr' in localStorage)
    {
        var commentsarr = JSON.parse(localStorage.getItem('commentsarr'))   
    }

    if(namesarr != null)
    {
        
        var tablevar = document.getElementById("storeData").getElementsByTagName("tbody")[0]
        for (let i = 0; i < skillsarr.length; i++)
        {
            var nr = tablevar.insertRow();

            var c1 = nr.insertCell(0)
            var c2 = nr.insertCell(1)
            var c3 = nr.insertCell(2)
            var c4 = nr.insertCell(3)
            c1.innerHTML = namesarr[i]
            c2.innerHTML = skillsarr[i]
            c3.innerHTML = levelsarr[i]
            c4.innerHTML = commentsarr[i]
        }
    }
}