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
    const outputPort11 = { key: 'postgresql_historic_cbc_sensors', sink: 'PostgreSQL table', metadata_link: 'http://localhost:5000/table_detail/test/postgres/public/cbc_sensors', how_to_access: 'A read-only user for the "CBC - Facilities" database is needed to fetch the data from the historic table. This database is located within the ARC Spanish instance. If you don\'t have a user for this database you can contact the team responsible for managing this database by sending an email to the following address: cbc-facilities-admin@airbus.com'};
    const outputPort12 = { key: 'api_historic_cbc_sensors', sink: 'API REST endpoint', metadata_link: 'http://localhost:5002/apidocs/', how_to_access: 'As a user of the Defence & Space data market you should have access to this data product API. Check out the documentation by clicking on the image\'s output port. If you don\'t have access to the data product API you can request it by sending an email to the following address: data-market-api@airbus.com'};
    const outputPort21 = { key: 'postgresql_real_time_cbc_sensors', sink: 'PostgreSQL table', metadata_link: 'http://localhost:5000/table_detail/test/postgres/public/accounts2', how_to_access: 'A read-only user for the "CBC - Facilities" database is needed to fetch the data from the historic table. This database is located within the ARC Spanish instance. If you don\'t have a user for this database you can contact the team responsible for managing this database by sending an email to the following address: cbc-facilities-admin@airbus.com'};
    const outputPort22 = { key: 'cassandra_real_time_cbc_sensors', sink: 'Cassandra table', metadata_link: 'http://localhost:5000/table_detail/test/postgres/public/accounts2', how_to_access: ''};
    const outputPort23 = { key: 'kafka_topic_real_time_cbc_sensors', sink: 'Kafka topic', metadata_link: 'http://localhost:5000/table_detail/test/postgres/public/accounts2', how_to_access: ''};
    const outputPort31 = { key: 'postgresql_historic_getafe_sensors', sink: 'PostgreSQL table', metadata_link: 'http://localhost:5000/table_detail/test/postgres/public/getafe_sensors', how_to_access: 'A read-only user for the "CBC - Facilities" database is needed to fetch the data from the historic table. This database is located within the ARC Spanish instance. If you don\'t have a user for this database you can contact the team responsible for managing this database by sending an email to the following address: cbc-facilities-admin@airbus.com'};
    const outputPort32 = { key: 'api_historic_getafe_sensors', sink: 'API REST endpoint', metadata_link: 'http://localhost:5002/apidocs/', how_to_access: 'As a user of the Defence & Space data market you should have access to this data product API. Check out the documentation by clicking on the image\'s output port. If you don\'t have access to the data product API you can request it by sending an email to the following address: data-market-api@airbus.com'};
    const outputPort41 = { key: 'postgresql_finance_table', sink: 'PostgreSQL table', metadata_link: 'http://localhost:5000/table_detail/test/postgres/public/finance_sites_energy_consumption', how_to_access: 'A read-only user for the "CBC - Facilities" database is needed to fetch the data from the historic table. This database is located within the ARC Spanish instance. If you don\'t have a user for this database you can contact the team responsible for managing this database by sending an email to the following address: cbc-facilities-admin@airbus.com'};
    const outputPort42 = { key: 'elasticsearch_finance_index', sink: 'Elasticsearch index', metadata_link: 'http://localhost:5000/table_detail/test/postgres/public/accounts2', how_to_access: ''};
    const dataproducts = [
      { id: 1, name: 'CBC - Historic sensors', input_port: [inputPort1], output_port: [outputPort11, outputPort12], image: 'assets/cbchistoricdataproduct.jpg', description: 'Telemetry data from different sensors located in the CBC (Centro Bahía de Cadiz) site. The data is periodically (every night at 12 am) pull from the IIoT platform (Thingworx). This data product provides 2 output ports.', owner_name: 'Francisco Pérez Zuñiga', owner_email: 'francisco.perez-zuniga@airbus.com', domain_context: 'Facilities',  data_classification_level: 'Airbus amber',  creation_date: '12/09/2020 12:30:45',  latest_update: '23/02/2021 21:45:78',  observability_reports_link: 'assets/expectations.png', data_reliability: 'High', rate: 'assets/stars5outof5.png'},
      { id: 2, name: 'CBC - Real time sensors', input_port: [inputPort2], output_port: [outputPort21, outputPort22, outputPort23], image: 'assets/cbcrealtimedataproduct.jpg', description: 'Telemetry real-time data from different sensors located in the CBC (Centro Bahía de Cadiz) site. This data product provides 2 output ports.', owner_name: 'Sonia Rodríguez Martínez', owner_email: 'sonia.rodriguez@airbus.com', domain_context: 'Facilities',  data_classification_level: 'Airbus amber',  creation_date: '22/09/2020 12:40:45',  latest_update: '25/02/2021 21:45:78',  observability_reports_link: 'assets/expectations.png', data_reliability: 'High', rate: 'assets/stars4outof5.png'},
      { id: 3, name: 'Getafe - Historic sensors', input_port: [inputPort2], output_port: [outputPort31, outputPort32], image: 'assets/getafehistoricdataproduct.jpg', description: 'Telemetry real-time data from different sensors located in the Getafe site. This data product provides 2 output ports.', owner_name: 'Pilar Sanchez Navarro', owner_email: 'pilar.sanchez@airbus.com', domain_context: 'Facilities',  data_classification_level: 'Airbus amber',  creation_date: '22/09/2020 12:40:45',  latest_update: '25/02/2021 21:45:78',  observability_reports_link: 'assets/expectations.png', data_reliability: 'High', rate: 'assets/stars4outof5.png'},
      { id: 4, name: 'Sites energy consumption efficiency', input_port: [inputPort2], output_port: [outputPort41, outputPort42], image: 'assets/financedataproduct.jpg', description: 'This data product pulls historic sensor data from both the Getafe & CBC historic sensors data products to aggregate and correlate this data with finantial reports. This data product provides 2 output ports.', owner_name: 'John Roberts', owner_email: 'john.roberts@airbus.com', domain_context: 'Finance',  data_classification_level: 'Airbus amber',  creation_date: '22/09/2020 12:40:45',  latest_update: '25/02/2021 21:45:78',  observability_reports_link: 'assets/expectations.png', data_reliability: 'High', rate: 'assets/stars4outof5.png'}
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
