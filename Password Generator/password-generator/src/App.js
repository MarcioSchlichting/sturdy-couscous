import { useState } from 'react';
import generateStrongPassword from './utils/password-generator.ts';
import copyToClipboard from './utils/clipboard.ts';
import './App.css';

function App() {
    const PASSWORD_LENGTH = 30;
    const [password, setPassword] = useState('test');
    
    const handleGeneratePassword = () => {
        let strongPassword = generateStrongPassword(PASSWORD_LENGTH);
        setPassword(strongPassword);
    }
    
    const handleCopyToClipboard = async () => {
        await copyToClipboard(password);
    }
    
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '3px',
                width: '300px',
                height: '200px',
                backgroundColor: 'lightblue',
                padding: '20px'
            }}>
                <button
                    style={{
                        width: '200px',
                        height: '40px',
                        marginBottom: '20px',
                        cursor: 'pointer'
                    }}
                    onClick={handleGeneratePassword}
                >
                    Generate a strong password
                </button>

                <p style={{ wordWrap: 'break-word' }}>{password}</p>
                
                <button id='clipboardBtn' onClick={() => copyToClipboard(password)}
                    style={{
                    width: '200px',
                    height: '40px',
                    marginBottom: '20px',
                    cursor: 'pointer'
                }}>
                    Copy to Clipboard
                </button >
            </div>
        </div>
    );
}

export default App;
