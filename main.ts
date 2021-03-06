import { NestFactory } from '@nestjs/core'
// import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // app.useGlobalPipes(new ValidationPipe())
  // app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Dino - API Test')
    .setDescription('The restaurant API description')
    .setVersion('1.0')
    // .addTag('api')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(5000)
}

bootstrap()