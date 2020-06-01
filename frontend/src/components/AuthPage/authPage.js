import React, {Fragment} from 'react'
import PageTitle from '@/elements/pageTitle/pageTitle'

import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';

import {
  Container,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

const AuthPage = () => {

  const emailInput = ({
     // { name, value, onChange, onBlur }
    errors, // { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => {
    return (
      <Fragment>
        <label htmlFor="feEmail">Email</label>
        <FormInput
          type="email"
          id="feEmail"
          placeholder="Введите email"
          // value="youremail@example.ru"
          // onChange={() => {}}
          autoComplete="email"
          invalid = {Boolean(errors?.email)}
          {...props}
        />
        <span>
        {errors?.email}
        </span>
      </Fragment>
    )
  }
  const passwordInput = ({
     // { name, value, onChange, onBlur }
    errors, // { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => {
    return (
      <Fragment>
        <label htmlFor="fePassword">Пароль</label>
        <FormInput
          type="password"
          id="fePassword"
          placeholder="Введите пароль"
          // value="EX@MPL#P@$$w0RD"
          // onChange={() => {}}
          autoComplete="current-password"
          invalid = {Boolean(errors?.password)}
          {...props}
        />
        <span>
        {errors?.password}
        </span>
      </Fragment>
    )
  }



  return (
    <Container fluid className="mt-2">
      <Row className="mt-3">
      <Col xs="12" className="text-center">
      <img src={require('@/app/images/logo/Logo_background_ blue.jpg')} alt="Protect Logo" style={{maxWidth:"350px", width:"100%", borderRadius:"5px"}} />
      </Col>

        <PageTitle title="Авторизация" className="col-sm-12 mt-5 mb-3" />
        <Col>
        <Card small className="mb-4">
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <Row>
                <Col>
                    <Formik
                  initialValues={{ email: '', password: '' }}
                  validate={values => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = 'Введите email';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Неправильный формат email адреса';
                    }
                    if (!values.password.length) {
                      errors.password = 'Введите пароль'
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log('SubmittingValues', values)
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 4000);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <Form onSubmit={handleSubmit}>
                    <Row form>
                      {/* Email */}
                      <Col md="6" className="form-group">
                        <Field name="email" as ={emailInput} errors={errors} />
                      </Col>
                      {/* Password */}
                      <Col md="6" className="form-group">
                        <Field name="password" as ={passwordInput} errors={errors} />
                      </Col>
                    </Row>
                    <Button theme="accent" type="submit"  disabled={isSubmitting} onChange={(e)=>{
                      e.preventDefault()
                    }}>Войти</Button>
                  </Form>
                  )}
                </Formik>  
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Card>
        </Col>
      
      </Row>
    </Container>
    
  )
}

  AuthPage.propTypes = {
  }
  
export default AuthPage
