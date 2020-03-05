import { APIModel, HttpMethod } from '@xaphira/shared';
import { environment } from '../environments/environment';

export const apiPath: APIModel = {
    auth: {
        token: {
            server: environment.host.auth,
            method: HttpMethod.POST,
            path: '/xa/oauth/token',
        },
    },
    security: {
        'change-password': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/xa/api/security/trx/auth/change-password/v.1',
        },
        'deactivated': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/xa/api/security/trx/auth/deactivated/v.1',
        },
        'change-settings': {
            server: environment.host.security,
            method: HttpMethod.PUT,
            path: '/xa/api/security/trx/put/settings/v.1',
        },
        'get-settings': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/xa/api/security/vw/get/settings/v.1',
        },
        'get-menus': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/xa/api/security/vw/get/menus/v.1',
        },
    },
    profile: {
        'change-profile': {
            server: environment.host.security,
            method: HttpMethod.POST,
            path: '/xa/api/profile/trx/auth/profile/v.1',
        },
        'get-profile': {
            server: environment.host.security,
            method: HttpMethod.GET,
            path: '/xa/api/profile/vw/get/profile/v.1',
        },
    },
    master: {
        'select-country': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/xa/api/master/vw/post/select/country/v.1',
        },
        'select-province': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/xa/api/master/vw/post/select/province/v.1',
        },
        'select-city': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/xa/api/master/vw/post/select/city/v.1',
        },
        'select-district': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/xa/api/master/vw/post/select/district/v.1',
        },
        'select-subdistrict': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/xa/api/master/vw/post/select/subdistrict/v.1',
        },
        'select-locale': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/xa/api/master/vw/post/select/locale/v.1',
        },
        'select-all-locale': {
            server: environment.host.master,
            method: HttpMethod.GET,
            path: '/xa/api/master/vw/get/select/all/locale/v.1',
        },
        'datatable-city': {
            server: environment.host.master,
            method: HttpMethod.POST,
            path: '/xa/api/master/vw/post/datatable/city/v.1',
        },
    },
    file: {
        'photo-profile': {
            server: environment.host.file,
            method: HttpMethod.POST,
            path: '/xa/api/file/trx/auth/photo-profile/v.1',
        },
        'vw-photo-profile': {
            server: environment.host.file,
            method: HttpMethod.GET,
            path: '/xa/api/file/vw/get/photo-profile/v.1',
        },
    },
    notification: {
        'send-broadcast': {
            server: environment.host.notification,
            method: HttpMethod.POST,
            path: '/xa/api/notification/trx/post/broadcast/v.1',
        },
        'push-subscribe': {
            server: environment.host.notification,
            method: HttpMethod.POST,
            path: '/xa/api/notification/push/subscribe/v.1',
        },
    },
    pacs: {
        sample: {
            server: environment.host.pacs,
            method: HttpMethod.GET,
            path: '/RIP-CPU/rip-pacs/master/data/sample.zip',
            file: {
                filename : 'sample',
                extension : '.zip',
            },
        },
    },
};
