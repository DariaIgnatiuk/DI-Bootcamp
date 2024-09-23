import "../Exercise.css"

const Exercise = () => {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

    return (
        <>
            {/* <h1 style={{ color: 'red', backgroundColor:'lightblue'}}>This is a Header</h1> */}
            <h1 style={style_header}>This is a Header</h1>
            <p class='para'>This is a paragraph</p>
            <a>This is a link</a>
            <form>
                <p2>This is a Form</p2> <br/>
                <label>Enter your name</label> <br/>
                <input type="text"/>
                <input type="submit" value="Submit"/>
            </form> <br/>
            <img src="https://www.svgrepo.com/show/327388/logo-react.svg" height="250"/>
            <ul>This is a List:
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </>
    )
}
export default Exercise;