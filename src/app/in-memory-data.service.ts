import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { DataProduct } from './data-product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const inputPort1 = { key: 'thingworx_api', source: 'Thingworx API Rest'};
    const inputPort2 = { key: 'kafka_topic_signals', source: 'Kafka topic'};
    const outputPort11 = { key: 'postgresql_historic_cbc_sensors', sink: 'PostgreSQL table', metadata_link: 'http://localhost:5000/table_detail/test/postgres/public/accounts'};
    const outputPort12 = { key: 'api_historic_cbc_sensors', sink: 'API REST endpoint', metadata_link: 'http://localhost:5002/apidocs/'};
    const outputPort21 = { key: 'postgresql_real_time_cbc_sensors', sink: 'PostgreSQL table', metadata_link: 'http://localhost:5000/table_detail/test/postgres/public/accounts2'};
    const outputPort22 = { key: 'cassandra_real_time_cbc_sensors', sink: 'Cassandra table', metadata_link: 'http://localhost:5000/table_detail/test/postgres/public/accounts2'};
    const outputPort23 = { key: 'kafka_topic_real_time_cbc_sensors', sink: 'Kafka topic', metadata_link: 'http://localhost:5000/table_detail/test/postgres/public/accounts2'};
    const dataproducts = [
      { id: 1, name: 'CBC - Historic sensors', input_port: [inputPort1], output_port: [outputPort11, outputPort12], image: 'assets/cbchistoricdataproduct.jpg', description: 'Telemetry data from different sensors located in the CBC (Centro Bahía de Cadiz) site. The data is periodically (every night at 12 am) pull from the IIoT platform (Thingworx). This data product provides 2 output ports.', owner_name: 'Francisco Pérez Zuñiga', owner_email: 'francisco.perez-zuniga@airbus.com', domain_context: 'Facilities',  data_classification_level: 'Airbus amber',  creation_date: '12/09/2020 12:30:45',  latest_update: '23/02/2021 21:45:78',  observability_reports_link: 'https://www.montecarlodata.com/product/', data_reliability: 'High', rate: 'assets/stars5outof5.png'},
      { id: 2, name: 'CBC - Real time sensors', input_port: [inputPort2], output_port: [outputPort21, outputPort22, outputPort23], image: 'assets/cbcrealtimedataproduct.jpg', description: 'Telemetry real-time data from different sensors located in the CBC (Centro Bahía de Cadiz) site. This data product provides 2 output ports.', owner_name: 'Sonia Rodríguez Martínez', owner_email: 'sonia.rodriguez@airbus.com', domain_context: 'Facilities',  data_classification_level: 'Airbus amber',  creation_date: '22/09/2020 12:40:45',  latest_update: '25/02/2021 21:45:78',  observability_reports_link: 'https://www.montecarlodata.com/product/', data_reliability: 'High', rate: 'assets/stars4outof5.png'},
      { id: 3, name: 'Getafe - Historic sensors', input_port: [inputPort2], output_port: [outputPort11], image: 'assets/cbcrealtimedataproduct.jpg', description: 'Telemetry real-time data from different sensors located in the CBC (Centro Bahía de Cadiz) site. This data product provides 2 output ports.', owner_name: 'Sonia Rodríguez Martínez', owner_email: 'sonia.rodriguez@airbus.com', domain_context: 'Facilities',  data_classification_level: 'Airbus amber',  creation_date: '22/09/2020 12:40:45',  latest_update: '25/02/2021 21:45:78',  observability_reports_link: 'https://www.montecarlodata.com/product/', data_reliability: 'High', rate: 'assets/stars4outof5.png'},
      { id: 4, name: 'Sites energy consumption efficiency', input_port: [inputPort2], output_port: [outputPort11], image: 'assets/cbcrealtimedataproduct.jpg', description: 'Telemetry real-time data from different sensors located in the CBC (Centro Bahía de Cadiz) site. This data product provides 2 output ports.', owner_name: 'Sonia Rodríguez Martínez', owner_email: 'sonia.rodriguez@airbus.com', domain_context: 'Finance',  data_classification_level: 'Airbus amber',  creation_date: '22/09/2020 12:40:45',  latest_update: '25/02/2021 21:45:78',  observability_reports_link: 'https://www.montecarlodata.com/product/', data_reliability: 'High', rate: 'assets/stars4outof5.png'}
    ];
    return {dataproducts};
  }

  // Overrides the genId method to ensure that a data products always has an id.
  // If the data products array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(dataproducts: DataProduct[]): number {
    return dataproducts.length > 0 ? Math.max(...dataproducts.map(hero => hero.id)) + 1 : 11;
  }
}
