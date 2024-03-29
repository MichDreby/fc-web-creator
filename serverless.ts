import type { AWS } from '@serverless/typescript'

const serverlessConfiguration: AWS = {
  service: 'fc-web-creator-service',
  frameworkVersion: '3',
  plugins: ['serverless-finch', 'serverless-single-page-app-plugin'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
  },
  custom: {
    client: {
      bucketName: 'fc-web-creator-bucket',
      distributionFolder: 'build',
      indexDocument: 'index.html',
      manageResources: false,
    },
    s3LocalPath: '${self:custom.client.distributionFolder}/',
    s3BucketName: '${self:custom.client.bucketName}',
  },
  resources: {
    Resources: {
      WebAppS3Bucket: {
        Type: 'AWS::S3::Bucket',
        Properties: {
          BucketName: '${self:custom.s3BucketName}',
          AccessControl: 'PublicRead',
          WebsiteConfiguration: {
            IndexDocument: 'index.html',
            ErrorDocument: 'index.html',
          },
        },
      },
      WebAppS3BucketPolicy: {
        Type: 'AWS::S3::BucketPolicy',
        Properties: {
          Bucket: {
            Ref: 'WebAppS3Bucket',
          },
          PolicyDocument: {
            Statement: [
              {
                Sid: 'AllowCloudFrontAccessIdentity',
                Effect: 'Allow',
                Action: 's3:GetObject',
                Resource: 'arn:aws:s3:::${self:custom.s3BucketName}/*',
                Principal: {
                  AWS: {
                    'Fn::Join': [
                      ' ',
                      [
                        'arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity',
                        {
                          Ref: 'OriginAccessIdentity',
                        },
                      ],
                    ],
                  },
                },
              },
            ],
          },
        },
      },
      OriginAccessIdentity: {
        Type: 'AWS::CloudFront::CloudFrontOriginAccessIdentity',
        Properties: {
          CloudFrontOriginAccessIdentityConfig: {
            Comment: 'Access identity between CloudFront and S3 bucket',
          },
        },
      },
      WebAppCloudFrontDistribution: {
        Type: 'AWS::CloudFront::Distribution',
        Properties: {
          DistributionConfig: {
            Origins: [
              {
                DomainName: '${self:custom.s3BucketName}.s3.amazonaws.com',
                Id: 'myS3Origin',
                S3OriginConfig: {
                  OriginAccessIdentity: {
                    'Fn::Sub':
                      'origin-access-identity/cloudfront/${OriginAccessIdentity}',
                  },
                },
              },
            ],
            Enabled: true,
            IPV6Enabled: true,
            HttpVersion: 'http2',
            DefaultRootObject: 'index.html',
            CustomErrorResponses: [
              {
                ErrorCode: 404,
                ResponseCode: 200,
                ResponsePagePath: '/index.html',
              },
            ],
            DefaultCacheBehavior: {
              AllowedMethods: ['GET', 'HEAD', 'OPTIONS'],
              CachedMethods: ['GET', 'HEAD', 'OPTIONS'],
              ForwardedValues: {
                Headers: [
                  'Access-Control-Request-Headers',
                  'Access-Control-Request-Method',
                  'Origin',
                  'Authorization',
                ],
                QueryString: false,
                Cookies: {
                  Forward: 'none',
                },
              },
              TargetOriginId: 'myS3Origin',
              ViewerProtocolPolicy: 'redirect-to-https',
              Compress: true,
              DefaultTTL: 0,
            },
            ViewerCertificate: {
              CloudFrontDefaultCertificate: 'true',
            },
          },
        },
      },
    },
    Outputs: {
      WebAppS3BucketOutput: {
        Value: {
          Ref: 'WebAppS3Bucket',
        },
      },
      WebAppCloudFrontDistributionOutput: {
        Value: {
          'Fn::GetAtt': ['WebAppCloudFrontDistribution', 'DomainName'],
        },
      },
    },
  },
}

module.exports = serverlessConfiguration
