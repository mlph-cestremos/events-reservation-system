import { ReactNode } from 'react';
import { Placement } from 'react-bootstrap/Overlay';

export interface CustomTooltipProps {
    placement : Placement, 
    value : string,
    children : ReactNode
}