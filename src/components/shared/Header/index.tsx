import { useGetMe } from '../../../lib/hooks/auth';
import ButtonLink from '../ButtonLink';
import Profile from './Profile';

const Header = () => {
  const { data } = useGetMe();
  console.log(data);
  return (
    <section>
      <header className="flex flex-col bg-green-400">
        <div className="bg-gray-200 p-3 flex flex-wrap">
          <ButtonLink to="/" text="خانه" />
          <ButtonLink to="/auth/login" text="ورود" />
          <ButtonLink to="/auth/register" text="ثبت نام" />
          <ButtonLink to="/about" text="درباره ما" />
        </div>

        {/* {data && <Profile name={data?.doc.name} />} */}
      </header>
    </section>
  );
};

export default Header;
