import { ResourceModel } from 'ngx-resource-factory/resource/resource-model';
import { User } from '@app/services/resource/user.resource';


export interface AuthStateModel {
  token: string;
  user?: ResourceModel<User>;
  loaded: boolean;
}
