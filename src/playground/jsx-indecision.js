console.group('App.js is running!')

//if statements
//ternary operator

const app = {
    title: 'Simple Web App',
    subtitle: 'This is some info',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault() //do not refresh the page

    const option = e.target.elements.option.value  //event target(the form)
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        renderPage()
    }
}

const onRemoveAll = () => {
    app.options = []
    renderPage()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}
const appRoot = document.getElementById('app');


const renderPage = () => {
    //JSX - javascript XML
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>}
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>Option: {option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot)
}

renderPage()
