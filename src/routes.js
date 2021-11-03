import React from "react"
import { Switch, Route} from "react-router-dom"

import Home from './pages/Home/Home'
import Blocks from './pages/Blocks/Blocks'
import Cards from './pages/Cards/Cards'
import Forms from './pages/Forms/Forms'
import Pricing from './pages/Pricing/Pricing'
import NotFound from "./pages/NotFound/NotFound"

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/Blocks" component={Blocks}/>
            <Route path="/Cards" component={Cards}/>
            <Route path="/Forms" component={Forms}/>
            <Route path="/Pricing" component={Pricing}/>
            <Route component={NotFound}/>
        </Switch>
    )
}