import { Outlet } from 'react-router-dom';
import ButtonLink from '../../components/shared/ButtonLink';

const DashboardPage = () => {
  return (
    <>
      <h1>صفحه داشبورد اصلی</h1>
      <ButtonLink to="info" text="برو به صفحه اطلاعت بیشتر" />
      <Outlet />
    </>
  );
};
export default DashboardPage;
