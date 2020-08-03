import React, { useState } from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import * as Yup from 'yup'

// Components
import IconComponent from './icons/icon'
import ContainerComponent from './container'
import ButtonComponent from './button'
import Input from './input'

// Styles
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'
import { lightGrey, green, red } from '../styles/colors'

// Types
import { IContactForm, FieldName } from '../types/entities'

interface IProps {
  title: string
  buttonLabel: string
}

const ContactForm: React.FC<IProps> = ({
  title,
  buttonLabel = 'Neem contact met mij op',
}) => {
  const initialValues: IContactForm = {
    name: '',
    email: '',
    phone: '',
  }

  const phoneRegExp = /^((\+?[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{2,4}?[ \-]*[0-9]{2,4}?$/

  const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string()
      .email('Dit e-mailadres is niet geldig')
      .required('E-mailadres is verplicht'),
    phone: Yup.string().matches(
      phoneRegExp,
      'Dit telefoonnummer is niet geldig'
    ),
  })

  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const handleFormSubmit = async (
    values: IContactForm,
    { setSubmitting }: any
  ) => {
    setError(false)
    await fetch('/.netlify/functions/mail', {
      method: 'POST',
      body: JSON.stringify(values),
    })
      .then(_ => setSuccess(true))
      .catch(err => {
        setError(true)
        console.error(err)
        if (err.response) {
          console.error(err.response.body)
        }
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          const modifyPhoneValue = (phone: string) => {
            const foo: null | string[] = phone.match(/\+?[0-9]{1,2}/g)
            phone = (foo && foo.join(' ')) || phone
            return phone
          }

          return (
            <Form onSubmit={handleSubmit} noValidate>
              {success && (
                <Notification>
                  <NotificationIcon icon="check" color={green} />
                  <span>
                    Verzonden! Wij nemen zo spoedig mogelijk contact met u op.
                  </span>
                </Notification>
              )}
              {error && (
                <Notification>
                  <NotificationIcon icon="error" color={red} />
                  <span>Er ging iets mis, probeer het opnieuw.</span>
                </Notification>
              )}
              {Object.keys(errors).map((fieldName: string) => {
                setSuccess(false)
                return (
                  !!touched[fieldName as FieldName] && (
                    <Notification key={`error-message-${fieldName}`}>
                      <NotificationIcon icon="error" color={red} />
                      <span>{`${errors[fieldName as FieldName]}`}</span>
                    </Notification>
                  )
                )
              })}
              <Wrapper>
                <Input
                  icon="user"
                  placeholder="Naam"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  hasError={
                    touched.name === undefined
                      ? undefined
                      : !!errors.name && !!touched.name
                  }
                  touched={!!touched.name}
                />
                <Input
                  icon="mail"
                  placeholder="E-mailadres"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  hasError={
                    touched.email === undefined
                      ? undefined
                      : !!errors.email && !!touched.email
                  }
                  touched={!!touched.email}
                />
                <Input
                  icon="phone"
                  placeholder="Telefoonnummer"
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={modifyPhoneValue(values.phone)}
                  hasError={
                    touched.phone === undefined
                      ? undefined
                      : !!errors.phone && !!touched.phone
                  }
                  touched={!!touched.phone}
                />
                <Button type="submit" disabled={isSubmitting}>
                  {buttonLabel}
                </Button>
              </Wrapper>
            </Form>
          )
        }}
      </Formik>
    </Container>
  )
}

export default ContactForm

const Container = styled(ContainerComponent)`
  margin: 0 24px 64px;

  ${mediaQueries.from.breakpoint.M`
    margin: 0 auto 80px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin: 0 auto 160px;
    padding: 0 20px;
  `}
`

const Title = styled.h1`
  ${textStyles.headingSubtle}
  margin: 0 0 24px;

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 32px;
  `}
`

const Form = styled.form`
  display: flex;
  flex-direction: column;

  ${mediaQueries.from.breakpoint.M`
    width: 62.5%;
  `}

  ${mediaQueries.from.breakpoint.L`
    width: 50%;
  `}

  ${mediaQueries.from.breakpoint.XL`
    width: 100%;
  `}
`

const Notification = styled.div`
  ${textStyles.plainSubtle}
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 40px;
  padding: 8px 16px;
  margin-bottom: 16px;
  background-color: ${lightGrey};
  border-radius: 2px;
`

const NotificationIcon = styled(IconComponent)`
  margin-right: 16px;
  flex: 0 0 24px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.from.breakpoint.XL`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`

const Button = styled(ButtonComponent)`
  align-self: start;

  ${mediaQueries.from.breakpoint.XL`
    flex-shrink: 0;
  `}
`
