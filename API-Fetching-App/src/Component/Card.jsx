function Card({data}){
    return(
        <>
        <div className="col-md-3 mt-5">
            <div className="card">
                <div className="card-header">
                    <img src={data.image} alt="" className="w-100" height="280"/>
                </div>
                <div className="card-body">
                    <h6>{data.title}</h6>
                    <p>{data.price}</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card
