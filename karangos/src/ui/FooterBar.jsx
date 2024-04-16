import React from 'react'
import {
    Toolbar,
    Typography
} from '@mui/material'
import CoffeeIcon from '@mui/icons-material/Coffee';
const FooterBar = () => {
    return (
        <>
            <Toolbar
                variant='dense'
                component="footer"
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    width: '100vw',
                    justifyContent: 'center',
                    backgroundColor: 'action.disabledBackground'
                }}
            >
                <Typography
                    variant='caption'
                    sx={{
                        '& a': { color: 'secondary.light' }
                    }}
                >
                    Desenvolvido com <CoffeeIcon fontSize='small'/> por <a href="mailto:joaovictormundel@gmail.com">João Victor Mundel</a>
                </Typography>
            </Toolbar>
        </>
    )
}

export default FooterBar