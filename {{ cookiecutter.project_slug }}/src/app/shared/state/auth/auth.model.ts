import { User } from '@app/services/resource/user.resource';


export interface AuthStateModel {
  token: string;
  user?: User;
  loaded: boolean;
}
