import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {Form,Formik,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import ErrorMsg from './ErrorMsg'
import PageHead from './PageHead'
import { useDispatch } from 'react-redux'
import { setPersonalInfo } from '../redux/actions/formActions'
import {useNavigate} from 'react-router-dom'

const initialValues={
    name:'',
    email:'',
    phone:'',
    age:'',
    district:'',
    divisions:''
}
const validationSchema=Yup.object({
    name:Yup.string().required('Enter your name'),
    email:Yup.string()
    .email('Invalid email')
    .required('Enter your email'),
    phone:Yup.number().positive().integer().required('Enter your phone number'),
    age:Yup.string().required('Enter your  date of birth'),
    district:Yup.string().required("Select your district"),
    divisions:Yup.string().required("Select your division")

})




const Personal = () => {

    const [division,setDivision]=useState([])
    const [district,setDistrict]=useState([])

    // const personal=useSelector((state)=>state)
    // console.log(personal)

    const dispatch=useDispatch()
    const navigate=useNavigate()


    const onSubmit=values=>{
      dispatch(setPersonalInfo(values)) 
      navigate('/qualification')
  }

    

     const fetchDistricts=async()=>{
        const response=await axios.get(`https://bdapis.herokuapp.com/api/v1.1/districts`)
         setDistrict(response.data.data)
       }

       const fetchDivisions=async()=>{
        const response=await axios.get('https://bdapis.herokuapp.com/api/v1.1/divisions/')
        setDivision(response.data.data)     
    }

    useEffect(()=>{
         fetchDistricts() 
         fetchDivisions() 
    },[])

  
    return (
        <div>
            <Container>
                <div>
                    <PageHead heading="Let's Start With Your Personal Information"/>
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
                              <label htmlFor="name">Name</label>
                              <Field type='text' name='name' id='name' />
                              <ErrorMessage name='name' component={ErrorMsg}/>
                              </div>

                              <div>
                              <label htmlFor="email">Email</label>
                              <Field  type='email' name='email' id='email' />
                              <ErrorMessage name='email' component={ErrorMsg}/>
                              </div>

                              <div>
                              <label htmlFor="phone">Phone</label>
                              <Field type='number' name='phone' id='phone' />
                              <ErrorMessage name='phone' component={ErrorMsg}/>
                              </div>

                              <div>
                              <label htmlFor="birth">Date of Birth</label>
                              <Field type='date' name='age' id='age'/>
                              <ErrorMessage name='age' component={ErrorMsg}/>
                              </div>

                              <div>
                              <label htmlFor="divisions">Division</label>
                              <Field  className='district' as="select" name="divisions">
                                <option  value="select">Select an option</option>
                                {division.map((divi)=><option  key={divi._id} value={divi.division}>{divi.division}</option>)}
                                
                            </Field>
                              <ErrorMessage name='divisions' component={ErrorMsg}/>
                              </div>

                              <div>
                              <label htmlFor="district">District</label>
                              <Field  className='district' as="select" name="district">
                              <option value="select">Select an option</option>
                              {district.map((divi)=><option  key={divi._id} value={divi.district}>{divi.district}</option>)}
                            </Field>
                              <ErrorMessage name='district' component={ErrorMsg}/>
                              </div>

                              {/* <div>
                              <label htmlFor="upozilla">Upozilla</label>
                              <Field  className='district' as="select" name="upozilla">
                              <option value="select">Select an option</option>
                            </Field>
                              <ErrorMessage name='upozilla' component={ErrorMsg}/>
                              </div> */}

                        
                              <div>
                                  {/* <Button  name='Next' icon={<i className="fas fa-sign-in-alt"></i>}/> */}
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

export default Personal
