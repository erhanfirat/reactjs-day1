import Sidebar from './Sidebar';
import Header from './Header';
import '../assets/styles/sb-admin-2.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGauge, faPlus, faListCheck } from '@fortawesome/free-solid-svg-icons'
library.add(faGauge, faPlus, faListCheck);


function Main() {
    return <div id="page-top">
        <div id="wrapper">
            <Sidebar></Sidebar>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <Header></Header>
                    <div class="container-fluid">
                        {/* Page content here! */}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Main;