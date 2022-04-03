import './CheckoutForm.css';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormError } from '../FormError/FormError';
import _ from 'lodash';
import equal from 'deep-equal';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const validationSchema = Yup.object({
  full_name: Yup.string()
    .min(2, 'At least 2 characters required')
    .max(25, 'Must not exceed 25 characters')
    .required('Input required'),
  line1: Yup.string()
    .min(5, 'At least 5 characters required')
    .max(30, 'Must not exceed 30 characters')
    .required('Input required'),
  line2: Yup.string()
    .min(5, 'At least 5 characters required')
    .max(30, 'Must not exceed 30 characters')
    .required('Input required'),
  city: Yup.string()
    .min(2, 'At least 2 characters required')
    .max(20, 'Must not exceed 20 characters')
    .required('Input required'),
  state: Yup.string()
    .min(3, 'At least 3 characters required')
    .max(20, 'Must not exceed 20 characters')
    .required('Input required'),
  zip: Yup.string()
    .min(1, 'At least 1 characters required')
    .max(10, 'Must not exceed 10 characters')
    .required('Input required'),
  country: Yup.string()
    .min(3, 'At least 3 characters required')
    .max(20, 'Must not exceed 20 characters')
    .required('Input required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Invalid phone number')
    .required('Input required'),
});

export const CheckoutForm = ({
  address,
  addressType,
  updateAddress,
  checkout,
}) => {
  let full_name, line1, line2, city, state, zip, country, phone;
  ({ full_name, line1, line2, city, state, zip, country, phone } = address);

  const [loading, setLoading] = useState(false);

  const updateUserAddress = (values) => {
    setSubmitting(true);
    updateAddress(values);
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      full_name: full_name || '',
      line1: line1 || '',
      line2: line2 || '',
      city: city || '',
      state: state || '',
      zip: zip || '',
      country: country || '',
      phone: phone || '',
    },
    onSubmit: (values) => {
      console.log('Formdata: ', values);
      updateUserAddress(values);
    },
    validationSchema: validationSchema,
    enableReinitialize: true,
  });

  const {
    touched,
    errors,
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    resetForm,
    setSubmitting,
  } = formik;

  const checkoutHandler = (e) => {
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    setLoading(true);
    console.log('Clicked checkout handler!');
    checkout();
  };

  const renderAddressForm = () => (
    <div>
      <form className="addressForm-container" onSubmit={handleSubmit}>
        <h3 className="addressType">{addressType}</h3>
        <div className="row">
          <div className="input-container col-12">
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={values.full_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                (touched.full_name &&
                  errors.full_name &&
                  'form-control is-invalid checkout-input') ||
                'form-control checkout-input'
              }
            />
            <FormError touched={touched.full_name} message={errors.full_name} />
          </div>
          <div className="input-container col-12">
            <label htmlFor="line1">Line1</label>
            <input
              type="text"
              id="line1"
              name="line1"
              value={values.line1}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                (touched.line1 &&
                  errors.line1 &&
                  'form-control is-invalid checkout-input') ||
                'form-control checkout-input'
              }
            />
            <FormError touched={touched.line1} message={errors.line1} />
          </div>
          <div className="input-container col-12">
            <label htmlFor="line2">Line2</label>
            <input
              type="text"
              id="line2"
              name="line2"
              value={values.line2}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                (touched.line2 &&
                  errors.line2 &&
                  'form-control is-invalid checkout-input') ||
                'form-control checkout-input'
              }
            />
            <FormError touched={touched.line2} message={errors.line2} />
          </div>
          <div className="input-container col-6">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                (touched.city &&
                  errors.city &&
                  'form-control is-invalid checkout-input') ||
                'form-control checkout-input'
              }
            />
            <FormError touched={touched.city} message={errors.city} />
          </div>
          <div className="input-container col-6">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                (touched.country &&
                  errors.country &&
                  'form-control is-invalid checkout-input') ||
                'form-control checkout-input'
              }
            />
            <FormError touched={touched.country} message={errors.country} />
          </div>
          <div className="input-container col-6">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                (touched.state &&
                  errors.state &&
                  'form-control is-invalid checkout-input') ||
                'form-control checkout-input'
              }
            />
            <FormError touched={touched.state} message={errors.state} />
          </div>
          <div className="input-container col-6">
            <label htmlFor="zip">Zip</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={values.zip}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                (touched.zip &&
                  errors.zip &&
                  'form-control is-invalid checkout-input') ||
                'form-control checkout-input'
              }
            />
            <FormError touched={touched.zip} message={errors.zip} />
          </div>
          <div className="input-container col-12">
            <label htmlFor="phone">Phone</label>
            <PhoneInput
              country={'hk'}
              autoFormat={true}
              disableSearchIcon={true}
              id="phone"
              name="phone"
              value={values.phone}
              enableSearch={true}
              onChange={handleChange('phone')}
              onBlur={handleBlur('phone')}
              searchPlaceholder={'Search...'}
              className={
                (touched.phone && errors.phone && 'error') || 'no-error'
              }
            />
            <FormError touched={touched.phone} message={errors.phone} />
          </div>
        </div>
        <button
          className={
            !_.isEmpty(errors || equal(address, values) || loading)
              ? 'btn updateAddress-btn disable'
              : 'btn updateAddress-btn'
          }
          type="submit"
        >
          Update Address
        </button>
      </form>
      <button
        className={
          !_.isEmpty(errors || equal(address, values) || loading)
            ? 'btn checkout-btn mt-2 mb-4 disable'
            : 'btn checkout-btn mt-2 mb-4'
        }
        onClick={(e) => checkoutHandler(e)}
      >
        <FontAwesomeIcon icon={faLock} className="checkout-icon" />
        <span>Check Out</span>
      </button>
    </div>
  );

  return <div>{renderAddressForm()}</div>;
};
