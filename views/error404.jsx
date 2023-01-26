const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/404.jpg" alt="Dogs At Computer" /><br></br>
                Photo by <a href="https://unsplash.com/@cookiethepom">Cookie the Pom</a> on <a href="https://unsplash.com/photos/gySMaocSdqs">Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404

  