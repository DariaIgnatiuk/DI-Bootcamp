import data from '../../public/data-ex-two.json'

const Example2 = () => {

    return (
        <> 
        <h4>Programming Language</h4>
        <ul>
        {data.Skills[0].SkillSet.map((item)=> {
            return (
                <li>{item.Name}</li>
            )
        })
        }
        </ul>
        <h4>Web-Based Application Development</h4>
        <ul>
        {data.Skills[1].SkillSet.map((item)=> {
            return (
                <li>{item.Name}</li>
            )
        })
        }
        </ul>
        </>
    )
}

export default Example2;