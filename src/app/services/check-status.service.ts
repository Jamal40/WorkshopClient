import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  CheckDataProfileStatus_out,
  CheckDataProfileStatus_in,
} from '../Types';
@Injectable({
  providedIn: 'root',
})
export class CheckStatusService {
  url = 'https://localhost:44322/api/status/';

  checkStatus(
    info_in: CheckDataProfileStatus_in
  ): Observable<CheckDataProfileStatus_out> {
    return this.client.post<CheckDataProfileStatus_out>(this.url, info_in);
  }
  constructor(private client: HttpClient) {}
}
