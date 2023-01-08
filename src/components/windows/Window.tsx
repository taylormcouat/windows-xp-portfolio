import React from 'react'
import './Window.css'
import Draggable from 'react-draggable'

export interface WindowProps {
    key: string,
    windowRef: React.RefObject<HTMLDivElement>
    open: boolean,
    minimized: boolean,
    maximized: boolean,
    title: string,
    content: any,
    initialHeight: number,
    initialWidth: number,
    openWindow: () => void,
    closeWindow: () => void,
    clickMinimize: () => void,
    clickMaximize: () => void,
    zIndex: number,
}

const Window: React.FC<WindowProps> = (props) => {

    function getStyle() {
        let style;
        if (props.maximized) {
            style={width: '100%', height: '100%', top: 0, left: 0, transform: 'none', zIndex: props.zIndex}
        } else {
            style={width: props.initialWidth, height: props.initialHeight, zIndex: props.zIndex}
        }
        return style
    }

    if (props.open && !props.minimized) {
        return(
        <div ref={props.windowRef} style={{zIndex: props.zIndex}}>
        <Draggable handle="#handle" disabled={props.maximized} position={props.maximized ? {x: 0, y: 0} : undefined}>
            <div className="window" style={getStyle()}>
                <div className="title-bar" id="handle">
                    <div className="title-bar-text">{props.title}</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" onClick={() => props.clickMinimize()}></button>
                        <button aria-label="Maximize" onClick={() => props.clickMaximize()}></button>
                        <button aria-label="Close" onClick={() => props.closeWindow()}></button>
                    </div>
                </div>
                <div className="window-body">
                    <>{props.content}</>
                </div>
            </div>
        </Draggable>
        </div>
        )
    } else {
        return(null)
    }
}

export default Window