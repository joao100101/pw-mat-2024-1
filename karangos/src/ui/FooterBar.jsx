import React from 'react'
import {
    Toolbar,
    Typography
} from '@mui/material'

const FooterBar = () => {
    return (
        <>
            <Toolbar
                variant='dense'
                component="footer"
            >
                <Typography
                    variant='caption'
                >
                    Desenvolvido com café por <a href="mailto:joaovictormundel@gmail.com">João Victor Mundel</a>
                </Typography>
            </Toolbar>
        </>
    )
}

export default FooterBar