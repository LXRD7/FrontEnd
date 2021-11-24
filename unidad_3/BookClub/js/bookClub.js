class BookMeeting{
    constructor(author, title, date){
        this.author = author;
        this.title = title;
        this.date = date;
    }

    bookMtgEntry(i){
        return "<div class='row'>" +
            "<span>" + this.date.toDateString() + ": </span>" +
            "<span>" + this.author + ", <cite>" + this.title + "</cite></span>" +
            "<button id='mtg"+i+"' onclick='deleteMtg(this.id)'>Delete</button>" +
            "</div>";
    }


//********************************************************************************************************************************

var bookMtgList = new Array();

function addMtg(form){
    var author;
    var title;
    var date;

    if(!form.checkValidity()){
        document.getElementById("error").style.display = "block";
    }else{
        document.getElementById("error").style.display = "none";
        document.getElementById("mtgHeader").style.display = "block";
        author = form.elements["author"].value;
        title = form.elements["title"].value;
        date = new Date(form.elements["date"].value);

        bookMtgList.push(new BookMeeting(author, title, date));

        refreshList();
    }
}

function deleteMtg(id){
    id = id.slice(3);
    console.log(bookMtgList);
    bookMtgList.splice(id, 1);
    console.log(bookMtgList);
    refreshList();
}


function refreshList(){
    var sortDiv = document.getElementById("sortDiv");
    if(bookMtgList.length <= 1)
        sortDiv.style.display = "none";
        rad=null;
    if (bookMtgList.length > 1) {
        if(rad==null){
            sortDiv.style.display = "block";
            var rad = document.getElementsByName("sort");
            rad[0].addEventListener("click", sortByAuthor);
            rad[1].addEventListener("click", sortByTitle);
            rad[2].addEventListener("click", sorByDate);
            rad[0].checked = true;
        }
        for(var i = 0; i < rad.length; i++){
            if(rad[i].checked){
                rad[i].click();
                break;
            }
        }
    }

    displayList();
}

function sortByAuthor(){
    bookMtgList.sort(compareAuthor);
    displayList();
}

function sortByTitle(){
    bookMtgList.sort(compareTitle);
    displayList();
}

function sorByDate(){
    bookMtgList.sort(compareDate);
    displayList();
}

function compareAuthor(a, b){
    return (a.author < b.author) ? -1 : (a.author > b.author) ? 1 : 0;
}

function compareTitle(a, b){
    return (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0;
}

function compareDate(a, b){
    return (a.date < b.date) ? -1 : (a.date > b.date) ? 1 : 0;
}

function displayList() {
    var listContent = "";
    for(var i = 0; i < bookMtgList.length; i++){
        listContent += bookMtgList[i].bookMtgEntry(i);
    }
    document.getElementById("list").innerHTML = listContent;
}