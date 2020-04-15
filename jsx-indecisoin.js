// console.log("app.js Is Running");

const app = {
    title: "Indecision App",
    subtitle: "put your life in hand of a computer",
    option: []
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.option.push(option);
        e.target.elements.option.value = "";
        renderOptionApp();
    }
}

const onRemoveAll = () => {

    app.option.length = [];
    renderOptionApp();

}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.option.length);
    const option2 = app.option[randomNum];
    alert(option2);
};
const appRoot = document.getElementById('app');


const renderOptionApp = () => {
    const template = (
 <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
            {app.option.length > 0 ? "This are your oprtions" : "No options"}
            
         <button disabled = {app.option.length === 0} onClick={onMakeDecision}> What should I do?</button>
         <button onClick={onRemoveAll}> Remove All </button>
         <ol>
                {
                    app.option.map((option1) => {
                        return <li key={option1}> {option1}</li>
                    })
              } 
         </ol>
         <form onSubmit={onFormSubmit}>
             <input type="text" name="option"></input>
             <button>Add Option</button>
         </form>
    </div>
);

    ReactDOM.render(template, appRoot);

}
renderOptionApp();
