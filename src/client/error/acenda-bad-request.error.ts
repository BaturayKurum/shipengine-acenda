import { AcendaRequestError } from './acenda-request.error';
import { RequestError } from '../client.models';

export class AcendaBadRequestError extends AcendaRequestError {
  constructor(err: RequestError | string) {
    super(err, 400);
  }
}