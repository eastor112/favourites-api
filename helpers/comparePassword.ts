import bcrypt from 'bcrypt';

const comparePassword = async (candidatePassword:string, userPassword: string) => {
  try {
    return bcrypt.compareSync(candidatePassword, userPassword);
  } catch (error) {
    return error;
  }
};

export default comparePassword;
