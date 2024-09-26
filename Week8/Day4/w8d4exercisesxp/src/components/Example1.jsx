import data from '../../public/data-ex-two.json'

const Example1 = () => {
    return (
        <> 
        <ul>
        {data.SocialMedias.map((item)=> {
            return (
                <li>{item}</li>
            )
        })
        }
        </ul>
        </>
    )
}

export default Example1;