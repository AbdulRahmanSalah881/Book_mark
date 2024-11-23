var SiteURLInput = document.getElementById("SiteURL");
var SiteNameInput = document.getElementById("SiteName");
var searchInput = document.getElementById("searchinput")
var sitlist = [];
if (localStorage.getItem("SiteContainer") !== null) {
    sitlist = JSON.parse(localStorage.getItem("SiteContainer"));
    desplaydata()
}
function AddLink() {


    if (validationname() && validationweb()) {
        var Site = { // Entar a data 
            name: SiteNameInput.value,//valu name 
            url_link: SiteURLInput.value//valu url 
        }
        sitlist.push(Site)
        localStorage.setItem("SiteContainer", JSON.stringify(sitlist))
        desplaydata();//after the data input this function to make list of table of data
        // console.log(sitlist)
        Swal.fire({
            title: "Good job!",
            text: "success",
            icon: "Tack Care  "
          });
        clearSite();



    }
    else {


        Swal.fire({
            icon: "error",
            title: "Oops...Something went wrong!",
            text: "Site name must contain at least 3 characters  & Site URL must be a valid one          ",
            footer: 'Please Try Again :) '
        });
    }


}
function clearSite() { //clear sit after Entar a data 

    SiteURLInput.value = null;
    SiteNameInput.value = null;
}
function desplaydata() {
    var cartona = "";
    for (var i = 0; i < sitlist.length; i++) {

        cartona += `
            <tr>
                    <th scope="row"><i class="fa-solid fa-arrow-right"></i>   ${i}  <i class="fa-solid fa-arrow-left"></i>  </th>
                    <td>${sitlist[i].name}</td>
                    <td>  <a target="_blank" href="${sitlist[i].url_link}"> <button class="btn btn-primary btn1" type="button"> <i class="fa-solid fa-eye"></i> Visit</button></a>
                    </td>
                    <td> <button onclick="deletlink(${i})" class="btn btn-danger btn2" type="button"> <i class="fa-solid fa-trash"></i>Delete</button>
                    </td>
    
                    </tr>`
      

    }



    document.getElementById("Tabledata").innerHTML = cartona;

}



function deletlink(index) {
    sitlist.splice(index, 1);
    localStorage.setItem("SiteContainer", JSON.stringify(sitlist))

    desplaydata();
}

function searchData() {
    var term = searchInput.value;
    var cartona = "";
    for (var i = 0; i < sitlist.length; i++) {
        if (sitlist[i].name.toLowerCase().includes(term.toLowerCase())) {
            cartona += `
        <tr>
                <th scope="row">${i}</th>
                <td>${sitlist[i].name}</td>
                <td>  <a target="_blank" href="${sitlist[i].url_link}"> <button class="btn btn-primary" type="button"> <i class="fa-solid fa-eye"></i> Visit</button></a>
                </td>
                <td> <button onclick="deletlink(${i})" class="btn btn-danger" type="button"> <i class="fa-solid fa-trash"></i>Delete</button>
                </td>
        </tr>`
        }

    }
    document.getElementById("Tabledata").innerHTML = cartona;


}

function validationname() {
    var nameRegex = /^\w{3,}(\s+\w+)*$/;
    var text = SiteNameInput.value;
    var msgName = document.getElementById("msgName")
    if (nameRegex.test(text)) {
        msgName.classList.add("d-none")
        SiteNameInput.classList.add("is-valid")
        SiteNameInput.classList.remove("is-invalid")
        return true;

    }
    else {

        msgName.classList.remove("d-none");
        SiteNameInput.classList.add("is-invalid")
        SiteNameInput.classList.remove("is-valid")
        return false;

    }
}
function validationweb() {
    var regixsweb = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    var textUrl = SiteURLInput.value;
    var msgurl = document.getElementById("msgurl")
    if (regixsweb.test(textUrl)) {
        msgurl.classList.add("d-none");
        SiteURLInput.classList.add("is-valid");
        SiteURLInput.classList.remove("is-invalid");
        return true;

    }
    else {

        msgurl.classList.remove("d-none");
        SiteURLInput.classList.add("is-invalid");
        SiteURLInput.classList.remove("is-valid");
        return false;

    }
}





