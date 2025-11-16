


export const PassingData = (props) => {

    console.log(props);
    
  return (
    
    <center>
    <h1>Child Element</h1>
    <p>
        {
            props.txt
        }

    </p>
    <p>
        {
            props.hello
        }</p>

        <h1>User Data </h1>

        <p>
           Name: {props.myuser.name}
            
        </p>
        <p>Position: {props.myuser.Position}</p>
        <p>DOB: {props.myuser.DOB}</p>
         <p>age: {props.myuser.age}</p>
         

            {
                props.user.map((item)=>{
                    return( 
                    <div style={{border:'1px solid black'}} key={item.name}>
                        <p>{item.name}</p>
                        <p>{item.position}</p>
                        <p>{item.DOB}</p>
                        <p>{item.age}</p>
                    </div>)
                })
            }

    </center>

  )
}
