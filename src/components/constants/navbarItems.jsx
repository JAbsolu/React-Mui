import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Message } from "@mui/icons-material";
import AddHomeIcon from '@mui/icons-material/AddHome';
import ArticleIcon from '@mui/icons-material/Article';
import DatasetIcon from '@mui/icons-material/Dataset';


export const mainNavbarItems = [
    {
        id: 0,
        icon: <AddHomeIcon />,
        label: 'Home',
        route: 'home'
    },
    {
        id: 1,
        icon: <AccountCircleIcon />,
        label: 'Account',
        route: 'account'
    },
    {
        id: 2,
        icon: <Message />,
        label: 'Messages',
        route: 'messages'
    },
    {
        id: 3,
        icon: <ArticleIcon />,
        label: 'Projects',
        route: 'projects'
    },
    {
        id: 4,
        icon: <DatasetIcon />,
        label: 'Dataset',
        route: 'dataset'
    },
]