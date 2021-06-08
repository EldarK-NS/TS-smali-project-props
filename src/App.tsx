import React from 'react';
import Card, { CardVariant } from './components/Card';

import EventsExample from './components/EventsExample';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import UsresPage from './components/UsresPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';


function App() {


   return (
      <BrowserRouter >
         <div>
            <div>
               <NavLink to='/users'>Users</NavLink>
               <NavLink to="/todos">Todos</NavLink>
            </div>
            <Route path={'/users'} exact>
               <UsresPage />
            </Route>
            <Route path={'/todos'} exact>
               <TodosPage />
            </Route>
            <Route path={'/users/:id'}>
               <UserItemPage />
            </Route>
            <Route path={'/todos/:id'}>
               <TodoItemPage />
            </Route>

         </div>
      </BrowserRouter>
   );
}

export default App;
