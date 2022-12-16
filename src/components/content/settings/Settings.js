import { useSelector } from 'react-redux';
const Settings = () => {
	const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <div>
      Settings
    </div>
  )
}
export default Settings
