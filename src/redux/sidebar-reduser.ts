import {ProfilePropsType} from '../components/Profile/Profile';
import {SidebarPropsType} from '../components/Navbar/sidebar/Sidebar';
import {RootActionType} from './state';


const sidebarReduser = (state: SidebarPropsType, action: RootActionType) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default sidebarReduser;