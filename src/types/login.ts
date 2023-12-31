import { ISignUpPrams } from '@/types/signup'

export interface ILoginParams {
  loginId: string
  password: string
}

export interface IVerifyAndUpdateSocialLoginParams {
  password: string
  email: string
  provider: string
  providerId: string
}
export interface ISocialRegisterParams extends ISignUpPrams {
  providerEmail: string
  provider: string
  providerId: string
}
