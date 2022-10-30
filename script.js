// select the element and store in memory
const form = document.querySelector("#todo-form");

// add event listeners "submit"
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // get data
    const formContent = document.querySelector("input").value;

    // local storage

    const oldData = localStorage.getItem('data') || [];

    //document.querySelector(oldData)
    let parsedData = oldData.length === 0 ? [] : JSON.parse(oldData) ;
    parsedData.push(formContent);
    localStorage.setItem('data', JSON.stringify(parsedData));

    // display
    let template = "";
    for (let i = 0; i < parsedData.length; i++) {
        const formResult = parsedData[i];
    template +=   `
    <div class="row">
        <div class="column left">
            <div>${formResult}</div>
        </div>
    </div>
    `;
    }

    document.querySelector(".todo-container").innerHTML = template;
})