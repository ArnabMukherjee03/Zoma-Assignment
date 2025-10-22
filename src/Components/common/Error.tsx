interface ErrorProps {
    isRetryEnable?: boolean;
    onRetry?: () => void
}

const Error : React.FC<ErrorProps> = ({ isRetryEnable = false, onRetry}) => {
    return  <div className="error-state">
                    <div className="error-icon">⚠️</div>
                    <div className="error-message">
                        Failed to load data.<br/>
                        Please check your connection and try again.
                        <br/>
                        <b>NOTE:</b> Simulate random error to show error state.
                    </div>
                    { 
                    isRetryEnable && 
                    <button className="retry-btn" style={{ display: 'inline' }} onClick={onRetry}>
                    Retry
                    </button>
        }
    </div>
}

export default Error;