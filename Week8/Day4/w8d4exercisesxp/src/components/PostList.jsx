import data from '../../public/data.json'
const PostList = (props) => {
    return(
        <>
        <h2>Hi This is a Title</h2>
        {data.map((post)=>{
            return (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            )
        })}
        
        </>
    )
} 

export default PostList;