import { NowRequest, NowResponse } from '@now/node'
import requestIp from 'request-ip';
import geoip from 'geoip-lite';
import countries from 'i18n-iso-countries';
import regions from 'iso-3166-2';

export default (req: NowRequest, res: NowResponse) => {
  const ip = requestIp.getClientIp(req);
  const geoInfo = geoip.lookup(ip);
  const country = countries.getName(geoInfo.country, 'en');
  const region = regions.subdivision(geoInfo.country, geoInfo.region).name;
  const city = geoInfo.city;
  
  res.json({ ip, country, region, city });
}
