import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';
import * as dotenv from 'dotenv';

dotenv.config();


(async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.no4aelt.mongodb.net/project-management-application`);
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...');
    });
  } catch (error) {
    console.log(error);
  }
})();

process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
