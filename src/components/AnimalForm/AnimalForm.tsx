import css from './AnimalForm.module.css'

export const AnimalForm = () => {

  return (
    <form className={css.form_wrapper}>
      <div className={css.input_container}>
        <label>Name:</label>
        <input type="text" required/>
      </div>

      <div className={css.input_container}>
        <label>Image:</label>
        <input type="text" required/>
      </div>
    </form>
  );
}