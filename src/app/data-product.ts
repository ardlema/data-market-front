import {Port} from './port';

export interface DataProduct {
  id: number;
  name: string;
  input_port: Array<Port>;
  output_port: Array<Port>;
}


