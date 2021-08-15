import { Router } from 'express';

import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

authenticateRoutes.post('/sessions', authenticateUserController.handle);
authenticateRoutes.patch('/avatar', updateUserAvatarController.handle);

export { authenticateRoutes };
