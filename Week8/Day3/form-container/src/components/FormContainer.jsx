import { useState, useEffect } from "react";
import FormComponent from "./FormComponent";
import './FormCointainer.css'

const FormContainer = (props) => {
    const [info, setInfo] = useState({
        first_name:'',
        last_name :'',
        age:'',
        gender:'',
        destination:'',
        restrictions:{
            nutsFree:false,
            lactoseFree:false,
            veganMeal:false
        }

    })

    useEffect(() => {console.log(info)},info)

    const changeInfo = (e, criteria) => {
        info[criteria] = e.target.value;
        setInfo({...info})
    }

    const changeRestrictions = (e, criteria) => {
        info.restrictions[criteria] = e.target.checked;
        setInfo({...info})
    }

    return (
        <>
        <h2 className='header'>Sample form</h2>
        <form>
            <input placeholder='First Name' name='first_name' className="text" onChange={()=>{changeInfo(event, 'first_name')}}/> <br/>
            <input placeholder='Last Name' name='last_name' className="text" onChange={()=>{changeInfo(event, 'last_name')}}/> <br/>
            <input placeholder='Age' name='age' className="text" onChange={()=>{changeInfo(event, 'age')}}/> <br/><br/>
            <input type="radio" id="male" name="gender" value="male" onChange={()=>{changeInfo(event, 'gender')}}/> 
            <label htmlFor="male">Male</label><br/>
            <input type="radio" id="female" name="gender" value="female" onChange={()=>{changeInfo(event, 'gender')}}/>
            <label htmlFor="female">Female</label>
            <h4>Select your destination</h4>
            <select onChange={()=>{changeInfo(event, 'destination')}}>
                <option>--Please choose a destination--</option>
                <option>Thailand</option>
                <option>Japan</option>
                <option>Brazil</option>
            </select><br/><br/>
            <h4>Dietary restrictions</h4>
            <div className="restrictions">
                <input type="checkbox" onChange={()=>{changeRestrictions(event, 'nutsFree')}}/>
                <span>Nuts free</span><br/>
                <input type="checkbox" onChange={()=>{changeRestrictions(event, 'lactoseFree')}}/>
                <span>Lactose free</span><br/>
                <input type="checkbox" onChange={()=>{changeRestrictions(event, 'isVegan')}}/>
                <span>Vegan</span>
            </div>
            <button type="submit">Submit</button>
        </form>
        <hr/>
        <FormComponent first_name={info.first_name} last_name={info.last_name} age={info.age} gender={info.gender} destination={info.destination} restrictions={info.restrictions}/>
        </>
    )
} 

export default FormContainer;