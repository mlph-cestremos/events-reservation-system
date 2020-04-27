import React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const CustomTooltip = ({ placement, value, children } : any) => {
    return (
        <OverlayTrigger 
            key={ value } placement={ placement }
            overlay={ 
                <Tooltip id={ `tooltip-${value}` }>
                    { value }
                </Tooltip> 
            }>
            { children }
        </OverlayTrigger>
    );

};

export default CustomTooltip;