import React from 'react'
import { ThemeProvider } from 'styled-components'
import Video from '../Video'
import Playlist from '../containers/Playlist'
import StyledWbnPlayer from '../styles/StyledWbnPlayer'


const theme = {
    bgcolor: '#17223B',
    bgcolorItem: '#263859',
    bgcolorItemActive: '#FF6768',
    bgcolorPlayed: '#6B778D',
    border: `1px solid #263340`,
    borderPlayed: 'none',
    color: '#F5F7FA'
}

const themeLight = {
    bgcolor: '#FFFFFF',
    bgcolorItem: '#F9F6F7',
    bgcolorItemActive: '#FF971D',
    bgcolorPlayed: '#FFE8D6',
    border: `1px solid #F5DAC6`,
    borderPlayed: 'none',
    color: '#302720'
}



const Player = props => {
    return (
        <ThemeProvider theme={state.nightMode ? theme : themeLight}>
            <StyledWbnPlayer>
                <Video />
                <Playlist />
            </StyledWbnPlayer>
        </ThemeProvider>
    )

}

export default Player