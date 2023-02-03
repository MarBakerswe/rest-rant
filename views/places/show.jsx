const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className="row">
            <div className="col-sm-6">
              <img src={data.place.pic}/>
            </div>
            
            <div className="col-sm-6">
 
            <h1>{ data.place.name} </h1>
  
            <h2> Location </h2>
            <p>{data.place.state} {data.place.city},</p>

            <h2>Rating</h2>
            <p>Not Rated</p>

            <h2>Description</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

            <h5>Serving {data.place.cuisines}</h5>
         

         
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a> 
            
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            
            <button type="submit" className="btn btn-danger">Delete</button>
          
          </form> </div> 
          </div>

          <h2>Comments</h2>
          </main>
        </Def>
    )
}

module.exports = show    
