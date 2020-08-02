import React from 'react'

import './sidebar.scss'


export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">

            </div>
            <input className="sidebar_input" type="text" placeholder="Search..." id="search">

            </input>
            <div className="sidebar__project">
                Lola
                <div className="sidebar__project_task">
                    Bola
                    <div className="sidebar__project_task_goal">
                        Opa
                    </div>
                    <div className="sidebar__project_task_goal">
                        Dopa
                    </div>
                    <div className="sidebar__project_task_goal">
                        Kopa
                    </div>
                </div>
                <div className="sidebar__project_task">
                    Cola
                    <div className="sidebar__project_task_goal">
                        E
                    </div>
                    <div className="sidebar__project_task_goal">
                        Lopa
                    </div>
                </div>
            </div>
        </div>
    )
}
