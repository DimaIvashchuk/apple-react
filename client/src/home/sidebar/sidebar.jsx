import React from 'react'

import './sidebar.scss'

export const Sidebar = props => {
    return (
        <div className="sidebar" style={{display: props.displayStyle}}>
            <input className="sidebar__input" type="text" placeholder="Search..." id="search" />
            <div className="sidebar__project">
                Lola
                <div className="sidebar__project-task">
                    Bola
                    <div className="sidebar__project-task-goal">
                        Opa
                    </div>
                    <div className="sidebar__project-task-goal">
                        Dopa
                    </div>
                    <div className="sidebar__project-task-goal">
                        Kopa
                    </div>
                </div>
                <div className="sidebar__project-task">
                    Cola
                    <div className="sidebar__project-task-goal">
                        E
                    </div>
                    <div className="sidebar__project-task-goal">
                        Lopa
                    </div>
                </div>
            </div>
        </div>
    )
}
