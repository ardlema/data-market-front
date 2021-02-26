import {InputPort} from './inputport';
import {OutputPort} from './outputport';

export interface DataProduct {
  id: number;
  name: string;
  input_port: Array<InputPort>;
  output_port: Array<OutputPort>;
  image: string;
  description: string;
  owner_name: string;
  owner_email: string;
  domain_context: string;
  data_classification_level: string;
  creation_date: string;
  latest_update: string;
  observability_reports_link: string;
  data_reliability: string;
  rate: string;
}


