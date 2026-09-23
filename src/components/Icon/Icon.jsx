import Inventory2Outlined from '@mui/icons-material/Inventory2Outlined'
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined'
import DoorFrontOutlined from '@mui/icons-material/DoorFrontOutlined'
import AltRoute from '@mui/icons-material/AltRoute'
import ScheduleOutlined from '@mui/icons-material/ScheduleOutlined'
import LocalShippingOutlined from '@mui/icons-material/LocalShippingOutlined'
import TouchAppOutlined from '@mui/icons-material/TouchAppOutlined'
import TwoWheeler from '@mui/icons-material/TwoWheeler'
import MyLocationOutlined from '@mui/icons-material/MyLocationOutlined'
import NotificationsNone from '@mui/icons-material/NotificationsNone'
import LockOutlined from '@mui/icons-material/LockOutlined'
import PaymentsOutlined from '@mui/icons-material/PaymentsOutlined'
import FactCheckOutlined from '@mui/icons-material/FactCheckOutlined'
import Add from '@mui/icons-material/Add'
import Menu from '@mui/icons-material/Menu'
import Close from '@mui/icons-material/Close'
import ArrowOutward from '@mui/icons-material/ArrowOutward'
import MailOutline from '@mui/icons-material/MailOutline'
import PhoneOutlined from '@mui/icons-material/PhoneOutlined'
import PlaceOutlined from '@mui/icons-material/PlaceOutlined'
import Instagram from '@mui/icons-material/Instagram'
import Facebook from '@mui/icons-material/Facebook'
import LinkedIn from '@mui/icons-material/LinkedIn'
import ExpandMore from '@mui/icons-material/ExpandMore'

const ICONS = {
  Inventory2Outlined,
  StorefrontOutlined,
  DoorFrontOutlined,
  AltRoute,
  ScheduleOutlined,
  LocalShippingOutlined,
  TouchAppOutlined,
  TwoWheeler,
  MyLocationOutlined,
  NotificationsNone,
  LockOutlined,
  PaymentsOutlined,
  FactCheckOutlined,
  Add,
  Menu,
  Close,
  ArrowOutward,
  MailOutline,
  PhoneOutlined,
  PlaceOutlined,
  Instagram,
  Facebook,
  LinkedIn,
  ExpandMore,
}

export default function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || LocalShippingOutlined
  return <Cmp {...props} />
}

export function SocialGlyph({ name }) {
  if (name === 'x') {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14.7 10.3 22.4 2h-1.8l-6.7 7.2L8.4 2H2l8.1 11.1L2 22h1.8l7.1-7.6L15.6 22H22l-7.3-11.7Zm-2.5 2.7-.8-1.1L4.6 3.3h2.8l5.3 7.1.8 1.1 6.9 9.2h-2.8l-5.4-7.7Z"
        />
      </svg>
    )
  }
  return <Icon name={name} fontSize="small" />
}
