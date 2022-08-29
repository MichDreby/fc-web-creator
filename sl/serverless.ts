import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'fc-web-creator-service',
  frameworkVersion: '3',
  plugins: [
    'serverless-esbuild',
    'serverless-finch'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'eu-west-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },

  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    client: {
      bucketName: 'fc-web-creator-bucket',
      distributionFolder: '../build/'
    }
  },
};

module.exports = serverlessConfiguration;
