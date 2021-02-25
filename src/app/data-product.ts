import {InputPort} from './inputport';
import {OutputPort} from './outputport';

export interface DataProduct {
  id: number;
  name: string;
  input_port: Array<InputPort>;
  output_port: Array<OutputPort>;
  image: string;
}


