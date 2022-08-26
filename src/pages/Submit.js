import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import axios from "axios";

function Submit() {

    // useNavigate allows user to Change to another route when in a route
    let navigate = useNavigate();

    // values update with user inputs 
    const initialValues = {
        title: "",
        postText: "",
        username: "",
      };
    
    // validate that the input meets requirements before api post
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a Title!"),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required(),
    });

    // on submit send api post of the body
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
          navigate("/")
        });
    };

    

  return (
    <div className="submit">
        <Formik 
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            >
            <Form className="submit-inputs">
                <label>Create a Post: </label>
                <ErrorMessage name="title" component="span" />
                <Field 
                    id="inputSubmit" 
                    name="title" 
                    placeholder="Title"
                />
                <ErrorMessage name="postText" component="span" />
                <Field 
                    id="inputSubmit" 
                    name="postText" 
                    placeholder="Text"
                />
                <ErrorMessage name="username" component="span" />
                <Field 
                    id="inputSubmit" 
                    name="username" 
                    placeholder="Luna"
                />
                <button type="submit">Post</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Submit