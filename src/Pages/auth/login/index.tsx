import { useState } from 'react';
import Input from '../../../components/shared/Input';
import Button from '../../../components/shared/Button';

const LoginPage = () => {
  const [form, setForm] = useState({
    userName: '',
    password: '',
  });

  console.log(form);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className=" flex flex-col gap-6 justify-center items-center ">
      <h1 className="text-3xl">صفحه ورود</h1>

      <form className="flex flex-col gap-6 " onSubmit={handleSubmit}>
        <Input
          value={form.userName}
          type="text"
          placeholder="نام کاربری"
          handleChange={(value: string) =>
            setForm((prev) => ({ ...prev, userName: value }))
          }
          className=""
        />
        <Input
          value={form.password}
          type="password"
          placeholder="رمز ورود"
          handleChange={(value: string) =>
            setForm((prev) => ({ ...prev, password: value }))
          }
          className=""
        />
        <Button type="submit" className=" bg-green-500 hover:bg-green-700 ">
          ورود
        </Button>
      </form>
    </section>
  );
};
export default LoginPage;
