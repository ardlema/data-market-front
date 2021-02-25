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
    const outputPort1 = { key: 'postgresql_historic_cbc_sensors', sink: 'PostgreSQL table', metadata_link: 'http://localhost:5000/table_detail/test/postgres/public/accounts'};
    const outputPort22 = { key: 'bigquery_real_time_cbc_sensors', sink: 'BigQuery table', metadata_link: 'http://localhost:5000/table_detail/test/bigquery/public/table1'};
    const outputPort21 = { key: 'postgresql_real_time_cbc_sensors', sink: 'PostgreSQL table', metadata_link: 'http://localhost:5000/table_detail/test/postgres/public/accounts2'};
    const dataproducts = [
      { id: 1, name: 'CBC - Historic sensors', input_port: [inputPort1], output_port: [outputPort1], image: 'assets/cbchistoricdataproduct.jpg'},
      { id: 2, name: 'CBC - Real time sensors', input_port: [inputPort2], output_port: [outputPort21, outputPort22], image: 'assets/cbcrealtimedataproduct.jpg'}
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
