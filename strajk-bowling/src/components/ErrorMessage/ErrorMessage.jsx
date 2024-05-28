import './ErrorMessage.scss';

function ErrorMessage() {
    console.log('ErrorPage');
    return (
        <article className='error-message'>
            <p className='error-message__text'>Fill out all the fields and make sure that people and shoes is the same number.</p>
        </article>
    )
}

export default ErrorMessage;