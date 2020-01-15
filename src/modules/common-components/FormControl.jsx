import React from 'react';
import _ from 'underscore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DateTime from 'react-datetime';

import { Button, Form, InputGroup } from 'react-bootstrap';

const FormControl = () => {
    return (
        <></>
    );
};

const FormControlDateTime = ({ value, defaultValue,onChange, children,
    dateFormat = 'MM/DD/YYYY',
    timeFormat = '',
    minDate,
    ...props
}) => {

    const onWrappedChange = (updatedMoment) => {
        if (_.isFunction(onChange)) {
            onChange(_.isString(updatedMoment) ? updatedMoment : updatedMoment.valueOf());
        }
    };

    return (
        <DateTime
            value={ value }
            defaultValue = { defaultValue }
            onChange={ onWrappedChange }
            dateFormat={ dateFormat }
            timeFormat={ timeFormat }
            closeOnSelect={ true }
            minDate={minDate}
            renderInput={
                (datetimeProps, openCalendar) => (
                    <InputGroup onClick={ openCalendar }>
                        <Form.Control as="input"
                            type="text"
                            { ...datetimeProps }
                            { ...props }>
                        </Form.Control>
                        <InputGroup.Append style={{zIndex:0}}>
                            <Button variant="outline-secondary">
                                {/* <i className={dateFormat ? "faCalendar" : "faClock"}></i> */}
                                <FontAwesomeIcon icon={dateFormat ? "calendar" : "clock"}></FontAwesomeIcon>
                            </Button>
                        </InputGroup.Append>
                        { children }
                    </InputGroup>
                )
            }>
        </DateTime>
    );
};

FormControl.DateTime = FormControlDateTime;

export default FormControl;