// Some starter code
const container = document.querySelector("#wishList")

/* Challenge clear out values & first input focus */

document.querySelector("#saveEntry").addEventListener("click", event => {
    
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    //let thing = document.querySelector("#thing").value
    const thing = document.querySelector("#thing");
    let thing2 = thing.value;
    const location = document.querySelector("#location");
    let location2 = location.value;
     
    if (thing2 === "" || location2 === "") {
       alert("Must enter info")
    } else {
    // Once you have collected all the values, update the DOM
    // with some HTML
    
    container.innerHTML += `
        <section>
            <h1>Wishlist</h1>
            <p> I can purchase a ${thing2} at ${location2}</p>
        </section>
    `    
     
   }
     thing.value = '';
     location.value = '';
    })





