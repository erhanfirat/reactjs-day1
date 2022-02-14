import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Sidebar() {
    return (<>
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon="list-check" className='mr-2' />

                </div>
                <div class="sidebar-brand-text mx-3">TASK MANAGER</div>
            </a>
            <hr class="sidebar-divider my-0" />
            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <FontAwesomeIcon icon="gauge" className='mr-2' />
                    <span>Dashboard</span></a>
            </li>
            <hr class="sidebar-divider" />
            <div class="sidebar-heading">
                Taks
            </div>
            <li class="nav-item">
                <a class="btn btn-success ml-3" href="#">
                    <FontAwesomeIcon icon="plus" className='mr-2' />
                    <span>Create A Tasks</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">
                    <span>Active Tasks</span>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#" >
                    <span>Closed Tasks</span>
                </a>
            </li>
        </ul>
    </>);
}


export default Sidebar;