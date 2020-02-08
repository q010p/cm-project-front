import React, { useState } from 'react'

import FormControl2 from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


import { Dropdown, Card, FormControl, Button, Container, Row, Col } from 'react-bootstrap';

export default function CreateForm(props) {

    const [title, setTitle] = useState('')
    const [fields, setFields] = useState([])


    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const newField = () => {
        setFields(prevFields => {
            let newFields = [...prevFields]
            newFields.push({ title: '', name: '', type: 'Text', required: 'true' })
            return newFields
        })
    }

    const onSubmit = () => {
        console.log(fields)
    }

    const onFormFieldChange = (e, index) => {
        let newFields = [...fields]
        newFields[index][e.target.name] = e.target.value
        setFields(newFields)
    }


    return (
        <div>
            < FormControl
                className="Login-form-fields"
                name="title"
                value={title}
                placeholder="title"
                required={true}
                type="text"
                onChange={onTitleChange}
            />
            {
                fields.map((field, index) => {
                    return (
                        <div>
                            < FormControl
                                className="Login-form-fields"
                                name="name"
                                value={field.name}
                                placeholder="name"
                                required={true}
                                type="text"
                                onChange={(e) => { onFormFieldChange(e, index) }}
                            />
                            < FormControl
                                className="Login-form-fields"
                                name="title"
                                value={field.title}
                                placeholder="title"
                                required={true}
                                type="text"
                                onChange={(e) => { onFormFieldChange(e, index) }}
                            />
                            <FormControl2  >
                                <InputLabel variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </InputLabel>

                                <Select name="type" onChange={(e)=>onFormFieldChange(e,index)} value={field.type}>
                                    <MenuItem value="Number">Number</MenuItem>
                                    <MenuItem value="Text">Text</MenuItem>
                                    <MenuItem value="Location">Location</MenuItem>
                                    <MenuItem value="Date">Date</MenuItem>
                                </Select>
                            </FormControl2>
                            < FormControl
                                className="Login-form-fields"
                                name="type"
                                value={field.type}
                                placeholder="type"
                                required={true}
                                type="text"
                                onChange={(e) => { onFormFieldChange(e, index) }}
                            />
                            < FormControl
                                className="Login-form-fields"
                                name="required"
                                value={field.required}
                                placeholder="required"
                                required={true}
                                type="text"
                                onChange={(e) => { onFormFieldChange(e, index) }}
                            />
                        </div>
                    )
                })
            }
            <Button onClick={newField}>add field</Button>
            <Button onClick={onSubmit}>Submit</Button>
        </div>
    )


}