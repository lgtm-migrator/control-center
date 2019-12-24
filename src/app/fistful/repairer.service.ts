import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';

import { ThriftService } from '../thrift';
import { RepairScenario, SessionID } from './gen-model/withdrawal_session';
import { RepairScenario as RepairScenarioObject } from './gen-nodejs/withdrawal_session_types';
import * as Repairer from './gen-nodejs/Repairer';

@Injectable()
export class RepairerService extends ThriftService {
    constructor(zone: NgZone, keycloakService: KeycloakService) {
        super(zone, keycloakService, '/v1/repair/withdrawal/session', Repairer);
    }

    repair = (id: SessionID, scenario: RepairScenario): Observable<void> =>
        this.toObservableAction('Repair')(id, new RepairScenarioObject(scenario));
}
