import { CONNECTION_TYPES } from './constants'
import './index.css'

const ConnectPage = ()  => {

    return <div class='connect-page'>
        <div class='connect-banner'>
            <div class='c-banner-left'>
            <h1>LET'S CONNECT!</h1>
            <h2>My names Xaviour and I think your pretty cool</h2>
            </div>
            <div class='c-banner-right'>
                <img class='c-banner-img' src='/its_me_hello.png' />
            </div>
        </div>

        <div class='connect-grid'>
        {CONNECTION_TYPES.map((connection, index) => (
            <div class='connect-icon-button' style={{'--animation-order': (index%2) === 0 ? index : index - 1}}>
                <a href={connection.redirect} class='connect-icon' target="_blank" rel="noopener noreferrer">
                    {connection.icon}
                </a>
            </div>
        ))}
        </div>
    </div>
}

export default ConnectPage