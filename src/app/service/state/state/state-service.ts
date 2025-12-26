import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/application-dev-environmet';
import { StateDto } from '../../../dto/state/state-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor(private http: HttpClient) { }
  /**
   * Method for recording state.
   * @param s StateDto object type.
   * @returns StateDto object type.
   */
  create(s: StateDto): Observable<StateDto> {
    return this.http.post<StateDto>(`${environment.api.tmUrl}${environment.endPoints.state.create}`, s);
  }
}
