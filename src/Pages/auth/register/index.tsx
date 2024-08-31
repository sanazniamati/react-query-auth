import { useState } from 'react';
import Input from '../../../components/shared/Input';
import Button from '../../../components/shared/Button';
import { useRegister } from '../../../lib/hooks/auth';

const RegisterPage = () => {
  const [form, setForm] = useState<RegisterSchemaInterface>({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const { mutate: mutateRegister } = useRegister();

  // console.log(form);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateRegister(form);
  };

  return (
    <section className=" flex flex-col gap-6 justify-center items-center ">
      <h1 className="text-3xl">صفحه ثبت نام</h1>

      <form className="flex flex-col gap-6 " onSubmit={handleSubmit}>
        <Input
          value={form.name}
          type="text"
          placeholder="نام و نام خانوادگی"
          handleChange={(value: string) =>
            setForm((prev) => ({ ...prev, name: value }))
          }
          className=""
        />
        <Input
          value={form.email}
          type="text"
          placeholder=" ایمیل"
          handleChange={(value: string) =>
            setForm((prev) => ({ ...prev, email: value }))
          }
          className=""
        />
        <Input
          value={form.phoneNumber}
          type="text"
          placeholder="شماره تلفن"
          handleChange={(value: string) =>
            setForm((prev) => ({ ...prev, phoneNumber: value }))
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
          ثبت نام
        </Button>
      </form>
    </section>
  );
};
export default RegisterPage;
