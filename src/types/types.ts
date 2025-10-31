enum Role {
  Doctor = 'Doctor',
  Patient = 'Patient',
}

enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export interface IloggedUser {
  uuid: string;
  username: string;
  password: string;
  role: Role; // enum define
  name: string;
  gender: Gender; // enum define
}
