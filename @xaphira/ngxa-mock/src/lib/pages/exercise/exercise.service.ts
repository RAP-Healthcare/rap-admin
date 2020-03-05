import { Injectable, Inject } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { AUTH_INDEXED_DB, IndexedDBEncFactoryService } from '@xaphira/shared';

@Injectable()
export class ExerciseService {

    webSocketEndPoint: string = 'http://localhost:8085/xa/api/notification/ws/?access_token=';
    topic: string = '/public/broadcast';
    stompClient: any;

    constructor(@Inject(AUTH_INDEXED_DB) private authIDB: IndexedDBEncFactoryService) {}

    connect() {
        console.log('Initialize WebSocket Connection');
        this.authIDB.getEnc('access_token').then((value: any) => {
            const ws = new SockJS(this.webSocketEndPoint + value);
            this.stompClient = Stomp.over(ws);
            const _this = this;
            _this.stompClient.connect({}, function (frame) {
                _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
                    _this.onMessageReceived(sdkEvent);
                });
            }, this.errorCallBack);
        });
    }

    disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log('Disconnected');
    }

    errorCallBack(error) {
        console.log('errorCallBack -> ' + error);
        setTimeout(() => {
            this.connect();
        }, 5000);
    }

    send(message) {
        console.log('calling logout api via web socket');
        this.stompClient.send('/api/notification/trx/post/broadcast/v.1', {}, JSON.stringify(message));
    }

    onMessageReceived(message) {
        console.log('Message Recieved from Server :: ' + message);
    }
}
