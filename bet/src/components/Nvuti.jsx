import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Nvuti() {

    const nvutiLogText = React.createRef();

    const getRandom = () => {
        return Math.round(Math.random() * 10)
    }

    const click = (e) => {
        let vote = e.target.textContent
        if (vote == 'Max' && getRandom() > 5) {
            console.log('Win!')
            this.nvutiLogText.innerHtml = 'Succsess'

        } else if (vote == 'Min' && getRandom() <= 5) {
            console.log('Win!')
        } else {
            console.log('Lose')
        }
    }

    return (
        <div className='nvuti-window'>
            <div className="nvuti-log">
                <span className="nvuti-log-text" ref={this.nvutiLogText}></span>
            </div>
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={click}>Max</Button>
                <Button variant="contained" onClick={click}>Min</Button>
            </Stack>
        </div>
    );
}