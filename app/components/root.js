import React from 'react'
import { Route, Switch, Redirect, Link} from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <main>
        <h1>Main Scene Window</h1>
        <Switch>
        </Switch>
      <nav>
        <ul>
          <li>
            Inventory
          </li>
          <li>
          </li>
        </ul>
      </nav>
      </main>
    </div>
  )
}

export default Root
