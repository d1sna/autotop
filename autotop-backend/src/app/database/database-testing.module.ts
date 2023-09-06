// import { DynamicModule, Module } from '@nestjs/common';
// import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
// import { MongoMemoryReplSet } from 'mongodb-memory-server';

// let replica: MongoMemoryReplSet;

// @Module({})
// export class DatabaseTestingModule {
//   static register(options: MongooseModuleOptions = {}): DynamicModule {
//     return {
//       module: DatabaseTestingModule,
//       imports: [
//         MongooseModule.forRootAsync({
//           useFactory: async () => {
//             replica = await MongoMemoryReplSet.create({ replSet: { count: 1 } });
//             const mongoUri = replica.getUri();
//             return {
//               uri: mongoUri,
//               ...options,
//             };
//           },
//         }),
//       ],
//       controllers: [],
//       providers: [],
//       exports: [],
//     };
//   }
// }

// export const closeMongoConnection = async () => {
//   if (replica) replica.stop();
//   return null;
// };
