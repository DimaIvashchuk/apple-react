import React from 'react'

import './sidebar.scss'

export const Sidebar = props => {
    const displayStyle = props.isSidebarOpen ? 'block' : 'none'

    return (
        <div className="sidebar" style={{display: displayStyle}}>
            <div className="sidebar__input">
                <i className="fa fa-search" aria-hidden="true"></i>
                <input className="sidebar__input-place" type="text" placeholder="Search..." id="search" />
            </div>
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
