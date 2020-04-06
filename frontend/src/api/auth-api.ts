import axios from 'axios';

export const signIn = async (email: string, password: string) => {
  await axios.post(`${process.env.REACT_APP_BASE_URL || ''}/api/auth/signin`, {email, password});
}