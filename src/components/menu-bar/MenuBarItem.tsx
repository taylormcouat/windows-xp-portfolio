import React from 'react'

export interface MenuItemState {
    id: number,
    title: string,
    active: boolean,
    icon: string
    onClick: () => void,
}

const MenuItem: React.FC<MenuItemState> = (props) => {
    return ( 
    <div className={props.active ? "menu-item active" : "menu-item"} onClick={() => props.onClick()}>
        <img src={props.icon}/>
        <span>{props.title}</span>
    </div>
    )
}

export default MenuItem