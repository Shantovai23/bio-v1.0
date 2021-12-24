import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {Form,Formik,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import ErrorMsg from './ErrorMsg'
import PageHead from './PageHead'
import { useDispatch } from 'react-redux'
import { setPersonalInfo, setQualificationInfo } from '../redux/actions/formActions'
import {useNavigate} from 'react-router-dom'


const initialValues={
    ssc:'',
    sscResult:'',
    hsc:'',
    hscResult:'',
    lastCompletedDegree:'',
    degreeResult:'',
    instituteName:''
}
const validationSchema=Yup.object({
    ssc:Yup.string().required('Enter your school name'),
    hsc:Yup.string().required('Enter your college name'), 
    sscResult:Yup.number().positive().required('Enter your  GPA'),
    hscResult:Yup.number().positive().required('Enter your  GPA'),
    degreeResult:Yup.number().positive().required('Enter your  CGPA'),
    lastCompletedDegree:Yup.string().required('Enter your institute name'),
    instituteName:Yup.string().required('Enter your institute name'),

})

const Qualification = () => {



    const dispatch=useDispatch()
    const navigate=useNavigate()
    


    


    const onSubmit=values=>{
        dispatch(setQualificationInfo(values))
        navigate('/skills')
    }


    return (
        <div>
            <Container>
                <div>
                    <PageHead heading="Fill Up With Qualification Information"/>
                </div>

                <div className='main-form-div'>
                  <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}  
                  >
                        
                          <Form>
                            <div className='form-shadow'>
                             <div>
                              <label htmlFor="school">Name of your School</label>
                              <Field type='text' name='ssc' id='ssc' />
                              <ErrorMessage name='ssc' component={ErrorMsg}/>
                              </div>

                              
                              <div>
                              <label htmlFor="schoolR">Your GPA</label>
                              <Field type='number' name='sscResult' id='sscResult' />
                              <ErrorMessage name='sscResult' component={ErrorMsg}/>
                              </div>

                              <div>
                              <label htmlFor="college">Name of your College</label>
                              <Field  type='text' name='hsc' id='hsc' />
                              <ErrorMessage name='hsc' component={ErrorMsg}/>
                              </div>

                              <div>
                              <label htmlFor="collegeR">Your GPA</label>
                              <Field  type='number' name='hscResult' id='hscResult' />
                              <ErrorMessage name='hscResult' component={ErrorMsg}/>
                              </div>

                              <div>
                              <label htmlFor="degree">Your Last Completed Degree</label>
                              <Field type='text' name='lastCompletedDegree' id='lastCompletedDegree' />
                              <ErrorMessage name='lastCompletedDegree' component={ErrorMsg}/>
                              </div>


                              <div>
                              <label htmlFor="insName">Institute Name</label>
                              <Field type='text' name='instituteName' id='instituteName' />
                              <ErrorMessage name='instituteName' component={ErrorMsg}/>
                              </div>


                              <div>
                              <label htmlFor="degreeResult">Your CGPA</label>
                              <Field type='number' name='degreeResult' id=' degreeResult' />
                              <ErrorMessage name='degreeResult' component={ErrorMsg}/>
                              </div>
                              <div>
                                  
                                  <button type='submit' className='next-button mt-3'><i className="fas fa-sign-in-alt"></i>Next</button>
                              </div>
                              </div>
                          </Form>
                         
                  </Formik>
                </div>
            </Container>
        </div>
        
    )
}

export default Qualification
