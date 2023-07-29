import './LandingPage.css'
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export default function LandingPage() {
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    return (
        <div className="container">
            <h1>Welcome to research assistant!</h1>
            <p>To begin, enter your OpenAI API key below. For more information about how to get your API key, see <a target="_blank" rel="noopener" href="https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key">here</a></p>
            <Stack direction="row">
                <TextField id="standard-basic" label="API key" variant="standard" onChange={(e) => setInput(e.target.value)} />
                <LoadingButton loading={loading } variant="contained" disabled={input === ''}>Submit</LoadingButton>
            </Stack>
        </div>
    )
}