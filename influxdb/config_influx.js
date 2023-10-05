/*
 * The following configuration is used in the influxdb browser examples.
 *
 * Replace the values with your own InfluxDB values.
 */
// eslint-disable-next-line no-undef
window.INFLUX_ENV = {
  /** InfluxDB v2 URL, '/influxdb' relies upon proxy to forward to the target influxDB */
  url: 'https://vscp3.vscp.org:8086',
  /** InfluxDB authorization token */
  token: '5K49zpcRAgVg6Pn1DZXiXhTjaT8Kgh_7xg-e6j2Fin2JazQTyUxRyF-mLrYLtF0FtKrYf2l_WWbEr-zIEvGk7w==',
  /** InfluxDB organization */
  org: 'vscp',
  /** InfluxDB bucket used for onboarding and write requests. */
  bucket: 'brattberg.vscp',
}
