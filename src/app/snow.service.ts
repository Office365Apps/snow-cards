import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Incident, SNowComments } from './models/interfaces';

@Injectable({
    providedIn: 'root'
})
export class SnowService {

    constructor(private http: Http) { }
    getIncident(id: string): Promise<Incident> {
        return this.http.get('/api/incidents/' + id).toPromise().then(resp => {
            return resp.json();
        });
    }

    getComments(sysId: string): Promise<SNowComments> {
        return this.http.get('/api/comments/' + sysId).toPromise().then(resp => {
            return resp.json();
        });
    }


}
