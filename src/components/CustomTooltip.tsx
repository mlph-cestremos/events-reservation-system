import React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { CustomTooltipProps } from 'entities/CustomTooltipProps';

export default function CustomTooltip ( props : CustomTooltipProps) {
    return (
        <OverlayTrigger 
            key={ props.value } placement={ props.placement }
            overlay={ 
                <Tooltip id={ `tooltip-${props.value}` }>
                    { props.value }
                </Tooltip> 
            }>
            { props.children }
        </OverlayTrigger>
    );

};
