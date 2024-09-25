import React from "react"

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        }
    }


componentDidCatch(error, errorInfo) {
    this.setState({hasError: true})
    this.setState({error: error})
    this.setState({errorInfo: errorInfo})
}

    render (){
        if (this.state.hasError) 
            return (
                    <>
                    <h2>Something went wrong.</h2> 
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                     <br />
                    {this.state.errorInfo.componentStack}
                    </details>
                    </>
                 
            
        )
        return this.props.children;
    }

}

export default ErrorBoundary;