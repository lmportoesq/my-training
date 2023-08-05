import './container.css';

function Container({ children, title }) {
    return (
        <>
            <div className='container'>
                <h1>{title}</h1>
                <hr />
                {children}
            </div>
        </>
    )
}
export default Container;
