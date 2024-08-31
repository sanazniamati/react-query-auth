interface loginSchemaInterface {
  email: string;
  password: string;
}

interface ResponceSchemaInterface {
  message: string;
  doc: {
    email: string;
    id: string;
    name: string;
    phoneNumber: string;
    token: string;
    user: {
      email: string;
      id: string;
      name: string;
      phoneNumber: string;
    };
  };
}

interface RegisterSchemaInterface {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}
