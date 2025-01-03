import UserDto from "./dto/User.dto";
import { firebaseService } from "./FirebaseService";

const generateRandomFourDigitNumber = (): number => {
  return Math.floor(1000 + Math.random() * 9000);
}

const emailToUsername = (email: string): string => {
  if (!email.includes('@')) {
    throw new Error('Invalid email address');
  }
  const name = email.split('@')[0];
  const random4Digits = generateRandomFourDigitNumber();

  return `${name}-${random4Digits.toString()}`;
}

class UserService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = import.meta.env.VITE_BACKEND_URL;
  }

  async createUser(email: string) {
    const user = new UserDto(emailToUsername(email), email);
    const token = await firebaseService.getIdToken();
    const url = `${this.baseUrl}/v1/user/create`;

    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(user)
    });
  }
}

const userService = new UserService();

export { userService };