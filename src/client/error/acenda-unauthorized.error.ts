import { AcendaRequestError } from './acenda-request.error';
import { RequestError } from '../client.models';

export class AcendaUnauthorizedError extends AcendaRequestError {
  constructor(err: RequestError | string) {
    super(err, 401);
  }
}
