import React from 'react';
import _ from 'underscore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Datetime from "react-datetime";

import { Button, Form, InputGroup } from 'react-bootstrap';

const FormControl = () => {
    return (
        <></>
    );
};

// TODO : to fix if will be used
// const FormControlDateTime = ({ value, defaultValue,onChange, children,
//     dateFormat = 'MM/DD/YYYY',
//     timeFormat = '',
//     minDate,
//     ...props
// } : any) => {

//     const onWrappedChange = (updatedMoment : any) => {
//         if (_.isFunction(onChange)) {
//             onChange(_.isString(updatedMoment) ? updatedMoment : updatedMoment.valueOf());
//         }
//     };

//     return (
//         <Datetime
//             value={ value }
//             defaultValue = { defaultValue }
//             onChange={ onWrappedChange }
//             dateFormat={ dateFormat }
//             timeFormat={ timeFormat }
//             closeOnSelect={ true }
//             renderInput={
//                 (datetimeProps:any, openCalendar:any) => (
//                     <InputGroup onClick={ openCalendar }>
//                         <Form.Control as="input"
//                             type="text"
//                             { ...datetimeProps }
//                             { ...props }>
//                         </Form.Control>
//                         <InputGroup.Append style={{zIndex:0}}>
//                             <Button variant="outline-secondary">
//                                 {/* <i className={dateFormat ? "faCalendar" : "faClock"}></i> */}
//                                 <FontAwesomeIcon icon={dateFormat ? "calendar" : "clock"}></FontAwesomeIcon>
//                             </Button>
//                         </InputGroup.Append>
//                         { children }
//                     </InputGroup>
//                 )
//             }>
//         </Datetime>
//     );
// };

// FormControl.DateTime = FormControlDateTime;

export default FormControl;