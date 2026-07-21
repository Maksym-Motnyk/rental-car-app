import { Formik, Form, Field } from 'formik';
import css from './BookingForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { sendBooking } from '../../cars-api';
import toast, { Toaster } from 'react-hot-toast';

export default function BookingForm({ cardId }) {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const initialValues = {
    name: '',
    email: '',
    comment: '',
  };

  const handleSubmit = async (values, actions) => {
    try {
      const res = await sendBooking(cardId, values);
      console.log(res);
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Must be a valid email!').required('Required'),
    comment: Yup.string().min(3, 'Too short').max(256, 'Too long').required('Required'),
  });

  const notify = () => toast('Successful rental');

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.bookForm}>
        <p className={css.bookTitle}>Book your car now</p>
        <p className={css.bookText}>Stay connected! We are always ready to help you.</p>
        <Field className={css.bookInput} type="text" name="name" placeholder="Name*" id={nameId} />
        <Field
          className={css.bookInput}
          type="email"
          name="email"
          placeholder="Email*"
          id={emailId}
        />
        <Field
          className={css.bookMessage}
          as="textarea"
          name="comment"
          id={messageId}
          rows="5"
          placeholder="comment"
        />
        <button className={css.bookBtn} type="submit" onClick={notify}>
          Send
        </button>
        <Toaster />
      </Form>
    </Formik>
  );
}
