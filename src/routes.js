import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={home} />
            </Switch>
        </BrowserRouter>
    )
}