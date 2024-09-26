import data from '../../public/data-ex-two.json'


const Example3 = () => {

    return (
        <> 
        {data.Experiences.map((item)=> {
            return (
                <>
                <img src={item.logo}/> <br/>
                <a href={item.url}>{item.companyName}</a>
                <h5>{item.roles[0].title}</h5>
                <p>{item.roles[0].startDate} {item.roles[0].location}</p>
                <p>{item.roles[0].description}</p>
                </>
            )
        })
        }
        {console.log(data.Experiences)
        }
        </>
    )
}

export default Example3;