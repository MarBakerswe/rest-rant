const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1 className="topheader">REST-Rant</h1>
              <div>
                <div className="default">
                <img src="/images/jay-wennington.jpg" alt="Dogs Running" /><br></br>
                Photo by <a href="https://unsplash.com/@jaywennington">Jay Wennington</a> on <a href="https://unsplash.com/photos/N_Y88TWmGwA">Unsplash</a>
              </div>
              <a href="/places">
                <button className="btn btn-primary homebttn">Places Page</button>
            </a>
            </div>
          </main>
      </Def>
    )
  }
  

module.exports = home
