import { useState } from 'react';
import generateStrongPassword from './utils/password-generator.ts';
import copyToClipboard from './utils/clipboard.ts';
import padlockLogo from './images/padlock.svg';
import copyToClipboardIcon from './images/copy-to-clipboard.svg';
import copyToClipboardIconGreen from './images/copy-to-clipboard-green.svg';
import loading from './images/loading.svg';

function App() {
    const PASSWORD_LENGTH = 30;
    const [password, setPassword] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    
    const handleGeneratePassword = () => {
        let strongPassword = generateStrongPassword(PASSWORD_LENGTH);
            setPassword(strongPassword);
    }
    
    const handleCopyToClipboard = () => {
        copyToClipboard(password)
            .then(() => setIsCopied(true))
            .catch((err) => console.log(err));
        
        setTimeout(() => setIsCopied(false), 2000);
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
                borderRadius: '10px',
                width: '25vw',
                height: '200px',
                backgroundColor: 'lightblue',
                padding: '20px'
            }}>
                <img src={padlockLogo} 
                    style={{
                    width: '50px', 
                    height: '80px'}} alt='logo'/>
                
                <div style={{
                    marginTop: '20px',
                    width: '100%',
                    display:'flex',
                    alignItems: 'space-between',
                    height: '50px',
                    borderRadius: '10px',
                    backgroundColor: 'white',
                    alignContent: 'center',
                    marginBottom: '20px'
                }}>

                    <p style={{ 
                        wordWrap: 'break-word', 
                        paddingInlineStart: '5px', 
                        display: 'inherit',
                        height: 'inherit', 
                        width: '85%' }}>{password}</p>

                    <img src={loading} alt='new password'
                         style={{ margin:'auto', height:'inherit', cursor: 'pointer'}}
                         onClick={handleGeneratePassword}
                    />
                    <img src={ isCopied ? copyToClipboardIconGreen : copyToClipboardIcon} alt='copy to clipboard'
                         style={{ margin:'auto', height:'inherit', cursor: 'pointer'}}
                         onClick={handleCopyToClipboard}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
