import { container } from 'tsyringe';

import { IDateProvider } from './DateProvider/IDateProvider';
import { DaysDateProvider } from './DateProvider/implementations/DayjsDateProvider';

container.registerSingleton<IDateProvider>(
  'DayjsDateProvider',
  DaysDateProvider
);
