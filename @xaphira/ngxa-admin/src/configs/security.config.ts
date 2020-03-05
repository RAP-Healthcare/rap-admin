import { SecurityResourceModel } from '@xaphira/shared';

export const oauthResource: SecurityResourceModel = {
    client_id: 'xa-core',
    client_secret: 'secretxa01',
    grant_type: 'password',
    private_key: 'UHU3NG42QjNuNHI=',
    aes_key: 'UHVsYW5nQjNuNHI=',
    session_idle: 5,
    session_timeout: 10,
    signature: true,
    vapid: 'BB3fvY674t6pB9TjZONmYxxlebCmSskbf8lvRLTMYHE-zZ7FONNXOCPv4ndOa1FDov10k26UXZl6rQ7nT9sxWwc',
};
