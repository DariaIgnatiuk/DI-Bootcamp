import './FormCointainer.css'

const FormComponent = (props) => {

    return(
        <>
        <div id='answerForm'>
        <h2 >Entered Information:</h2>
        <p><em>Your name: </em>{props.first_name} {props.last_name}</p>
        <p><em>Your age:</em> {props.age}</p>
        <p><em>Your gender:</em> {props.gender}</p>
        <p><em>Your destination: </em>
            {props.destination!='--Please choose a destination--'?props.destination:''}
        </p>
        <p><em>Your dietary restrictions:</em></p>
        <p className='options'>**Nuts free: {props.restrictions.nutsFree?"Yes":"No"}</p>
        <p className='options'>**Lactose free: {props.restrictions.lactoseFree?"Yes":"No"}</p>
        <p className='options'>**Vegan meal: {props.restrictions.veganMeal?"Yes":"No"}</p>
        </div>
        </>
    )
}

export default FormComponent;
