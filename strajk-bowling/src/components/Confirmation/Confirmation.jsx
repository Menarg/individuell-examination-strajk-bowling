import './Confirmation.scss';

import Top from '../Top/Top';
import Navigation from '../Navigation/Navigation';
import Input from '../Input/Input';

function Confirmation({ confirmationDetails, setConfirmation }) {
  console.log('Confirmation page');
  return (
    <section className='confirmation'>
      <Navigation setConfirmation={setConfirmation} />
      <Top title='See you soon!' />
      {confirmationDetails?.active ? (
        <form className='confirmation__details'>
          <Input
            label='When'
            type='text'
            customClass='confirmation__input'
            defaultValue={confirmationDetails.when.replace('T', ' ')}
            disabled='disabled'
          />
          <Input
            label='Who'
            type='text'
            customClass='confirmation__input'
            defaultValue={confirmationDetails.people}
            disabled='disabled'
          />
          <Input
            label='Lanes'
            type='text'
            customClass='confirmation__input'
            defaultValue={confirmationDetails.lanes}
            disabled='disabled'
          />
          <Input
            label='Booking number'
            type='text'
            customClass='confirmation__input'
            defaultValue={confirmationDetails.id}
            disabled='disabled'
          />
          <article className='confirmation__price'>
            <p>Total:</p>
            <p data-testid='confirmation__price'>{confirmationDetails.price} sek</p>
          </article>
          <button
            className='button confirmation__button'
            data-testid='button confirmation__button'
            onClick={(event) => {
              event.preventDefault();
              setConfirmation({});
            }}
          >
            Sweet, let's go!
          </button>
        </form>
      ) : (
        <h2 className='confirmation__no-booking'>Inga bokning gjord!</h2>
      )}
    </section>
  );
}

export default Confirmation;
