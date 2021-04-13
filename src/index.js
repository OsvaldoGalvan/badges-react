import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

import Badge from './components/Badge'

const container =  document.getElementById('app')

ReactDOM.render(<Badge 
                firstName="Luis" 
                lastName="Perez" 
                jobTitle="Software Enginner"
                twitter="@OsvaldoGal"
                avatarURL ="https://s.gravatar.com/avatar/2576a730e8561d306104b2806ed8105e?s=80"
                />, container);