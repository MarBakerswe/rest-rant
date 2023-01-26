const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/dogs-running.jpg" alt="Dogs Running" /><br></br>
                Photo by <a href="https://unsplash.com/@alvannee">Alvan Nee</a> on <a href="https://unsplash.com/photos/T-0EW-SEbsE">Unsplash</a>
              </div>
              <a href="/places">
                <button className="btn btn-primary">Places Page</button>
            </a>

              
          </main>
      </Def>
    )
  }
  

module.exports = home
