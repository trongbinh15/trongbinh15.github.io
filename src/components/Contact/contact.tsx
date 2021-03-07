import {useFormik} from 'formik';
import React, {useEffect} from 'react';
import styled from './contact-styles.module.scss';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type IFormData = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function ContactComponent () {

  const validate = (values: IFormData) => {
    const errors: IFormData = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.message) {
      errors.message = "Required";
    }

    return errors;
  };

  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validate,
    onSubmit: (value) => {

      const emailTemplate = {
        'to_name': 'Binh Nguyen',
        'from_name': value.name,
        'from_email': value.email,
        'from_phone': value.phone,
        'message': value.message
      }

      emailjs.send('service_vqlexcm', 'template_qig2iqc', emailTemplate, 'user_MAu2IyHtKVhXy1pAJKFzV')
      .then(() => {
          toast.success('Success!');
      }, (error) => {
          toast.error('Something went wrong!\n Please try again later!');
      });
    },
  });

  useEffect(()=> {
    (document.getElementById("submit_btn") as HTMLInputElement).disabled = !(form.isValid);
  })

  return (
    <>
      <div className={styled.container}>
        <ToastContainer/>
        <div className={styled.innerWidth}>
          <div className={styled.content}>
            <h1>Say Hi</h1>
            <div className={styled.form}>
              <form onSubmit={form.handleSubmit}>
                <div className={styled.group}>
                  <label htmlFor="name" className={styled.required}>
                    Name:
                  </label>
                  <div className={styled.inputField}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.name}
                    />
                    {form.touched.name && form.errors.name ? (
                      <div className={styled.error}>{form.errors.name}</div>
                    ) : null}
                  </div>
                </div>

                <div className={styled.group}>
                  <label htmlFor="email" className={styled.required}>
                    Email:
                  </label>

                  <div className={styled.inputField}>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.email}
                    />

                    {form.touched.email && form.errors.email ? (
                      <div className={styled.error}>{form.errors.email}</div>
                    ) : null}
                  </div>
                </div>

                <div className={styled.group}>
                  <label htmlFor="phone">Phone: </label>

                  <div className={styled.inputField}>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.phone}
                    />
                  </div>
                </div>

                <div className={styled.group}>
                  <label htmlFor="message" className={styled.required}>
                    {" "}
                    Message:{" "}
                  </label>

                  <div className={styled.inputField}>
                    <textarea
                      id="message"
                      name="message"
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      value={form.values.message}
                    ></textarea>
                    {form.touched.message && form.errors.message ? (
                      <div className={styled.error}>{form.errors.message}</div>
                    ) : null}
                  </div>
                </div>
                <div className={styled.actions}>
                  <button type="submit" id='submit_btn' disabled>SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactComponent