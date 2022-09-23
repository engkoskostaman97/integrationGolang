import React from 'react'
import Navbaruser from '../components/NavbarUser'

function Layout(props) {
    return (
        <>
            <Navbaruser />
            {props.children}
        </>
    )
}

export default Layout